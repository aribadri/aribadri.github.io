import { useGLTF } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Suzi({ model }) {
  const [active, setActive] = useState(true);

  const modelRef1 = useRef();
  const meshRef1 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    modelRef1.current.rotation.y += 0.0015;
  });



  return (
    <>
      <mesh ref={meshRef1} material-opacity={0.5} castShadow receiveShadow >
        <primitive
          object={model}
          ref={modelRef1}
          position={[0, -2.5, 2]}
            // rotation={[-0, 3.9, 0.2]}
          scale={0.0275}
          castShadow

        />
      </mesh>
    </>
  );
}
