import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Suzi } from "../Model/Model";
import gsap from "gsap";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import { Plane } from "../Plane/Plane";
// import { Loader } from "../Loader/Loader";

export default function Scene() {
  const [model, setModel] = useState(useGLTF("2.glb"));


  const canvasRef = useRef();
  const [activeBikeBtn, setActiveBikeBtn] = useState(1);

  const loader = new GLTFLoader();

  const changeBike = async (number) => {
    setActiveBikeBtn(number);
    gsap.to(".shadowLayer", { duration: 2, opacity: 1 });
    const loadedData = await loader.loadAsync(`2.glb`);

    setTimeout(() => {
      setModel(loadedData);
      gsap.to(".shadowLayer", { duration: 2, opacity: 0 });
    }, 2000);
  };
 
  return (
    <>
      <div className="title">PROJECTS</div>
      <div className="bike__name">CYBERPUNK 2077</div>
      <div className="bike__descritpion">
        Base: Kawasaki ER6N
        <br />
        CC:650
        <br />
        Y: 2012
      </div>
      <a href='2016_Ducati_XDiavel_S.usdz' rel='ar'>
      

      <div className="ar__btn" >
        <div className="ar__logo"></div>
        <div className="ar__text">WATCH IN AR</div>
      </div>
      </a>
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

      <Canvas ref={canvasRef} camera={{ position: [0, 0.005, 10], fov: 75 }}>
        <directionalLight intensity={0.2} castShadow position={[10, 11, 30]} />

        <pointLight intensity={.8} position={[0, 15, -30]} />

        <ambientLight intensity={0.1} color={"#fffff"} castShadow />
        <Suzi model={model.scene} />
        <Suzi model={model.scene} />
        <Suzi model={model.scene} />

        {/* <Floor /> */}
        <Environment preset="city" />
        <Plane />
      </Canvas>
    </>
  );
}
