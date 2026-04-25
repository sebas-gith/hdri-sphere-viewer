import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CompassController = ({ onUpdate, northOffset } : { onUpdate: (rotation: number) => void; northOffset: number }) => {
  const { camera } = useThree();
  const current = useRef(0);

  const dir = new THREE.Vector3();

  useFrame(() => {
    camera.getWorldDirection(dir);

    let target = Math.atan2(dir.x, dir.z) * (180 / Math.PI);

    target += northOffset;

    let delta = target - current.current;

    delta = ((delta + 180) % 360) - 180;

    current.current += delta * 0.1;

    onUpdate(current.current);
  });

  return null;
};

export default CompassController;