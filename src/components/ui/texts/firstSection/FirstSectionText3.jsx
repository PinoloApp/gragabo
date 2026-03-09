import { forwardRef } from 'react';

export const FirstSectionText3 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[55%] right-8 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                Business Challenges We Address
            </h2>

            <div className="mt-4">
                <p className="text-base md:text-lg font-sans text-zinc-700 font-semibold">Companies typically seek our support when facing one or more of the following challenges:</p>
                <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4">
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Uncontrolled operational costs and inefficient processes</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Lack of clear strategic direction</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Weak management and reporting structures</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Limited scalability and institutional maturity</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Exposure to regulatory and governance risks</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Founder or executive overload</li>
                    <li className="flex items-start gap-3 text-base md:text-lg font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Inconsistent market positioning and expansion strategy</li>
                </ul>
                <p className="mt-4 text-sm md:text-base font-sans font-normal text-zinc-400 italic">These issues are rarely isolated. They are symptoms of insufficient organizational architecture.</p>
            </div>
        </div>
    );
});

FirstSectionText3.displayName = 'FirstSectionText3';
