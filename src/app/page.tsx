import Hero from "@/components/Hero";
import NetworkTopology from "@/components/NetworkTopology";
import ServiceGrid from "@/components/ServiceGrid";
import ArsenalGallery from "@/components/ArsenalGallery";
import AcademyList from "@/components/AcademyList";
import ROICalculator from "@/components/ROICalculator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NetworkTopology />
      <Hero />
      <section className="h-screen bg-black flex items-center justify-center p-12">
        <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter">Integrated Protection</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
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
      <footer className="py-20 px-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-2xl font-bold uppercase tracking-widest italic">
                The <span className="text-neon-lime">Vanguard</span> Protocol
            </div>
            <div className="text-gray-500 text-sm font-mono uppercase tracking-[0.2em]">
                © 2025 All Rights Reserved. Holistic Security Convergence.
            </div>
        </div>
      </footer>
    </main>
  );
}
