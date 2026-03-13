import { forwardRef } from 'react';

export const FirstSectionText6 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[23%] left-1/2 -translate-x-1/2 w-[90vw] text-center"
                : "absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%]"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-xl" : "text-2xl md:text-3xl"}`}>
                Corporate Governance and Institutional Development
            </h2>

            <div className="mt-4">
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-sm mb-3" : "text-base md:text-lg"}`}>We establish robust governance systems through:</p>
                <ul className={`space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 mx-auto w-fit text-left ${isMobile ? "mt-3" : "mt-3"}`}>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`shrink-0 rounded-full bg-[#0A6B3B] ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Organizational and leadership structuring</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`shrink-0 rounded-full bg-[#0A6B3B] ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Decision making and accountability models</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`shrink-0 rounded-full bg-[#0A6B3B] ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Risk management and compliance systems</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`shrink-0 rounded-full bg-[#0A6B3B] ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Internal reporting and audit procedures</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-[11px] leading-tight" : "text-base md:text-lg"}`}><span className={`shrink-0 rounded-full bg-[#0A6B3B] ${isMobile ? "w-1.5 h-1.5 mt-1" : "w-2 h-2 mt-2.5"}`} />Ownership and board governance frameworks</li>
                </ul>
            </div>
        </div>
    );
});

FirstSectionText6.displayName = 'FirstSectionText6';