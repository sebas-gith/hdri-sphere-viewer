import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { PerspectiveCamera } from 'three';

const ZoomControl = () => {
  const { camera } = useThree() as { camera: PerspectiveCamera };
  const [fov, setFov] = useState(75);
  const lastPinchDist = useRef<number | null>(null);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      setFov((prev) => {
        const next = prev + e.deltaY * 0.05;
        return Math.min(100, Math.max(30, next));
      });
    };

    const getTouchDist = (t1: Touch, t2: Touch) =>
      Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length < 2) return;
      const dist = getTouchDist(e.touches[0], e.touches[1]);

      if (lastPinchDist.current !== null) {
        const delta = lastPinchDist.current - dist;
        setFov((prev) => Math.min(100, Math.max(30, prev + delta * 0.15)));
      }
      lastPinchDist.current = dist;
    };

    const onTouchEnd = () => {
      lastPinchDist.current = null;
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  useFrame(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  });

  return null;
};

export default ZoomControl;
