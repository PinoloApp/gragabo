import { forwardRef } from 'react';

export const ThirdSectionText9 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[35%] right-[5%] mx-auto w-[50vw] text-left"
                : "absolute top-[20%] right-8 md:right-24 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Engagement Methodology
            </h2>

            <p className={`font-sans mt-4 text-zinc-700 font-medium ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                Our advisory process is structured and execution-oriented.
                <br /><br />

                Phase One:
                <br /><br />

                Comprehensive evaluation of supply chain, logistics costs, contractual exposure, and operational systems.
            </p>
        </div>
    );
});

ThirdSectionText9.displayName = 'ThirdSectionText9';

