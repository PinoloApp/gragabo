import { FirstSceneTextOverlay } from "@/components/ui/FirstSceneTextOverlay";
import { ChessCanvas } from "@/components/three/chessCanvas";
import { Footer } from "@/components/ui/Footer";
import { SceneLoadingScreen } from "@/components/ui/SceneLoadingScreen";

export default function MainScene() {
    return (
        <>
            <SceneLoadingScreen />
            <ChessCanvas />
            <main className="h-[2600vh] w-full relative">
                <FirstSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
