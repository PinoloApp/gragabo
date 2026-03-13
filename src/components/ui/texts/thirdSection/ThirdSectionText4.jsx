import { forwardRef } from 'react';

export const ThirdSectionText4 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[15%] left-[10%] mx-auto w-[55vw] text-left"
                : "absolute top-1/2 left-[10%] md:right-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Our Integrated Solutions
            </h2>

            <p className={`font-sans mt-4 text-zinc-700 leading-relaxed ${isMobile ? "text-xs text-left" : ""}`}>
                Gragabo delivers structured solutions across three core operational dimensions.
            </p>
        </div>
    );
});

ThirdSectionText4.displayName = 'ThirdSectionText4';

