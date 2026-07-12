import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import WhyHexaCore from "./components/sections/WhyHexaCore";
import FAQ from "./components/sections/FAQ";
import ContactCTA from "./components/sections/ContactCTA";

function App() {
  return (
    <main className="min-h-screen bg-void-950 text-ink-50">
      <Navbar />
      <Hero />
      <WhyHexaCore />
      <Services />
      <Process />
      <TechStack />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}

export default App;
