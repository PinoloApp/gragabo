import { forwardRef } from 'react';

export const FourthSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 w-[500px] text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Strategic Design and Brand Architecture
            </h2>

            <div className="mt-4">
                    <p className="text-base md:text-lg font-sans text-zinc-700 font-semibold">We strengthen organizational identity and market credibility through:</p>
                    <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Corporate and brand identity systems</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Digital and interface design</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Communication and content frameworks</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />User experience optimization</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Visual governance standards</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Multi-platform consistency models</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">Design is treated as a strategic asset rather than a cosmetic element.</p>
                </div>
        </div>
    );
});

FourthSectionText6.displayName = 'FourthSectionText6';

