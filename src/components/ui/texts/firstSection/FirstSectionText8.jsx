import { forwardRef } from 'react';

export const FirstSectionText8 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Engagement Methodology
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Every project follows a structured and transparent methodology.
                <br /><br />

                Phase One: Comprehensive Business Diagnostics
                <br /><br />

                We conduct a detailed assessment of financial performance, operations, governance systems, and market position, resulting in a formal executive diagnostic report.
            </p>
        </div>
    );
});

FirstSectionText8.displayName = 'FirstSectionText8';