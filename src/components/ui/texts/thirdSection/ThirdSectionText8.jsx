import { forwardRef } from 'react';

export const ThirdSectionText8 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-zinc-800">
                Professional Experience and Operational Evidence
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-600 leading-relaxed border-t-2 border-[#0A6B3B]/20 pt-4">
                Gragabo has supported production and trade-based businesses in establishing structured supplier networks, implementing regulatory-compliant systems, and optimizing cross-border commercial operations.
                <br /><br />

                Our engagements have contributed to first-year profitability, improved supply chain transparency, and strengthened export readiness.
            </p>
        </div>
    );
});

ThirdSectionText8.displayName = 'ThirdSectionText8';

