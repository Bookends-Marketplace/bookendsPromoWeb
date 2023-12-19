import Link from 'next/link';

const Nav = () => {
    return (
        <div className='bg-[#f67570] p-4 shadow-md'>
            <div className='flex justify-start items-center pl-4'>
                <Link href="/" passHref>
                    <div className='flex h-[15vw] w-[15vw] sm:h-[6vw] sm:w-[6vw] relative margin'>
                        <h1 
                            className='text-aliceblue font-semibold text-5xl ml-2 font-raleway]'
                            style={{ marginTop: '-1.5vw', maxWidth: '180px', maxHeight: '180px'}}
                        >
                        bookends
                        </h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Nav;