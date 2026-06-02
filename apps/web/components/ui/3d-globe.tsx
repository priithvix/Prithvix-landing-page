"use client";
import React, { useRef, useMemo, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { MapPin } from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================================================
// Types
// ============================================================================

export interface GlobeMarker {
  lat: number;
  lng: number;
  src?: string;
  label?: string;
  size?: number;
  color?: string;
}

export interface Globe3DConfig {
  /** Globe radius */
  radius?: number;
  /** Globe base color (used as fallback or tint) */
  globeColor?: string;
  /** URL to the Earth texture map */
  textureUrl?: string;
  /** URL to the bump/elevation map for terrain */
  bumpMapUrl?: string;
  /** Whether to show atmosphere glow */
  showAtmosphere?: boolean;
  /** Atmosphere color */
  atmosphereColor?: string;
  /** Atmosphere intensity */
  atmosphereIntensity?: number;
  /** Atmosphere blur/softness (higher = more diffuse, default 3) */
  atmosphereBlur?: number;
  /** Terrain bump scale (0 = flat, higher = more pronounced) */
  bumpScale?: number;
  /** Auto rotate speed (0 = disabled) */
  autoRotateSpeed?: number;
  /** Enable zoom */
  enableZoom?: boolean;
  /** Enable pan */
  enablePan?: boolean;
  /** Min zoom distance */
  minDistance?: number;
  /** Max zoom distance */
  maxDistance?: number;
  /** Initial rotation */
  initialRotation?: { x: number; y: number };
  /** Marker default size */
  markerSize?: number;
  /** Show wireframe overlay */
  showWireframe?: boolean;
  /** Wireframe color */
  wireframeColor?: string;
  /** Ambient light intensity */
  ambientIntensity?: number;
  /** Point light intensity */
  pointLightIntensity?: number;
  /** Background color (null for transparent) */
  backgroundColor?: string | null;
}

interface Globe3DProps {
  /** Array of markers to display on the globe */
  markers?: GlobeMarker[];
  /** Globe configuration */
  config?: Globe3DConfig;
  /** Additional CSS classes */
  className?: string;
  /** Callback when a marker is clicked */
  onMarkerClick?: (marker: GlobeMarker) => void;
  /** Callback when a marker is hovered */
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

// ============================================================================
// Constants - Earth Texture URLs (NASA Blue Marble)
// ============================================================================

const DEFAULT_EARTH_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
const DEFAULT_BUMP_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Convert latitude/longitude to 3D cartesian coordinates
 */
function latLngToVector3(
  lat: number,
  lng: number,
  radius: number,
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// ============================================================================
// Marker Component (static - rotation handled by parent group)
// ============================================================================

interface MarkerProps {
  marker: GlobeMarker;
  radius: number;
  defaultSize: number;
  onClick?: (marker: GlobeMarker) => void;
  onHover?: (marker: GlobeMarker | null) => void;
  isSelected?: boolean;
}

function Marker({
  marker,
  radius,
  defaultSize,
  onClick,
  onHover,
  isSelected = false,
}: MarkerProps) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const groupRef = useRef<THREE.Group>(null);
  const markerRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  // Surface position (where the line starts)
  const surfacePosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius * 1.001);
  }, [marker.lat, marker.lng, radius]);

  // Top of the line (where the marker head is)
  const topPosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius * 1.08);
  }, [marker.lat, marker.lng, radius]);

  const lineHeight = topPosition.distanceTo(surfacePosition);

  // Check if marker is facing the camera
  useFrame(() => {
    if (!markerRef.current) return;

    // Get the world position of the marker head
    const worldPos = new THREE.Vector3();
    markerRef.current.getWorldPosition(worldPos);

    // Direction from globe center (0,0,0) to marker
    const markerDirection = worldPos.clone().normalize();

    // Direction from globe center to camera
    const cameraDirection = camera.position.clone().normalize();

    // Dot product: positive means facing camera, negative means behind
    const dot = markerDirection.dot(cameraDirection);

    // Show marker only if it's facing the camera
    setIsVisible(dot > 0.15);
  });

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    onHover?.(marker);
  }, [marker, onHover]);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    onHover?.(null);
  }, [onHover]);

  const handleClick = useCallback((e: any) => {
    e.stopPropagation();
    onClick?.(marker);
  }, [marker, onClick]);

  // Calculate line center and orientation
  const { lineCenter, lineQuaternion } = useMemo(() => {
    const center = surfacePosition.clone().lerp(topPosition, 0.5);

    // Calculate rotation to align cylinder with the direction from surface to top
    const direction = topPosition.clone().sub(surfacePosition).normalize();
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

    return { lineCenter: center, lineQuaternion: quaternion };
  }, [surfacePosition, topPosition]);

  return (
    <group 
      ref={groupRef} 
      visible={isVisible}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      {/* Pin line from surface to top - properly oriented */}
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[isSelected ? 0.005 : 0.003, isSelected ? 0.005 : 0.003, lineHeight, 8]} />
        <meshBasicMaterial
          color={isSelected ? "#10b981" : (hovered ? "#ffffff" : "#94a3b8")}
          transparent
          opacity={isSelected ? 1.0 : (hovered ? 0.9 : 0.6)}
        />
      </mesh>

      {/* Group at topPosition to track world position & render elements */}
      <group ref={markerRef} position={topPosition}>
        {/* Pulsing selected halo */}
        {!marker.src && isSelected && (
          <mesh>
            <sphereGeometry args={[0.035, 32, 32]} />
            <meshBasicMaterial
              color="#10b981"
              transparent
              opacity={0.25}
            />
          </mesh>
        )}

        {/* Circular pin head (only if NO src provided) */}
        {!marker.src && (
          <mesh>
            <sphereGeometry args={[isSelected ? 0.022 : 0.012, 32, 32]} />
            <meshBasicMaterial color={isSelected ? "#10b981" : (hovered ? (marker.color || "#ff4444") : (marker.color || "#ff0000"))} />
          </mesh>
        )}

        {/* Circular image at the top (only if src provided) */}
        {marker.src && (
          <Html
            transform
            center
            sprite
            distanceFactor={10}
            style={{
              pointerEvents: isVisible ? "auto" : "none",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.15s ease-out",
            }}
          >
            <div
              className={cn(
                "cursor-pointer overflow-hidden rounded-full shadow-lg transition-transform duration-200 bg-neutral-900",
                hovered && "scale-125 shadow-xl ring-1 ring-white/50"
              )}
              style={{
                width: "12px",
                height: "12px",
              }}
            >
              <img
                src={marker.src}
                alt={marker.label || "Marker"}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          </Html>
        )}

        {/* Beautiful Glassmorphic Tooltip for Selected Marker */}
        {isSelected && (
          <Html
            center
            style={{
              pointerEvents: isVisible ? "auto" : "none",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.15s ease-in-out",
              zIndex: 50,
            }}
          >
            <div className="pv-tooltip relative flex flex-col items-center select-none" style={{ transform: 'translateY(-12px)' }}>
              {/* Main neat white container */}
              <div className="flex items-center gap-1.5 whitespace-nowrap rounded-[4px] bg-white px-2 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
                <MapPin size={10} style={{ color: "var(--color-harvest-amber)" }} className="shrink-0" />
                <span className="font-heading text-[10px] font-bold tracking-wide uppercase leading-none" style={{ color: "var(--color-harvest-amber)" }}>
                  {marker.label}
                </span>
              </div>

              {/* Downward pointing triangle/arrow */}
              <div className="h-1.5 w-1.5 -mt-[3px] rotate-45 bg-white shadow-[1px_1px_1px_rgba(0,0,0,0.03)]" />
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}

// ============================================================================
// Rotating Globe with Markers (all rotate together)
// ============================================================================

interface RotatingGlobeProps {
  config: Required<Globe3DConfig>;
  markers: GlobeMarker[];
  selectedMarker: GlobeMarker | null;
  onGlobeClick?: () => void;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function RotatingGlobe({
  config,
  markers,
  selectedMarker,
  onGlobeClick,
  onMarkerClick,
  onMarkerHover,
}: RotatingGlobeProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Load Earth textures
  const [earthTexture, bumpTexture] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ]);

  // Configure textures
  useMemo(() => {
    if (earthTexture) {
      earthTexture.colorSpace = THREE.SRGBColorSpace;
      earthTexture.anisotropy = 16;
    }
    if (bumpTexture) {
      bumpTexture.anisotropy = 8;
    }
  }, [earthTexture, bumpTexture]);

  // Create geometries
  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius, 64, 64);
  }, [config.radius]);

  const wireframeGeometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius * 1.002, 32, 16);
  }, [config.radius]);

  return (
    <group ref={groupRef}>
      {/* Main globe mesh with Earth texture */}
      <mesh 
        geometry={geometry}
        onPointerDown={(e) => {
          e.stopPropagation();
          onGlobeClick?.();
        }}
      >
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.7}
          metalness={0.0}
        />
      </mesh>

      {/* Wireframe overlay */}
      {config.showWireframe && (
        <mesh geometry={wireframeGeometry}>
          <meshBasicMaterial
            color={config.wireframeColor}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      )}

      {/* Markers - now inside the rotating group */}
      {markers.map((marker, index) => (
        <Marker
          key={`marker-${index}-${marker.lat}-${marker.lng}`}
          marker={marker}
          radius={config.radius}
          defaultSize={config.markerSize}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
          isSelected={selectedMarker?.label === marker.label}
        />
      ))}
    </group>
  );
}

// ============================================================================
// Atmosphere Component (stays static - doesn't rotate)
// ============================================================================

interface AtmosphereProps {
  radius: number;
  color: string;
  intensity: number;
  blur: number;
}

function Atmosphere({ radius, color, intensity, blur }: AtmosphereProps) {
  // blur controls the fresnel exponent: lower = more diffuse, higher = sharper edge
  // We invert it so higher blur value = more diffuse (lower exponent)
  const fresnelPower = Math.max(0.5, 5 - blur);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        fresnelPower: { value: fresnelPower },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPosition))), fresnelPower);
          gl_FragColor = vec4(atmosphereColor, fresnel * intensity);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, [color, intensity, fresnelPower]);

  return (
    <mesh scale={[1.12, 1.12, 1.12]}>
      <sphereGeometry args={[radius, 64, 32]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </mesh>
  );
}

// ============================================================================
// Scene Component
// ============================================================================

interface SceneProps {
  markers: GlobeMarker[];
  config: Required<Globe3DConfig>;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function Scene({ markers, config, onMarkerClick, onMarkerHover }: SceneProps) {
  const { camera } = useThree();
  const [selectedMarker, setSelectedMarker] = useState<GlobeMarker | null>(null);

  const controlsRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);
  const preZoomPosRef = useRef<THREE.Vector3 | null>(null);

  const [targetCameraPos, setTargetCameraPos] = useState<THREE.Vector3 | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isZoomingOut, setIsZoomingOut] = useState(false);
  const [desiredDistance, setDesiredDistance] = useState(config.radius * 2.6);

  // Set initial camera position (pulled back to accommodate markers)
  React.useEffect(() => {
    // Start camera slightly to the right of India so it is comfortably centered-left
    const startPos = latLngToVector3(22, 105, config.radius * 2.6);
    camera.position.copy(startPos);
    camera.lookAt(0, 0, 0);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [camera, config.radius]);

  const handleMarkerClick = useCallback(
    (marker: GlobeMarker) => {
      setSelectedMarker((prev) => {
        if (prev?.label === marker.label) {
          // Deselecting: return to pre-zoom position
          if (preZoomPosRef.current) {
            setTargetCameraPos(preZoomPosRef.current.clone());
            setIsZoomingOut(true);
          } else {
            setTargetCameraPos(null);
          }
          setIsAnimating(false);
          setDesiredDistance(config.radius * 2.6);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          return null;
        } else {
          // Selecting: record current camera position before animation starts ONLY if not currently zoomed in
          if (!prev) {
            preZoomPosRef.current = camera.position.clone();
          }

          // Calculate the target camera position (zoomed in to 2.2x the radius)
          const targetDir = latLngToVector3(marker.lat, marker.lng, config.radius).normalize();
          const targetPos = targetDir.clone().multiplyScalar(config.radius * 2.2);
          setTargetCameraPos(targetPos);
          setIsAnimating(true);
          setIsZoomingOut(false);
          setDesiredDistance(config.radius * 2.2);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          return marker;
        }
      });
      onMarkerClick?.(marker);
    },
    [onMarkerClick, config.radius, camera],
  );

  const handleGlobeClick = useCallback(() => {
    setSelectedMarker((prev) => {
      if (prev) {
        if (preZoomPosRef.current) {
          setTargetCameraPos(preZoomPosRef.current.clone());
          setIsZoomingOut(true);
        } else {
          setTargetCameraPos(null);
        }
        setIsAnimating(false);
        setDesiredDistance(config.radius * 2.6);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
      return null;
    });
  }, [config.radius]);

  // Smoothly move the camera and manage autoRotate reset timer
  useFrame((state) => {
    // 1. Lerp camera distance at all times to keep it smooth (zoom in/out transitions)
    const currentDist = state.camera.position.length();
    const targetDist = desiredDistance;
    if (Math.abs(currentDist - targetDist) > 0.01) {
      const nextDist = THREE.MathUtils.lerp(currentDist, targetDist, 0.05);
      state.camera.position.normalize().multiplyScalar(nextDist);
    }

    // 2. Focus on selected marker or return to pre-zoom position
    if (targetCameraPos) {
      // Smoothly interpolate the camera's position to target
      state.camera.position.lerp(targetCameraPos, 0.05);
      state.camera.lookAt(0, 0, 0);

      // Force update of OrbitControls to prevent override jitter
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      const dist = state.camera.position.distanceTo(targetCameraPos);

      if (isZoomingOut) {
        // Zooming out has completed, resume auto-rotation
        if (dist < 0.02) {
          setTargetCameraPos(null);
          setIsZoomingOut(false);
          preZoomPosRef.current = null;
        }
      } else if (dist < 0.02 && isAnimating) {
        setIsAnimating(false);

        // Start a 3.5 second hold to let the user view the zoomed location before continuing revolution
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setSelectedMarker((prev) => {
            if (prev) {
              if (preZoomPosRef.current) {
                setTargetCameraPos(preZoomPosRef.current.clone());
                setIsZoomingOut(true);
              } else {
                setTargetCameraPos(null);
              }
              setDesiredDistance(config.radius * 2.6); // zoom back out!
            }
            return null;
          });
        }, 3500);
      }
    } else {
      // Just keep OrbitControls updated while auto-rotating
      if (controlsRef.current) {
        controlsRef.current.update();
      }
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={config.ambientIntensity} />
      <directionalLight
        position={latLngToVector3(25, 45, config.radius * 5)}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.3}
        color="#88ccff"
      />

      {/* Rotating Globe with Markers */}
      <RotatingGlobe
        config={config}
        markers={markers}
        selectedMarker={selectedMarker}
        onGlobeClick={handleGlobeClick}
        onMarkerClick={handleMarkerClick}
        onMarkerHover={onMarkerHover}
      />

      {/* Atmosphere (static) */}
      {config.showAtmosphere && (
        <Atmosphere
          radius={config.radius}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity}
          blur={config.atmosphereBlur}
        />
      )}

      {/* Controls */}
      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={false}
        enableZoom={config.enableZoom}
        enableRotate={true}
        minDistance={config.minDistance}
        maxDistance={config.maxDistance}
        rotateSpeed={0.4}
        autoRotate={config.autoRotateSpeed > 0 && !selectedMarker && !isZoomingOut}
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}

// ============================================================================
// Loading Fallback
// ============================================================================

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex shrink-0 flex-col items-center gap-3">
        <span className="inline-block shrink-0 text-sm text-neutral-400">
          Loading globe...
        </span>
      </div>
    </Html>
  );
}

// ============================================================================
// Main Globe3D Component
// ============================================================================

const defaultConfig: Required<Globe3DConfig> = {
  radius: 2,
  globeColor: "#1a1a2e",
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  showAtmosphere: false,
  atmosphereColor: "#4da6ff",
  atmosphereIntensity: 0.5,
  atmosphereBlur: 2,
  bumpScale: 1,
  autoRotateSpeed: 0.3,
  enableZoom: false,
  enablePan: false,
  minDistance: 3.5,
  maxDistance: 15,
  initialRotation: { x: 0, y: 0 },
  markerSize: 0.06,
  showWireframe: false,
  wireframeColor: "#4a9eff",
  ambientIntensity: 0.6,
  pointLightIntensity: 1.5,
  backgroundColor: null,
};

export function Globe3D({
  markers = [],
  config = {},
  className,
  onMarkerClick,
  onMarkerHover,
}: Globe3DProps) {
  const mergedConfig = useMemo(
    () => ({ ...defaultConfig, ...config }),
    [config],
  );

  return (
    <div className={cn("relative h-[500px] w-full", className)}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0, mergedConfig.radius * 3.5],
        }}
        style={{
          background: mergedConfig.backgroundColor || "transparent",
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene
            markers={markers}
            config={mergedConfig}
            onMarkerClick={onMarkerClick}
            onMarkerHover={onMarkerHover}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Globe3D;
