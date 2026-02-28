import React, { forwardRef } from 'react';

export const HoverInstructionText = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center w-[90%] md:w-[60%] flex flex-col items-center justify-center gap-4"
        >
            <div className="flex items-center gap-3 bg-zinc-900/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                </div>
                <p className="text-sm md:text-base font-sans font-medium text-white tracking-wide uppercase">
                    Hover the dots to explore
                </p>
            </div>
        </div>
    );
});

HoverInstructionText.displayName = 'HoverInstructionText';
