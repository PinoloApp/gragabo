import { forwardRef } from 'react';

export const SecondSectionText4 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[25%] left-[10%] text-left w-[30%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Our Integrated Financial and Legal Solutions
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                Financial Performance and Risk Management
                <br /><br />

                We strengthen financial stability through:
                <br /><br />

                • Profitability and margin analysis<br />
                • Cash flow forecasting and optimization<br />
                • Cost structure restructuring<br />
                • Financial reporting systems<br />
                • Risk exposure assessment
                <br /><br />

                This ensures predictable financial performance and informed decision making.
            </p>
        </div>
    );
});

SecondSectionText4.displayName = 'SecondSectionText4';

