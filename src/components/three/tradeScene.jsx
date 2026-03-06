import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trade } from "./modelTrade";
import { usePathname } from "next/navigation";
import { useFrame } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export function TradeScene() {
    const pathname = usePathname();
    const tradeRef = useRef();
    const tradeRotationRef = useRef();
    const idleRotationRef = useRef();

    // Initial position for the vast sea of containers
    const initialPosition = [0, -23, -32];

    useFrame((state, delta) => {
        // if (idleRotationRef.current) {
        //     // Very slow, subtle drift for the shipping containers
        //     idleRotationRef.current.rotation.y += delta * 0.02;
        // }
    });

    useGSAP(() => {
        if (pathname !== '/tradeScene') return;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });

        // 10-second timeline (1 second = 10% page scroll)
        timeline.to({}, { duration: 10 });

        // Phase 1: Approach (0s - 3s)
        // Zoom in from a distance and pan slightly over the containers
        timeline.to(tradeRef.current.position, {
            z: 12,
            y: -2,
            x: 5,
            duration: 3,
            ease: "power2.inOut"
        }, 0);
        timeline.to(tradeRotationRef.current.rotation, {
            x: Math.PI * -0.1,
            y: Math.PI * 0.2,
            duration: 3,
            ease: "power2.inOut"
        }, 0);

        // Phase 2: Deep Dive (3s - 7s)
        // Fly directly over/through the maze of containers, rotating to look down
        timeline.to(tradeRef.current.position, {
            z: 25,
            y: 0,
            x: -2,
            duration: 4,
            ease: "none"
        }, 3);
        timeline.to(tradeRotationRef.current.rotation, {
            x: Math.PI * 0.1,
            y: Math.PI * -0.5,
            duration: 4,
            ease: "none"
        }, 3);

        // Phase 3: Exit (7s - 10s)
        // Accelerate extremely fast past the final containers out of view
        timeline.to(tradeRef.current.position, {
            z: 40,
            y: 3,
            x: -15,
            duration: 3,
            ease: "power2.in"
        }, 7);
        timeline.to(tradeRotationRef.current.rotation, {
            x: Math.PI * 0.5,
            y: Math.PI * -1.0,
            duration: 3,
            ease: "power2.in"
        }, 7);

        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };

    }, [pathname]);

    return (
        <group ref={tradeRef} position={initialPosition} scale={1.5}>
            <group ref={tradeRotationRef} rotation={[0, -21, 0]}>
                <group ref={idleRotationRef}>
                    <Trade />
                </group>
            </group>
        </group>
    );
}
