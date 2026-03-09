import { forwardRef } from 'react';

export const SecondSectionText1 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h1 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-zinc-900 leading-tight">
                Finance, Legal & Capital
            </h1>
            <p className="text-base md:text-lg font-sans mt-4 font-light text-zinc-600">
                Financial Advisory, Legal Structuring, and Capital Management for Institutional Growth
            </p>
        </div>
    );
});

SecondSectionText1.displayName = 'SecondSectionText1';

