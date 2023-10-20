'use clinet';

import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex'>
      <div className='w-[9vw]'></div>
      <div className='flex flex-col h-screen justify-around w-4/9'>
        <div className='flex mt-6 mb-6'>
          <Image
            src='/images/logo1.png'
            alt='bookends logo image'
            width='124'
            height='124'
            sizes='100%'
          />
          <h1 className='ml-3 md:flex text-black text-9xl font-bold font-raleway'>bookends</h1>
        </div>

        <h1 className='font-raleway text-5xl font-bold mb-3'>Create. Save. Sustain.</h1>
        <h1 className='font-raleway text-5xl font-light flex-grow'>
          Your Second-Hand Creative Marketplace.
        </h1>

        <p className='font-raleway text-xl font-light w-[65%] mb-3'>
          Whether you&apos;re lighting up your first YouTube scene or crafting
          cinema-scale stories, Bookends is your go-to marketplace. Here,
          creatives of all calibers connect to buy and sell pre-loved gear.
        </p>

        <form className='flex-grow mb-4'>
          <input
            className='placeholder-font-raleway placeholder-black placeholder:font-light placeholder:text-5xl px-4 py-6 rounded-[39px] w-[94%] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-4xl'
            type='email'
            placeholder='Secure Early Access: Join the waitlist!'
          />
        </form>
      </div>

      <div className='flex-1  no-scrollbar w-4/9'>
        <div className='flex static'>
          <Image
            src='/images/iPhone14.png'
            alt='bookends demo image iphone14'
            width='349'
            height='716'
            // sizes='100vw'
            className='absolute ml-8 bottom-4 drop-shadow-4xl'
          />
          <Image
            src='/images/iPhone13.png'
            alt='bookends demo image iphone13'
            width='349'
            height='716'
            // sizes='100vw'
            className='absolute ml-2 -top-[14%] -right-[138px] drop-shadow-4xl'
          />
        </div>
      </div>
    </main>
  );
}
