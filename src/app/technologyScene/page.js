import { TechnologySceneTextOverlay } from "@/components/ui/TechnologySceneTextOverlay";
import { TechnologyCanvas } from "@/components/three/technologyCanvas";
import { Footer } from "@/components/ui/Footer";
import { SceneLoadingScreen } from "@/components/ui/SceneLoadingScreen";

export default function TechnologyScenePage() {
    return (
        <>
            <SceneLoadingScreen />
            <TechnologyCanvas />
            <main className="h-[2600vh] w-full relative">
                <TechnologySceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
