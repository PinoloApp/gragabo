import { forwardRef } from 'react';

export const SecondSectionText2 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[20%] left-[10%] -translate-x-1/2 w-[50vw] text-left"
                : "absolute top-[25%] left-[10%] text-left w-[30%]"}
        >
            <h2 className={`font-sans font-bold text-zinc-800 ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Executive Summary
            </h2>
            <div className={`font-sans mt-4 text-zinc-500 font-medium space-y-4 border-l-4 border-[#0A6B3B]/30 pl-5 ${isMobile ? "text-xs space-y-2" : "text-base md:text-lg"}`}>
                <p>
                    As companies expand, financial complexity, legal exposure, and capital allocation risks increase significantly.
                </p>

                <p>
                    Without appropriate financial governance, legal structuring, and capital discipline, growth often leads to reduced profitability, regulatory vulnerability, and long-term instability.
                </p>

                <p>
                    Gragabo supports organizations in building transparent financial systems, secure legal frameworks, and disciplined capital structures that protect enterprise value and enable sustainable expansion.
                </p>
            </div>
        </div>
    );
});

SecondSectionText2.displayName = 'SecondSectionText2';

