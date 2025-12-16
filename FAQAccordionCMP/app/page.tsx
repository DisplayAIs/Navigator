"use client";

import { useState } from "react";

/*
===========================================================
📘 REVIEW NOTES: Tailwind + Next.js usage in this file
===========================================================

1. Next.js specifics:
   - "use client": Marks this component as a client-side component.
   - import { useState } from "react": React hook for managing state.

2. Tailwind layout classes:
   - relative: Positions the parent so children with absolute can be placed relative to it.
   - min-h-screen: Ensures the container fills the entire viewport height.
   - absolute top-0 left-0: Positions the background image at the top-left corner.
   - w-full h-1/2: Makes the image span full width and half the height of the screen.
   - object-cover: Ensures the image scales to cover its container without distortion.
   - top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2: Centers the card both vertically and horizontally.
   - bg-white p-8 rounded-lg shadow-xl: Styles the card with white background, padding, rounded corners, and shadow.
   - w-full max-w-2xl: Responsive width, capped at ~672px on larger screens.
   - text-left: Ensures all text is left-aligned.

3. Tailwind typography and spacing:
   - text-4xl font-bold mb-4: Large bold heading with bottom margin.
   - flex items-center: Aligns icon and text horizontally and vertically.
   - w-10 h-10 mr-2: Sets icon size and spacing from text.
   - font-semibold text-gray-900: Styles question text.
   - text-gray-600: Styles answer text.

4. Accordion behavior:
   - border-b border-gray-200: Divider line between items (removed for last item).
   - py-4: Vertical padding for each item.
   - flex justify-between: Places question on the left and +/- toggle on the right.
   - overflow-hidden transition-all duration-300: Smooth expand/collapse animation.
   - max-h-40 mt-4 vs max-h-0: Controls accordion open/closed state.

===========================================================
*/

// ✅ Define prop types for AccordionItem
type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
};

function AccordionItem({ question, answer, isOpen, onClick, isLast }: AccordionItemProps) {
  return (
    <div className={`py-4 text-left ${!isLast ? "border-b border-gray-200" : ""}`}>
      <button
        onClick={onClick}
        className="flex justify-between w-full font-semibold text-gray-900 cursor-pointer text-left"
      >
        <span className="text-left">{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-left">{answer}</p>
      </div>
    </div>
  );
}

// ✅ Define FAQ type for clarity
type FAQ = {
  question: string;
  answer: string;
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills...",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges...",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio...",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community...",
    },
  ];

  return (
    <div className="relative min-h-screen bg-purple-600">
      <img
        src="/assets/images/background-pattern-desktop.svg"
        alt="Background pattern"
        className="absolute top-0 left-0 w-full h-1/2 object-cover"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl text-left">
        <h1 className="flex items-center text-4xl font-bold mb-4 text-left">
          <img
            src="/assets/images/icon-star.svg"
            alt="FAQ Icon"
            className="w-10 h-10 mr-2"
          />
          FAQs
        </h1>
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            isLast={i === faqs.length - 1}
          />
        ))}
      </div>
    </div>
  );
}