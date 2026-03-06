import { forwardRef } from 'react';

export const SecondSectionText5 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Legal and Corporate Structuring
            </h2>

            <div className="mt-4">
                    <p className="text-lg md:text-xl font-sans text-zinc-700 font-semibold">We design secure legal architectures through:</p>
                    <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Corporate and shareholder structuring</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Liability and asset protection frameworks</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Regulatory compliance systems</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Contractual risk management</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />International legal coordination</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">Our structures support operational security and long-term continuity.</p>
                </div>
        </div>
    );
});

SecondSectionText5.displayName = 'SecondSectionText5';

