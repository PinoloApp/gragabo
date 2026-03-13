import { forwardRef } from 'react';

export const SecondSectionText7 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[50%] left-0 right-0 mx-auto w-[85vw] text-center"
                : "absolute top-[25%] left-[10%] text-left w-[30%]"}
        >
            <h2 className={`font-sans font-black ${isMobile ? "text-lg text-black" : "text-2xl md:text-3xl text-white"}`}>
                Professional Experience and Case Evidence
            </h2>

            <p className={`font-sans mt-4 leading-relaxed border-t-2 border-[#0A6B3B]/20 pt-4 ${isMobile ? "text-xs text-zinc-700" : "text-base md:text-lg text-zinc-300"}`}>
                Gragabo has supported regulated production businesses and international operations in establishing compliant financial systems, robust legal structures, and effective capital management frameworks.
                <br /><br />

                These engagements have resulted in reduced financial exposure, improved investor confidence, and controlled expansion.
            </p>
        </div>
    );
});

SecondSectionText7.displayName = 'SecondSectionText7';

