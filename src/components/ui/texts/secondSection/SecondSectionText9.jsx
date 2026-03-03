import { forwardRef } from 'react';

export const SecondSectionText9 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white">
                Phase Two: Structural Optimization
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-300 italic">
                Design and implementation of integrated financial, legal, and governance frameworks.
            </p>
        </div>
    );
});

SecondSectionText9.displayName = 'SecondSectionText9';