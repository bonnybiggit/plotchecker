import { openHeroChat } from '../lib/heroChat';
import useScrollReveal from '../hooks/useScrollReveal';
import './HowItWorks.css';

export default function HowItWorks() {
  const sectionRef = useScrollReveal();
  return (
<section className="how" id="how" ref={sectionRef} aria-labelledby="how-heading">
    <span className="how__anchor" id="how-it-works" aria-hidden="true" />
    <div className="container">
      <div className="section-header">
        <span className="section-label">Simple Process</span>
        <h2 id="how-heading">Three Steps. Six Hours. Peace of Mind.</h2>
        <p>No office visits. No long forms. No waiting weeks. Just WhatsApp / Livechat.</p>
      </div>
      <div className="steps">
        <div className="step" data-step="01">
          <div className="step__icon">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          </div>
          <h3>Send Your Survey Plan</h3>
          <p>WhatsApp or Livechat us a clear photo or scan of your survey plan. That's all we need to begin. No paperwork, no forms, no office visit.</p>
        </div>
        <div className="step__arrow" aria-hidden="true">→</div>
        <div className="step" data-step="02">
          <div className="step__icon">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          <h3>We Run the Check</h3>
          <p>Our team extracts the GPS coordinates from your survey plan and plots them precisely on satellite maps. We compare against the location the seller described.</p>
        </div>
        <div className="step__arrow" aria-hidden="true">→</div>
        <div className="step" data-step="03">
          <div className="step__icon">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <h3>Get Your Clear Report</h3>
          <p>Within 6 hours you receive a clear report: Green means proceed, Red means danger. With an actual map showing exactly where the coordinates fall.</p>
        </div>
      </div>
      <div className="how__cta">
        <a href="https://wa.me/+2348142395577?text=Hello%20Plotchecker%2C%20I%20want%20to%20verify%20my%20survey%20plan" className="btn btn--primary" target="_blank" rel="noopener noreferrer">Start Verification on WhatsApp →</a>
        <button className="btn btn--ghost btn--chat-trigger" type="button" onClick={openHeroChat}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          Chat with our Agent
        </button>
      </div>
    </div>
  </section>
  );
}
