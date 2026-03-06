'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { ThirdSectionText1 } from './texts/thirdSection/ThirdSectionText1'
import { ThirdSectionText2 } from './texts/thirdSection/ThirdSectionText2'
import { ThirdSectionText3 } from './texts/thirdSection/ThirdSectionText3'
import { ThirdSectionText4 } from './texts/thirdSection/ThirdSectionText4'
import { ThirdSectionText5 } from './texts/thirdSection/ThirdSectionText5'
import { ThirdSectionText6 } from './texts/thirdSection/ThirdSectionText6'
import { ThirdSectionText7 } from './texts/thirdSection/ThirdSectionText7'
import { ThirdSectionText8 } from './texts/thirdSection/ThirdSectionText8'
import { ThirdSectionText9 } from './texts/thirdSection/ThirdSectionText9'
import { ThirdSectionText10 } from './texts/thirdSection/ThirdSectionText10'
import { ThirdSectionText11 } from './texts/thirdSection/ThirdSectionText11'
import { ThirdSectionText12 } from './texts/thirdSection/ThirdSectionText12'


gsap.registerPlugin(ScrollTrigger)

export function ThirdSceneTextOverlay() {
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
    const text12 = useRef()


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
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.2 },
            1.4
        ).to(text3.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 1.9);

        // Text 4
        timeline.fromTo(text4.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
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
            { opacity: 0, y: -150 },
            { opacity: 1, y: 0, duration: 0.2 },
            3.5
        ).to(text6.current, {
            opacity: 0,
            y: -200,
            duration: 0.2
        }, 4.0);

        // Text 7
        timeline.fromTo(text7.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
            4.2
        ).to(text7.current, {
            opacity: 0,
            x: 100,
            duration: 0.2
        }, 4.7);

        // Text 8
        timeline.fromTo(text8.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
            4.9
        ).to(text8.current, {
            opacity: 0,
            x: 100,
            duration: 0.2
        }, 5.4);

        // Text 9
        timeline.fromTo(text9.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.2 },
            5.6
        ).to(text9.current, {
            opacity: 0,
            x: -100,
            duration: 0.2
        }, 6.1);

        // Text 10
        timeline.fromTo(text10.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.2 },
            6.3
        ).to(text10.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 6.8);

        // Text 11
        timeline.fromTo(text11.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.2 },
            7.0
        ).to(text11.current, {
            opacity: 0,
            y: -100,
            duration: 0.2
        }, 7.5);

        // Text 12 - Final 
        timeline.fromTo(text12.current,
            { autoAlpha: 0, x: -100 },
            { autoAlpha: 1, x: 0, duration: 0.5 },
            8.4
        );

        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };

    }, [])

    return (
        <div ref={containerRef} className="sticky top-0 h-screen w-full pointer-events-none z-10 p-8 sm:p-20 overflow-hidden opacity-0 invisible">
            <ThirdSectionText1 ref={text1} />
            <ThirdSectionText2 ref={text2} />
            <ThirdSectionText3 ref={text3} />
            <ThirdSectionText4 ref={text4} />
            <ThirdSectionText5 ref={text5} />
            <ThirdSectionText6 ref={text6} />
            <ThirdSectionText7 ref={text7} />
            <ThirdSectionText8 ref={text8} />
            <ThirdSectionText9 ref={text9} />
            <ThirdSectionText10 ref={text10} />
            <ThirdSectionText11 ref={text11} />
            <ThirdSectionText12 ref={text12} />
        </div>
    )
}
