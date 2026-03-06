import { forwardRef } from 'react';

export const ThirdSectionText9 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-zinc-800">
                Engagement Methodology
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-500 font-medium">
                Our advisory process is structured and execution-oriented.
                <br /><br />

                Trade and Operations Diagnostics
                <br /><br />

                Comprehensive evaluation of supply chain, logistics costs, contractual exposure, and operational systems.
            </p>
        </div>
    );
});

ThirdSectionText9.displayName = 'ThirdSectionText9';

