import { forwardRef } from 'react';
import { NextSceneButton } from '../../NextSceneButton';

export const SecondSectionText11 = forwardRef(({ isMobile, ..._props }, ref) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                ref={ref}
                className={`max-w-md text-center ${isMobile ? "px-6" : ""}`}
            >
                <h2 className={`font-sans font-black text-black ${isMobile ? "text-2xl" : "text-2xl md:text-3xl"}`}>
                    Next Step
                </h2>

                <p className={`font-sans mt-4 text-zinc-700 italic ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                    If your organization requires improved financial transparency, legal security, and capital discipline, Gragabo offers a structured pathway toward institutional readiness.
                </p>

                <div className={`mt-10 flex flex-col gap-4 ${isMobile ? "mt-6" : ""}`}>
                    <div className="flex flex-col sm:flex-row sm:items-stretch justify-center gap-4">
                        <a href="https://calendly.com/gragabo/30min" target="_blank" rel="noopener noreferrer" className={`pointer-events-auto inline-block text-center py-5 px-14 bg-[#CBA354] text-[#fff] font-bold uppercase tracking-[0.25em] text-sm transition-all duration-500 hover:bg-[#0b0c0e] hover:text-white hover:translate-x-2.5 w-full ${isMobile ? "py-4 px-8 text-[10px]" : ""}`}>
                            Schedule a 30-min Consultation
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfomix20PAaIJE9vXMnUdvNCQgaAO0SxlYi_ARHUNboJ571wg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className={`pointer-events-auto inline-block text-center py-5 px-14 bg-transparent text-[#0b0c0e] font-bold uppercase tracking-[0.25em] text-sm border border-[#0b0c0e] transition-all duration-500 hover:bg-[#0b0c0e] hover:text-white hover:translate-x-2.5 w-full ${isMobile ? "py-4 px-8 text-[10px]" : ""}`}>
                            Complete Diagnostic Form
                        </a>
                    </div>
                    <div className={isMobile ? "mt-4" : ""}>
                         <NextSceneButton href="/tradeScene" label="Next: Trade, Logistics & Industrial" />
                    </div>
                </div>
            </div>
        </div>
    );
});

SecondSectionText11.displayName = 'SecondSectionText11';