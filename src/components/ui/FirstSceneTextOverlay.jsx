'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FirstSectionText1 } from './texts/firstSection/FirstSectionText1'
import { FirstSectionText2 } from './texts/firstSection/FirstSectionText2'
import { FirstSectionText3 } from './texts/firstSection/FirstSectionText3'
import { FirstSectionText4 } from './texts/firstSection/FirstSectionText4'
import { FirstSectionText5 } from './texts/firstSection/FirstSectionText5'
import { FirstSectionText6 } from './texts/firstSection/FirstSectionText6'
import { FirstSectionText7 } from './texts/firstSection/FirstSectionText7'
import { FirstSectionText8 } from './texts/firstSection/FirstSectionText8'
import { FirstSectionText9 } from './texts/firstSection/FirstSectionText9'
import { FirstSectionText10 } from './texts/firstSection/FirstSectionText10'
import { FirstSectionText11 } from './texts/firstSection/FirstSectionText11'


gsap.registerPlugin(ScrollTrigger)

export function FirstSceneTextOverlay() {
    const containerRef = useRef()
    const text1 = useRef()
    const text2 = useRef()
    const text3 = useRef()
    const text4 = useRef()
    const text5 = useRef()
    const text6 = useRef()
    const text7 = useRef()
    const text8 = useRef()
    const text9 = useRef()
    const text10 = useRef()
    const text11 = useRef()

    useGSAP(() => {
        // Prikazuje ceo kontejner tek kada je GSAP spreman da izračuna pozicije tekstova
        gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.5 });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        });

        // 10 "sekundi" = 100% skrola
        timeline.to({}, { duration: 10 });

        // Text 1 (Animira se od 0% do 6%)
        timeline.to(text1.current, {
            opacity: 0,
            y: -50,
            duration: 0.6
        }, 0);

        // Text 2
        timeline.fromTo(text2.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.1 },
            0.7 // In od 7% do 8% (duration: 0.1)
        ).to(text2.current, {
            opacity: 0,
            y: -100,
            duration: 0.1
        }, 1.0); // Out od 10% do 11% (duration: 0.1)


        // Text 3
        timeline.fromTo(text3.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.2 },
            1.3 // In od 11% do 13%
        ).to(text3.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 1.8); // Out od 16% do 18%


        // Text 4
        timeline.fromTo(text4.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
            2.1 // In: 21% -> 23%
        ).to(text4.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 2.6); // Out: 26% -> 28%


        // Text 5
        timeline.fromTo(text5.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.2 },
            3.1 // In: 31% -> 33%
        ).to(text5.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 3.6); // Out: 36% -> 38%


        // Text 6
        timeline.fromTo(text6.current,
            { opacity: 0, y: -150 },
            { opacity: 1, y: 0, duration: 0.3 },
            4.2 // In: 41% -> 43%
        ).to(text6.current, {
            opacity: 0,
            y: -200,
            duration: 0.2
        }, 4.8); // Out: 48% -> 50%


        // Text 7
        timeline.fromTo(text7.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
            5.1 // In: 51% -> 53%
        ).to(text7.current, {
            opacity: 0,
            x: 100,
            duration: 0.2
        }, 5.6); // Out: 56% -> 58%


        // Text 8
        timeline.fromTo(text8.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
            6.1 // In: 61% -> 63%
        ).to(text8.current, {
            opacity: 0,
            x: 100,
            duration: 0.2
        }, 6.6); // Out: 66% -> 68%


        // Text 9
        timeline.fromTo(text9.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
            7.1 // In: 71% -> 73%
        ).to(text9.current, {
            opacity: 0,
            x: -100,
            duration: 0.2
        }, 7.6); // Out: 76% -> 78%


        // Text 10
        timeline.fromTo(text10.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.2 },
            8.6 // In: 83% -> 85%
        ).to(text10.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 8.9); // Out: 87% -> 89%


        // Text 11
        timeline.fromTo(text11.current,
            { autoAlpha: 0, x: -100 },
            { autoAlpha: 1, x: 0, duration: 0.5 },
            9.1 // In: 91% -> 95%
        );

        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };

    }, [])

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10 p-8 sm:p-20 overflow-hidden opacity-0 invisible">

            <FirstSectionText1 ref={text1} />
            <FirstSectionText2 ref={text2} />
            <FirstSectionText3 ref={text3} />
            <FirstSectionText4 ref={text4} />
            <FirstSectionText5 ref={text5} />
            <FirstSectionText6 ref={text6} />
            <FirstSectionText7 ref={text7} />
            <FirstSectionText8 ref={text8} />
            <FirstSectionText9 ref={text9} />
            <FirstSectionText10 ref={text10} />
            <FirstSectionText11 ref={text11} />

        </div>
    )
}
