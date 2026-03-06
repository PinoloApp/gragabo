import { forwardRef } from 'react';

export const FirstSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Corporate Governance and Institutional Development
            </h2>

            <div className="mt-4">
                <p className="text-lg md:text-xl font-sans text-zinc-700 font-semibold">We establish robust governance systems through:</p>
                <ul className="mt-3 space-y-2 border-l-4 border-[#0A6B3B]/30 pl-4 mx-auto w-fit text-left">
                    <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Organizational and leadership structuring</li>
                    <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Decision making and accountability models</li>
                    <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Risk management and compliance systems</li>
                    <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Internal reporting and audit procedures</li>
                    <li className="flex items-start gap-3 text-lg md:text-xl font-sans text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#0A6B3B] mt-2.5 shrink-0" />Ownership and board governance frameworks</li>
                </ul>
            </div>
        </div>
    );
});

FirstSectionText6.displayName = 'FirstSectionText6';