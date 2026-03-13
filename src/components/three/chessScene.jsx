import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import { Chess } from "./modelChess"
import { usePathname } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

export function ChessScene() {
    const pathname = usePathname();
    const chess1Ref = useRef()
    const chessRotationRef = useRef()

    useGSAP(() => {
        if (pathname !== '/mainScene') return;

        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
        }, (context) => {
            let { isMobile } = context.conditions;
            ``
            // Inverted for mobile so the piece doesn't block centered texts
            const pos = {
                t2: { x: isMobile ? 0 : -2, y: isMobile ? -10 : -4.4, z: isMobile ? -8 : 5 },
                t3: { x: isMobile ? 0 : -8, y: isMobile ? -10 : 0, z: isMobile ? -8 : 5 },
                t4: { x: isMobile ? 0 : 8, y: isMobile ? -10 : 0, z: isMobile ? -8 : 4 },
                t6: { x: isMobile ? 0 : 0, y: isMobile ? -8 : -7.4, z: isMobile ? -8 : 7 },
                t7_rot: { x: isMobile ? 0 : 8, y: isMobile ? 0 : 11, z: isMobile ? -5 : -3 },
                t_end1: { x: isMobile ? 0 : -12, y: isMobile ? -5 : -13, z: isMobile ? 12 : 20 },
                t_end2: { x: isMobile ? 0 : -23, y: isMobile ? -23 : -23, z: 0 }
            };

            // Set initial position based on device
            gsap.set(chess1Ref.current.position, {
                x: 0,
                y: isMobile ? -10 : -4.4,
                z: isMobile ? -8 : 3
            });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            })

            // Definišemo "praznu" vremensku osu od 10 sekundi tako da:
            // 1 sekunda = 10% stranice
            // 0.6 = 6% skrola | 9.8 = 98% skrola
            timeline.to({}, { duration: 10 })

            // ============================================
            // Tekst 1: "Business, Strategy..." (0% do 6%)
            // ============================================
            timeline.to(chessRotationRef.current.rotation, {
                y: Math.PI * 0.25,
                duration: 0.8, // Traje 6% skrola
            }, 0) // Kreće od 0%

            // ============================================
            // Tekst 2: "Executive Summary" (7% do 11%)
            // ============================================
            timeline.to(chess1Ref.current.position, {
                x: pos.t2.x,
                y: pos.t2.y,
                z: pos.t2.z,
                duration: 0.4,
            }, 0.7)

            // ============================================
            // Tekst 3 (11% do 18%)
            // ============================================
            timeline.to(chessRotationRef.current.rotation, {
                x: Math.PI * 0.15,
                y: Math.PI * 0.5,
                duration: 0.7,
            }, 1.1)

            timeline.to(chess1Ref.current.position, {
                x: pos.t3.x,
                y: pos.t3.y,
                z: pos.t3.z,
                duration: 0.7,
            }, 1.1)

            // ============================================
            // Tekst 4 (21% do 28%)
            // ============================================
            timeline.to(chess1Ref.current.position, {
                x: pos.t4.x,
                y: pos.t4.y,
                z: pos.t4.z,
                duration: 0.7,
            }, 1.8)

            // ============================================
            // Tekst 5 (31% do 38%)
            // ============================================
            timeline.to(chessRotationRef.current.rotation, {
                y: Math.PI * -0.01,
                duration: 0.7,
            }, 3.1)

            // ============================================
            // Tekst 6 (41% do 48%)
            // ============================================
            timeline.to(chess1Ref.current.position, {
                x: pos.t6.x,
                y: pos.t6.y,
                z: pos.t6.z,
                duration: 0.7,
            }, 4.1)

            timeline.to(chessRotationRef.current.rotation, {
                x: 0.5,
                y: 0,
                z: 0,
                duration: 0.7,
            }, 4.1)

            timeline.to(chessRotationRef.current.position, {
                x: pos.t7_rot.x,
                y: pos.t7_rot.y,
                z: pos.t7_rot.z,
                duration: 0.7,
            }, 4.8)

            timeline.to(chessRotationRef.current.rotation, {
                x: Math.PI * 0.5,
                y: 0,
                z: 0,
                duration: 0.7,
            }, 4.8)


            // ============================================
            // Predposlednja animacija (79% do 89% skrola)
            // ============================================
            timeline.to(chess1Ref.current.position, {
                x: pos.t_end1.x,
                y: pos.t_end1.y,
                z: pos.t_end1.z,
                duration: 1.0,
            }, 7.9)

            timeline.to(chessRotationRef.current.rotation, {
                y: "0.5",
                x: "0.2",
                duration: 1.0,
            }, 7.9)

            timeline.to(chess1Ref.current.position, {
                x: pos.t_end2.x,
                y: pos.t_end2.y,
                duration: 1.0,
            }, 8.9)

            return () => {
                timeline.scrollTrigger?.kill();
                timeline.kill();
            };
        });

        return () => mm.revert();
    }, [pathname])

    return (
        <>
            <group ref={chess1Ref}>
                <group ref={chessRotationRef} rotation={[0, 0, 0]}>
                    <Chess />
                </group>
            </group>
        </>
    )
}   