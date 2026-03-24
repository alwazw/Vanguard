import Hero from "@/components/Hero";
import NetworkTopology from "@/components/NetworkTopology";

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
    </main>
  );
}
