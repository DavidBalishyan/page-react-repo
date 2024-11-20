  import React from "react";
  import { Canvas } from "@react-three/fiber";
  import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

  const HeroCanvas = () => {
    return (
      <Canvas style={{ height: "100vh", background: "#1e293b" }}>
        <OrbitControls enableZoom={false} />

        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        <Sphere visible args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#ff6347"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
    );
  };

  export default HeroCanvas;