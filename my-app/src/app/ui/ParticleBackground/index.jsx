"use client";

import { useEffect, useRef, useState } from "react";

const ParticleBackground = () => {
  // Move the existing ParticleNetwork code here
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // ... rest of the ParticleNetwork component code ...

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bg-black"
      style={{ opacity: 1 }}
    />
  );
};

export default ParticleBackground; 