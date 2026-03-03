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

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We design secure legal architectures through:
                <br /><br />

                • Corporate and shareholder structuring<br />
                • Liability and asset protection frameworks<br />
                • Regulatory compliance systems<br />
                • Contractual risk management<br />
                • International legal coordination
                <br /><br />
                Our structures support operational security and long-term continuity.
            </p>
        </div>
    );
});

SecondSectionText5.displayName = 'SecondSectionText5';

