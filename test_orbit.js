const THREE = require('three');
const { OrbitControls } = require('three-stdlib');

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(0, 0, 10);
const domElement = { style: {}, addEventListener: () => {}, removeEventListener: () => {} };
const controls = new OrbitControls(camera, domElement);
controls.autoRotate = true;
controls.enableDamping = true;
controls.dampingFactor = 0.1;

controls.update(); // Initialize

console.log("After init:", camera.position.toArray());

// Manually move camera
camera.position.set(5, 0, 0);
console.log("Manually set to:", camera.position.toArray());

controls.update();
console.log("After update():", camera.position.toArray());
