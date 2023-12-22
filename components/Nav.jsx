import Link from 'next/link';
import '../app/globals.css';

const Nav = () => {
    return (
        <div className='bg-[#f67570] p-4 flex justify-between items-center'>
                <Link href="/home" passHref>
                    <div className='flex items-center'>
                        <h1 
                            className='text-aliceblue font-semibold text-5xl ml-0 font-raleway]'
                            style={{ maxWidth: '180px', maxHeight: '180px', fontSize: '32px', fontFamily: 'Raleway, sans-serif', letterSpacing: '1px' }}
                            // style={{ maxWidth: '180px', maxHeight: '180px'}}
                        >
                        bookends
                        </h1>
                    </div>
                </Link>
                <div className='flex space-x-6'>
                    <Link href="/faqs" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            FAQs
                        </div>
                    </Link>
                    <Link href="/contact" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            Contact 
                        </div>
                    </Link> 
                </div>
            </div>
    );
}

export default Nav;


