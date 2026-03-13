import { forwardRef } from 'react';

export const ThirdSectionText6 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[10%] left-[10%] mx-auto w-[50vw] text-left"
                : "absolute top-[20%] left-[10%] w-[80%] md:w-[70%] lg:w-[60%] text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Supply Chain and Logistics Optimization
            </h2>

            <div className="mt-4">
                <p className={`font-sans text-zinc-700 font-semibold ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>We enhance logistics efficiency and cost control through:</p>
                <ul className={`mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 ${isMobile ? "space-y-1" : ""}`}>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />End-to-end supply chain analysis</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Transportation and warehousing optimization</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Cost and margin leakage identification</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Procurement restructuring</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Inventory and demand planning frameworks</li>
                    <li className={`flex items-start gap-3 font-sans text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2 shrink-0" />Operational performance monitoring systems</li>
                </ul>
                <p className={`mt-4 font-sans font-normal ${isMobile ? "text-[10px] text-black italic" : "text-sm md:text-base text-zinc-500 italic"}`}>The result is reduced cost volatility and improved delivery reliability.</p>
            </div>
        </div>
    );
});

ThirdSectionText6.displayName = 'ThirdSectionText6';

