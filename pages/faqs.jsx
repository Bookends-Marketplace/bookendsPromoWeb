import Image from 'next/image';
import Link from 'next/link';
import Card from "../components/Card";
import faqs from '../data/faqs.json';
import '../app/globals.css';


const FAQSPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f67570]">
         <div className='flex mt-4 sm:mt-8 pl-[2vw]'>
         <Link href="/" passHref>
            <div className='flex h-[15vw] w-[15vw] sm:h-[6vw] sm:w-[6vw] relative margin'>
                <Image
                    src='/images/BookendsLogo.svg'
                    alt='bookends logo image'
                    width={180}
                    height={180}
                    layout="intrinsic"
                />
                <h1 
                    className='text-[16vw] sm:text-[6vw] font-semibold ml-[2vw]'
                    style={{ marginTop: '-1.5vw', maxWidth: '180px', maxHeight: '180px'}}
                >
                bookends
                </h1>
            </div>
        </Link>
            </div>
                <div className="flex-grow flex items-center justify-center p-4">
                    <div className="flex-1 p-5 text-aliceblue">
                        <h1 className="text-3xl mb-5 font-bold font-raleway">Frequently Asked Questions</h1>
                    
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl p-4">
                                {faqs.map((faq, index) => (
                                    <Card key={index} question={faq.question} answer={faq.answer} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default FAQSPage;

