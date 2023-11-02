import Image from 'next/image';
import Subscribe from '../components/Subscribe';
import { Raleway } from 'next/font/google';

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
        <div className='mt-2 sm:mt-8 sm:flex-grow'>
          <div className='flex mt-[2vw]'>
            <div className='h-[15vw] w-[15vw] sm:h-[6vw] sm:w-[6vw] relative'>
              <Image
                src='/images/logo1.png'
                alt='bookends logo image'
                width={180}
                height={180}
                className='rounded-sm'
              />
            </div>
            <h1
              className={`ml-[2vw] text-[16vw] -mt-[5vw] ${raleway.variable} font-raleway text-black sm:ml-[.2vw] sm:-mt-[1.6vw]  sm:text-[6vw] sm:font-semibold`}
            >
              bookends
            </h1>
          </div>
        </div>

        <h2
          className={`${raleway.variable} font-raleway text-[7.7vw] font-bold mb-3 sm:text-[5vw] font-bold mb-3`}
        >
          Create. Save. Sustain.
        </h2>
        <h2
          className={`${raleway.variable} font-raleway font-light text-[4.2vw] mb-3 sm:text-[3.1vw] sm:flex-grow`}
        >
          Your Second-Hand Creative Marketplace.
        </h2>
        <div className='visible sm:hidden'>
          <div className='ml-auto mr-auto mb-7 w-[55vw] h-[auto]'>
            <Image
              src='/images/iPhone14.png'
              alt='bookends demo image iphone14'
              width='183'
              height='389'
              // sizes='100vw'
              className='relative drop-shadow-2xl'
            />
          </div>
        </div>

        <p
          className={`flex-grow ${raleway.variable} font-raleway font-light sm:text-[1.3vw] sm:w-[95%] sm:mb-3`}
        >
          Whether you&apos;re lighting up your first YouTube scene or crafting
          cinema-scale stories, Bookends is your go-to marketplace. Here,
          creatives of all calibers connect to buy and sell pre-loved gear.
        </p>

        <Subscribe />
      </div>

      <div className='hidden sm:visible sm:flex md:visible lg:visible xl:visisble'>
        <div className='w-[17vw] h-[auto]'>
          <Image
            src='/images/iPhone14.png'
            alt='bookends demo image iphone14'
            width='349'
            height='716'
            // sizes='100vw'
            className='relative drop-shadow-2xl right-[-4vw] top-[20%]'
          />
        </div>
        <div className='w-[17vw] h-[auto]'>
          <Image
            src='/images/iPhone13.png'
            alt='bookends demo image iphone13'
            width='349'
            height='716'
            className='relative top-[6%] right-[1.5vw] drop-shadow-2xl -z-10'
          />
        </div>
      </div>
    </main>
  );
}
