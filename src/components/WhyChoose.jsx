import { Check, X } from 'lucide-react';
import './WhyChoose.css';

const features = [
  { title: 'Fastest in Nigeria', icon: '/images/why-lightning-3d.png', text: '6-hour turnaround on coordinate checks. While competitors take days, you get your answer the same day.' },
  { title: 'WhatsApp First', icon: '/images/why-phone-3d.png', text: 'No app to download. No account to create. Just send a photo on WhatsApp and we handle everything else.' },
  { title: 'Geospatial Precision', icon: '/images/why-map-3d.png', text: 'We use professional GIS tools to plot exact coordinates, not just Google Maps guesswork. The same technology surveyors use.' },
  { title: 'Accessible Pricing', icon: '/images/why-money-3d.png', text: 'Starting at ₦15,000, a tiny fraction of what you stand to lose. Built for everyday Nigerian buyers, not just diaspora.' },
];

const checks = ['Coordinate location match', 'Satellite imagery analysis', 'Flood risk assessment', 'Acquisition zone check', 'Done in 6 hours', 'No office visits needed', 'Available on WhatsApp'];

export default function WhyChoose() {
  return (
    <section className="why-choose" id="why" aria-labelledby="why-choose-title">
      <span className="why-choose__anchor" id="why-us" aria-hidden="true" />
      <div className="why-choose__container">
        <header className="why-choose__header">
          <span className="why-choose__eyebrow">Why Choose Plotchecker?</span>
          <h2 id="why-choose-title">We Go Where Others Stop.</h2>
          <p>Google Maps gets you to the neighbourhood. We get you to the truth about the land itself.</p>
        </header>
        <div className="why-choose__layout">
          <div className="why-choose__features">
            {features.map(({ title, icon, text }) => (
              <article className="why-choose__feature" key={title}>
                <span className="why-choose__icon"><img src={icon} alt="" width="28" height="28" loading="lazy" decoding="async" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="why-choose__comparison">
            <table aria-label="Plotchecker and DIY comparison">
              <thead><tr><th scope="col">What We Check</th><th scope="col">Us</th><th scope="col">DIY</th></tr></thead>
              <tbody>
                {checks.map((check) => (
                  <tr key={check}>
                    <th scope="row">{check}</th>
                    <td><Check size={16} aria-hidden="true" /><span className="why-choose__sr-only">Included</span></td>
                    <td><X size={15} aria-hidden="true" /><span className="why-choose__sr-only">Not included</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
