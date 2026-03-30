import Hero from "@/components/Hero";
import NetworkTopology from "@/components/NetworkTopology";
import ThreatLandscape from "@/components/ThreatLandscape";
import ThreatGlobe from "@/components/ThreatGlobe";
import CoreServices from "@/components/CoreServices";
import TacticalOperations from "@/components/TacticalOperations";
import ModernArsenal from "@/components/ModernArsenal";
import DeploymentTiers from "@/components/DeploymentTiers";
import ROISection from "@/components/ROISection";

export default function Home() {
  return (
    <main className="min-h-screen bg-noir-dark">
      <NetworkTopology />
      <Hero />
      <ThreatGlobe />
      <ThreatLandscape />
      <CoreServices />
      <TacticalOperations />
      <ModernArsenal />
      <DeploymentTiers />
      <ROISection />

      {/* Final CTA */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-gradient-to-br from-vanguard-orange to-vanguard-amber text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-4 tracking-tight">
            Initiate Vanguard Protocol
          </h2>
          <p className="text-sm md:text-lg font-medium mb-6 max-w-2xl mx-auto opacity-90">
            The traditional perimeter is obsolete. Move decisively and secure the 
            multi-domain landscape before the adversary does.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 md:px-10 py-3 md:py-4 bg-deep-black text-white font-bold uppercase tracking-widest text-xs hover:bg-noir-dark transition-all">
              Request Assessment
            </button>
            <button className="px-6 md:px-10 py-3 md:py-4 border-2 border-white/80 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-vanguard-orange transition-all">
              Contact Operations
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-vanguard-orange/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-lg md:text-xl font-bold uppercase tracking-widest">
              The <span className="text-vanguard-orange">Vanguard</span> Protocol
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 text-slate-500 text-xs font-mono">
              <span>operations@vanguard-protocol.com</span>
              <span className="hidden md:inline text-vanguard-orange">|</span>
              <span>SECURE LINE: +1-808-555-8199</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-center text-slate-600 text-[10px] md:text-xs uppercase tracking-widest">
            © 2025 The Vanguard Protocol. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
