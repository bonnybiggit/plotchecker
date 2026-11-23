import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, MessagesSquare } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import WhatsAppIcon from "./WhatsAppIcon";
import { openHeroChat } from "../lib/heroChat";
import "./Navbar.css";

const defaultLinks = [
  { label: "How It Works", href: "#how" },
];

function ContactAction({ href, onClick, children, className, label }) {
  if (href) return <a className={className} href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button type="button" className={className} onClick={onClick} disabled={!onClick}
    title={!onClick ? `${label} is not configured yet` : undefined}>{children}</button>;
}

export default function Navbar({ links = defaultLinks, whatsappUrl, liveChatUrl, onLiveChat = openHeroChat }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event) {
      if (event.key === "Escape") { setOpen(false); menuRef.current?.focus(); }
    }
    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 1040px)");
    function onResize(event) { if (event.matches) setOpen(false); }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="pc-navbar" ref={headerRef}>
      <div className="pc-nav-inner">
        <a href="/" className="pc-brand" aria-label="Plotchecker home">
          <img src="/images/logo.png" alt="Plotchecker" width="795" height="198" />
        </a>
        <div className={`pc-panel${open ? " is-open" : ""}`} id={panelId}>
          <div className="pc-panel-content">
          <nav className="pc-links" aria-label="Main navigation">
            {links.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          </nav>
          <div className="pc-contact">
            <ContactAction href={whatsappUrl} onClick={() => setOpen(false)} className="pc-whatsapp" label="WhatsApp">
              <WhatsAppIcon size={18} /><span>WhatsApp</span><ArrowUpRight size={15} aria-hidden="true" />
            </ContactAction>
            <ContactAction href={liveChatUrl} onClick={() => { setOpen(false); if (!liveChatUrl) onLiveChat?.(); }} className="pc-chat" label="Live Chat">
              <MessagesSquare size={17} aria-hidden="true" /><span>Live Chat</span>
            </ContactAction>
          </div>
          </div>
        </div>
        <div className="pc-controls">
          <ThemeToggle />
          <button ref={menuRef} type="button" className="pc-icon pc-menu" aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}>
            <span className="pc-menu-lines" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </div>
    </header>
  );
}
