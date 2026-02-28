import { forwardRef } from 'react';

export const FirstSectionText10 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[26%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Phase Three: Implementation and Performance Support
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We actively support execution through restructuring, system integration, and continuous performance monitoring.
            </p>
        </div>
    );
});

FirstSectionText10.displayName = 'FirstSectionText10';