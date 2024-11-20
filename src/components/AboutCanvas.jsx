import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

const AboutCanvas = () => {
  return (
    <Canvas style={{ height: "50vh", background: "#2c3e50" }}>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Box args={[2, 2, 2]} rotation={[0.5, 0.5, 0]}>
        <meshStandardMaterial color="#3498db" />
      </Box>
    </Canvas>
  );
};

export default AboutCanvas;