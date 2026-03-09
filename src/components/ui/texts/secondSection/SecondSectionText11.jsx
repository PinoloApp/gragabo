import { forwardRef } from 'react';
import { NextSceneButton } from '../../NextSceneButton';

export const SecondSectionText11 = forwardRef((_props, ref) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                ref={ref}
                className="max-w-md text-center"
            >
                <h2 className="text-2xl md:text-3xl font-sans font-black text-black">
                    Next Step
                </h2>

                <p className="text-base md:text-lg font-sans mt-4 text-zinc-700 italic">
                    If your organization requires improved financial transparency, legal security, and capital discipline, Gragabo offers a structured pathway toward institutional readiness.
                </p>

                <div className="mt-10 flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-stretch justify-center gap-4">
                        <a href="https://calendly.com/gragabo/30min" target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-block text-center py-5 px-14 bg-[#CBA354] text-[#fff] font-bold uppercase tracking-[0.25em] text-sm transition-all duration-500 hover:bg-[#0b0c0e] hover:text-white hover:translate-x-2.5 w-full">
                            Schedule a 30-min Consultation
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfomix20PAaIJE9vXMnUdvNCQgaAO0SxlYi_ARHUNboJ571wg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-block text-center py-5 px-14 bg-transparent text-[#0b0c0e] font-bold uppercase tracking-[0.25em] text-sm border border-[#0b0c0e] transition-all duration-500 hover:bg-[#0b0c0e] hover:text-white hover:translate-x-2.5 w-full">
                            Complete Diagnostic Form
                        </a>
                    </div>
                    <NextSceneButton href="/tradeScene" label="Next: Trade, Logistics & Industrial" />
                </div>
            </div>
        </div>
    );
});

SecondSectionText11.displayName = 'SecondSectionText11';