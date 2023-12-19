import { useState } from 'react';

const Card = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`bg-white p-4 rounded-lg shadow transition-all duration-500 ${isOpen ? 'mb-6' : 'mb-4'} hover:bg-gray-100 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
            style={{ minHeight: isOpen ? 'auto' : '100px' }}
        >
            <div className='flex items-center'>
                <span className='text-lg font-medium font-raleway text-gray-800'>{question}</span>
            </div>
            <div className={`mt-4 text-gray-600 font-raleway transition-all ease-in-out duration-1000 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {answer}
            </div>
        </div>
    );
};

export default Card;
