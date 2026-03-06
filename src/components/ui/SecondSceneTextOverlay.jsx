'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { SecondSectionText1 } from './texts/secondSection/SecondSectionText1'
import { SecondSectionText2 } from './texts/secondSection/SecondSectionText2'
import { SecondSectionText3 } from './texts/secondSection/SecondSectionText3'
import { SecondSectionText4 } from './texts/secondSection/SecondSectionText4'
import { SecondSectionText5 } from './texts/secondSection/SecondSectionText5'
import { SecondSectionText6 } from './texts/secondSection/SecondSectionText6'
import { SecondSectionText7 } from './texts/secondSection/SecondSectionText7'
import { SecondSectionText8 } from './texts/secondSection/SecondSectionText8'
import { SecondSectionText9 } from './texts/secondSection/SecondSectionText9'
import { SecondSectionText10 } from './texts/secondSection/SecondSectionText10'
import { SecondSectionText11 } from './texts/secondSection/SecondSectionText11'


gsap.registerPlugin(ScrollTrigger)

export function SecondSceneTextOverlay() {
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
        gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.5 });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        });

        // 10 "seconds" = 100% scroll depth
        timeline.to({}, { duration: 10 });

        // Text 1
        timeline.to(text1.current, {
            opacity: 0,
            y: -50,
            duration: 0.2
        }, 0.5);

        // Text 2
        timeline.fromTo(text2.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.2 },
            0.7
        ).to(text2.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 1.2);

        // Text 3
        timeline.fromTo(text3.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.2 },
            1.4
        ).to(text3.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 1.9);

        // Text 4
        timeline.fromTo(text4.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.2 },
            2.1
        ).to(text4.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 2.6);

        // Text 5
        timeline.fromTo(text5.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.2 },
            2.8
        ).to(text5.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 3.3);

        // Text 6
        timeline.fromTo(text6.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.4 },
            3.5
        ).to(text6.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 4.0);

        // Text 7
        timeline.fromTo(text7.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.3 },
            5.2
        ).to(text7.current, {
            opacity: 0,
            y: -100,
            duration: 0.3
        }, 5.7);

        // Text 8
        timeline.fromTo(text8.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.3 },
            6.2
        ).to(text8.current, {
            opacity: 0,
            x: -100,
            duration: 0.3
        }, 6.7);

        // Text 9
        timeline.fromTo(text9.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.3 },
            7.2
        ).to(text9.current, {
            opacity: 0,
            x: -100,
            duration: 0.3
        }, 7.7);

        // Text 10
        timeline.fromTo(text10.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.3 },
            8.2
        ).to(text10.current, {
            opacity: 0,
            x: -100,
            duration: 0.3
        }, 8.7);

        // Text 11
        timeline.fromTo(text11.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.3 },
            9.2
        )

        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };

    }, [])

    return (
        <div ref={containerRef} className="sticky top-0 h-screen w-full pointer-events-none z-10 p-8 sm:p-20 overflow-hidden opacity-0 invisible">
            <SecondSectionText1 ref={text1} />
            <SecondSectionText2 ref={text2} />
            <SecondSectionText3 ref={text3} />
            <SecondSectionText4 ref={text4} />
            <SecondSectionText5 ref={text5} />
            <SecondSectionText6 ref={text6} />
            <SecondSectionText7 ref={text7} />
            <SecondSectionText8 ref={text8} />
            <SecondSectionText9 ref={text9} />
            <SecondSectionText10 ref={text10} />
            <SecondSectionText11 ref={text11} />
        </div>
    )
}
