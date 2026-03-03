import { forwardRef } from 'react';

export const ThirdSectionText4 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Our Integrated Solutions
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Gragabo delivers structured solutions across three core operational dimensions.
            </p>
        </div>
    );
});

ThirdSectionText4.displayName = 'ThirdSectionText4';

