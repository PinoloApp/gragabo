"use client";

import { SecondSceneTextOverlay } from "@/components/ui/SecondSceneTextOverlay";
import dynamic from "next/dynamic";
import { Footer } from "@/components/ui/Footer";

const ScrollCanvas = dynamic(() => import("@/components/three/scrollCanvas").then(mod => mod.ScrollCanvas), { ssr: false });

export default function FinanceScene() {
    return (
        <>
            <ScrollCanvas />
            <main className="h-[2000vh] w-full relative">
                <SecondSceneTextOverlay />
                {/* Prazan prostor za GSAP scroll - on omogućava da animacije ispod i same scene rade na skrol */}
            </main>
            <Footer />
        </>
    );
}
