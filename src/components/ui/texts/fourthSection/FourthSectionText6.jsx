import { forwardRef } from 'react';

export const FourthSectionText6 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[30%] left-0 right-0 mx-auto w-[85vw] text-left"
                : "absolute top-1/2 left-20 md:right-24 -translate-y-1/2 w-[500px] text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Strategic Design and Brand Architecture
            </h2>

            <div className="mt-4">
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>We strengthen organizational identity and market credibility through:</p>
                <ul className={`mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 ${isMobile ? "space-y-1" : ""}`}>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Corporate and brand identity systems</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Digital and interface design</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Communication and content frameworks</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />User experience optimization</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Visual governance standards</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Multi-platform consistency models</li>
                </ul>
                <p className={`mt-4 font-sans font-normal ${isMobile ? "text-[10px] text-black italic" : "text-sm md:text-base text-zinc-400 italic"}`}>Design is treated as a strategic asset rather than a cosmetic element.</p>
            </div>
        </div>
    );
});

FourthSectionText6.displayName = 'FourthSectionText6';

