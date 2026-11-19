import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MobileBottomNav from "./components/MobileBottomNav";

function App() {
  return (
    <div className="app">
      <Navbar whatsappUrl="https://wa.me/2347062295349" />
      <main>
        <Hero />
        <HowItWorks />
      </main>
      <MobileBottomNav whatsappUrl="https://wa.me/2347062295349" />
    </div>
  );
}

export default App;

