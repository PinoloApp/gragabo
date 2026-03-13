import { forwardRef } from 'react';

export const ThirdSectionText1 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[15%] left-1/2 -translate-x-1/2 w-[85vw] text-center"
                : "absolute top-[25%] left-[10%] text-left w-[30%]"}
        >
            <h1 className={`font-sans font-extrabold tracking-tight text-zinc-900 leading-tight ${isMobile ? "text-xl" : "text-2xl md:text-3xl"}`}>
                Trade, Logistics & Industrial Systems
            </h1>
            <p className={`font-sans mt-4 font-light text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                International Trade Structuring, Supply Chain Optimization, and Industrial Operations Advisory
            </p>
        </div>
    );
});

ThirdSectionText1.displayName = 'ThirdSectionText1';

