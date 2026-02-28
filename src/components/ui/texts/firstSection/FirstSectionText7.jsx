import { forwardRef } from 'react';

export const FirstSectionText7 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Professional Experience and Case Evidence
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Gragabo has successfully supported regulated production companies, export-oriented manufacturers, and internationally active enterprises in building sustainable operational and governance frameworks.
                <br /><br />

                Our engagements have resulted in improved profitability, enhanced organizational stability, and strengthened market positioning.
            </p>
        </div>
    );
});

FirstSectionText7.displayName = 'FirstSectionText7';