'use client'
import { useRef, useState } from 'react'
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
                x: -100,
                duration: 0.2
            }, 3.3);

            // Text 6
            timeline.fromTo(text6.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.2 },
                3.5
            ).to(text6.current, {
                opacity: 0,
                x: -100,
                duration: 0.2
            }, 4.0);

            // Text 7
            timeline.fromTo(text7.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.2 },
                4.2
            ).to(text7.current, {
                opacity: 0,
                x: -100,
                duration: 0.2
            }, 4.7);

            // Text 8
            timeline.fromTo(text8.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.2 },
                5.6
            ).to(text8.current, {
                opacity: 0,
                x: -100,
                duration: 0.2
            }, 6.1);

            // Text 9
            timeline.fromTo(text9.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 0.2 },
                6.3
            ).to(text9.current, {
                opacity: 0,
                x: 100,
                duration: 0.2
            }, 6.8);

            // Text 10
            timeline.fromTo(text10.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.2 },
                7.0
            ).to(text10.current, {
                opacity: 0,
                y: -100,
                duration: 0.2
            }, 7.5);

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

            // Text 12 - Final 
            timeline.fromTo(text12.current,
                { autoAlpha: 0, x: -100 },
                { autoAlpha: 1, x: 0, duration: 1.0 },
                9.0
            );

            if (text12.current) {
                const btn = text12.current.querySelector('.next-scene-btn');
                if (btn) {
                    timeline.fromTo(btn,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.8 },
                        9.0
                    );
                }
            }
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
                />
            </div>
        </div>
    )
}

function MobileStateWrapper({ isMobile, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12 }) {
    return (
        <>
            <ThirdSectionText1 ref={text1} isMobile={isMobile} />
            <ThirdSectionText2 ref={text2} isMobile={isMobile} />
            <ThirdSectionText3 ref={text3} isMobile={isMobile} />
            <ThirdSectionText4 ref={text4} isMobile={isMobile} />
            <ThirdSectionText5 ref={text5} isMobile={isMobile} />
            <ThirdSectionText6 ref={text6} isMobile={isMobile} />
            <ThirdSectionText7 ref={text7} isMobile={isMobile} />
            <ThirdSectionText8 ref={text8} isMobile={isMobile} />
            <ThirdSectionText9 ref={text9} isMobile={isMobile} />
            <ThirdSectionText10 ref={text10} isMobile={isMobile} />
            <ThirdSectionText11 ref={text11} isMobile={isMobile} />
            <ThirdSectionText12 ref={text12} isMobile={isMobile} />
        </>
    );
}
