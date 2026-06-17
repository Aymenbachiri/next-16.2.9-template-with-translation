"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

type SmoothScrollingProviderProps = {
  children: React.JSX.Element;
};

export function SmoothScrollingProvider({
  children,
}: SmoothScrollingProviderProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
