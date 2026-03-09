import { forwardRef } from 'react';

export const ThirdSectionText5 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[20%] left-[10%] w-[80%] md:w-[70%] lg:w-[60%] text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                International Trade Structuring
            </h2>

            <div className="mt-4">
                <p className="text-base md:text-lg font-sans text-zinc-700 font-semibold">We design and optimize commercial frameworks for import and export operations through:</p>
                <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Supplier and distributor mapping</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Cross-border contract structuring</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Pricing and margin optimization</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Regulatory and customs alignment</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Trade documentation systems</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Risk mitigation in international transactions</li>
                </ul>
                <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">Our objective is to create predictable, secure, and scalable trade operations.</p>
            </div>
        </div>
    );
});

ThirdSectionText5.displayName = 'ThirdSectionText5';

