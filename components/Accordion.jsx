import { useState } from 'react';
import faqs from '../data/faqs.json';
import './Accordion.css';

const AccordionItem = ({ question, answer }) => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen); 

    return (
        <div className="accordion-item">  
            <button
                className='flex justify-between items-center w full p-4 text-left'
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
    return (
        <div>
            {faqs.map((faq) => (
                <AccordionItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </div>
    );
}

export default Accordion;