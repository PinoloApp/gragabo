import { forwardRef } from 'react';

export const ThirdSectionText11 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[32%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Phase Three: Implementation and Monitoring
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Active support during supplier negotiations, process integration, and operational stabilization.
            </p>
        </div>
    );
});

ThirdSectionText11.displayName = 'ThirdSectionText11';

