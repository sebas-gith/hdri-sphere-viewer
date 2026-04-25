import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const CameraController = ({ northOffset, controlsRef } : { northOffset: number; controlsRef: React.RefObject<any> }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (!controlsRef.current) return;

    const angle = THREE.MathUtils.degToRad(northOffset);

    const x = Math.sin(angle);
    const z = Math.cos(angle);

    controlsRef.current.target.set(x, 0, z);

    controlsRef.current.update();
    console.log("CameraController actualizado con northOffset:", northOffset);

  }, [northOffset]);

  return null;
};

export default CameraController;