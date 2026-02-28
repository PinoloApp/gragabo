import { forwardRef } from 'react';

export const FirstSectionText3 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 right-8 md:right-24 -translate-y-1/2 max-w-sm text-center"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Business Challenges We Address
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Companies typically seek our support when facing one or more of the following challenges:
                <br /><br />

                • Uncontrolled operational costs and inefficient processes<br />
                • Lack of clear strategic direction<br />
                • Weak management and reporting structures<br />
                • Limited scalability and institutional maturity<br />
                • Exposure to regulatory and governance risks<br />
                • Founder or executive overload<br />
                • Inconsistent market positioning and expansion strategy
                <br /><br />

                These issues are rarely isolated. They are symptoms of insufficient organizational architecture.
            </p>
        </div>
    );
});

FirstSectionText3.displayName = 'FirstSectionText3';
