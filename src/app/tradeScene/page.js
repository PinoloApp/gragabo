import { ThirdSceneTextOverlay } from "@/components/ui/ThirdSceneTextOverlay";
import { TradeCanvas } from "@/components/three/tradeCanvas";
import { Footer } from "@/components/ui/Footer";

export default function TradeScenePage() {
    return (
        <>
            <TradeCanvas />
            <main className="h-[2600vh] w-full relative">
                <ThirdSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
