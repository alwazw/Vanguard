import Hero from "@/components/Hero";
import NetworkTopology from "@/components/NetworkTopology";
import ServiceGrid from "@/components/ServiceGrid";
import ArsenalGallery from "@/components/ArsenalGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NetworkTopology />
      <Hero />
      <section className="h-screen bg-black flex items-center justify-center p-12">
        <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Integrated Protection</h2>
            <p className="text-xl text-gray-400">
                While digital perimeters become increasingly sophisticated, the physical
                vulnerabilities inherent in human-centric infrastructure remain the
                primary catalyst for catastrophic system failures.
            </p>
        </div>
      </section>
      <ServiceGrid />
      <ArsenalGallery />
      <section className="h-screen bg-black flex items-center justify-center p-12">
        <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-widest text-neon-lime">The Academy awaits</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Tiered training for operational teams and C-suite, designed to architect
                a resilient tomorrow. Prepare for the modern adversary with Vanguard.
            </p>
            <button className="mt-10 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-neon-lime transition-colors">
                Apply Now
            </button>
        </div>
      </section>
    </main>
  );
}
