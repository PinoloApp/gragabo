import { forwardRef } from 'react';

export const FourthSectionText10 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[30%] left-0 right-0 mx-auto w-[85vw] text-center"
                : "absolute top-[40%] left-0 right-0 mx-auto text-center w-[30%]"}
        >
            <h2 className={`font-sans font-black text-zinc-800 ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                <span className={`text-[#0A6B3B] font-normal block mb-2 ${isMobile ? "text-base" : "text-lg"}`}>Phase One:</span>Digital and Organizational Diagnostics
            </h2>

            <p className={`font-sans mt-4 font-medium text-zinc-500 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                Comprehensive assessment of existing technological systems, digital processes, design standards, and impact mechanisms.
            </p>
        </div>
    );
});

FourthSectionText10.displayName = 'FourthSectionText10';