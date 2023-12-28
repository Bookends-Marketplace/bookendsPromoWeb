import {useEffect} from 'react';
import Nav from '../components/Nav';
import AnimatedSection from '../components/AnimatedSection';
import Image from 'next/image';
import Subscribe from '../components/Subscribe';
import { motion } from 'framer-motion';


const NewHome = () => {

  useEffect(() => {
    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  

    return (
        <>
          <Nav />
          <AnimatedSection>
            <main 
            className='min-h-screen flex mt-8 no-scrollbar' 
            style={{
              overflow: 'hidden',
            }} >
              <div className='w-[2vw] sm:w-[9vw]'></div>
              <div className='flex flex-col h-screen justify-around w-full md:w-4/9'>
                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='font-raleway -mt-2 text-[5vw] font-bold  sm:mb-1 sm:text-[3.5vw] font-bold mb-3'>
                    Create. Save. Sustain.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className='font-raleway font-light text-[4.2vw] -mt-1 mb-4 sm:mb-5 text-[3.8vw] sm:text-[2.45vw] md:text-[2.45vw] sm:grow-[.1] md:grow-[.28] lg:flex-grow'>
                        Your Creative Marketplace.
                </motion.p>
                <div className='visible sm:hidden'>
                  <div className='ml-auto mr-auto flex-grow w-[60vw] h-[auto]'>
                    <Image
                      src='/images/Search.svg'
                      alt='bookends demo image iphone14'
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
                 className={`pr-2 sm:p-0 sm:grow-[.05] md:grow-[.2] lg:grow font-raleway font-light text-[4vw] sm:text-[2.1vw] md:text-[2vw] lg:text-[2.05vw] sm:w-[95%] sm:mb-3`} 
                >
                  Sign up now for early access!
                </p>
                <Subscribe />
              </div>
    
              <div className='hidden sm:visible sm:flex sm:mr-5 md:visible lg:visible xl:visisble'>
                <div className='hidden sm:block sm:w-2/3 lg:w-3/4 xl:w-4/5'>
                  <Image
                    src='/images/Search.svg'
                    alt='bookends demo image iphone14'
                    width={600} 
                    height={1200} 
                    // sizes='100vw'
                    className='relative drop-shadow-2xl right-[-5vw] top-[10.5%] md:right-[-5vw] md:top-[11.5%] lg:right-[-4vw] lg:top-[19%]'
                  />
                </div>
                {/* <div className='w-[17vw] h-[auto]'> */}
                <div className='hidden sm:block sm:w-2/3 lg:w-3/4 xl:w-4/5'>
                  <Image
                    src='/images/ItemPage.svg'
                    alt='bookends demo image iphone13'
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

