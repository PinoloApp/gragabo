import { forwardRef } from 'react';

export const SecondSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Capital Strategy and Investment Readiness
            </h2>

            <div className="mt-4">
                    <p className="text-lg md:text-xl font-sans text-zinc-700 font-semibold">We prepare organizations for disciplined growth by establishing:</p>
                    <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Capital allocation frameworks</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Debt and equity structuring models</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Investment readiness documentation</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Financial governance policies</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Expansion financing strategies</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">This enables sustainable financing without loss of strategic control.</p>
                </div>
        </div>
    );
});

SecondSectionText6.displayName = 'SecondSectionText6';

