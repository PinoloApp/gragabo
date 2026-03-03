import { forwardRef } from 'react';

export const FourthSectionText12 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm text-center"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Phase Three: Implementation and Performance Optimization
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Active support during system deployment, user adoption, and performance measurement.
            </p>
        </div>
    );
});

FourthSectionText12.displayName = 'FourthSectionText12';
