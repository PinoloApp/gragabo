import { forwardRef } from 'react';

export const FourthSectionText10 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm text-center"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-zinc-800">
                <span className="text-[#0A6B3B] font-normal text-xl block mb-2">Phase One:</span>Digital and Organizational Diagnostics
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-500 font-medium">
                Comprehensive assessment of existing technological systems, digital processes, design standards, and impact mechanisms.
            </p>
        </div>
    );
});

FourthSectionText10.displayName = 'FourthSectionText10';

