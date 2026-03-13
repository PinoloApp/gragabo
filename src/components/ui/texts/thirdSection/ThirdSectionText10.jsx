import { forwardRef } from 'react';

export const ThirdSectionText10 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[45%] right-[5%] mx-auto w-[50vw] text-left"
                : "absolute top-[32%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                <span className={`text-[#0A6B3B] font-normal block mb-2 ${isMobile ? "text-base" : "text-lg"}`}>Phase Two:</span>Structural Optimization Framework
            </h2>

            <p className={`font-sans mt-4 text-zinc-700 font-medium ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                Design of integrated trade, logistics, and industrial restructuring models.
            </p>
        </div>
    );
});

ThirdSectionText10.displayName = 'ThirdSectionText10';

