'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Arsenal', href: '#arsenal' },
    { name: 'Intelligence', href: '#intel' },
    { name: 'Academy', href: '#academy' },
]

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null!)

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out',
            delay: 0.5
        })
    }, { scope: navRef })

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-8 pointer-events-none"
        >
            <div className="flex items-center gap-12 pointer-events-auto">
                <Link href="/" className="group">
                    <div className="text-2xl font-black uppercase tracking-[0.2em] text-white">
                        VANGUARD<span className="text-neon-lime group-hover:animate-pulse">_</span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-6 border-l border-white/10 pl-6 h-4">
                    <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-1 h-1 bg-neon-lime opacity-40" />
                        ))}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Clearance: Alpha</span>
                </div>
            </div>

            <div className="flex items-center gap-8 pointer-events-auto">
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 hover:text-neon-lime transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-lime transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <button className="bg-white/5 hover:bg-neon-lime/10 border border-white/10 hover:border-neon-lime/40 px-6 py-2 transition-all group">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white group-hover:text-neon-lime transition-colors">Contact_</span>
                </button>
            </div>
        </nav>
    )
}
