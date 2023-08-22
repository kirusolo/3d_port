import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const ComputersModel = () => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  return <primitive object={scene} />;
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[-20, 50, 10]}
          angle={Math.PI / 4}
          penumbra={0.2}
          intensity={1}
          castShadow
        />
        <ComputersModel />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
