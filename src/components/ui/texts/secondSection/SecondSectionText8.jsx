import { forwardRef } from 'react';

export const SecondSectionText8 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[60%] left-0 right-0 mx-auto w-[85vw] text-center"
                : "absolute top-[40%] left-0 right-0 mx-auto text-center w-[30%]"}
        >
            <h2 className={`font-sans font-black ${isMobile ? "text-xl text-black" : "text-2xl md:text-3xl text-white"}`}>
                <span className={`text-[#0A6B3B] font-normal block mb-2 ${isMobile ? "text-base" : "text-lg"}`}>Phase One:</span>Financial and Legal Diagnostics
            </h2>

            <p className={`font-sans mt-4 font-medium ${isMobile ? "text-xs text-zinc-700" : "text-base md:text-lg text-zinc-300"}`}>
                Comprehensive analysis of financial performance, legal exposure, and capital structure.
            </p>
        </div>
    );
});

SecondSectionText8.displayName = 'SecondSectionText8';
