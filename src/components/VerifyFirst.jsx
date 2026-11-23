import { CheckCircle2, CirclePlay, CircleX, MapPin, SearchCheck, ShieldCheck, TriangleAlert } from 'lucide-react';
import './VerifyFirst.css';

export default function VerifyFirst() {
  return (
    <section className="verify-first" aria-labelledby="verify-first-title">
      <div className="verify-first__inner">
        <div className="verify-first__copy">
          <div className="verify-first__badge"><ShieldCheck size={18} aria-hidden="true" /> Trusted by 1,000+ Nigerian land buyers</div>
          <h2 id="verify-first-title">Don't Buy Land Blind.<br />Verify First.</h2>
          <p className="verify-first__description">We cross-check your survey plan against satellite imagery to confirm the land actually exists where the paperwork says it does. No field visits. No guesswork. Just facts, delivered in 6 - 24 hours.</p>
          <div className="verify-first__actions">
            <a className="verify-first__primary" href="https://wa.me/2348142395577?text=Hello%20Plotchecker%2C%20I%20want%20to%20verify%20my%20survey%20plan" target="_blank" rel="noopener noreferrer"><SearchCheck size={21} aria-hidden="true" /> Start Verification - ₦15,000</a>
            <a className="verify-first__secondary" href="#how"><CirclePlay size={21} aria-hidden="true" /> See How It Works</a>
          </div>
          <ul className="verify-first__trust">
            <li><CheckCircle2 size={19} aria-hidden="true" /> Desk-based verification</li>
            <li><CheckCircle2 size={19} aria-hidden="true" /> 24-48 hour turnaround</li>
            <li><CheckCircle2 size={19} aria-hidden="true" /> Green / Red result</li>
          </ul>
        </div>
        <figure className="verify-first__report" aria-label="Sample red-flag verification report">
          <div className="verify-first__report-header"><span className="verify-first__red-flag">Red flag</span><span>Verified: May 28, 2026</span></div>
          <div className="verify-first__preview">
            <div className="verify-first__survey">
              <img src="/images/SURVEYPLAN1.png" alt="Survey plan sample showing plot boundaries and survey measurements." width="528" height="701" loading="lazy" decoding="async" />
              <div className="verify-first__boundary" aria-hidden="true"><span><TriangleAlert size={23} /></span></div>
            </div>
          </div>
          <div className="verify-first__report-body">
            <h3>Survey Plan #LSK-2024-08921</h3>
            <p className="verify-first__location"><MapPin size={17} aria-hidden="true" /> Ibeju-Lekki, Lagos</p>
            <ul className="verify-first__findings">
              <li><CircleX size={17} aria-hidden="true" /> Coordinates fall on water body</li>
              <li><CircleX size={17} aria-hidden="true" /> Area mismatch: Claimed 600sqm, actual ~0sqm</li>
            </ul>
          </div>
        </figure>
      </div>
    </section>
  );
}
