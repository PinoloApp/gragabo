import { forwardRef } from 'react';

export const ThirdSectionText1 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
            <h1 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-zinc-900 leading-tight">
                Trade, Logistics & Industrial Systems
            </h1>
            <p className="text-lg md:text-xl font-sans mt-4 font-light text-zinc-600 border-b-2 border-[#0A6B3B] pb-2 inline-block">
                International Trade Structuring, Supply Chain Optimization, and Industrial Operations Advisory
            </p>
        </div>
    );
});

ThirdSectionText1.displayName = 'ThirdSectionText1';

