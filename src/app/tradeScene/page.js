import { ThirdSceneTextOverlay } from "@/components/ui/ThirdSceneTextOverlay";
import { TradeCanvas } from "@/components/three/tradeCanvas";
import { Footer } from "@/components/ui/Footer";
import { SceneLoadingScreen } from "@/components/ui/SceneLoadingScreen";

export default function TradeScenePage() {
    return (
        <>
            <SceneLoadingScreen />
            <TradeCanvas />
            <main className="h-[2600vh] w-full relative pointer-events-auto">
                <ThirdSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
