import { forwardRef } from 'react';

export const ThirdSectionText8 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[16%] right-8 md:right-24 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Professional Experience and Operational Evidence
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-700 leading-relaxed border-t-2 border-[#0A6B3B]/20 pt-4">
                Gragabo has supported production and trade-based businesses in establishing structured supplier networks, implementing regulatory-compliant systems, and optimizing cross-border commercial operations.
                <br /><br />

                Our engagements have contributed to first-year profitability, improved supply chain transparency, and strengthened export readiness.
            </p>
        </div>
    );
});

ThirdSectionText8.displayName = 'ThirdSectionText8';

