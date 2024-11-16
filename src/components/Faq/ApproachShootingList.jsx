import React, { useState } from 'react';

const faqs = [
  {
    question: "What is your approach to shoot a wedding?",
    answer: "We aim to capture the essence of your day in an unobtrusive, candid style, highlighting genuine moments and emotions."
  },
  {
    question: "Where are you guys based? And do you travel?",
    answer: "We are based in [City, Country], but we love to travel and are available for destination weddings worldwide."
  },
  {
    question: "What is the crew size of Epic Stories that is going to cover my wedding?",
    answer: "Our crew size depends on the scale and requirements of your wedding. Typically, we have a team of 3-5 people, including photographers and videographers."
  },
  {
    question: "My wedding is very off-beat, do you shoot non-conventional weddings?",
    answer: "Absolutely! We enjoy capturing unique and unconventional weddings, and we tailor our approach to match your vision."
  },
  {
    question: "What's the deadline for the completion of the project? What are the deliverables from your end?",
    answer: "Final deliverables are handed over between 150 to 180 working days. Within 10 to 15 days, we provide a sneak peek of the event."
  },
  {
    question: "Who picks the music for wedding trailer and film?",
    answer: "We collaborate with you to select the music that best represents your story and style for the wedding trailer and film."
  },
  {
    question: "We're very busy and won't be able to meet. What are our other options?",
    answer: "We offer virtual meetings through video calls to discuss all your needs and preferences in detail."
  },
  {
    question: "How do I reserve you for my date?",
    answer: "To reserve us, a deposit is required along with a signed contract to secure your date."
  }
];

function ApproachShootingList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-900"
            >
              {faq.question}
              <span className={`transform ${activeIndex === index ? 'rotate-180' : ''} transition-transform`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {activeIndex === index && (
              <div className="py-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApproachShootingList;
