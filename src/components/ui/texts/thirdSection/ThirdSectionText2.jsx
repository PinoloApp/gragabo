import { forwardRef } from 'react';

export const ThirdSectionText2 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={isMobile
                ? "absolute top-[10%] left-0 right-0 mx-auto w-[85vw] text-center"
                : "absolute top-[20%] left-[10%] text-left w-[50%]"}
        >
            <h2 className={`font-sans font-black text-black ${isMobile ? "text-lg" : "text-2xl md:text-3xl"}`}>
                Executive Summary
            </h2>
            <div className={`text-base md:text-lg font-sans mt-4 text-zinc-700 font-medium space-y-4 border-l-4 border-[#BEA05D]/30 pl-5 ${isMobile ? "text-xs space-y-2 text-left" : ""}`}>
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



