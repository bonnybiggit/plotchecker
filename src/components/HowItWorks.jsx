import { openWhatsApp } from '../lib/whatsapp';
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
        <p>No office visits. No long forms. No waiting weeks. Just WhatsApp.</p>
      </div>
      <div className="steps">
        <div className="step" data-step="01">
          <div className="step__icon">
            <img src="/images/how-survey-3d.png" alt="" width="22" height="22" loading="lazy" decoding="async" />
          </div>
          <h3>Send Your Survey Plan</h3>
          <p>WhatsApp us a clear photo or scan of your survey plan. That's all we need to begin. No paperwork, no forms, no office visit.</p>
        </div>
        <div className="step__arrow" aria-hidden="true">→</div>
        <div className="step" data-step="02">
          <div className="step__icon">
            <img src="/images/how-check-3d.png" alt="" width="22" height="22" loading="lazy" decoding="async" />
          </div>
          <h3>We Run the Check</h3>
          <p>Our team extracts the GPS coordinates from your survey plan and plots them precisely on satellite maps. We compare against the location the seller described.</p>
        </div>
        <div className="step__arrow" aria-hidden="true">→</div>
        <div className="step" data-step="03">
          <div className="step__icon">
            <img src="/images/how-report-3d.png" alt="" width="22" height="22" loading="lazy" decoding="async" />
          </div>
          <h3>Get Your Clear Report</h3>
          <p>Within 6 hours you receive a clear report: Green means proceed, Red means danger. With an actual map showing exactly where the coordinates fall.</p>
        </div>
      </div>
      <div className="how__cta">
        <a href="https://wa.me/2348142395577?text=Hello%20Plotchecker%2C%20I%20want%20to%20verify%20my%20survey%20plan" className="btn btn--primary" target="_blank" rel="noopener noreferrer">Start Verification on WhatsApp →</a>
        <button className="btn btn--ghost btn--chat-trigger" type="button" onClick={openWhatsApp}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          Chat on WhatsApp
        </button>
      </div>
    </div>
  </section>
  );
}
