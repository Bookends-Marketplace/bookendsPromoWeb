import Link from 'next/link';
import '../app/globals.css';
import { MdBrightness4 } from 'react-icons/md';


const Nav = () => {
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    };

    return (
        <div className='p-4 flex justify-between items-center'>
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
                    {/* <button onClick={toggleDarkMode}>
                        <MdBrightness4 />
                    </button> */}
                </div>
            </div>
    );
}

export default Nav;


