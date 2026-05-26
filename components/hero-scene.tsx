"use client";

import { Float, Sparkles as DreiSparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

type SceneProps = {
  isLight: boolean;
};

function NetworkField({ isLight }: SceneProps) {
  const points = useMemo(() => {
    return Array.from({ length: 54 }, (_, index) => {
      const angle = (index / 54) * Math.PI * 2;
      const radius = 1.6 + Math.sin(index * 1.7) * 0.9;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(index * 0.61) * 1.1,
        Math.sin(angle) * radius
      );
    });
  }, []);

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    points.forEach((point, index) => {
      const next = points[(index + 7) % points.length];
      positions.push(point.x, point.y, point.z, next.x, next.y, next.z);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [points]);

  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.08 + pointer.x * 0.18;
    group.current.rotation.x = pointer.y * 0.1;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={isLight ? "#71717a" : "#31d7ff"} transparent opacity={isLight ? 0.35 : 0.22} />
      </lineSegments>
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.025 + (index % 3) * 0.01, 12, 12]} />
          <meshStandardMaterial
            color={isLight ? (index % 2 ? "#18181b" : "#52525b") : (index % 2 ? "#70f7bd" : "#7c5cff")}
            emissive={isLight ? "#71717a" : "#31d7ff"}
            emissiveIntensity={isLight ? 0.18 : 0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function HologramCore({ isLight }: SceneProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.elapsedTime * 0.22 + pointer.y * 0.22;
      mesh.current.rotation.y = clock.elapsedTime * 0.36 + pointer.x * 0.22;
    }
    if (ring.current) {
      ring.current.rotation.z = clock.elapsedTime * 0.35;
      ring.current.rotation.x = Math.PI / 2.5 + pointer.y * 0.18;
    }
  });

  return (
    <group position={[1.55, 0.05, 0]}>
      <Float speed={1.9} rotationIntensity={0.55} floatIntensity={0.55}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[0.92, 2]} />
          <meshStandardMaterial
            color={isLight ? "#e4e4e7" : "#172033"}
            emissive={isLight ? "#a1a1aa" : "#7c5cff"}
            emissiveIntensity={isLight ? 0.15 : 0.38}
            roughness={0.18}
            metalness={0.45}
            wireframe
          />
        </mesh>
        <mesh ref={ring}>
          <torusGeometry args={[1.16, 0.01, 10, 180]} />
          <meshBasicMaterial color={isLight ? "#27272a" : "#70f7bd"} transparent opacity={isLight ? 0.4 : 0.58} />
        </mesh>
      </Float>
    </group>
  );
}

function SceneContent({ isLight }: SceneProps) {
  return (
    <>
      <ambientLight intensity={isLight ? 1.5 : 0.8} />
      <pointLight position={[3, 3, 4]} color={isLight ? "#ffffff" : "#31d7ff"} intensity={isLight ? 30 : 20} />
      <pointLight position={[-4, -2, 2]} color={isLight ? "#e4e4e7" : "#70f7bd"} intensity={isLight ? 16 : 12} />
      <DreiSparkles
        count={isLight ? 70 : 110}
        speed={0.35}
        size={isLight ? 1.8 : 2.4}
        scale={[7, 4, 4]}
        color={isLight ? "#71717a" : "#70f7bd"}
        opacity={isLight ? 0.35 : 0.45}
      />
      <NetworkField isLight={isLight} />
      <HologramCore isLight={isLight} />
    </>
  );
}

/**
 * HeroScene — rendered only on the client to avoid SSR/WebGL crashes.
 * The Canvas is wrapped in a mount guard so it never runs during server rendering.
 */
export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial check
    setIsLightMode(document.body.classList.contains("light-mode"));

    // Listen to light-mode toggles via MutationObserver
    const observer = new MutationObserver(() => {
      setIsLightMode(document.body.classList.contains("light-mode"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-y-0 right-0 z-0 w-full md:w-[46%] opacity-90 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 48 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <SceneContent isLight={isLightMode} />
        </Suspense>
      </Canvas>
    </div>
  );
}
