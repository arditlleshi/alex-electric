"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul aria-label="Pyetjet e Shpeshta" className="space-y-4">
      {faqs.map((faq, index) => (
        <li
          key={`${faq.question}-${index}`}
          aria-label={faq.question}
          className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
          <button
            type="button"
            onClick={() => toggleFAQ(index)}
            className={`flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-[background-color,color] duration-200 sm:px-6 sm:py-5 ${
              openIndex === index ? "bg-surface-raised" : "hover:bg-surface-muted"
            }`}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-6 text-foreground sm:text-lg">
                {faq.question}
              </h3>
            </div>
            <span
              className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg border transition-[transform,background-color,color,border-color] duration-200 ${
                openIndex === index
                  ? "border-electric-200 bg-electric-50 text-electric-700"
                  : "border-border bg-surface text-muted"
              }`}>
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>

          <div
            id={`faq-content-${index}`}
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              openIndex === index ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
            }`}>
            <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <div
                className="text-sm leading-6 text-muted"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
