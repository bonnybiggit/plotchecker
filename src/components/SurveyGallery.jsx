import './SurveyGallery.css';

const cases = [
  {
    image: '/images/waterbody.png', category: 'Water body',
    title: 'Plot on Paper, Lagoon in Reality',
    description: 'Survey plan claimed 600sqm in Ibeju-Lekki. Satellite showed the exact coordinates fell in a tidal lagoon. Buyer saved ₦8M.',
    alt: 'Survey drawing compared with an aerial river and wetland illustration.',
  },
  {
    image: '/images/already%20built.png', category: 'Already built',
    title: 'Sold as Empty Land, Already Developed',
    description: "Plan described virgin land in Epe. Imagery revealed a 3-bedroom house built 4 years prior. Someone else's property entirely.",
    alt: 'Survey drawing compared with an aerial illustration of an existing developed compound.',
  },
  {
    image: '/images/on%20road.png', category: 'On road',
    title: "Land That Doesn't Exist",
    description: 'Coordinates from a "registered" survey plan mapped directly onto an existing paved road in Abuja. Pure fiction on paper.',
    alt: 'Survey drawing compared with an aerial road illustration showing a conflicting plot location.',
  },
];

export default function SurveyGallery() {
  return (
    <section className="survey-gallery" aria-labelledby="survey-gallery-title">
      <div className="survey-gallery__container">
        <header className="survey-gallery__header">
          <span className="survey-gallery__eyebrow">Real Cases</span>
          <h2 id="survey-gallery-title">Red Flags We've Caught</h2>
          <p>These are real patterns we see every week. A survey plan alone won't reveal them.</p>
        </header>
        <div className="survey-gallery__grid">
          {cases.map((item, index) => (
            <article className="survey-gallery__card" key={item.category}>
              <div className="survey-gallery__image-link">
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              </div>
              <div className="survey-gallery__body">
                <div className="survey-gallery__meta"><span className="survey-gallery__tag">{item.category}</span><span className="survey-gallery__number" aria-hidden="true">0{index + 1}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
