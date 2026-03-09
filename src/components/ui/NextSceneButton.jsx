export function NextSceneButton({ href, label }) {
    return (
        <a href={href} className="next-scene-btn pointer-events-auto group mt-2 flex items-center justify-center gap-3 w-full py-4 text-[#0b0c0e] font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:text-[#CBA354]">
            <span>{label}</span>
            <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
    );
}
