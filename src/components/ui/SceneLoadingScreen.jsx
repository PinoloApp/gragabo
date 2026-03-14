'use client'
import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

export function SceneLoadingScreen() {
    const { progress, active } = useProgress();
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (progress === 100 && !active) {
            // Small delay to ensure scene has rendered
            const timer = setTimeout(() => {
                setFadeOut(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [progress, active]);

    useEffect(() => {
        if (fadeOut) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [fadeOut]);

    // Block scrolling while loading
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.6s ease-out',
            }}
        >
            <div className="flex flex-col items-center gap-6">
                <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-black rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-sm text-gray-500 font-mono">
                    {Math.round(progress)}%
                </p>
            </div>
        </div>
    );
}
