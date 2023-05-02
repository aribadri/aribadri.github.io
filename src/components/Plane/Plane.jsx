import { useThree } from "@react-three/fiber";
import { useRef } from "react";

import { MeshStandardMaterial, MeshPhysicalMaterial, TextureLoader, CubeTextureLoader } from "three";

export function Plane(props) {
  const ref = useRef();
  const { size, scene } = useThree((state) => state.viewport);


  const envMap = new CubeTextureLoader().load([
    "https://threejs.org/examples/textures/cube/Bridge2/posx.jpg",
    "https://threejs.org/examples/textures/cube/Bridge2/negx.jpg",
    "https://threejs.org/examples/textures/cube/Bridge2/posy.jpg",
    "https://threejs.org/examples/textures/cube/Bridge2/negy.jpg",
    "https://threejs.org/examples/textures/cube/Bridge2/posz.jpg",
    "https://threejs.org/examples/textures/cube/Bridge2/negz.jpg",
  ]);

  envMap.mapping = 300; // Настраиваем формат карты окружения

  return (
    <mesh 
    refractionRatio={1.75} clipBias={0.5}
    visible={true}
    receiveShadow
    castShadow
    shadows
     rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.6, 0]} ref={ref} >
      <planeGeometry attach="geometry" args={[100, 205]} 
    scale={3}

       />
      <meshPhysicalMaterial envMap={envMap} metalness={1} color={'black'} roughness={.99}   />
    </mesh>
  );
}
