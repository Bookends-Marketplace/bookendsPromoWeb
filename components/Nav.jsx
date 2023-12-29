'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';
import { MdBrightness4 } from 'react-icons/md';
import { CgMenuRight } from 'react-icons/cg';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

                <div className=' hidden sm:flex space-x-6'>
                    <Link href="/faqs" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            FAQs
                        </div>
                    </Link>
                    <Link href="/about" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            About 
                        </div>
                    </Link> 
                    <Link href="/about#contact" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            Contact 
                        </div>
                    </Link> 
                    <button onClick={toggleDarkMode}>
                        <MdBrightness4 />
                    </button>
                </div>

                <div className='sm:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    <CgMenuRight className='text-2xl text-aliceblue' />
                </button>
            </div>

                {isMenuOpen && (
                    <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center'>
                        <Link href="/faqs" passHref>
                            <div className='text-aliceblue font-semibold text-xl font-raleway mb-4 cursor-pointer'>
                                FAQs
                            </div>
                        </Link>
                        <Link href="/about" passHref>
                            <div className='text-aliceblue font-semibold text-xl font-raleway mb-4 cursor-pointer'>
                                About
                            </div>
                        </Link>
                        <Link href="/about#contact" passHref>
                            <div className='text-aliceblue font-semibold text-xl font-raleway mb-4 cursor-pointer'>
                                Contact
                            </div>
                        </Link>
                        <button onClick={toggleDarkMode} className='cursor-pointer'>
                            <MdBrightness4 className='text-2xl text-aliceblue' />
                        </button>
                    </div>
                )}
            </div>
    );
}

export default Nav;


