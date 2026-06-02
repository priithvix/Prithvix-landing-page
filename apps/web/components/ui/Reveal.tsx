/**
 * Scroll-reveal wrapper. Adds [data-reveal] (hidden by default in globals.css);
 * the SmoothScrollProvider's IntersectionObserver adds .is-visible when it
 * enters the viewport. `delay` staggers grouped children.
 */
import type { ElementType } from "react";

export function Reveal({
  as,
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & { [key: string]: any }) {
  const Tag = (as ?? "div") as any;
  return (
    <Tag
      data-reveal=""
      className={className}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
