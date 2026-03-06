import { forwardRef } from 'react';

export const ThirdSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Supply Chain and Logistics Optimization
            </h2>

            <div className="mt-4">
                    <p className="text-lg md:text-xl font-sans text-zinc-700 font-semibold">We enhance logistics efficiency and cost control through:</p>
                    <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />End-to-end supply chain analysis</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Transportation and warehousing optimization</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Cost and margin leakage identification</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Procurement restructuring</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Inventory and demand planning frameworks</li>
                        <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Operational performance monitoring systems</li>
                    </ul>
                    <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">The result is reduced cost volatility and improved delivery reliability.</p>
                </div>
        </div>
    );
});

ThirdSectionText6.displayName = 'ThirdSectionText6';

