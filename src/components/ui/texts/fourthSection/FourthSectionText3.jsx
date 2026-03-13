import { forwardRef } from 'react';

export const FourthSectionText3 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[25%] left-0 right-0 mx-auto w-[85vw] text-left"
                : "absolute top-1/2 left-20 md:left-24 -translate-y-1/2 w-[600px] text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Structural Challenges in Digital and Creative Operations
            </h2>

            <div className="mt-4">
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>Organizations typically seek support in this domain when experiencing:</p>
                <ul className={`mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 ${isMobile ? "space-y-1" : ""}`}>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Disconnected information systems and workflows</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Inefficient use of digital tools and platforms</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Lack of structured innovation processes</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Absence of measurable impact frameworks</li>
                </ul>
                <p className={`mt-4 font-sans font-normal text-zinc-400 italic ${isMobile ? "text-[10px]" : "text-sm md:text-base"}`}>These limitations constrain competitiveness and long-term relevance.</p>
            </div>
        </div>
    );
});

FourthSectionText3.displayName = 'FourthSectionText3';
