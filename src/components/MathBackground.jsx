import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function MathematicalShape() {
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function MathBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <MathematicalShape />
      </Canvas>
    </div>
  );
}
