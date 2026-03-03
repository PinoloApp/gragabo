import { forwardRef } from 'react';

export const FourthSectionText11 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm text-center"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Phase Two: Integrated System Architecture
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Design of coordinated digital, creative, and innovation frameworks aligned with strategic objectives.
            </p>
        </div>
    );
});

FourthSectionText11.displayName = 'FourthSectionText11';
