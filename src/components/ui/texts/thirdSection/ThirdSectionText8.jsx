import { forwardRef } from 'react';

export const ThirdSectionText8 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[20%] right-[5%] mx-auto w-[50vw] text-left"
                : "absolute top-[16%] right-8 md:right-24 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Professional Experience and Operational Evidence
            </h2>

            <p className={`font-sans mt-4 text-black leading-relaxed border-t-2 border-[#0A6B3B]/20 pt-4 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                Gragabo has supported production and trade-based businesses in establishing structured supplier networks, implementing regulatory-compliant systems, and optimizing cross-border commercial operations.
                <br /><br />

                Our engagements have contributed to first-year profitability, improved supply chain transparency, and strengthened export readiness.
            </p>
        </div>
    );
});

ThirdSectionText8.displayName = 'ThirdSectionText8';

