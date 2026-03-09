import { forwardRef } from 'react';

export const FirstSectionText2 = forwardRef((props, ref) => {
    return (
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none">
            <div
                ref={ref}
                className="text-center w-[70%]"
            >
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-zinc-800">
                    Executive Summary
                </h2>
                <div className="text-base md:text-lg font-sans mt-4 text-zinc-500 font-medium space-y-4">
                    <p>
                        Many growing companies encounter a critical turning point where increased revenue is no longer matched by organizational stability, operational efficiency, or management clarity.
                    </p>

                    <p>
                        At this stage, businesses often experience rising costs, declining margins, fragmented decision making, and increasing dependence on individual leaders rather than institutional systems.
                    </p>

                    <p>
                        Gragabo supports organizations in transforming these structural weaknesses into sustainable competitive advantages through integrated business strategy, operational optimization, and corporate governance frameworks.
                    </p>
                </div>
            </div>
        </div>
    );
});

FirstSectionText2.displayName = 'FirstSectionText2';
