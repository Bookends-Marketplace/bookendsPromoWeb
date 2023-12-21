import React from 'react';
import '../app/globals.css';
import Nav from '../components/Nav';
import { motion } from 'framer-motion';



const Contact = () => {
    return (
        <>
            <Nav />
            <div className='min-h-screen bg-[#f67570] flex flex-col items-center justify-center p-4'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='text-center mb-8'
                >
                    <h1 className='text-aliceblue text-5xl font-bold mb-4'>Contact Bookends</h1>
                    <p className='text-aliceblue text-xl'>We'd love to hear from you!</p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'
                >
                    <form>
                        {/* Name Field */}
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                                Name
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your Name'/>
                        </div>

                        {/* Email Field */}
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Your Email'/>
                        </div>

                        {/* Message Field */}
                        <div className='mb-6'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                                Message
                            </label>
                            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' placeholder='Your Message'></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='flex items-center justify-between'>
                            <button className='bg-[#f67570] hover:bg-[#f55350] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
};

export default Contact;


// import React from 'react';
// import Nav from '../components/Nav';
// import AnimatedSection from '../components/AnimatedSection';

// const Contact = () => {
//     return (
//         <>
//             <Nav />
//             <div className='bg-[#f67570] flex flex-col items-center justify-center'>
//                 <AnimatedSection>
//                     <h1 className='text-aliceblue text-5xl font-bold mb-4'>Contact Bookends</h1>
//                     <p className='text-aliceblue text-xl'>We're reimagining the way creative gear is shared and sustained.</p>
//                 </AnimatedSection>

//                 <AnimatedSection>
//                     <h2 className='text-aliceblue text-3xl font-bold'>Our Mission</h2>
//                     <p className='text-aliceblue text-lg'>At Bookends, we connect productions and creatives...</p>
//                 </AnimatedSection>

//                 <AnimatedSection>
//                     <h2 className='text-aliceblue text-3xl font-bold'>For Productions</h2>
//                     <p className='text-aliceblue text-lg'>Efficiently manage your inventory...</p>
//                 </AnimatedSection>

//                 <AnimatedSection>
//                     <h2 className='text-aliceblue text-3xl font-bold'>For Creatives</h2>
//                     <p className='text-aliceblue text-lg'>Discover deals and unique finds...</p>
//                 </AnimatedSection>

//                 <AnimatedSection>
//                     {/* Contact Form */}
//                     <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 1 }}
//                             className='text-center mb-8'
//                         >
//                             <h1 className='text-aliceblue text-5xl font-bold mb-4'>Contact Bookends</h1>
//                             <p className='text-aliceblue text-xl'>We'd love to hear from you!</p>
//                         </motion.div>

//                         <motion.div
//                             initial={{ scale: 0.8 }}
//                             animate={{ scale: 1 }}
//                             transition={{ duration: 0.5 }}
//                             className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'
//                         >
//                             <form>
//                                 {/* Name Field */}
//                                 <div className='mb-4'>
//                                     <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
//                                         Name
//                                     </label>
//                                     <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your Name'/>
//                                 </div>

//                                 {/* Email Field */}
//                                 <div className='mb-4'>
//                                     <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
//                                         Email
//                                     </label>
//                                     <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Your Email'/>
//                                 </div>

//                                 {/* Message Field */}
//                                 <div className='mb-6'>
//                                     <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
//                                         Message
//                                     </label>
//                                     <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' placeholder='Your Message'></textarea>
//                                 </div>

//                                 {/* Submit Button */}
//                                 <div className='flex items-center justify-between'>
//                                     <button className='bg-[#f67570] hover:bg-[#f55350] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
//                                         Send Message
//                                     </button>
//                                 </div>
//                             </form>
//                         </motion.div>
//                 </AnimatedSection>
//             </div>
//         </>
//     );
// };

// export default Contact;



