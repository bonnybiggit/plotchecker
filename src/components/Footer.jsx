import { MessagesSquare } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openWhatsApp } from '../lib/whatsapp';
import './Footer.css';

const whatsappUrl = 'https://wa.me/2348142395577';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__columns">
          <div className="site-footer__brand">
            <a className="site-footer__logo-link" href="#" aria-label="Plotchecker home"><img src="/images/logo.png" alt="Plotchecker.ng" width="795" height="198" /></a>
            <p>Nigeria's fastest and most accessible land coordinate verification service. Protecting Nigerian land buyers one survey plan at a time.</p>
          </div>
          <nav className="site-footer__links" aria-labelledby="footer-services">
            <h3 id="footer-services">Services</h3>
            <a href="#pricing">Basic Check</a>
            <a href="#pricing">Standard Report</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Corporate Pricing</a>
          </nav>
          <nav className="site-footer__links" aria-labelledby="footer-company">
            <h3 id="footer-company">Company</h3>
            <a href="#how">How It Works</a>
            <a href="#why">Why Us</a>
            <a href="#faq">FAQ</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contact Us</a>
          </nav>
          <div className="site-footer__contact">
            <h3>Contact</h3>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp Us</a>
            <button type="button" onClick={openWhatsApp}><MessagesSquare size={16} aria-hidden="true" /> Chat on WhatsApp</button>
            <p className="site-footer__tagline">Plotchecker.ng: Verify Before You Buy.</p>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© 2026 Plotchecker.ng. All rights reserved.</p>
          <p>This service provides geospatial intelligence. It does not constitute legal advice. Always engage a licensed property lawyer for final title confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
