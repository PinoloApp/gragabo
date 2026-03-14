'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ChessScene } from "./chessScene";
import { Loader } from "@react-three/drei";

export function ChessCanvas() {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full pointer-events-auto">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 55, position: [0, 0, 20] }}
            >
                <color attach="background" args={['#F8FFF9']} />
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
                <ChessScene />
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
            <Loader />
        </div>
    )
}
