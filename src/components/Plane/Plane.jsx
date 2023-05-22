import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { MeshReflectorMaterial, MeshWobbleMaterial } from '@react-three/drei'


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
    <>
      <mesh
        receiveShadow // Включаем принятие теней
        {...props}
        rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.6, 0]} ref={ref} >
        <planeGeometry attach="geometry" args={[1000, 2050]}
          scale={10}
        />
        <MeshReflectorMaterial
          blur={[300, 300]}
          resolution={1024}
          mixBlur={.77}
          mixStrength={40}
          roughness={.9}
          depthScale={1.2}
          minDepthThreshold={1}
          maxDepthThreshold={1}
          color="#101010"
          metalness={.7}
          envMap={envMap}
        />
     

        {/* <meshStandardMaterial envMap={envMap} metalness={0.9} color={'black'} roughness={.99} attach={'material'}   /> */}
      </mesh>




    </>
  );
}
