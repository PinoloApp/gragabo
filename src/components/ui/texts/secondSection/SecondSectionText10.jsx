import { forwardRef } from 'react';

export const SecondSectionText10 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white">
                Phase Three: Ongoing Advisory and Monitoring
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-300 italic">
                Continuous support for compliance, reporting, and capital management.
            </p>
        </div>
    );
});

SecondSectionText10.displayName = 'SecondSectionText10';