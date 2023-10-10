'use clinet';

import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex-col align-center items-center justify-center m-24 '>
      <h1 className='align-center text-center text-white ease-linear duration-75 text-black text-2xl font-bold'>
        Waste not, sell more
      </h1>
      <h1 className='align-center text-center text-white text-4xl ease-linear duration-100 font-bold mb-8'>
        Bookends Marketplace
      </h1>

      <Image
        src='/images/bookends1.png'
        alt='bookends demo image'
        width='0'
        height='0'
        sizes='100vw'
        className='w-1/2 h-auto m-auto'
      />

      <p className='text-center text-black font-bold m-8'>
        Bookends Marketplace is a place to buy and sell any production related items. Sign up for our newsletter to stay up to date on our launch. We will never share your email. We will never send you spam. We will never sell your email. We will never send you anything unrelated to Bookends Marketplace.
      </p>

      <form>
        <div className=' flex flex-col items-center text-black-400 focus-within:text-black-600 text-black p-6'>
          <input
            className='ml-2 px-4 py-2 border rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
            type='email'
            placeholder='user@bookends.com'
          />
        </div>
      </form>
    </main>
  );
}
