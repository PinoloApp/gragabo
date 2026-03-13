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

        const isMobile = window.innerWidth < 768;

        // Initial Frame
        if (isMobile) {
            camera.position.set(-15.18, 42.67, 4.30);
            camera.rotation.set(2.91, 0.05, -3.13);
        } else {
            camera.position.set(-15.18, 42.67, 4.30);
            camera.rotation.set(2.91, 0.05, -3.13);
        }
    }, [camera]);

    useGSAP(() => {
        if (pathname !== '/tradeScene') return;

        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
        }, (context) => {
            let { isMobile } = context.conditions;

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

            const frames = {
                f2: {
                    pos: isMobile ? { x: 42.44, y: 38.04, z: -0.32 } : { x: 31.44, y: 38.04, z: -2.32 },
                    rot: isMobile ? { x: 2.90, y: 1.37, z: -2.93 } : { x: 2.90, y: 1.07, z: -2.93 }
                },
                f3: {
                    pos: isMobile ? { x: 61.16, y: 11.69, z: 22.56 } : { x: 32.16, y: 11.69, z: 5.56 },
                    rot: isMobile ? { x: 2.90, y: 1.57, z: -2.93 } : { x: 2.90, y: 1.07, z: -2.93 }
                },
                f4: {
                    pos: isMobile ? { x: 27.23, y: 4.20, z: -8.67 } : { x: 27.23, y: 4.20, z: -8.67 },
                    rot: isMobile ? { x: 1.09, y: 1.42, z: -1.09 } : { x: 1.09, y: 1.42, z: -1.09 }
                },
                f5: {
                    pos: isMobile ? { x: -0.29, y: 7.97, z: -9.62 } : { x: -1.29, y: 7.97, z: -10.62 },
                    rot: isMobile ? { x: 1.09, y: 1.42, z: -1.09 } : { x: 1.09, y: 1.42, z: -1.09 }
                },
                f6: {
                    pos: isMobile ? { x: -85.81, y: 6.92, z: 15.82 } : { x: -85.81, y: 6.92, z: 15.82 },
                    rot: isMobile ? { x: 2.83, y: -1.20, z: 2.85 } : { x: 2.83, y: -1.20, z: 2.85 }
                }
            };

            // Frame 2
            timeline.to(camera.position, { x: frames.f2.pos.x, y: frames.f2.pos.y, z: frames.f2.pos.z, duration: frameInterval, ease: "none" }, 0);
            timeline.to(camera.rotation, { x: frames.f2.rot.x, y: frames.f2.rot.y, z: frames.f2.rot.z, duration: frameInterval, ease: "none" }, 0);

            // Frame 3
            timeline.to(camera.position, { x: frames.f3.pos.x, y: frames.f3.pos.y, z: frames.f3.pos.z, duration: frameInterval, ease: "none" }, frameInterval);
            timeline.to(camera.rotation, { x: frames.f3.rot.x, y: frames.f3.rot.y, z: frames.f3.rot.z, duration: frameInterval, ease: "none" }, frameInterval);

            // Frame 4
            timeline.to(camera.position, { x: frames.f4.pos.x, y: frames.f4.pos.y, z: frames.f4.pos.z, duration: frameInterval, ease: "none" }, frameInterval * 2);
            timeline.to(camera.rotation, { x: frames.f4.rot.x, y: frames.f4.rot.y, z: frames.f4.rot.z, duration: frameInterval, ease: "none" }, frameInterval * 2);

            // Frame 5
            timeline.to(camera.position, { x: frames.f5.pos.x, y: frames.f5.pos.y, z: frames.f5.pos.z, duration: frameInterval, ease: "none" }, frameInterval * 3);
            timeline.to(camera.rotation, { x: frames.f5.rot.x, y: frames.f5.rot.y, z: frames.f5.rot.z, duration: frameInterval, ease: "none" }, frameInterval * 3);

            // Frame 6 (Arrives at 10.0 with cinematic ease)
            timeline.to(camera.position, {
                x: frames.f6.pos.x, y: frames.f6.pos.y, z: frames.f6.pos.z,
                duration: finalArrival - (frameInterval * 4),
                ease: "power4.inOut"
            }, frameInterval * 4);
            timeline.to(camera.rotation, {
                x: frames.f6.rot.x, y: frames.f6.rot.y, z: frames.f6.rot.z,
                duration: finalArrival - (frameInterval * 4),
                ease: "power4.inOut"
            }, frameInterval * 4);
        });

        return () => mm.revert();
    }, [pathname, camera]);

    return (
        <group ref={tradeRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.5}>
            <ContactShadows position={[0, -0.035, 0]} opacity={0.65} scale={80} blur={2.5} far={10} resolution={1024} color="#000000" />
            <AnimatedShip position={[0, 0, 0]} scale={5} />
        </group>
    );
}
