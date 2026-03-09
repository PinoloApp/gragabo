import { forwardRef } from 'react';

export const ThirdSectionText11 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[32%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                <span className="text-[#0A6B3B] font-normal text-lg block mb-2">Phase Three:</span>Implementation and Monitoring
            </h2>

            <p className="text-base md:text-lg font-sans mt-4 text-zinc-700 font-medium">
                Active support during supplier negotiations, process integration, and operational stabilization.
            </p>
        </div>
    );
});

ThirdSectionText11.displayName = 'ThirdSectionText11';

