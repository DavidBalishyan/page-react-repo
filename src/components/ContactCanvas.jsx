import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const ContactCanvas = () => {
  return (
    <Canvas style={{ height: "100vh", background: "#1a202c" }}>
      <ambientLight intensity={0.5} />
      <Stars radius={100} depth={50} count={10000} factor={4} />
    </Canvas>
  );
};

export default ContactCanvas;
