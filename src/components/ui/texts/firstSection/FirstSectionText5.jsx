import { forwardRef } from 'react';

export const FirstSectionText5 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Operational Excellence and Process Management
            </h2>

            <div className="mt-4">
                <p className="text-base md:text-lg font-sans text-zinc-700 font-semibold">We strengthen operational infrastructure by implementing:</p>
                <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />End-to-end process optimization</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Supply chain and logistics restructuring</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Cost management systems</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Quality and certification alignment</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Performance monitoring frameworks</li>
                </ul>
                <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">The result is increased efficiency, transparency, and operational reliability.</p>
            </div>
        </div>
    );
});

FirstSectionText5.displayName = 'FirstSectionText5';