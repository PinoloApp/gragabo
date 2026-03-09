import { forwardRef } from 'react';

export const FirstSectionText4 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Our Strategic and Operational Solutions
            </h2>

            <div className="mt-4">
                    <p className="text-base md:text-lg font-sans text-zinc-700 font-semibold">We assist clients in defining clear, data-driven growth strategies through:</p>
                    <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Market and competitive analysis</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Revenue model and pricing optimization</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Portfolio and expansion planning</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Export and internationalization readiness</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Investment and development roadmaps</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">Our strategic frameworks are designed for practical execution and measurable performance.</p>
                </div>
        </div>
    );
});

FirstSectionText4.displayName = 'FirstSectionText4';