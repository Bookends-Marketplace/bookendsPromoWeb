import Image from 'next/image';
import Subscribe from '../components/Subscribe';

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
              width={80}
              height={80}
              className="rounded-sm"   />
            </div>
            <h1 className='ml-3 -mt-8 font-raleway text-black text-[98px] font-semibold'>
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

        <p className='flex-grow font-raleway text-[24px] font-light w-[60%] mb-3'>
          Whether you&apos;re lighting up your first YouTube scene or crafting
          cinema-scale stories, Bookends is your go-to marketplace. Here,
          creatives of all calibers connect to buy and sell pre-loved gear.
        </p>

          <Subscribe />
      </div>

  
        <div className='flex'>
          <Image
            src='/images/iPhone14.png'
            alt='bookends demo image iphone14'
            width='349'
            height='716'
            sizes='100vw'
            className='p-1 absolute h-auto max-w-xs drop-shadow-2xl right-[245px] top-[22%]'
          />
          <Image
            src='/images/iPhone13.png'
            alt='bookends demo image iphone13'
            width='349'
            height='716'
            className='p-1 absolute h-auto max-w-xs top-[5%] right-[28px] drop-shadow-2xl -z-10'
          />
        </div>
 
    </main>
  );
}
