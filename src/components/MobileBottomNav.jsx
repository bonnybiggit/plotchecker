import { Home, ListChecks, MessagesSquare } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { openAgentChat } from "../lib/tawk";
import "./MobileBottomNav.css";

export default function MobileBottomNav({ whatsappUrl, onChat = openAgentChat }) {
  return (
    <div className="mobile-bottom-nav-space">
      <nav className="mobile-bottom-nav" aria-label="Mobile quick navigation">
        <a href="/" className="mobile-bottom-nav__item">
          <Home size={20} aria-hidden="true" />
          <span>Home</span>
        </a>
        <a href="#how" className="mobile-bottom-nav__item">
          <ListChecks size={20} aria-hidden="true" />
          <span>How It Works</span>
        </a>
        <a href={whatsappUrl} className="mobile-bottom-nav__item mobile-bottom-nav__whatsapp"
          target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={20} />
          <span>WhatsApp</span>
        </a>
        <button type="button" className="mobile-bottom-nav__item" onClick={onChat}>
          <MessagesSquare size={20} aria-hidden="true" />
          <span>Chat</span>
        </button>
      </nav>
    </div>
  );
}
