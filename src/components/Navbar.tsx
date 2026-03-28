'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
    { name: 'Arsenal', href: '#arsenal' },
    { name: 'Intelligence', href: '#intel' },
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
]

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null!)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            delay: 0.5
        })
    }, { scope: navRef })

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
                scrolled ? 'bg-deep-black/90 backdrop-blur-md py-4 border-neon-lime/20' : 'bg-transparent py-8 border-transparent'
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-8 h-8 bg-neon-lime flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-500">
                        <div className="w-4 h-[2px] bg-black" />
                    </div>
                    <span className="text-xl font-black uppercase tracking-[0.2em] text-white">
                        VANGUARD<span className="text-neon-lime">_</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 hover:text-neon-lime transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-lime transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden lg:block text-right">
                        <div className="text-[9px] font-mono text-neon-lime uppercase tracking-widest leading-none">Status: Active</div>
                        <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mt-1">SEC_LEVEL: ALPHA</div>
                    </div>
                    <button className="bg-white/5 border border-white/10 hover:border-neon-lime px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] transition-all">
                        Menu
                    </button>
                </div>
            </div>
        </nav>
    )
}
