import { forwardRef } from 'react';

export const FirstSectionText9 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Phase Two: Strategic and Structural Architecture
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Based on diagnostic findings, we design integrated transformation frameworks covering strategy, operations, and governance.
            </p>
        </div>
    );
});

FirstSectionText9.displayName = 'FirstSectionText9';