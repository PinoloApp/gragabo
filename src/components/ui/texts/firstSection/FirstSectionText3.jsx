import { forwardRef } from 'react';

export const FirstSectionText3 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[30%] left-0 right-0 mx-auto w-[80vw] -translate-y-1/2 flex flex-col items-center justify-center text-center"
                : "absolute top-[55%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-xl text-left" : "text-2xl md:text-3xl"}`}>
                Business Challenges We Address
            </h2>

            <div className={`mt-4 ${isMobile ? "flex flex-col items-center" : ""}`}>
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-xs mb-3 text-left" : "text-base md:text-lg"}`}>Companies typically seek our support when facing one or more of the following challenges:</p>
                <ul className={`space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 ${isMobile ? "w-fit text-left mt-3" : "mt-3"}`}>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Uncontrolled operational costs and inefficient processes</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Lack of clear strategic direction</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Weak management and reporting structures</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Limited scalability and institutional maturity</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Exposure to regulatory and governance risks</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Founder or executive overload</li>
                    <li className={`flex items-start gap-2 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`rounded-full bg-[#0A6B3B] shrink-0 ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Inconsistent market positioning and expansion strategy</li>
                </ul>
                <p className={`mt-4 font-sans font-normal text-zinc-400 italic ${isMobile ? "text-[10px] text-center" : "text-sm md:text-base"}`}>These issues are rarely isolated. They are symptoms of insufficient organizational architecture.</p>
            </div>
        </div>
    );
});

FirstSectionText3.displayName = 'FirstSectionText3';