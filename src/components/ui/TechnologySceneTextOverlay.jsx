'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { FourthSectionText1 } from './texts/fourthSection/FourthSectionText1'
import { FourthSectionText2 } from './texts/fourthSection/FourthSectionText2'
import { FourthSectionText3 } from './texts/fourthSection/FourthSectionText3'
import { FourthSectionText4 } from './texts/fourthSection/FourthSectionText4'
import { FourthSectionText5 } from './texts/fourthSection/FourthSectionText5'
import { FourthSectionText6 } from './texts/fourthSection/FourthSectionText6'
import { FourthSectionText7 } from './texts/fourthSection/FourthSectionText7'
import { FourthSectionText8 } from './texts/fourthSection/FourthSectionText8'
import { FourthSectionText9 } from './texts/fourthSection/FourthSectionText9'
import { FourthSectionText10 } from './texts/fourthSection/FourthSectionText10'
import { FourthSectionText11 } from './texts/fourthSection/FourthSectionText11'
import { FourthSectionText12 } from './texts/fourthSection/FourthSectionText12'
import { FourthSectionText13 } from './texts/fourthSection/FourthSectionText13'

gsap.registerPlugin(ScrollTrigger)

export function TechnologySceneTextOverlay() {
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
    const text13 = useRef()

    const [isMobile, setIsMobile] = useState(false);

    useGSAP(() => {
        gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.5 });

        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
        }, (context) => {
            let { isMobile: mobile } = context.conditions;
            setIsMobile(mobile);

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
                1.25
            ).to(text2.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 1.75);

            // Text 3
            timeline.fromTo(text3.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.2 },
                2.0
            ).to(text3.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 2.5);

            // Text 4
            timeline.fromTo(text4.current,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 0.2 },
                2.75
            ).to(text4.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 3.25);

            // Text 5
            timeline.fromTo(text5.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.2 },
                3.5
            ).to(text5.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 4.0);

            // Text 6
            timeline.fromTo(text6.current,
                { opacity: 0, y: -150 },
                { opacity: 1, y: 0, duration: 0.2 },
                4.25
            ).to(text6.current, {
                opacity: 0,
                y: -200,
                duration: 0.2
            }, 4.75);

            // Text 7
            timeline.fromTo(text7.current,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 0.2 },
                5.0
            ).to(text7.current, {
                opacity: 0,
                x: 100,
                duration: 0.2
            }, 5.5);

            // Text 8
            timeline.fromTo(text8.current,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 0.2 },
                5.75
            ).to(text8.current, {
                opacity: 0,
                x: 100,
                duration: 0.2
            }, 6.25);

            // Text 9
            timeline.fromTo(text9.current,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 0.2 },
                6.5
            ).to(text9.current, {
                opacity: 0,
                x: -100,
                duration: 0.2
            }, 7.0);

            // Text 10
            timeline.fromTo(text10.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.2 },
                7.25
            ).to(text10.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 7.75);

            // Text 11
            timeline.fromTo(text11.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.2 },
                8.0
            ).to(text11.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 8.5);

            // Text 12
            timeline.fromTo(text12.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.2 },
                8.75
            ).to(text12.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 9.25);

            // Text 13 - Final
            timeline.fromTo(text13.current,
                { autoAlpha: 0, x: -100 },
                { autoAlpha: 1, x: 0, duration: 0.5 },
                9.5
            );
        });

        return () => mm.revert();

    }, [])

    return (
        <div ref={containerRef} className="sticky top-0 h-screen w-full pointer-events-none z-10 overflow-hidden opacity-0 invisible">
            <div className="scene-text-overlay relative h-full p-8 sm:p-20">
                <MobileStateWrapper
                    isMobile={isMobile}
                    text1={text1}
                    text2={text2}
                    text3={text3}
                    text4={text4}
                    text5={text5}
                    text6={text6}
                    text7={text7}
                    text8={text8}
                    text9={text9}
                    text10={text10}
                    text11={text11}
                    text12={text12}
                    text13={text13}
                />
            </div>
        </div>
    )
}

function MobileStateWrapper({ isMobile, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13 }) {
    return (
        <>
            <FourthSectionText1 ref={text1} isMobile={isMobile} />
            <FourthSectionText2 ref={text2} isMobile={isMobile} />
            <FourthSectionText3 ref={text3} isMobile={isMobile} />
            <FourthSectionText4 ref={text4} isMobile={isMobile} />
            <FourthSectionText5 ref={text5} isMobile={isMobile} />
            <FourthSectionText6 ref={text6} isMobile={isMobile} />
            <FourthSectionText7 ref={text7} isMobile={isMobile} />
            <FourthSectionText8 ref={text8} isMobile={isMobile} />
            <FourthSectionText9 ref={text9} isMobile={isMobile} />
            <FourthSectionText10 ref={text10} isMobile={isMobile} />
            <FourthSectionText11 ref={text11} isMobile={isMobile} />
            <FourthSectionText12 ref={text12} isMobile={isMobile} />
            <FourthSectionText13 ref={text13} isMobile={isMobile} />
        </>
    );
}
