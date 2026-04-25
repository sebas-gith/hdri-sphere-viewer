import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { PerspectiveCamera } from 'three';

const ZoomControl = () => {
  const { camera } = useThree() as { camera: PerspectiveCamera };

  const [fov, setFov] = useState(75);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      setFov((prev) => {
        const next = prev + e.deltaY * 0.05;
        return Math.min(100, Math.max(30, next));
      });
    };
    window.addEventListener('wheel', onWheel);

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [fov]);

  useFrame(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  });

  return null;
};

export default ZoomControl;