import { ThirdSceneTextOverlay } from "@/components/ui/ThirdSceneTextOverlay";
import dynamic from "next/dynamic";
import { Footer } from "@/components/ui/Footer";

const TradeCanvas = dynamic(() => import("@/components/three/tradeCanvas").then(mod => mod.TradeCanvas), { ssr: false });

export default function TradeScenePage() {
    return (
        <>
            <TradeCanvas />
            <main className="h-[2600vh] w-full relative pointer-events-auto">
                <ThirdSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
