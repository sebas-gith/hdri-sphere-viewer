import { Canvas } from "@react-three/fiber";
import sphereImage from "@/assets/images/sphere.jpg";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import Panorama from "./components/Panorama.tsx";
import ZoomControl from "./components/ZoomControl.tsx";
import Compass from "./components/Compass.tsx";
import CameraController from "./components/CameraController.tsx";
import CompassController from "./components/CompassController.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
import { Suspense, useEffect, useState } from "react";
import { useRef } from "react";

interface IntPanorama {
  lookAt: [number, number, number];
  northOffset: number;
}

function Scene({ sphereImage, panorama, controlsRef, setRotation }: {
  sphereImage: string;
  panorama: IntPanorama;
  controlsRef: React.RefObject<any>;
  setRotation: (r: number) => void;
}) {
  return (
    <>
      <color attach="background" args={["black"]} />
      <Suspense fallback={null}>
        <Panorama image={sphereImage} />
      </Suspense>
      <ZoomControl />
      <OrbitControls enablePan={false} rotateSpeed={-0.2} ref={controlsRef} enableZoom={false} minPolarAngle={Math.PI / 6} maxPolarAngle={(Math.PI * 5) / 6} />
      <CameraController
        northOffset={panorama.northOffset}
        controlsRef={controlsRef}
      />
      <CompassController northOffset={panorama.northOffset} onUpdate={setRotation} />
    </>
  );
}

function App() {
  const controlsRef = useRef<any>(null);
  const [rotation, setRotation] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const panorama: IntPanorama = {
    lookAt: [1, 0, 0],
    northOffset: 238.984,
  };
  const lastLogged = useRef(0);

  useEffect(() => {
    if (Math.abs(rotation - lastLogged.current) > 1) {
      lastLogged.current = rotation;
    }
  }, [rotation]);

  return (
    <>
      {!loaded && <LoadingScreen />}
      <Canvas
        camera={{ position: [0, 0, 0] }}
        className="canvas"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
        onCreated={() => {
          setTimeout(() => setLoaded(true), 500);
        }}
      >
        <Scene
          sphereImage={sphereImage}
          panorama={panorama}
          controlsRef={controlsRef}
          setRotation={setRotation}
        />
      </Canvas>
      <Compass rotation={rotation} />
    </>
  );
}

export default App;
