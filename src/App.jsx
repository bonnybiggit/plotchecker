import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VerifyFirst from "./components/VerifyFirst";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import SurveyGallery from "./components/SurveyGallery";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import WhoItsFor from "./components/WhoItsFor";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="app">
      <Navbar whatsappUrl="https://wa.me/2348142395577" />
      <main>
        <Hero />
        <VerifyFirst />
        <HowItWorks />
        <Pricing />
        <SurveyGallery />
        <WhyChoose />
        <Testimonials />
        <WhoItsFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomNav whatsappUrl="https://wa.me/2348142395577" />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

