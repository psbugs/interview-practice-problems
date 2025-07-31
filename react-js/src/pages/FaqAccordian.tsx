import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "../styles/faqStyles.css";

const faqs = [
    {
        question: "What is this app about?",
        answer: "This app helps users track and improve their daily habits.",
    },
    {
        question: "How do I reset my password?",
        answer:
            "Click on 'Forgot Password' on the login screen and follow instructions.",
    },
    {
        question: "Can I use this app offline?",
        answer: "Yes, some features are available offline after the initial setup.",
    },
];

function FaqAccordian() {
    const [faqItem, setFaqItem] = useState<null>(null);
    const [isSelected, setSelected] = useState(false)
    console.log('faqItem', faqItem);
    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div onClick={() => { setFaqItem(index); setSelected(!isSelected) }} className="faq-item" key={index}>
                    <button className="faq-question">
                        <span>{faq.question}</span >
                        <span className="faq-icon">
                            {index === faqItem ? <FiChevronDown /> : <FiChevronUp />}
                        </span>
                    </button>
                    {isSelected && index === faqItem && <div className="faq-answer">{faq.answer}</div>}
                </div>
            ))
            }
        </div >
    );
}

export default FaqAccordian;
