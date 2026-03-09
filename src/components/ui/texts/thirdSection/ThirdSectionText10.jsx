import { forwardRef } from 'react';

export const ThirdSectionText10 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[32%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                <span className="text-[#0A6B3B] font-normal text-lg block mb-2">Phase Two:</span>Structural Optimization Framework
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-700 font-medium">
                Design of integrated trade, logistics, and industrial restructuring models.
            </p>
        </div>
    );
});

ThirdSectionText10.displayName = 'ThirdSectionText10';

