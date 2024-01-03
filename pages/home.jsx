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
              {/* <div className='w-[2vw] sm:w-[9vw]'></div> */}
              <div className='p-4 m:p-4 flex flex-col h-screen justify-around w-full md:w-4/9'>
                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='font-raleway mt-2 text-[5vw] font-bold  sm:mb-1 sm:text-[3.5vw] font-bold mb-3'>
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
    
                <p
                  className={`mb-4  mt-4 pr-2 sm:p-0 sm:grow-[.05] md:grow-[.2] lg:grow font-raleway font-light text-[4vw] sm:text-[2.1vw] md:text-[2vw] lg:text-[2.05vw] sm:w-[95%] sm:mb-3`}
                >
                  Whether you&apos;re lighting up your first scene or crafting
                  cinema-scale stories, <span className="font-bold">bookends</span> is your go-to marketplace. Here,
                  creatives of all calibers connect to buy and sell pre-loved gear. 
                 
                </p>
                <p
                 className='mb-4 sm:mb-5 md:mb-6 lg:mb-8 font-raleway font-light text-[4vw] sm:text-[2.1vw] md:text-[2vw] lg:text-[2.05vw] w-[95%]'
                >
                  Sign up now for early access!
                </p>
                {/* <div className='w-full'> */}
                  <Subscribe />
                {/* </div> */}
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

