'use clinet';

import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex'>
      <div className='w-[9vw]'></div>
      <div className='flex flex-col h-screen justify-around w-4/9'>
        <div className='flex-grow mt-4'>
        <Image
          src='/images/logo1.png'
          alt='bookends logo image'
          width='124'
          height='124'
          sizes='100vw'
        />
        </div>
        <h1 className='text-black text-9xl font-extrabold flex-grow mb-14'>Bookends</h1>
        <h1 className='text-5xl font-bold mb-3'>Create. Save. Sustain.</h1>
        <h1 className='text-5xl font-light flex-grow'>
          Your Second-Hand Creative Marketplace.
        </h1>

        <form className='mb-auto flex-grow mb-4'>
            <input
              className='placeholder-black placeholder:font-light placeholder:text-5xl px-4 py-6 rounded-[39px] w-[94%] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-4xl'
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
