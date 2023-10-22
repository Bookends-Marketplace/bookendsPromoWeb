'use clinet';

import '../app/globals.css'

export default function Subscribe() {
  return (
    <>
      <form className='flex-grow mb-4'>
        <input
          className='placeholder-font-raleway placeholder:font-light placeholder:text-[46px] px-4 py-4 rounded-[39px] w-[842px] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-4xl'
          type='email'
          placeholder='Unlock your early access'
        />
      </form>
    </>
  );
}
