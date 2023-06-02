import { Canvas,useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { useState, useMemo } from "react";
import { Suzi } from "../Model/Model";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import { Plane } from "../Plane/Plane";
import "@google/model-viewer/dist/model-viewer"
import * as THREE from 'three'




// import { Loader } from "../Loader/Loader";

export default function Scene() {
  const [model, setModel] = useState(useGLTF("k11-v3.glb"));


  const canvasRef = useRef();
  const [activeBikeBtn, setActiveBikeBtn] = useState(1);

  // const loader = new GLTFLoader();
  
  const loader = useMemo(() => new GLTFLoader(), [model]);

  const changeBike = async (number) => {
    setActiveBikeBtn(number);
    gsap.to(".shadowLayer", { duration: 2, opacity: 1 });
    // const loadedData = await loader.loadAsync(`BMW_K1.gltf`);

    setTimeout(() => {
      // setModel(loadedData);
      gsap.to(".shadowLayer", { duration: 2, opacity: 0 });
    }, 2000);
  };

  function CameraRig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
      const t = state.clock.elapsedTime
      state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 9 + Math.cos(t / 5) / 2), 0.05)
      state.camera.lookAt(0, 0, 0)
    })
  }

  return (
    <>
      <div className="title">PROJECTS
      </div>
      <div className="bike__name">CYBERPUNK 2077</div>
      <div className="bike__descritpion">
        Base: Kawasaki ER6N
        <br />
        CC:650
        <br />
        Y: 2012
      </div>
      <div className="ar__btn" >
        <model-viewer
          style={{ opacity: 0, position: 'absolute' }}
          ar-modes="webxr scene-viewer quick-look"
          src="2.glb"
          alt=""
          shadow-intensity="1"
          ar
        ></model-viewer>

        <div className="ar__logo"></div>
        <div className="ar__text">
          WATCH IN AR</div>
      </div>
      <div className="bike__price">PRICE:</div>
      <div className="bike__price_count">9000$</div>
      <div className="bikes__tag_container">
        <div className="bike__slider">
          <div
            className={activeBikeBtn !== 1 ? "bike__tag1" : "bike__tag1_active"}
            onClick={() => changeBike(1)}
          >
            Alita: Battle Angel
          </div>
          <div
            className={activeBikeBtn !== 2 ? "bike__tag2" : "bike__tag2_active"}
            onClick={() => changeBike(2)}
          >
            CYBERPUNK 2077
          </div>
          <div
            className={activeBikeBtn !== 4 ? "bike__tag3" : "bike__tag3_active"}
            onClick={() => changeBike(4)}
          >
            supermoto
          </div>
        </div>
      </div>
      <div className="shadowLayer"></div>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0.005, 10], fov: 75, }}>
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#101010', 10, 100000]} />
        <directionalLight intensity={0.01}

          position={[3, 10, 2]}
        />
        <spotLight
          position={[-4.5, 3, 5]}
          angle={Math.PI / 4}
          penumbra={0.5}
          castShadow
        />
        <pointLight intensity={.5} position={[0, 15, -30]} />
        <ambientLight intensity={0.1} color={"#fffff"} />
          <Suzi model={model.scene} />
        <Environment preset="city" />
        <Plane />
        <CameraRig />
       
      </Canvas>
    </>
  );
}
