import { forwardRef } from 'react';

export const FirstSectionText4 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Our Strategic and Operational Solutions
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Gragabo delivers integrated solutions across three core dimensions.
                <br /><br />

                Strategic Development and Market Positioning
                <br /><br />

                We assist clients in defining clear, data-driven growth strategies through:
                <br /><br />

                • Market and competitive analysis<br />
                • Revenue model and pricing optimization<br />
                • Portfolio and expansion planning<br />
                • Export and internationalization readiness<br />
                • Investment and development roadmaps
                <br /><br />

                Our strategic frameworks are designed for practical execution and measurable performance.
            </p>
        </div>
    );
});

FirstSectionText4.displayName = 'FirstSectionText4';