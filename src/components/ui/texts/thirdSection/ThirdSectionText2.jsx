import { forwardRef } from 'react';

export const ThirdSectionText2 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[70%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-zinc-800">
                Executive Summary
            </h2>
            <div className="text-lg md:text-xl font-sans mt-4 text-zinc-500 font-medium space-y-4">
                <p>
                    In global trade and industrial production, profitability is determined not only by product quality but by supply chain precision, contractual security, cost control, and operational discipline.
                </p>

                <p>
                    Many companies involved in import, export, manufacturing, and distribution experience hidden inefficiencies within logistics networks, supplier structures, and industrial workflows.
                </p>

                <p>
                    These inefficiencies gradually erode margins, increase exposure to disruption, and limit scalability in international markets.
                </p>

                <p>
                    Gragabo provides integrated trade advisory, logistics optimization, and industrial systems structuring designed to improve operational efficiency, protect commercial interests, and enable stable cross - border growth.
                </p>
            </div>
        </div>
    );
});

ThirdSectionText2.displayName = 'ThirdSectionText2';

