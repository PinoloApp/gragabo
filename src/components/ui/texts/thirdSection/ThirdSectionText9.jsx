import { forwardRef } from 'react';

export const ThirdSectionText9 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[16%] right-8 md:right-24 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Engagement Methodology
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-700 font-medium">
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

