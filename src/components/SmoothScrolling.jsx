'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export function SmoothScrolling({ children }) {
    const pathname = usePathname();

    if (pathname === '/') {
        return <>{children}</>;
    }

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            {children}
        </ReactLenis>
    )
}
