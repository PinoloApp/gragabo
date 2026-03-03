import { forwardRef } from 'react';

export const ThirdSectionText6 = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%]"
        >
            <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                Supply Chain and Logistics Optimization
            </h2>

            <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                We enhance logistics efficiency and cost control through:
                <br /><br />

                • End-to-end supply chain analysis<br />
                • Transportation and warehousing optimization<br />
                • Cost and margin leakage identification<br />
                • Procurement restructuring<br />
                • Inventory and demand planning frameworks<br />
                • Operational performance monitoring systems
                <br /><br />

                The result is reduced cost volatility and improved delivery reliability.

            </p>
        </div>
    );
});

ThirdSectionText6.displayName = 'ThirdSectionText6';

