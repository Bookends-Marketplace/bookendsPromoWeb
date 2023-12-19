import Image from 'next/image';
import Link from 'next/link';
import Card from "../components/Card";
import Nav from '../components/Nav';
import faqs from '../data/faqs.json';
import '../app/globals.css';


const FAQSPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f67570]">
            <Nav />
         <div className='flex mt-4 sm:mt-8 pl-[2vw]'>
            </div>
                <div className="flex items-center p-4">
                    <div className="w-full p-5 text-aliceblue">
                        <h1 className="text-4xl mb-8 font-bold font-raleway text-center">
                            Frequently Asked Questions
                        </h1>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                                {faqs.map((faq, index) => (
                                    <Card key={index} question={faq.question} answer={faq.answer} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQSPage;

