import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current && (isMobile || isTablet)) {
      meshRef.current.rotation.y += delta * 0.5; // Rotate slowly on smaller devices
    }
  });

  const getScale = () => {
    if (isMobile) return 0.5;
    if (isTablet) return 0.6;
    return 0.75;
  };

  const getPosition = () => {
    if (isMobile) return [0, -3.5, -1];
    if (isTablet) return [0, -3.5, -1.5];
    return [0, -3.25, -1.5];
  };

  const getRotation = () => {
    if (isMobile || isTablet) return [0, 0, 0];
    return [-0.01, -0.2, -0.1];
  };

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={getScale()}
        position={getPosition()}
        rotation={getRotation()}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 640px)");
    const mediaQueryTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)");

    setIsMobile(mediaQueryMobile.matches);
    setIsTablet(mediaQueryTablet.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletChange = (event) => setIsTablet(event.matches);

    mediaQueryMobile.addEventListener("change", handleMobileChange);
    mediaQueryTablet.addEventListener("change", handleTabletChange);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleMobileChange);
      mediaQueryTablet.removeEventListener("change", handleTabletChange);
    };
  }, []);

  const getCameraSpecs = () => {
    if (isMobile) return { position: [0, 0, 20], fov: 50 };
    if (isTablet) return { position: [0, 0, 20], fov: 40 }; // A bit tighter than mobile, centered view
    return { position: [20, 3, 5], fov: 25 };
  };

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={getCameraSpecs()}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {(!isMobile && !isTablet) && (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
          />
        )}
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;