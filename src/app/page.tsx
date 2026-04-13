import Hero from "@/components/Hero";
import NetworkTopology from "@/components/NetworkTopology";
import ThreatLandscape from "@/components/ThreatLandscape";
import CoreServices from "@/components/CoreServices";
import TacticalOperations from "@/components/TacticalOperations";
import ModernArsenal from "@/components/ModernArsenal";
import DeploymentTiers from "@/components/DeploymentTiers";
import ROISection from "@/components/ROISection";

export default function Home() {
  return (
    <main className="min-h-screen bg-noir-dark">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-vanguard-orange focus:text-white focus:font-bold"
      >
        Skip to main content
      </a>
      <NetworkTopology />
      <Hero />
      <div id="main-content">
      <ThreatLandscape />
      <CoreServices />
      <TacticalOperations />
      <ModernArsenal />
      <DeploymentTiers />
      <ROISection />
      </div>

      {/* Final CTA */}
      <section className="py-8 md:py-16 px-4 md:px-6 bg-gradient-to-br from-vanguard-orange to-vanguard-amber text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-xl md:text-5xl font-black uppercase mb-3 md:mb-4 tracking-tight text-balance">
            Initiate Vanguard Protocol
          </h2>
          <p className="text-sm md:text-lg font-medium mb-5 md:mb-6 max-w-2xl mx-auto opacity-90 text-pretty">
            The traditional perimeter is obsolete. Move decisively and secure the 
            multi-domain landscape before the adversary does.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-5 md:px-10 py-3 md:py-4 bg-deep-black text-white font-bold uppercase tracking-widest text-xs hover:bg-noir-dark transition-all">
              Request Assessment
            </button>
            <button className="px-5 md:px-10 py-3 md:py-4 border-2 border-white/80 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-vanguard-orange transition-all">
              Contact Operations
            </button>
          </div>
        </div>
      </section>

      <footer className="py-6 md:py-12 px-4 md:px-6 border-t border-vanguard-orange/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
            <div className="text-base md:text-xl font-bold uppercase tracking-widest">
              The <span className="text-vanguard-orange">Vanguard</span> Protocol
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-slate-500 text-[11px] md:text-xs font-mono text-center">
              <span>operations@vanguard-protocol.com</span>
              <span className="hidden md:inline text-vanguard-orange">|</span>
              <span>SECURE LINE: +1-808-555-8199</span>
            </div>
          </div>
          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-800 text-center text-slate-600 text-[10px] md:text-xs uppercase tracking-widest">
            © 2026 The Vanguard Protocol. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
