import {TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

interface usePanoramaProps {
    image: string;
}

const Panorama = ({image}: usePanoramaProps) => {
    const texture = useLoader(TextureLoader, image);

    return (
        <mesh scale={[-1, 1, 1]}>
            <sphereGeometry args={[10, 64, 64]} />
            <meshBasicMaterial map={texture} side={1} />
        </mesh>
    )
}

export default Panorama;