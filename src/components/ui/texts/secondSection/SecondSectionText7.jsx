import { forwardRef } from 'react';

export const SecondSectionText7 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white">
                Professional Experience and Case Evidence
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-300 italic">
                Gragabo has supported regulated production businesses and international operations in establishing compliant financial systems, robust legal structures, and effective capital management frameworks.
                <br /><br />

                These engagements have resulted in reduced financial exposure, improved investor confidence, and controlled expansion.
            </p>
        </div>
    );
});

SecondSectionText7.displayName = 'SecondSectionText7';

