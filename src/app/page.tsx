import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ArsenalGallery from "@/components/ArsenalGallery";
import AcademyList from "@/components/AcademyList";
import ROICalculator from "@/components/ROICalculator";
import ThreatTicker from "@/components/ThreatTicker";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black">
      <ThreatTicker />
      <Hero />
      <CaseStudies />
      <section className="h-screen bg-deep-black flex items-center justify-center p-12 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
             style={{backgroundImage: 'radial-gradient(#E31C25 0.5px, transparent 0.5px)', backgroundSize: '40px 40px'}} />

        <div className="max-w-5xl text-center relative z-10">
            <span className="text-tactical-red font-mono text-sm tracking-[0.5em] uppercase mb-8 block animate-pulse">Theoretical Framework</span>
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter text-white leading-[0.9]">INTEGRATED_PROTECTION</h2>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-mono uppercase tracking-wide">
                While digital perimeters become increasingly sophisticated, the physical
                vulnerabilities inherent in human-centric infrastructure remain the
                primary catalyst for catastrophic system failures.
            </p>
        </div>
      </section>
      <ServiceGrid />
      <ArsenalGallery />
      <AcademyList />
      <ROICalculator />
      <footer className="py-24 px-12 border-t border-white/10 text-center bg-deep-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-3xl font-black uppercase tracking-[0.2em] text-white">
                THE <span className="text-tactical-red">VANGUARD</span> PROTOCOL
            </div>
            <div className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.4em] leading-loose text-right">
                © 2025 ALL RIGHTS RESERVED.<br />
                HOLISTIC SECURITY CONVERGENCE.<br />
                SEC_LEVEL: ALPHA_CLEARANCE
            </div>
        </div>
      </footer>
    </main>
  );
}
