import { forwardRef } from 'react';

export const SecondSectionText8 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[30%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white">
                Engagement Methodology
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-300 italic">
                Our financial and legal advisory engagements follow a structured, transparent process.
                <br /><br />

                Phase One: Financial and Legal Diagnostics
                <br /><br />

                Comprehensive analysis of financial performance, legal exposure, and capital structure.
            </p>
        </div>
    );
});

SecondSectionText8.displayName = 'SecondSectionText8';

