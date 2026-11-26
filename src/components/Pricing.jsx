import { ArrowUpRight, Check, MessagesSquare, Sparkles, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openAgentChat } from '../lib/tawk';
import './Pricing.css';

const packages = [
  {
    name: 'Basic Check', price: '₦15,000',
    description: 'For buyers who need a quick answer fast', time: '6 hours',
    included: ['Coordinate extraction from survey plan', 'GPS location mapping', 'Claimed vs actual location comparison', 'Green / Red result report', 'Map screenshot included'],
    excluded: ['Historical satellite imagery', 'Physical field visit'],
  },
  {
    name: 'Standard Report', price: '₦35,000',
    description: 'For serious buyers before committing money', time: '24 hours', recommended: true,
    included: ['Everything in Basic Check', 'Historical satellite imagery (3 different years)', 'Flood risk assessment', 'Detailed written report (5–8 pages)', 'Recommendations & next steps'],
    excluded: ['Physical field visit'],
  },
];

const whatsappLink = (message) => `https://wa.me/2348142395577?text=${encodeURIComponent(message)}`;

export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing__container">
        <header className="pricing__header">
          <span className="pricing__eyebrow">Simple Pricing</span>
          <h2 id="pricing-title">Pay a Little. Protect a Lot.</h2>
          <p>No hidden fees. No subscriptions. Pay once, get your answer.</p>
        </header>
        <div className="pricing__grid">
          {packages.map((plan) => (
            <article className={`pricing__card${plan.recommended ? ' pricing__card--recommended' : ''}`} key={plan.name} aria-label={`${plan.name}${plan.recommended ? ', recommended package' : ''}`}>
              <div className="pricing__card-top">
                <h3>{plan.name}</h3>
                {plan.recommended && <span className="pricing__badge"><Sparkles size={13} aria-hidden="true" /> Most Popular</span>}
              </div>
              <p className="pricing__price">{plan.price}</p>
              <p className="pricing__description">{plan.description}</p>
              <ul className="pricing__features">
                {plan.included.map((feature) => <li key={feature}><Check size={17} aria-hidden="true" /><span><span className="pricing__sr-only">Included: </span>{feature}</span></li>)}
                {plan.excluded.map((feature) => <li className="pricing__excluded" key={feature}><X size={17} aria-hidden="true" /><span><span className="pricing__sr-only">Not included: </span>{feature}</span></li>)}
              </ul>
              <div className="pricing__bottom">
                <p className="pricing__time"><img className="pricing__clock-3d" src="/images/pricing-clock-3d.png" alt="" width="16" height="16" loading="lazy" decoding="async" /> Results in {plan.time}</p>
                <div className="pricing__actions">
                  <a className={`pricing__button${plan.recommended ? ' pricing__button--primary' : ''}`} href={whatsappLink(`Hello, I want the ${plan.name} for ${plan.price}`)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp</a>
                  <button className="pricing__button pricing__button--chat" type="button" onClick={openAgentChat}><MessagesSquare size={16} aria-hidden="true" /> Chat with Agent</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <article className="pricing__corporate" aria-labelledby="pricing-corporate-title">
          <div className="pricing__corporate-icon"><img src="/images/corporate-building-3d.png" alt="" width="28" height="28" loading="lazy" decoding="async" /></div>
          <div className="pricing__corporate-copy">
            <h3 id="pricing-corporate-title">Corporate Enquiry</h3>
            <p><strong>Corporate &amp; Institutional pricing available</strong> for law firms, banks, and real estate developers.</p>
          </div>
          <div className="pricing__corporate-actions">
            <a href={whatsappLink('Hello, I am interested in corporate pricing')} target="_blank" rel="noopener noreferrer">WhatsApp us <ArrowUpRight size={16} aria-hidden="true" /></a>
            <span>or</span>
            <button type="button" onClick={openAgentChat}>Chat with Agent <ArrowUpRight size={16} aria-hidden="true" /></button>
          </div>
        </article>
      </div>
    </section>
  );
}
