import Hero from "@/components/Hero";
import NetworkTopology from "@/components/NetworkTopology";
import ThreatLandscape from "@/components/ThreatLandscape";
import CoreServices from "@/components/CoreServices";
import TacticalOperations from "@/components/TacticalOperations";
import ModernArsenal from "@/components/ModernArsenal";
import DeploymentTiers from "@/components/DeploymentTiers";
import ROISection from "@/components/ROISection";
import ThreatTicker from "@/components/ThreatTicker";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NetworkTopology />
      <ThreatTicker />
      <Hero />
      
      {/* The Collapse of the Perimeter */}
      <section className="min-h-[70vh] md:min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden circuit-pattern">
        <div className="max-w-5xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 md:w-16 accent-line"></div>
            <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Multi-Domain Framework</span>
            <div className="h-px w-8 md:w-16 accent-line" style={{ transform: 'scaleX(-1)' }}></div>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 uppercase tracking-tighter">
            The Collapse of the <span className="text-vanguard-orange">Perimeter</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
            The distinction between a physical breach and a cyber catastrophe is functionally 
            non-existent. The strongest digital encryption fails when an attacker gains 
            physical access to a server room.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-vanguard-orange/5 border border-vanguard-orange/30 backdrop-blur-sm">
            <span className="text-4xl md:text-5xl font-black text-vanguard-orange text-glow">60%</span>
            <span className="text-xs md:text-sm text-slate-400 text-left">of enterprises will converge physical and<br />cyber security operations by 2027</span>
          </div>
        </div>
      </section>

      <ThreatLandscape />
      <CoreServices />
      <TacticalOperations />
      <ModernArsenal />
      <DeploymentTiers />
      <ROISection />

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-br from-vanguard-orange to-vanguard-amber text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            Initiate Vanguard Protocol
          </h2>
          <p className="text-base md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-90">
            The traditional perimeter is obsolete. Move decisively and secure the 
            multi-domain landscape before the adversary does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 md:px-12 py-4 md:py-5 bg-deep-black text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-noir-dark transition-all">
              Request Assessment
            </button>
            <button className="px-8 md:px-12 py-4 md:py-5 border-2 border-white/80 text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-vanguard-orange transition-all">
              Contact Operations
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-16 px-4 md:px-6 border-t border-vanguard-orange/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-xl md:text-2xl font-bold uppercase tracking-widest">
              The <span className="text-vanguard-orange">Vanguard</span> Protocol
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-slate-500 text-xs md:text-sm font-mono">
              <span>operations@vanguard-protocol.com</span>
              <span className="hidden md:inline text-vanguard-orange">|</span>
              <span>SECURE LINE: +1-808-555-8199</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-600 text-xs uppercase tracking-widest">
            © 2025 The Vanguard Protocol. All Rights Reserved. // STATUS: ENCRYPTED //
          </div>
        </div>
      </footer>
    </main>
  );
}
