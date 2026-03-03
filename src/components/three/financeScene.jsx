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

    // Initial position for the scroll model
    const initialPosition = [12, -10, 5];

    useGSAP(() => {
        if (pathname !== '/financeScene') return;

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

        // ------------------ Phase 1: Going Downwards (0s - 6s) ------------------
        // Samo y se pomera za vreme prva 3 teksta
        timeline.to(financeRef.current.position, {
            y: 17, // ide na dole
            duration: 4,
            ease: "none"
        }, 0);

        // ------------------ Phase 2: Spin & Drift (6s - 8s) ------------------
        timeline.to(modelRotationRef.current.rotation, {
            y: Math.PI * 0.45,
            x: Math.PI * 0.5,
            duration: 1.5,
            ease: "none"
        }, 4);

        timeline.to(financeRef.current.position, {
            x: 0,
            y: 10,
            z: 32,
            duration: 1.5,
            ease: "none"
        }, 4);

        // ------------------ Phase 3: Z Rotation (5.5s - 8.5s) ------------------
        timeline.to(financeRef.current.rotation, {
            z: -Math.PI * 0.45,
            duration: 3,
            ease: "none"
        }, 5.5);

        // ------------------ Phase 4: Outro - Udaljavanje (8.5s - 10s) ------------------
        timeline.to(financeRef.current.position, {
            x: 20,
            y: 50,
            z: 20,
            duration: 1.5,
            ease: "power2.in"
        }, 8.5);

        timeline.to(financeRef.current.rotation, {
            z: Math.PI * 0.5,
            duration: 1.5,
            ease: "none"
        }, 8.5);


        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };

    }, [pathname]);

    return (
        <group ref={financeRef} position={initialPosition} scale={1}>
            <group ref={modelRotationRef}>
                <Scroll />
            </group>
        </group>
    );
}
