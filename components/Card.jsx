import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Card = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex-1"> {/* Add flex properties to make each card independent */}
            <div 
                className={`bg-white p-4 rounded-lg shadow-xl transition-all ease-in-out ${isOpen ? 'mb-6' : 'mb-4'} hover:bg-gray-10 cursor-pointer card`}
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    minHeight: isOpen ? 'auto' : '110px', 
                }}
            >
                <div>
                    <span className='text-lg font-medium font-raleway text-gray-800'>{question}</span>
                </div>
                <div className={`mt-4 text-gray-600 font-raleway transition-all ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ transitionDuration: isOpen ? '1500ms' : '700ms' }}
                >
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default Card;

