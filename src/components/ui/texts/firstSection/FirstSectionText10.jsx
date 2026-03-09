import { forwardRef } from 'react';

export const FirstSectionText10 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[32%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-zinc-800">
                <span className="text-[#0A6B3B] font-normal text-lg block mb-2">Phase Three:</span>Implementation and Performance Support
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-500 font-medium">
                We actively support execution through restructuring, system integration, and continuous performance monitoring.
            </p>
        </div>
    );
});

FirstSectionText10.displayName = 'FirstSectionText10';