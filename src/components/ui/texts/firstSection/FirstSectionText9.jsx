import { forwardRef } from 'react';

export const FirstSectionText9 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-zinc-800">
                <span className="text-[#0A6B3B] font-normal text-lg block mb-2">Phase Two:</span>Strategic and Structural Architecture
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-500 font-medium">
                Based on diagnostic findings, we design integrated transformation frameworks covering strategy, operations, and governance.
            </p>
        </div>
    );
});

FirstSectionText9.displayName = 'FirstSectionText9';