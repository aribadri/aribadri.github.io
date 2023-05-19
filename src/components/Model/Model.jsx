
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect } from 'react'

export function Suzi({ model }, props) {
  const [active, setActive] = useState(true);

  useLayoutEffect(() => {
    model.traverse((obj) => obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true))

  }, [model])

  const modelRef1 = useRef();
  const meshRef1 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    modelRef1.current.rotation.y += 0.0025;

  });
  console.log(model);


  return (
    <>
    
      <primitive
        object={model}
        ref={modelRef1}
        // position={[0, -2.5, 2]} //for bikes
        position={[0, 0, 2]}

        // rotation={[-0, 3.9, 0.2]}
        scale={3.0275}
      />
    </>
  );
}
