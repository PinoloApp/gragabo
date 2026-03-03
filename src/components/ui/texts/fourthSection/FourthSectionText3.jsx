import { forwardRef } from 'react';

export const FourthSectionText3 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-1/2 left-20 md:left-24 -translate-y-1/2 w-[600px] text-left"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Structural Challenges in Digital and Creative Operations
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Organizations typically seek support in this domain when experiencing:
                <br /><br />

                • Disconnected information systems and workflows<br />
                • Inefficient use of digital tools and platforms<br />
                • Inconsistent visual and communication standards<br />
                • Weak digital presence and customer engagement<br />
                • Limited data utilization for strategic decisions<br />
                • Low return on technology investments<br />
                • Lack of structured innovation processes<br />
                • Absence of measurable impact frameworks
                <br /><br />

                These limitations constrain competitiveness and long-term relevance.
            </p>
        </div>
    );
});

FourthSectionText3.displayName = 'FourthSectionText3';
