import { FirstSceneTextOverlay } from "@/components/ui/FirstSceneTextOverlay";
import dynamic from "next/dynamic";
import { Footer } from "@/components/ui/Footer";

const ChessCanvas = dynamic(() => import("@/components/three/chessCanvas").then(mod => mod.ChessCanvas), { ssr: false });

export default function MainScene() {
    return (
        <>
            <ChessCanvas />
            <main className="h-[2600vh] w-full relative">
                <FirstSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
