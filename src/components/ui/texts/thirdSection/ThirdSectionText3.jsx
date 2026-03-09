import { forwardRef } from 'react';

export const ThirdSectionText3 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[20%] left-[10%] w-[80%] md:w-[70%] lg:w-[60%] text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Structural Challenges in Trade and Industrial Operations
            </h2>

            <div className="mt-4">
                <p className="text-base md:text-lg font-sans text-zinc-700 font-semibold">Organizations engaged in international trade and production frequently encounter:</p>
                <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Inefficient supplier and distributor networks</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Unclear cost allocation within logistics chains</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Poor contract structuring in cross-border transactions</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Weak inventory and demand forecasting</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Limited visibility across supply chain operations</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Exposure to regulatory and customs risks</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Overdependence on individual intermediaries</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Expansion into new markets without logistical readiness</li>
                </ul>
                <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">These issues are systemic and require structural intervention rather than temporary correction.</p>
            </div>
        </div>
    );
});

ThirdSectionText3.displayName = 'ThirdSectionText3';

