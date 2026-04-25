import {TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

interface usePanoramaProps {
    image: string;
}

const Panorama = ({image}: usePanoramaProps) => {
    const texture = useLoader(TextureLoader, image);

    return (
        <mesh >
            <sphereGeometry args={[500, 64, 64]} scale={[-1, 1, 1]} />
            <meshBasicMaterial map={texture} side={2} />
        </mesh>
    )
}

export default Panorama;