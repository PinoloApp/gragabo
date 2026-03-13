import { forwardRef } from 'react';

export const FirstSectionText7 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[22%] left-0 right-0 mx-auto w-[80vw] -translate-y-1/2 flex flex-col items-center justify-center text-center"
                : "absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-zinc-800 ${isMobile ? "text-xl text-center" : "text-2xl md:text-3xl"}`}>
                Professional Experience and Case Evidence
            </h2>

            <p className={`font-sans mt-4 text-zinc-600 leading-relaxed border-t-2 border-[#0A6B3B]/20 pt-4 ${isMobile ? "text-xs text-center" : "text-base md:text-lg"}`}>
                Gragabo has successfully supported regulated production companies, export-oriented manufacturers, and internationally active enterprises in building sustainable operational and governance frameworks.
                <br /><br />

                Our engagements have resulted in improved profitability, enhanced organizational stability, and strengthened market positioning.
            </p>
        </div>
    );
});

FirstSectionText7.displayName = 'FirstSectionText7';