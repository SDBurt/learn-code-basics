"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface QAItem {
  question: string;
  answer: string;
}

interface SlideQAProps {
  items: QAItem[];
}

export function SlideQA({ items }: SlideQAProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="mt-6 stagger-item">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-500 mb-3">
        Common Questions
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between cursor-pointer px-4 py-3 rounded-xl bg-white border border-sage-200 hover:border-sage-300 transition-colors"
              >
                <span className="text-sm font-medium text-foreground text-left">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-sage-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="mt-1 bg-sage-50 rounded-xl border border-sage-100">
                  <p className="px-4 py-3 text-sm text-warm-gray leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
