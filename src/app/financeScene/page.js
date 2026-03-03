import { SecondSceneTextOverlay } from "@/components/ui/SecondSceneTextOverlay";
import { ScrollCanvas } from "@/components/three/scrollCanvas";

export default function FinanceScene() {
    return (
        <>
            <ScrollCanvas />
            <main className="h-[2000vh] w-full relative">
                <SecondSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
        </>
    );
}
