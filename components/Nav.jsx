import Link from 'next/link';

const Nav = () => {
    return (
        <div className='bg-[#f67570] p-4 shadow-md flex justify-between items-center'>
                <Link href="/" passHref>
                    <div lassName='flex items-center'>
                        <h1 
                            className='text-aliceblue font-semibold text-5xl ml-0 font-raleway]'
                            style={{ maxWidth: '180px', maxHeight: '180px'}}
                        >
                        bookends
                        </h1>
                    </div>
                </Link>
                <Link href="/faqs" passHref>
                <div className='text-aliceblue font-semibold text-2xl font-raleway'>
                    FAQs
                </div>
            </Link>
            </div>
    );
}

export default Nav;



// const Nav = () => {
//     return (
//         <div className='bg-[#f67570] p-4 shadow-md flex justify-between items-center'>
//             <Link href="/" passHref>
//                 <div className='flex items-center'>
//                     <h1 
//                         className='text-aliceblue font-semibold text-5xl font-raleway'
//                         style={{ maxWidth: '180px', maxHeight: '180px'}}
//                     >
//                         bookends
//                     </h1>
//                 </div>
//             </Link>
//             <Link href="/faqs" passHref>
//                 <div className='text-aliceblue font-semibold text-2xl font-raleway'>
//                     FAQs
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default Nav;
