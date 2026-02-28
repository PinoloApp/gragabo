'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MainScene } from "./mainScene";
import { Sky } from "./sceneSky";
import { usePathname } from "next/navigation";
import { Loader } from "@react-three/drei";

export function MainCanvas() {
    const pathname = usePathname();

    return (
        <div className={`fixed inset-0 -z-10 w-full h-full pointer-events-auto ${pathname === '/' ? 'hidden' : ''}`}>
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 55, position: [0, 0, 20] }}
            >
                <color attach="background" args={['#ffffff']} />
                <directionalLight
                    position={[10, 10, 1]}
                    intensity={10}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    shadow-camera-near={0.1}
                    shadow-camera-far={50}
                    shadow-camera-left={-20}
                    shadow-camera-right={20}
                    shadow-camera-top={20}
                    shadow-camera-bottom={-20}
                />
                <Environment files={"/hdris/metro.hdr"} environmentIntensity={1} background={false} />
                <MainScene />
                <OrbitControls />
            </Canvas>
            <Loader />
        </div>
    )
}