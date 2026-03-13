import { forwardRef } from 'react';

export const FourthSectionText9 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[30%] left-[10%] mx-auto w-[55vw] text-left"
                : "absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-zinc-800 ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Engagement Methodology
            </h2>

            <p className={`font-sans mt-4 text-zinc-500 font-medium ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                Our technology and design advisory engagements follow a structured, outcome-oriented process.
            </p>
        </div>
    );
});

FourthSectionText9.displayName = 'FourthSectionText9';