import { forwardRef } from 'react';

export const ThirdSectionText11 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[45%] right-[5%] mx-auto w-[50vw] text-left"
                : "absolute top-[32%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                <span className={`text-[#0A6B3B] font-normal block mb-2 ${isMobile ? "text-base" : "text-lg"}`}>Phase Three:</span>Implementation and Monitoring
            </h2>

            <p className={`font-sans mt-4 text-zinc-700 font-medium ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                Active support during supplier negotiations, process integration, and operational stabilization.
            </p>
        </div>
    );
});

ThirdSectionText11.displayName = 'ThirdSectionText11';

