import './WhoItsFor.css';

const audiences = [
  { title: 'Individual Buyers', icon: '/images/audience-house-3d.png', tone: 'emerald', text: 'Buying your first plot or family land. Protect your life savings before you transfer a kobo.' },
  { title: 'Diaspora Nigerians', icon: '/images/audience-plane-3d.png', tone: 'amber', text: 'Buying from abroad and cannot visit? We are your eyes on the ground. Remote verification available.' },
  { title: 'Real Estate Agents', icon: '/images/audience-handshake-3d.png', tone: 'rose', text: 'Pre-verify your listings and close deals faster. A "Plotchecker Verified" tag builds client trust instantly.' },
  { title: 'Property Lawyers', icon: '/images/audience-scales-3d.png', tone: 'plum', text: 'Outsource field verification to us. We handle the ground work so you can focus on the legal work.' },
  { title: 'Developers', icon: '/images/audience-construction-3d.png', tone: 'amber', text: 'Before committing hundreds of millions, know exactly what you are buying and what risks exist.' },
  { title: 'Banks & Fintechs', icon: '/images/audience-bank-3d.png', tone: 'emerald', text: 'Property-backed loans need verified collateral. We provide fast, reliable verification for your portfolio.' },
];

export default function WhoItsFor() {
  return (
    <section className="audiences" aria-labelledby="audiences-title">
      <div className="audiences__container">
        <header className="audiences__header">
          <span className="audiences__eyebrow">Who This Is For</span>
          <h2 id="audiences-title">{'If You Are Buying Land in Nigeria  This Is For You.'}</h2>
        </header>
        <div className="audiences__grid">
          {audiences.map(({ title, icon, tone, text }) => (
            <article className="audiences__card" key={title}>
              <span className={`audiences__icon audiences__icon--${tone}`}><img src={icon} alt="" width="32" height="32" loading="lazy" decoding="async" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
