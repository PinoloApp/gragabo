import { forwardRef } from 'react';

export const SecondSectionText3 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Financial and Legal Risks We Mitigate
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Clients typically engage Gragabo when encountering:
                <br /><br />

                • Limited financial visibility and cash flow volatility<br />
                • Inefficient cost and tax structures<br />
                • Inadequate corporate and ownership models<br />
                • Exposure to regulatory and contractual risk<br />
                • Insufficient investor readiness<br />
                • Weak capital allocation discipline<br />
                • Cross-border compliance challenges
                <br /><br />
                These risks represent structural vulnerabilities that require systematic intervention.
            </p>
        </div>
    );
});

SecondSectionText3.displayName = 'SecondSectionText3';

