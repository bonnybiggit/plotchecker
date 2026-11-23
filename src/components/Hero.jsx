import { openHeroChat } from '../lib/heroChat';
import './Hero.css';
import CountUp from './CountUp';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
<section className="hero hero--centered" aria-labelledby="plotchecker-hero-title">
    <div className="hero__bg-pattern" aria-hidden="true"></div>
    <div className="container container--center">
      <div className="hero__badge">
        <span className="badge__dot"></span>
        Nigeria's Fastest Land Verification Service
      </div>
      <h1 className="hero__headline" id="plotchecker-hero-title">
        Before You Spend <em>Millions</em> on Land,<br />
        Spend a Little to Know It's Real.
      </h1>
      <p className="hero__sub">
        Send us your survey plan on WhatsApp OR Livechat. In <strong>6 hours</strong> we tell you 
        if the land is exactly where the seller claims it is. 
        No registry queues. No lawyers. No wahala.
      </p>
      <div className="hero__actions hero__actions--center">
        <a href="https://wa.me/2348142395577?text=Hello%20Plotchecker%2C%20I%20want%20to%20verify%20my%20survey%20plan" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Verify on WhatsApp
        </a>
        <button className="btn btn--ghost btn--chat-trigger" type="button" onClick={openHeroChat}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          Chat with our Agent
        </button>
        <a href="#how" className="btn btn--ghost">See How It Works</a>
      </div>
      <div className="hero__trust hero__trust--center">
        <div className="trust__item">
          <CountUp value={6} suffix="hrs" />
          <span className="trust__label">Average Turnaround</span>
        </div>
        <div className="trust__divider"></div>
        <div className="trust__item">
          <CountUp value={15} prefix="₦" suffix="k" />
          <span className="trust__label">Starting Price</span>
        </div>
        <div className="trust__divider"></div>
        <div className="trust__item">
          <CountUp value={100} suffix="%" />
          <span className="trust__label">WhatsApp First</span>
        </div>
      </div>
    </div>
    
  </section>
  );
}

