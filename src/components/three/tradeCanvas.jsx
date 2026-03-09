'use client'
import { Environment, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TradeScene } from "./tradeScene";
import { Loader } from "@react-three/drei";

export function TradeCanvas() {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full pointer-events-auto">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 55, position: [-15.18, 42.67, 4.30] }}
            >
                <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} />
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
                <TradeScene />
            </Canvas>
            <Loader />
        </div>
    )
}
