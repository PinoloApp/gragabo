import { forwardRef } from 'react';

export const FirstSectionText1 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
            <h1 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-zinc-900 leading-tight">
                Business, Strategy & Governance
            </h1>
            <p className="text-base md:text-lg font-sans mt-4 font-light text-zinc-600">
                Integrated Business Strategy, Operational Excellence, and Corporate Governance Advisory
            </p>
        </div>
    );
});

FirstSectionText1.displayName = 'FirstSectionText1';
