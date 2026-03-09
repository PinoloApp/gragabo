import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { AnimatedShip } from "./modelAnimatedShip";
import { usePathname } from "next/navigation";
import { useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export function TradeScene() {
    const pathname = usePathname();
    const tradeRef = useRef();
    const { camera } = useThree();

    useEffect(() => {
        if (!camera) return;
        // Frame 1
        camera.position.set(-15.18, 42.67, 4.30);
        camera.rotation.set(2.91, 0.05, -3.13);
    }, [camera]);

    useGSAP(() => {
        if (pathname !== '/tradeScene') return;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        // 10 units total duration to stay perfectly synced with ThirdSceneTextOverlay
        const totalDuration = 10;
        const frameInterval = 2; // Linear steps for F1-F5 (0 to 8)
        const finalArrival = 10;   // F6 arrives at 100% scroll

        // Frame 2
        timeline.to(camera.position, { x: 31.44, y: 38.04, z: -2.32, duration: frameInterval, ease: "none" }, 0);
        timeline.to(camera.rotation, { x: 2.90, y: 1.07, z: -2.93, duration: frameInterval, ease: "none" }, 0);

        // Frame 3
        timeline.to(camera.position, { x: 32.16, y: 11.69, z: 5.56, duration: frameInterval, ease: "none" }, frameInterval);
        timeline.to(camera.rotation, { x: 2.90, y: 1.07, z: -2.93, duration: frameInterval, ease: "none" }, frameInterval);

        // Frame 4
        timeline.to(camera.position, { x: 27.23, y: 4.20, z: -8.67, duration: frameInterval, ease: "none" }, frameInterval * 2);
        timeline.to(camera.rotation, { x: 1.09, y: 1.42, z: -1.09, duration: frameInterval, ease: "none" }, frameInterval * 2);

        // Frame 5
        timeline.to(camera.position, { x: -1.29, y: 7.97, z: -10.62, duration: frameInterval, ease: "none" }, frameInterval * 3);
        timeline.to(camera.rotation, { x: 1.09, y: 1.42, z: -1.09, duration: frameInterval, ease: "none" }, frameInterval * 3);

        // Frame 6 (Arrives at 10.0 with cinematic ease)
        timeline.to(camera.position, {
            x: -85.81, y: 6.92, z: 15.82,
            duration: finalArrival - (frameInterval * 4),
            ease: "power4.inOut"
        }, frameInterval * 4);
        timeline.to(camera.rotation, {
            x: 2.83, y: -1.20, z: 2.85,
            duration: finalArrival - (frameInterval * 4),
            ease: "power4.inOut"
        }, frameInterval * 4);

        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };
    }, [pathname, camera]);

    return (
        <group ref={tradeRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.5}>
            <ContactShadows position={[0, -0.035, 0]} opacity={0.65} scale={80} blur={2.5} far={10} resolution={1024} color="#000000" />
            <AnimatedShip position={[0, 0, 0]} scale={5} />
        </group>
    );
}
