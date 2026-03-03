import { forwardRef } from 'react';

export const SecondSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Capital Strategy and Investment Readiness
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We prepare organizations for disciplined growth by establishing:
                <br /><br />

                • Capital allocation frameworks<br />
                • Debt and equity structuring models<br />
                • Investment readiness documentation<br />
                • Financial governance policies<br />
                • Expansion financing strategies
                <br /><br />

                This enables sustainable financing without loss of strategic control.
            </p>
        </div>
    );
});

SecondSectionText6.displayName = 'SecondSectionText6';

