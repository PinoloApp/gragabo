import { forwardRef } from 'react';

export const FourthSectionText4 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[20%] left-[10%] mx-auto w-[55vw] text-left"
                : "absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Our Integrated Solutions
            </h2>

            <p className={`font-sans mt-4 text-zinc-600 leading-relaxed ${isMobile ? "text-xs text-left" : "text-base md:text-lg"}`}>
                Gragabo delivers coordinated solutions across three strategic dimensions.
                <br /><br />
            </p>
        </div>
    );
});

FourthSectionText4.displayName = 'FourthSectionText4';
