import { MessagesSquare } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openWhatsApp } from '../lib/whatsapp';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__container">
        <div className="final-cta__panel">
          <span className="final-cta__watermark" aria-hidden="true">VERIFY</span>
          <div className="final-cta__content">
            <span className="final-cta__eyebrow">Ready to Protect Your Investment?</span>
            <h2 id="final-cta-title">Don't Pay for Land<br />Until You Know It's Real.</h2>
            <p className="final-cta__description">Send us your survey plan right now. In 6 hours you will know exactly where that land really is before you lose a single naira to fraud.</p>
            <div className="final-cta__actions">
              <a className="final-cta__button final-cta__button--whatsapp" href="https://wa.me/2348142395577?text=Hello%20Plotchecker%2C%20I%20want%20to%20verify%20my%20survey%20plan" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Start Verification on WhatsApp</a>
              <button className="final-cta__button final-cta__button--chat" type="button" onClick={openWhatsApp}><MessagesSquare size={18} aria-hidden="true" /> Chat on WhatsApp</button>
            </div>
            <p className="final-cta__availability">Average response time: under 2 minutes · Available 7 days a week</p>
          </div>
        </div>
      </div>
    </section>
  );
}
