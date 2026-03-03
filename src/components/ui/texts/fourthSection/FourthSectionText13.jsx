import { forwardRef } from 'react';

export const FourthSectionText13 = forwardRef((props, ref) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                ref={ref}
                className="max-w-md text-center"
            >
                <h2 className="text-3xl md:text-5xl font-sans font-black text-black">
                    Next Step
                </h2>

                <p className="text-lg md:text-xl font-sans mt-4 text-zinc-700 italic">
                    If your organization seeks improved digital efficiency, stronger brand authority, and measurable technological and social impact, Gragabo provides a structured pathway to transformation.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://calendly.com/gragabo/30min" target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-block text-center px-8 py-4 bg-[#BEA05D] text-white font-sans font-bold rounded-lg hover:bg-zinc-800 transition-colors shadow-lg hover:bg-[#0A6B3B] w-full sm:w-auto">
                        Schedule a Consultation
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfomix20PAaIJE9vXMnUdvNCQgaAO0SxlYi_ARHUNboJ571wg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-block text-center px-8 py-4 bg-white text-black font-sans font-bold rounded-lg border-2 border-black hover:bg-zinc-100 transition-colors shadow-lg hover:bg-[#0A6B3B] w-full sm:w-auto">
                        Complete Diagnostic Form
                    </a>
                </div>
            </div>
        </div>
    );
});

FourthSectionText13.displayName = 'FourthSectionText13';