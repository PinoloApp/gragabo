import { forwardRef } from 'react';

export const ThirdSectionText7 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Industrial Systems and Production Advisory
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                For manufacturing and regulated production environments, we provide:
                <br /><br />

                • Production process evaluation<br />
                • Quality and certification alignment<br />
                • Supplier qualification systems<br />
                • Operational workflow restructuring<br />
                • Industrial cost management models<br />
                • Compliance integration
                <br /><br />

                This ensures sustainable production efficiency and regulatory security.
            </p>
        </div>
    );
});

ThirdSectionText7.displayName = 'ThirdSectionText7';

