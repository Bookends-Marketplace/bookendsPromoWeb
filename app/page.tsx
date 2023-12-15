import Image from 'next/image';
import Subscribe from '../components/Subscribe';
import { Raleway } from 'next/font/google';
import Link from 'next/link';

const raleway = Raleway({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-Raleway',
});

export default function Home() {
  return (
    <main className='flex'>
      <div className='w-[2vw] sm:w-[9vw]'></div>
      <div className='flex flex-col h-screen justify-around w-full sm:w-4/9'>
        <nav>
          <Link href="/faqs" passHref>
            <h1 className='text-[1.6vw] sm:text-[1.1vw] md:text-[1.1vw] lg:text-[.8vw] font-raleway font-light hover:underline'>
              FAQs
            </h1>
          </Link>
        </nav>
        <div className='mt-4 sm:mt-8 md:grow-[.25] lg:flex-grow'>
          <div className='flex'>
            <div className='h-[15vw] w-[15vw] sm:h-[6vw] sm:w-[6vw] relative'>
              <Image
                src='/images/BookendsLogo.svg'
                alt='bookends logo image'
                width={180}
                height={180}
                className='rounded-sm'
              />
            </div>
            <h1
              className={`ml-[2vw]  text-[16vw] -mt-[5vw] ${raleway.variable} font-raleway sm:-mt-[1.6vw]  sm:text-[6vw] sm:font-semibold`}
            >
              bookends
            </h1>
          </div>
        </div>

        <h2
          className={`${raleway.variable} font-raleway -mt-2 text-[7.7vw] font-bold  sm:mb-1 sm:text-[5vw] font-bold mb-3`}
        >
          Create. Save. Sustain.
        </h2>
        <h2
          className={`${raleway.variable} font-raleway font-light text-[4.2vw] -mt-1 mb-4 sm:mb-5 text-[3.8vw] sm:text-[2.45vw] md:text-[2.45vw] sm:grow-[.1] md:grow-[.28] lg:flex-grow`}
        >
          Your Second-Hand Creative Marketplace.
        </h2>
        <div className='visible sm:hidden'>
          <div className='ml-auto mr-auto flex-grow w-[40vw] h-[auto]'>
            <Image
              src='/images/iPhone14.png'
              alt='bookends demo image iphone14'
              width='183'
              height='389'
              // sizes='100vw'
              className='ml-auto mr-auto drop-shadow-2xl'
            />
          </div>
        </div>

        <p
          className={`mb-4 ${raleway.variable} mt-4 pr-2 sm:p-0 sm:grow-[.05] md:grow-[.2] lg:grow font-raleway font-light text-[4vw] sm:text-[2.1vw] md:text-[2vw] lg:text-[1.4vw] sm:w-[95%] sm:mb-3`}
        >
          Whether you&apos;re lighting up your first YouTube scene or crafting
          cinema-scale stories, Bookends is your go-to marketplace. Here,
          creatives of all calibers connect to buy and sell pre-loved gear.
        </p>

        <Subscribe />
      </div>

      <div className='hidden sm:visible sm:flex sm:mr-5 md:visible lg:visible xl:visisble'>
        <div className='w-[17vw] h-[auto]'>
          <Image
            src='/images/iPhone14.png'
            alt='bookends demo image iphone14'
            width='349'
            height='716'
            // sizes='100vw'
            className='relative drop-shadow-2xl right-[-5vw] top-[10.5%] md:right-[-5vw] md:top-[11.5%] lg:right-[-4vw] lg:top-[19%]'
          />
        </div>
        <div className='w-[17vw] h-[auto]'>
          <Image
            src='/images/iPhone13.png'
            alt='bookends demo image iphone13'
            width='349'
            height='716'
            className='relative top-[6%] right-[1.5vw] md:top-[6%] md:right-[1.5vw] lg:top-[8%] lg:right-[1.5vw] drop-shadow-2xl -z-10'
          />
        </div>
      </div>
    </main>
  );
}
