import { forwardRef } from 'react';

export const FirstSectionText2 = forwardRef((props, ref) => {
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
                    Many growing companies encounter a critical turning point where increased revenue is no longer matched by organizational stability, operational efficiency, or management clarity.
                </p>

                <p>
                    At this stage, businesses often experience rising costs, declining margins, fragmented decision making, and increasing dependence on individual leaders rather than institutional systems.
                </p>

                <p>
                    Gragabo supports organizations in transforming these structural weaknesses into sustainable competitive advantages through integrated business strategy, operational optimization, and corporate governance frameworks.
                </p>

                <p>
                    Our objective is to establish scalable, transparent, and resilient enterprises capable of long-term growth in domestic and international markets.
                </p>
            </div>
        </div>
    );
});

FirstSectionText2.displayName = 'FirstSectionText2';
