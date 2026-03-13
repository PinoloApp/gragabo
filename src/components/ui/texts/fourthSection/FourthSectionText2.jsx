import { forwardRef } from 'react';

export const FourthSectionText2 = forwardRef(({ isMobile, ...props }, ref) => {
    return (
        <div className={`absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center pointer-events-none ${isMobile ? "w-[80vw]" : "w-full"}`}>
            <div
                ref={ref}
                className={`text-center ${isMobile ? "w-full" : "w-[60%]"}`}
            >
                <h2 className={`font-sans font-bold text-zinc-800 ${isMobile ? "text-xl" : "text-2xl md:text-3xl"}`}>
                    Executive Summary
                </h2>
                <div className={`font-sans mt-4 text-zinc-500 font-medium space-y-4 ${isMobile ? "text-xs" : "text-base md:text-lg"}`}>
                    <p>
                    In contemporary business environments, technological infrastructure, digital systems, and strategic design are central determinants of operational efficiency, market positioning, and organizational credibility.
                    </p>

                    <p>
                    Many companies operate with fragmented digital tools, inconsistent brand identities, and underutilized data systems, resulting in reduced productivity, weak customer engagement, and limited strategic insight.
                    </p>

                    <p>
                    Gragabo supports organizations in designing integrated digital, technological, and creative systems that enhance performance, strengthen brand authority, and generate measurable business and social impact.
                    </p>
                </div>
            </div>
        </div>
    );
});

FourthSectionText2.displayName = 'FourthSectionText2';
