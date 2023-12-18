import { useState } from 'react';
import faqs from '../data/faqs.json';
import '../app/globals.css';


const AccordionItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className="accordion-item">
            <button
                className='flex justify-between items-center w-full p-4 text-left'
                onClick={toggle}
            >
                <span className='text-lg font-medium'>{question}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} p-4`}>
                {answer}
            </div>
        </div>
    );
}

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = index => {
        if (openIndex === index) {
            // If the same index is clicked again, close it
            setOpenIndex(null);
        } else {
            // Open the clicked item
            setOpenIndex(index);
        }
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    toggle={() => toggle(index)}
                />
            ))}
        </div>
    );
}

export default Accordion;
