import WhatsAppIcon from './WhatsAppIcon';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href="https://wa.me/2348142395577?text=Hello%20Plotchecker%2C%20I%20want%20to%20verify%20my%20survey%20plan" target="_blank" rel="noopener noreferrer" aria-label="Chat with Plotchecker on WhatsApp" title="Chat on WhatsApp">
      <WhatsAppIcon size={27} />
    </a>
  );
}
