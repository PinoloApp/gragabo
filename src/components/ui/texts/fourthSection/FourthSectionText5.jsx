import { forwardRef } from 'react';

export const FourthSectionText5 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 w-[500px] text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Digital Infrastructure and Technology Systems
            </h2>

            <div className="mt-4">
                    <p className="text-lg md:text-xl font-sans text-zinc-700 font-semibold">We design and implement scalable digital environments through:</p>
                    <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Business process automation</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Enterprise information systems integration</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Data management and analytics frameworks</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Cloud and platform optimization</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Cybersecurity and access governance</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Digital workflow standardization</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">Our objective is to create secure, efficient, and interoperable technological ecosystems.</p>
                </div>
        </div>
    );
});

FourthSectionText5.displayName = 'FourthSectionText5';
