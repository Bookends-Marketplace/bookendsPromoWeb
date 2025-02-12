import {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import AnimatedSection from '../components/AnimatedSection';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to update state based on the presence of 'dark-mode' class
    const updateDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };

    // Check dark mode on initial render
    updateDarkMode();

    // Event listener to update state whenever the class changes
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []);

  const getImageSrc = (imageName) => {
    return isDarkMode ? `/images/${imageName}Dark.svg` : `/images/${imageName}.svg`;
  };

  

    return (
        <>
          <Nav />
          <AnimatedSection>
            <main 
            className='min-h-screen flex no-scroll'>
              <div className=' flex flex-col justify-center h-screen w-full md:w-4/9 p-4 md:mt-16'>
                    
                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='no-scrollbar font-raleway font-bold mb-2 md:mb-3'
                    style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: '1.2' }}
                >
                    Fuel Your Creativity. Buy & Sell with Ease.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className='hidden sm:block font-raleway font-light -mt-1 sm:mb-5 sm:grow-[.1] md:grow-[.28]'
                    style={{ fontSize: 'clamp(1.2rem, 2.45vw, 2rem)', lineHeight: '1.4' }}  
                  >
                    The resale platform for creatives.
                </motion.p>
                <div className='visible sm:hidden'>
                  <div className='ml-auto mr-auto flex-grow w-[60vw] h-[auto]'>
                    <Image
                      src={getImageSrc('Search')}
                      alt='bookends search page'
                      width={200}  
                      height={424} 
                      className='ml-auto mr-auto drop-shadow-2xl'
                    />
                  </div>
                </div>

                <p 
                  className='font-raleway font-light mb-4'
                  style={{ fontSize: 'clamp(1rem, 2.1vw, 1.8rem)', lineHeight: '1.6' }}
                >
                    Whether you&apos;re starting a project, bringing an idea to life, or looking for inspiration, <span className="font-bold">bookends</span> helps creatives buy and sell the tools and materials they need.
                </p>
                {/* <div className='hidden sm:flex flex-grow'></div> This div will push the bottom elements up */}
                <div className="flex flex-col items-center sm:items-start gap-2 my-8">
                  <p className="text-l font-bold text-center sm:text-left text-black dark:text-white">
                      Get the app to start buying & selling today!
                  </p>
                  <a 
                      href="https://apps.apple.com/us/app/bookends-marketplace/id6480121985" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                  >
                      <Image
                          src="/images/app-store-badge.svg" 
                          alt="Download on the App Store"
                          width={240}  // Increased size
                          height={85}
                          className="w-[240px] h-auto"
                      />
                  </a>
                </div>
              </div>
              <div className='hidden sm:visible sm:flex sm:mr-5 md:visible lg:visible xl:visisble'>
                <div className='hidden sm:block sm:w-2/3 lg:w-3/4 xl:w-4/5'>
                  <Image
                    src={getImageSrc('Search')}
                    alt='bookends search page'
                    width={600} 
                    height={1200} 
                    className='relative drop-shadow-2xl right-[-5vw] top-[10.5%] md:right-[-5vw] md:top-[11.5%] lg:right-[-4vw] lg:top-[19%]'
                  />
                </div>
                <div className='hidden sm:block sm:w-2/3 lg:w-3/4 xl:w-4/5'>
                  <Image
                    src={getImageSrc('ItemPage')}
                    alt='bookends Item page'
                    width={600} 
                    height={1200} 
                    className='relative top-[6%] right-[1.5vw] md:top-[6%] md:right-[1.5vw] lg:top-[8%] lg:right-[1.5vw] drop-shadow-2xl -z-10'
                  />
                </div>
              </div>
          
            </main>
          </AnimatedSection>        
         </>
      );
};

export default Home;
