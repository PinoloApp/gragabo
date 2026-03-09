import { forwardRef } from 'react';

export const SecondSectionText9 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[30%]"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-white">
                <span className="text-[#0A6B3B] font-normal text-lg block mb-2">Phase Two:</span>Structural Optimization
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-400 font-medium">
                Design and implementation of integrated financial, legal, and governance frameworks.
            </p>
        </div>
    );
});

SecondSectionText9.displayName = 'SecondSectionText9';