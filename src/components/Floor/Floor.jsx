// import { useGLTF } from "@react-three/drei";
// import { useState, useRef } from "react";
// import { useFrame } from "@react-three/fiber";

// export function Floor({  }) {


//   const modelRef1 = useRef();
//   const meshRef1 = useRef();


// const model = useGLTF('pol.glb')

// console.log(model.scene.children[0].material);
// model.scene.children[0].material.roughness = 0
// model.scene.children[0].material.metalness = 1


//   return (
//     <>
//       <mesh ref={meshRef1}  
//           receiveShadow={true}
          
// >

//         <primitive
//           object={model.scene}
//           ref={modelRef1}
//           position={[0, 0.5, 0]}

//           scale={0.3}

//           receiveShadow={true}


//         />
//       </mesh>
//     </>
//   );
// }
