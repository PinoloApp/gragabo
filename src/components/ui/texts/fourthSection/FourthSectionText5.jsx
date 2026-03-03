import { forwardRef } from 'react';

export const FourthSectionText5 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 w-[500px] text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Digital Infrastructure and Technology Systems
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We design and implement scalable digital environments through:
                <br /><br />

                • Business process automation<br />
                • Enterprise information systems integration<br />
                • Data management and analytics frameworks<br />
                • Cloud and platform optimization<br />
                • Cybersecurity and access governance<br />
                • Digital workflow standardization
                <br /><br />

                Our objective is to create secure, efficient, and interoperable technological ecosystems.
            </p>
        </div>
    );
});

FourthSectionText5.displayName = 'FourthSectionText5';
