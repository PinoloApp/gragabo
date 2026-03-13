import { forwardRef } from 'react';

export const FirstSectionText8 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[20%] left-0 right-0 mx-auto w-[80vw] -translate-y-1/2 flex flex-col items-center justify-center text-center"
                : "absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-zinc-800 ${isMobile ? "text-xl text-center" : "text-2xl md:text-3xl"}`}>
                <span className={`text-[#0A6B3B] font-normal block mb-2 ${isMobile ? "text-xs" : "text-lg"}`}>Phase One:</span>Comprehensive Business Diagnostics
            </h2>

            <p className={`font-sans mt-4 text-zinc-500 font-medium ${isMobile ? "text-xs text-center" : "text-base md:text-lg"}`}>
                We conduct a detailed assessment of financial performance, operations, governance systems, and market position, resulting in a formal executive diagnostic report.
            </p>
        </div>
    );
});

FirstSectionText8.displayName = 'FirstSectionText8';