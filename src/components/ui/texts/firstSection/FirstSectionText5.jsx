
import { forwardRef } from 'react';

export const FirstSectionText5 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[26%] left-0 right-0 mx-auto w-[80vw] -translate-y-1/2 flex flex-col items-center justify-center text-center"
                : "absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-xl text-left" : "text-2xl md:text-3xl"}`}>
                Operational Excellence and Process Management
            </h2>

            <div className={`mt-4 ${isMobile ? "flex flex-col items-center" : ""}`}>
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-xs mb-3 text-left" : "text-base md:text-lg"}`}>We strengthen operational infrastructure by implementing:</p>
                <ul className={`space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 ${isMobile ? "w-fit text-left mt-3" : "mt-3"}`}>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />End-to-end process optimization</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Supply chain and logistics restructuring</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Cost management systems</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Quality and certification alignment</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Performance monitoring frameworks</li>
                </ul>
                <p className={`mt-4 font-sans font-normal text-zinc-400 italic ${isMobile ? "text-[10px] text-center" : "text-sm md:text-base"}`}>The result is increased efficiency, transparency, and operational reliability.</p>
            </div>
        </div>
    );
});

FirstSectionText5.displayName = 'FirstSectionText5';
