import { forwardRef } from 'react';

export const FourthSectionText8 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Professional Experience and Implementation Evidence
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Gragabo has supported organizations in implementing digital platforms, designing corporate identity systems, and establishing innovation and impact management frameworks.
                <br /><br />

                These initiatives have resulted in improved operational transparency, stronger market positioning, and enhanced stakeholder trust.
            </p>
        </div>
    );
});

FourthSectionText8.displayName = 'FourthSectionText8';

