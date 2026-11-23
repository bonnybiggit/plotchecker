import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import './FAQ.css';

const questions = [
  {
    question: 'What exactly do you check?',
    answer: 'We extract the GPS coordinates from your survey plan and use professional GIS software to plot them on a precise satellite map. We then compare that actual location against the address the seller claims the land is at. This catches the most common fraud in Nigerian real estate where a legitimate survey plan is presented for a completely different piece of land.',
  },
  {
    question: 'My survey plan has no coordinates. Can you still help?',
    answer: 'A survey plan without valid coordinates is itself a serious red flag. Many family land and community land transactions involve survey plans drawn by unlicensed surveyors with no proper coordinates. If your plan has no coordinates, we will flag this clearly in our report and recommend you engage a licensed surveyor before proceeding.',
  },
  {
    question: 'Does this replace a lawyer or licensed surveyor?',
    answer: 'No. We are a fast, affordable first-line intelligence service. We tell you whether the coordinates match the claimed location, something most lawyers do not check and most buyers never do. For final legal title confirmation, you should still engage a property lawyer. Think of us as the check you do before investing time and money in full legal due diligence.',
  },
  {
    question: 'How do I pay?',
    answer: 'Payment is via bank transfer before we begin the verification. We will send you our account details when you contact us on WhatsApp. We accept payment from local Nigerian accounts and international transfers for diaspora clients.',
  },
  {
    question: 'Is my survey plan information safe with you?',
    answer: 'Yes. Your documents are used solely for the purpose of your verification. We do not share your survey plan, location data, or personal information with any third party. All data is handled securely and confidentially.',
  },
  {
    question: 'Do you cover cities outside Lagos?',
    answer: 'Yes. Coordinate verification works for any land in Nigeria because GPS coordinates are universal. We currently serve all states in Nigeria. Contact us on WhatsApp with your location and we will confirm coverage immediately.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const id = useId();

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__container">
        <header className="faq__header">
          <span className="faq__eyebrow">Common Questions</span>
          <h2 id="faq-title">Everything You Need to Know.</h2>
        </header>
        <div className="faq__list">
          {questions.map(({ question, answer }, index) => {
            const isOpen = index === openIndex;
            const questionId = `${id}-question-${index}`;
            const answerId = `${id}-answer-${index}`;
            return (
              <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`} key={question}>
                <h3 className="faq__question-heading">
                  <button className="faq__question" type="button" id={questionId} aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                    <span>{question}</span>
                    <span className="faq__toggle"><Plus size={16} strokeWidth={1.8} aria-hidden="true" /></span>
                  </button>
                </h3>
                <div className="faq__answer" id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen}>
                  <div className="faq__answer-inner"><p>{answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
