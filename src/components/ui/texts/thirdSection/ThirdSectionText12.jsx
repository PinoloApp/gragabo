import { forwardRef } from 'react';
import { NextSceneButton } from '../../NextSceneButton';

export const ThirdSectionText12 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div className={`w-full h-full flex items-center justify-center ${isMobile ? "px-6" : ""}`}>
            <div
                ref={ref}
                className={`text-center ${isMobile ? "w-full" : "max-w-md"}`}
            >
                <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                    Next Step
                </h2>

                <p className={`font-sans mt-4 text-zinc-700 italic ${isMobile ? "text-xs leading-relaxed" : "text-base md:text-lg"}`}>
                    If your organization operates in import, export, manufacturing, or distribution and seeks improved operational efficiency, commercial security, and scalable logistics infrastructure, Gragabo offers a structured pathway forward.
                </p>

                <div className={`mt-10 flex flex-col gap-4 ${isMobile ? "mt-6" : ""}`}>
                    <div className="flex flex-col sm:flex-row sm:items-stretch justify-center gap-4">
                        <a href="https://calendly.com/gragabo/30min" target="_blank" rel="noopener noreferrer" className={`pointer-events-auto inline-block text-center py-5 px-14 bg-[#CBA354] text-[#fff] font-bold uppercase tracking-[0.25em] text-sm transition-all duration-500 hover:bg-[#0b0c0e] hover:text-white hover:translate-x-2.5 w-full ${isMobile ? "py-4 px-6 text-xs" : ""}`}>
                            Schedule a 30-min Consultation
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfomix20PAaIJE9vXMnUdvNCQgaAO0SxlYi_ARHUNboJ571wg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className={`pointer-events-auto inline-block text-center py-5 px-14 bg-transparent text-[#0b0c0e] font-bold uppercase tracking-[0.25em] text-sm border border-[#0b0c0e] transition-all duration-500 hover:bg-[#0b0c0e] hover:text-white hover:translate-x-2.5 w-full ${isMobile ? "py-4 px-6 text-xs" : ""}`}>
                            Complete Diagnostic Form
                        </a>
                    </div>
                    <NextSceneButton href="/technologyScene" label="Next: Technology, Design & Impact" isMobile={isMobile} />
                </div>
            </div>
        </div>
    );
});

ThirdSectionText12.displayName = 'ThirdSectionText12';