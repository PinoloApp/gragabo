import { forwardRef } from 'react';

export const ThirdSectionText3 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Structural Challenges in Trade and Industrial Operations
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Organizations engaged in international trade and production frequently encounter:
                <br /><br />

                • Inefficient supplier and distributor networks<br />
                • Unclear cost allocation within logistics chains<br />
                • Poor contract structuring in cross-border transactions<br />
                • Weak inventory and demand forecasting<br />
                • Limited visibility across supply chain operations<br />
                • Exposure to regulatory and customs risks<br />
                • Overdependence on individual intermediaries<br />
                • Expansion into new markets without logistical readiness
                <br /><br />

                These issues are systemic and require structural intervention rather than temporary correction.
            </p>
        </div>
    );
});

ThirdSectionText3.displayName = 'ThirdSectionText3';

