import { FirstSceneTextOverlay } from "@/components/ui/FirstSceneTextOverlay";
import { Header } from "@/components/ui/Header";

export default function MainScene() {
    return (
        <>
            {/* The global header overlaid on the 3D scene */}
            <div className="absolute top-0 w-full z-50">
                <Header />
            </div>

            <main className="h-[2600vh] w-full relative">
                <FirstSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
        </>
    );
}
