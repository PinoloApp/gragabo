import { forwardRef } from 'react';

export const ThirdSectionText3 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[10%] left-0 right-0 mx-auto w-[85vw] text-left"
                : "absolute top-[20%] left-[10%] w-[80%] md:w-[70%] lg:w-[60%] text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Structural Challenges in Trade and Industrial Operations
            </h2>

            <div className="mt-4">
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>Organizations engaged in international trade and production frequently encounter:</p>
                <ul className={`mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 ${isMobile ? "space-y-1" : ""}`}>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Inefficient supplier and distributor networks</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Unclear cost allocation within logistics chains</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Poor contract structuring in cross-border transactions</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Weak inventory and demand forecasting</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Limited visibility across supply chain operations</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Exposure to regulatory and customs risks</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Overdependence on individual intermediaries</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Expansion into new markets without logistical readiness</li>
                </ul>
                <p className={`mt-4 font-sans font-normal text-zinc-400 italic ${isMobile ? "text-[10px]" : "text-sm md:text-base"}`}>These issues are systemic and require structural intervention rather than temporary correction.</p>
            </div>
        </div>
    );
});

ThirdSectionText3.displayName = 'ThirdSectionText3';

