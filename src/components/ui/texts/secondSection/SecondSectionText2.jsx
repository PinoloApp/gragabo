import { forwardRef } from 'react';

export const SecondSectionText2 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-zinc-800">
                Executive Summary
            </h2>
            <div className="text-lg md:text-xl font-sans mt-4 text-zinc-500 font-medium space-y-4">
                <p>
                    As companies expand, financial complexity, legal exposure, and capital allocation risks increase significantly.
                </p>

                <p>
                    Without appropriate financial governance, legal structuring, and capital discipline, growth often leads to reduced profitability, regulatory vulnerability, and long-term instability.
                </p>

                <p>
                    Gragabo supports organizations in building transparent financial systems, secure legal frameworks, and disciplined capital structures that protect enterprise value and enable sustainable expansion.
                </p>
            </div>
        </div>
    );
});

SecondSectionText2.displayName = 'SecondSectionText2';

