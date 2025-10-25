import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AudienceGateway } from "./components/AudienceGateway";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { FarmerPartnership } from "./components/FarmerPartnership";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AudienceGateway />
      <Features />
      <About />
      <Services />
      <FarmerPartnership />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
