import {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import AnimatedSection from '../components/AnimatedSection';
import Image from 'next/image';
import Subscribe from '../components/Subscribe';
import { motion } from 'framer-motion';


const NewHome = () => {
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
            className='min-h-screen flex no-scrollbar' 
            style={{
              overflow: 'hidden',
            }} >
          <div className=' flex flex-col justify-center h-screen w-full md:w-4/9 p-4 md:mt-16'>
                
                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='font-raleway text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3'>
                    Create. Save. Sustain.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className='hidden sm:block font-raleway font-light text-[4.2vw] -mt-1 sm:mb-5 text-[3.8vw] sm:text-[2.45vw] md:text-[2.45vw] sm:grow-[.1] md:grow-[.28] '>
                    Your Creative Marketplace.
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

                <p className='font-raleway font-light text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4'>
                  Whether you&apos;re lighting up your first scene or crafting
                  cinema-scale stories, <span className="font-bold">bookends</span> is your go-to marketplace. Here,
                  creatives of all calibers connect to buy and sell pre-loved gear. 
                 
                </p>
                <div className='hidden sm:flex flex-grow'></div> {/* This div will push the bottom elements up */}
                <p className='font-raleway font-bold text-md text-center sm:text-left md:text-lg lg:text-2xl xl:text-3xl mb-2 md:mb-6'>
                      Sign up now for early access!
                </p>
                  <Subscribe />
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

export default NewHome;

