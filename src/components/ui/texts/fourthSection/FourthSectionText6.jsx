import { forwardRef } from 'react';

export const FourthSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:right-24 -translate-y-1/2 w-[500px] text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Strategic Design and Brand Architecture
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We strengthen organizational identity and market credibility through:
                <br /><br />

                • Corporate and brand identity systems<br />
                • Digital and interface design<br />
                • Communication and content frameworks<br />
                • User experience optimization<br />
                • Visual governance standards<br />
                • Multi-platform consistency models
                <br /><br />

                Design is treated as a strategic asset rather than a cosmetic element.
            </p>
        </div>
    );
});

FourthSectionText6.displayName = 'FourthSectionText6';

