import Hero from "@/components/Hero";
import ModulePlayground from "@/components/ModulePlayground";
import WhoItsFor from "@/components/WhoItsFor";
import Capabilities from "@/components/Capabilities";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ModulePlayground />
      <WhoItsFor />
      <Capabilities />
      <FinalCTA />
      <Footer />
    </main>
  );
}
