import { forwardRef } from 'react';

export const FourthSectionText9 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-zinc-800">
                Engagement Methodology
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-500 font-medium">
                Our technology and design advisory engagements follow a structured, outcome-oriented process.
            </p>
        </div>
    );
});

FourthSectionText9.displayName = 'FourthSectionText9';