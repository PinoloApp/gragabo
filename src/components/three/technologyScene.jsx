import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Technology } from "./modelTechnology";
import { usePathname } from "next/navigation";
import { useFrame } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export function TechnologyScene() {
    const pathname = usePathname();
    const technology1Ref = useRef();
    const technologyRotationRef = useRef();
    const idleRotationRef = useRef();

    // Initial position for the technology model
    const initialPosition = [0, -3, 0]; // Move it much closer to the camera (camera is at z: 20)

    useFrame((state, delta) => {
        if (idleRotationRef.current) {
            idleRotationRef.current.rotation.y += delta * 0.15;
            idleRotationRef.current.rotation.x += delta * 0.05;
        }
    });

    useGSAP(() => {
        if (pathname !== '/technologyScene') return;

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
                    scrub: true,
                },
            });

            // "Empty" 10-second timeline (1 second = 10% page scroll)
            timeline.to({}, { duration: 10 });

            // Phase 1: Approach & Spin (0s - 3s)
            // Move sphere closer from z 17 to z 19, drift out to the right (x: 3.5), rotate dynamically to show shape
            timeline.to(technology1Ref.current.position, {
                z: isMobile ? 17 : 19,
                y: isMobile ? -2.5 : -1.0,
                x: isMobile ? 0 : 2.5, // Drift far right
                duration: 3,
                ease: "power2.inOut"
            }, 0);
            timeline.to(technologyRotationRef.current.rotation, {
                x: Math.PI * -0.5,
                y: Math.PI * 0.5,
                z: Math.PI * 0.2,
                duration: 3,
                ease: "power2.inOut"
            }, 0);

            // Phase 2: Breach & Internal Flight (3s - 7s)
            // Camera pushes *through* the spherical mesh wall (z 19 to z 22)
            // Return back to center (x: 0) while flying internally
            timeline.to(technology1Ref.current.position, {
                z: isMobile ? 20 : 22,
                x: 0, // Curve back to origin
                duration: 4,
                ease: "none"
            }, 3);
            timeline.to(technologyRotationRef.current.rotation, {
                z: Math.PI * 1.5,
                x: Math.PI * -0.8,
                duration: 4,
                ease: "none"
            }, 3);

            // Phase 3: Exit & Final Rest (7s - 10s)
            // Sphere completely passes behind the camera (z 22 to z 35)
            // Dramatic twisting X/Y rotation as it exits view rapidly
            timeline.to(technology1Ref.current.position, {
                z: isMobile ? 30 : 35,
                y: isMobile ? 10 : 5,
                x: isMobile ? 0 : -8,
                duration: 3,
                ease: "power2.in"
            }, 7);
            timeline.to(technologyRotationRef.current.rotation, {
                x: Math.PI * 2,
                y: Math.PI * 1.5,
                duration: 3,
                ease: "power2.in"
            }, 7);

            return () => {
                timeline.scrollTrigger?.kill();
                timeline.kill();
            };
        });

        return () => mm.revert();

    }, [pathname]);

    return (
        <>
            <group ref={technology1Ref} position={initialPosition} scale={3}>
                <group ref={technologyRotationRef} rotation={[0, 0, 0]}>
                    <group ref={idleRotationRef}>
                        <Technology />
                    </group>
                </group>
            </group>
        </>
    );
}
