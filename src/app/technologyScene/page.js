import { TechnologySceneTextOverlay } from "@/components/ui/TechnologySceneTextOverlay";
import { TechnologyCanvas } from "@/components/three/technologyCanvas";

export default function TechnologyScenePage() {
    return (
        <>
            <TechnologyCanvas />
            <main className="h-[2600vh] w-full relative">
                <TechnologySceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
        </>
    );
}
