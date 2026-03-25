import Hero from "@/components/Hero";
import NetworkTopology from "@/components/NetworkTopology";
import ServiceGrid from "@/components/ServiceGrid";
import ArsenalGallery from "@/components/ArsenalGallery";
import AcademyList from "@/components/AcademyList";
import ROICalculator from "@/components/ROICalculator";
import ThreatTicker from "@/components/ThreatTicker";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NetworkTopology />
      <ThreatTicker />
      <Hero />
      <CaseStudies />
      <section className="min-h-[70vh] md:h-screen bg-deep-black flex items-center justify-center p-6 md:p-12">
        <div className="max-w-4xl text-center">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 uppercase tracking-tighter">The Collapse of the Perimeter</h2>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                The distinction between a physical breach and a cyber catastrophe is functionally 
                non-existent. The strongest digital encryption fails when an attacker gains 
                physical access to a server room. 60% of enterprises will converge physical and 
                cyber security operations by 2027.
            </p>
        </div>
      </section>
      <ServiceGrid />
      <ArsenalGallery />
      <AcademyList />
      <ROICalculator />
      <footer className="py-12 md:py-20 px-4 md:px-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="text-xl md:text-2xl font-bold uppercase tracking-widest italic">
                The <span className="text-neon-lime">Vanguard</span> Protocol
            </div>
            <div className="text-gray-500 text-xs md:text-sm font-mono uppercase tracking-wider md:tracking-[0.2em]">
                © 2025 All Rights Reserved.
            </div>
        </div>
      </footer>
    </main>
  );
}
