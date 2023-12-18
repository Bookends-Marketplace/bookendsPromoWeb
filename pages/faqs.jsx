import Accordion from "../components/Accordion";
import Image from 'next/image';
import Link from 'next/link';

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
                <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-8">
                    <Image 
                        src="/images/SignUpPage.png" 
                        alt="iPhone Prototype" 
                        layout="responsive"
                        width={500} 
                        height={1000}
                    />
                </div>
                <div className="flex-1 max-w-xl p-5 text-aliceblue">
                    <h1 className="text-3xl mb-5">Frequently Asked Questions</h1>
                    <Accordion />
                </div>
            </div>
        </div>
    );
}

export default FAQSPage;

