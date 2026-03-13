import { forwardRef } from 'react';

export const SecondSectionText3 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[20%] left-[10%] -translate-x-1/2 w-[50vw] text-left"
                : "absolute top-[25%] left-[10%] text-left w-[30%]"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Financial and Legal Risks We Mitigate
            </h2>

            <div className="mt-4">
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>Clients typically engage Gragabo when encountering:</p>
                <ul className={`mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 ${isMobile ? "space-y-1" : ""}`}>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-1.5 shrink-0" />Limited financial visibility and cash flow volatility</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-1.5 shrink-0" />Inefficient cost and tax structures</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-1.5 shrink-0" />Inadequate corporate and ownership models</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-1.5 shrink-0" />Exposure to regulatory and contractual risk</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-1.5 shrink-0" />Insufficient investor readiness</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-1.5 shrink-0" />Weak capital allocation discipline</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-1.5 shrink-0" />Cross-border compliance challenges</li>
                </ul>
                <p className={`mt-4 font-sans font-normal text-zinc-400 italic ${isMobile ? "text-[10px]" : "text-sm md:text-base"}`}>These risks represent structural vulnerabilities that require systematic intervention.</p>
            </div>
        </div>
    );
});

SecondSectionText3.displayName = 'SecondSectionText3';

