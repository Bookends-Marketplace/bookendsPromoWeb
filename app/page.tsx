import Image from 'next/image';
import Subscribe from '../componments/Subscribe';

export default function Home() {
  return (
    <main className='flex'>
      <div className='w-[9vw]'></div>
      <div className='flex flex-col h-screen justify-around w-4/9'>
        <div className='mt-8 flex-grow'>
          <div className='flex mt-8'>
            <div className='h-20 w-20 relative'>
            <Image
              src='/images/logo1.png'
              alt='bookends logo image'
              layout="fill" 
              objectFit="cover"
              className="rounded-sm"   />
            </div>
            <h1 className='ml-3 -mt-7 font-raleway text-black text-[95px] font-black '>
              bookends
            </h1>
          </div>
        </div>

        <h1 className='font-raleway text-[96px] font-bold mb-3'>
          Create. Save. Sustain.
        </h1>
        <h1 className='font-raleway text-[47px] font-light flex-grow'>
          Your Second-Hand Creative Marketplace.
        </h1>

        <p className='flex-grow font-raleway text-[24px] font-light w-[75%] mb-3'>
          Whether you&apos;re lighting up your first YouTube scene or crafting
          cinema-scale stories, Bookends is your go-to marketplace. Here,
          creatives of all calibers connect to buy and sell pre-loved gear.
        </p>

          <Subscribe />
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
            className='absolute ml-2 -top-[14%] -right-[138px] drop-shadow-4xl'
          />
        </div>
      </div>
    </main>
  );
}
