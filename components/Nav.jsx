'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';
import { MdBrightness4 } from 'react-icons/md';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

  

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const renderMenuIcon = () => {
        const iconClass = isDarkMode ? 'text-gradient-dark' : 'text-aliceblue';
        return isMenuOpen ? <CgClose className={`text-2xl ${iconClass}`} /> : <CgMenuRight className={`text-2xl ${iconClass}`} />;
    };
 

    return (
        <div className='p-4 flex justify-between items-center md:p-4'>
                <Link href="/home" passHref>
                    <div className='flex items-center '>
                        <h1 
                            className='text-aliceblue font-semibold md:text-3xl ml-0 font-raleway] link-hover-effect link-hover-effect-dark'
                            style={{ maxWidth: '180px', maxHeight: '180px', fontSize: '32px', fontFamily: 'Raleway, sans-serif', letterSpacing: '1px' }}
                        >
                        bookends
                        </h1>
                        
                    </div>
                </Link>

                <div className=' hidden sm:flex space-x-6'>
                    <Link href="/faqs" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway link-hover-effect link-hover-effect-dark'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            FAQs
                        </div>
                    </Link>
                    <Link href="/about" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway link-hover-effect link-hover-effect-dark'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            About 
                        </div>
                    </Link> 
                    <Link href="/contact" passHref>
                        <div 
                            className='text-aliceblue font-semibold text-xl font-raleway link-hover-effect link-hover-effect-dark'
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            Contact 
                        </div>
                    </Link> 
                    <button onClick={toggleDarkMode}>
                        <MdBrightness4 />
                    </button>
                </div>

                <button onClick={toggleDarkMode} className='sm:hidden cursor-pointer'>
                    <MdBrightness4 className='text-2xl text-aliceblue' />
                </button>

                <div className='z-50 sm:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {renderMenuIcon()}
                    </button>
                </div>

                {isMenuOpen && (
                    
                    <div 
                        className='absolute top-0 left-0 h-full w-full  bg-opacity-90 z-10 flex flex-col items-center justify-center animate-fadeIn'
                        style={{
                            background: isDarkMode 
                                ? 'linear-gradient(to bottom, #2D2D2D, #1A1A1A)' 
                                : 'linear-gradient(to bottom, #F67570, #F55350)',
                        }}
                        >
                        <Link href="/home" passHref>
                            <div className='flex items-center '>
                                <h1 
                                    className='text-aliceblue font-semibold text-5xl ml-0 font-raleway] link-hover-effect link-hover-effect-dark mb-8'
                                    style={{ maxWidth: '180px', maxHeight: '180px', fontSize: '32px', fontFamily: 'Raleway, sans-serif', letterSpacing: '1px' }}
                                >
                                bookends
                                </h1>
                                
                            </div>
                        </Link>
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
                        <Link href="/contact" passHref>
                            <div className='text-aliceblue font-semibold text-xl font-raleway mb-4 cursor-pointer'>
                                Contact
                            </div>
                        </Link>
                    </div>
                )}
            </div>
    );
}

export default Nav;


