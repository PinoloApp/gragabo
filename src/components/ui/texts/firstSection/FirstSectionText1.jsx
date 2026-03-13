import { forwardRef } from 'react';

export const FirstSectionText1 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[15%] left-1/2 -translate-x-1/2 w-[80vw] text-center"
                : "absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"}
        >
            <h1 className={`font-sans font-extrabold tracking-tight text-zinc-900 leading-tight ${isMobile ? "text-xl" : "text-2xl md:text-3xl"}`}>
                Business, Strategy & Governance
            </h1>
            <p className={`font-sans mt-4 font-light text-zinc-600 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                Integrated Business Strategy, Operational Excellence, and Corporate Governance Advisory
            </p>
        </div>
    );
});

FirstSectionText1.displayName = 'FirstSectionText1';
