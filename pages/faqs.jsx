import Accordion from "../components/Accordion";
import faqs from "../data/faqs.json";
import Image from 'next/image';

const FAQSPage = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh',backgroundColor: '#f67570', alignItems: 'center' }}>
            <div style={{ flex: 1, padding: '168px', maxWidth: '300px' }}>
                <Image 
                    src="/images/SignUpPage.png" 
                    alt="iPhone Prototype" 
                    layout="responsive"
                    width={162} 
                    height={330} 
                />
            </div>
            <div style={{ flex: 2, backgroundColor: '#f67570', padding: '20px', color: 'aliceblue', fontFamily: 'Raleway, sans-serif' }}>
                <h1 style={{ textAlign: 'left', marginBottom: '20px' }}>Frequently Asked Questions</h1>
                <Accordion />
            </div>
        </div>
    );
}

export default FAQSPage;