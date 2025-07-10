"use client";

import { useState } from "react";

export default function FAQAccordion({
  faqs,
}: {
  faqs: { question: string; answer: React.ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="relative card-modern overflow-hidden group">
          {/* Main Button */}
          <button
            onClick={() => toggleFAQ(index)}
            className="relative w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 z-10"
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <div
                  className={`w-8 h-8 gradient-electric rounded-full flex items-center justify-center transition-all duration-300 transform ${
                    openIndex === index ? "rotate-180 scale-110" : "scale-100"
                  }`}>
                  <svg
                    className="w-4 h-4 text-white transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Accordion Content */}
          <div
            id={`faq-content-${index}`}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}>
            <div className="px-8 pb-6">
              <div className="pt-2 border-t border-gray-100 text-gray-600 leading-relaxed mt-4">
                {faq.answer}
              </div>
            </div>
          </div>

          {/* Hover shimmer effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
