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
    const initialPosition = [0, -4.4, 3]

    useGSAP(() => {
        if (pathname !== '/mainScene') return;

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
            x: -2,
            z: 5,
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
            x: -8,   // Proizvoljna X vrednost - možeš zameniti
            y: 0,
            z: 5,   // Proizvoljna Z vrednost - možeš zameniti
            duration: 0.7,
        }, 1.1) // 1.1 da kreće istovremeno sa rotacijom iznad



        // ============================================
        // Tekst 4 (21% do 28%)
        // ============================================
        timeline.to(chess1Ref.current.position, {
            x: 8,
            y: 0,
            z: 4,
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
            x: 0,
            y: -7.4,
            z: 7,
            duration: 0.7,
        }, 4.1)

        timeline.to(chessRotationRef.current.rotation, {
            x: 0.5,
            y: 0,
            z: 0,
            duration: 0.7,
        }, 4.1) // 4.1 da kreće istovremeno sa pozicijom iznad



        timeline.to(chessRotationRef.current.position, {
            x: 8,
            y: 11,
            z: -3,
            duration: 0.7,
        }, 4.8) // 4.1 da kreće istovremeno sa pozicijom iznad

        timeline.to(chessRotationRef.current.rotation, {
            x: Math.PI * 0.5,
            y: 0,
            z: 0,
            duration: 0.7,
        }, 4.8) // 4.1 da kreće istovremeno sa pozicijom iznad


        // ============================================
        // Predposlednja animacija (79% do 89% skrola)
        // ============================================
        timeline.to(chess1Ref.current.position, {
            x: -12,
            y: -13,
            z: 20, // Promenjeno sa -5 na 8 da bi se približilo
            duration: 1.0, // Traje 10%
        }, 7.9) // Kreće od 79%

        timeline.to(chessRotationRef.current.rotation, {
            y: "0.5",
            x: "0.2",
            duration: 1.0,
        }, 7.9)



        timeline.to(chess1Ref.current.position, {
            x: -23,
            y: -23,
            duration: 1.0, // Traje 10%
        }, 8.9) // Kreće od 79%

        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };

    }, [pathname])

    return (
        <>
            <group ref={chess1Ref} position={initialPosition}>
                <group ref={chessRotationRef} rotation={[0, 0, 0]}>
                    <Chess />
                </group>
            </group>
        </>
    )
}   