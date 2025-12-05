import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I list my services on the platform?",
      answer:
        "To list your services, go to the provider dashboard → Services → Add New Service. Fill in your details, pricing, and availability.",
    },
    {
      question: "How do I manage bookings?",
      answer:
        "Open the Booking Management section where you can accept, reject, or mark bookings as completed.",
    },
    {
      question: "How do I receive payments?",
      answer:
        "Payments are automatically transferred to your registered bank account after the event is marked as completed.",
    },
    {
      question: "Can I block a customer?",
      answer:
        "Yes, providers can block users from making future bookings if necessary. Go to Manage Users → Block.",
    },
    {
      question: "How do I update my profile or business details?",
      answer:
        "Go to Profile Settings to update business name, contact details, photos, and address.",
    },
  ];

  return (
    <div className="p-6 w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white transition"
          >
            {/* QUESTION */}
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold text-gray-700">
                {faq.question}
              </span>

              {openIndex === index ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </button>

            {/* ANSWER */}
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
