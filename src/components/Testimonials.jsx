import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: '"I was about to transfer ₦8.5 million for a plot in Ibeju-Lekki. Plotchecker showed me the coordinates pointed to a government acquisition zone 12km away. They saved my entire savings."',
    initials: 'AO', name: 'Adebayo O.', role: 'Lagos Mainland Buyer',
  },
  {
    quote: '"I\'m based in the UK. My cousin was handling the land purchase. Plotchecker verified everything remotely. The survey plan coordinates matched perfectly so I bought with complete confidence."',
    initials: 'CN', name: 'Chioma N.', role: 'Diaspora Buyer, UK',
  },
  {
    quote: '"As a real estate agent, I now pre-verify every listing I take on. My clients trust me more. Deals close faster. Plotchecker is now part of my standard process."',
    initials: 'EM', name: 'Emeka M.', role: 'Real Estate Agent, Lagos',
  },
];

export default function Testimonials() {
  return (
    <section className="customer-stories" aria-labelledby="customer-stories-title">
      <div className="customer-stories__container">
        <header className="customer-stories__header">
          <span className="customer-stories__eyebrow">Real Stories</span>
          <h2 id="customer-stories-title">Nigerians Who Avoided Losing Everything.</h2>
        </header>
        <div className="customer-stories__viewport" tabIndex={0} role="region" aria-label="Customer testimonials. Hover or focus here to pause scrolling.">
          <div className="customer-stories__track">
            {[false, true].map((duplicate) => (
              <div className="customer-stories__grid" key={String(duplicate)} aria-hidden={duplicate ? true : undefined}>
          {testimonials.map((testimonial) => (
            <figure className="customer-stories__card" key={testimonial.initials}>
              <Quote className="customer-stories__quote-icon" size={22} strokeWidth={1.5} aria-hidden="true" />
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption className="customer-stories__author">
                <span className="customer-stories__avatar" aria-hidden="true">{testimonial.initials}</span>
                <span><strong>{testimonial.name}</strong><span className="customer-stories__role">{testimonial.role}</span></span>
              </figcaption>
            </figure>
          ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
