import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { Scroll } from "./modelScroll";

gsap.registerPlugin(ScrollTrigger);

export function FinanceScene() {
    const pathname = usePathname();
    const financeRef = useRef();
    const modelRotationRef = useRef();

    useGSAP(() => {
        if (pathname !== '/financeScene') return;

        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
        }, (context) => {
            let { isMobile } = context.conditions;

            const pos = {
                initial: { x: isMobile ? 12 : 12, y: isMobile ? -15 : -10, z: isMobile ? -8 : 5 },
                phase1_y: isMobile ? 12 : 17,
                phase2: {
                    x: isMobile ? 0 : 0,
                    y: isMobile ? 20 : 10,
                    z: isMobile ? 1 : 32,
                    rotX: isMobile ? Math.PI * 0.5 : Math.PI * 0.5,
                    rotY: isMobile ? Math.PI * 0.5 : Math.PI * 0.45
                },
                phase3_z: -Math.PI * 0.45,
                phase4: {
                    x: isMobile ? 20 : 20,
                    y: isMobile ? 50 : 50,
                    z: isMobile ? 50 : 20,
                    rotZ: Math.PI * 0.5
                }
            };

            // Set initial position
            gsap.set(financeRef.current.position, {
                x: pos.initial.x,
                y: pos.initial.y,
                z: pos.initial.z
            });

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

            // ------------------ Phase 1: Going Downwards (0s - 4s) ------------------
            timeline.to(financeRef.current.position, {
                y: pos.phase1_y,
                duration: 4,
                ease: "none"
            }, 0);

            // Add immediate X rotation for mobile
            if (isMobile) {
                timeline.to(modelRotationRef.current.rotation, {
                    y: Math.PI * -0.2, // Initial tilt for mobile
                    duration: 4,
                    ease: "none"
                }, 0);
            }

            // ------------------ Phase 2: Spin & Drift (4s - 5.5s) ------------------
            timeline.to(modelRotationRef.current.rotation, {
                y: pos.phase2.rotY,
                x: pos.phase2.rotX,
                duration: 1.5,
                ease: "none"
            }, 4);

            timeline.to(financeRef.current.position, {
                x: pos.phase2.x,
                y: pos.phase2.y,
                z: pos.phase2.z,
                duration: 1.5,
                ease: "none"
            }, 4);

            // ------------------ Phase 3: Z Rotation (5.5s - 8.5s) ------------------
            timeline.to(financeRef.current.rotation, {
                z: pos.phase3_z,
                duration: 3,
                ease: "none"
            }, 5.5);

            // ------------------ Phase 4: Outro - Udaljavanje (8.5s - 10s) ------------------
            timeline.to(financeRef.current.position, {
                x: pos.phase4.x,
                y: pos.phase4.y,
                z: pos.phase4.z,
                duration: 1.5,
                ease: "power2.in"
            }, 8.5);

            timeline.to(financeRef.current.rotation, {
                z: pos.phase4.rotZ,
                duration: 1.5,
                ease: "none"
            }, 8.5);

            return () => {
                timeline.scrollTrigger?.kill();
                timeline.kill();
            };
        });

        return () => mm.revert();

    }, [pathname]);

    return (
        <group ref={financeRef} scale={1}>
            <group ref={modelRotationRef}>
                <Scroll />
            </group>
        </group>
    );
}
