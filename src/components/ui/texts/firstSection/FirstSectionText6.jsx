import { forwardRef } from 'react';

export const FirstSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Corporate Governance and Institutional Development
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We establish robust governance systems through:
                <br /><br />

                • Organizational and leadership structuring<br />
                • Decision making and accountability models<br />
                • Risk management and compliance systems<br />
                • Internal reporting and audit procedures<br />
                • Ownership and board governance frameworks
                <br /><br />

            </p>
        </div>
    );
});

FirstSectionText6.displayName = 'FirstSectionText6';