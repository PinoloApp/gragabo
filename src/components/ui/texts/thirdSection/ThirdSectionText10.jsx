import { forwardRef } from 'react';

export const ThirdSectionText10 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[32%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Phase Two: Structural Optimization Framework
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Design of integrated trade, logistics, and industrial restructuring models.
            </p>
        </div>
    );
});

ThirdSectionText10.displayName = 'ThirdSectionText10';

