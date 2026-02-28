import { forwardRef } from 'react';

export const FirstSectionText5 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Operational Excellence and Process Management
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We strengthen operational infrastructure by implementing:
                <br /><br />

                • End-to-end process optimization<br />
                • Supply chain and logistics restructuring<br />
                • Cost management systems<br />
                • Quality and certification alignment<br />
                • Performance monitoring frameworks
                <br /><br />

                The result is increased efficiency, transparency, and operational reliability.
            </p>
        </div>
    );
});

FirstSectionText5.displayName = 'FirstSectionText5';