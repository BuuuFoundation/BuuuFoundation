
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:text-rose-600 transition-colors focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-800 pr-8">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-rose-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed font-light italic">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <Helmet>
        <title>FAQ | Buuu Foundation</title>
        <meta name="description" content="Frequently Asked Questions about Buuu Foundation, our mission, and how to donate." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex p-3 bg-rose-100 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-rose-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 font-serif mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 max-w-xl mx-auto font-light">
            Everything you need to know about Buuu Foundation, our name, and how we utilize your support.
          </p>
        </div>

        <div className="space-y-16">
          {FAQ_DATA.map((category) => (
            <div key={category.category} className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-xs font-bold text-rose-600 uppercase tracking-[0.3em] mb-8 border-b border-rose-100 pb-4 inline-block">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.questions.map((item, i) => (
                  <FAQItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 font-serif">Still have questions?</h3>
            <p className="text-slate-400 mb-8 font-light italic">We are here to help. Contact us directly for any specific clarifications.</p>
            <a
              href="#/contact"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-rose-700 transition-all"
            >
              Contact Support
            </a>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
