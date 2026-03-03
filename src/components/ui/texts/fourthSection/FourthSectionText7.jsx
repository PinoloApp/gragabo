import { forwardRef } from 'react';

export const FourthSectionText7 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 max-w-sm text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Innovation and Impact Development
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We enable sustainable innovation and impact through:
                <br /><br />

                • Digital transformation roadmaps<br />
                • Innovation management systems<br />
                • Social and environmental impact frameworks<br />
                • Performance and sustainability reporting<br />
                • Stakeholder engagement platforms<br />
                • Impact measurement methodologies
                <br /><br />

                This ensures alignment between business growth and societal responsibility.
            </p>
        </div>
    );
});

FourthSectionText7.displayName = 'FourthSectionText7';

