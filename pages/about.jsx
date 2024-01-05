import {useRef, useEffect} from 'react';
import Nav from '../components/Nav';
import '../app/globals.css';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        // Check if the URL hash is '#contact' and scroll to the Contact component
        if (window.location.hash === '#contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    
    return (
        <>
            <Nav />
            <div className='flex flex-col items-center justify-center p-4'>
            {/* <div className='flex flex-col items-center justify-center p-4 snap-y snap-mandatory' style={{ overflowY: 'scroll', height: '100vh' }}> Enable vertical snapping */}
                <AnimatedSection className='snap-center'>
                    <h1 className='text-aliceblue text-6xl font-bold mb-4'>Reach Out!</h1>
                    <p className='text-aliceblue text-5xl mb-8'>We&apos;re reimagining the way creative gear is shared and sustained.</p>
                </AnimatedSection>

                <AnimatedSection className='snap-center'>
                    <h2 className='text-aliceblue text-6xl font-bold mb-4'>Our Mission</h2>
                    <p className='text-aliceblue text-3xl'>At Bookends, we connect productions and creatives...</p>
                </AnimatedSection>

                <AnimatedSection className='snap-center'>
                    <h2 className='text-aliceblue text-6xl font-bold mb-4'>For Productions</h2>
                    <p className='text-aliceblue text-3xl'>Efficiently manage your inventory, from prep to wrap...</p>
                </AnimatedSection>

                <AnimatedSection className='snap-center'>
                    <h2 className='text-aliceblue text-6xl font-bold mb-4'>For Creatives</h2>
                    <p className='text-aliceblue text-3xl'>Discover deals and unique finds...</p>
                </AnimatedSection>
                </div>
                {/* <div ref={contactRef}>
                    <Contact />
                </div> */}
        </>
    );
};

export default About;
