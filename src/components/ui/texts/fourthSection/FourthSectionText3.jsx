import { forwardRef } from 'react';

export const FourthSectionText3 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:left-24 -translate-y-1/2 w-[600px] text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Structural Challenges in Digital and Creative Operations
            </h2>

            <div className="mt-4">
                    <p className="text-base md:text-lg font-sans text-zinc-700 font-semibold">Organizations typically seek support in this domain when experiencing:</p>
                    <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Disconnected information systems and workflows</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Inefficient use of digital tools and platforms</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Inconsistent visual and communication standards</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Weak digital presence and customer engagement</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Limited data utilization for strategic decisions</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Low return on technology investments</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Lack of structured innovation processes</li>
                        <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Absence of measurable impact frameworks</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">These limitations constrain competitiveness and long-term relevance.</p>
                </div>
        </div>
    );
});

FourthSectionText3.displayName = 'FourthSectionText3';
