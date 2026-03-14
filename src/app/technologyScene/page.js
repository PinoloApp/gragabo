import { TechnologySceneTextOverlay } from "@/components/ui/TechnologySceneTextOverlay";
import dynamic from "next/dynamic";
import { Footer } from "@/components/ui/Footer";

const TechnologyCanvas = dynamic(() => import("@/components/three/technologyCanvas").then(mod => mod.TechnologyCanvas), { ssr: false });

export default function TechnologyScenePage() {
    return (
        <>
            <TechnologyCanvas />
            <main className="h-[2600vh] w-full relative">
                <TechnologySceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
