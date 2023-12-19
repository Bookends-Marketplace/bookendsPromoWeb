import { useState } from 'react';

const Card = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex-1"> {/* Add flex properties to make each card independent */}
            <div 
                className={`bg-white p-4 rounded-lg shadow-xl transition-all ease-in-out ${isOpen ? 'mb-6' : 'mb-4'} hover:bg-gray-1000 cursor-pointer`}
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    minHeight: isOpen ? 'auto' : '100px', 
                    transitionDuration: isOpen ? '1200ms' : '500ms' // Slower when opening, faster when closing
                }}
            >
                <div>
                    <span className='text-lg font-medium font-raleway text-gray-800'>{question}</span>
                </div>
                <div className={`mt-4 text-gray-600 font-raleway transition-all ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ transitionDuration: isOpen ? '2000ms' : '500ms' }}
                >
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default Card;

