import Accordion from "../components/Accordion";
import faqs from "../data/faqs.json";
import Image from 'next/image';

const FAQSPage = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh',backgroundColor: '#f67570', }}>
            <div style={{ flex: 1, padding: '20px', maxWidth: '300px' }}>
                <Image 
                    src="/images/SignUpPage.png" 
                    alt="iPhone Prototype" 
                    layout="responsive"
                    width={100} 
                    height={300} 
                />
            </div>
            <div style={{ flex: 2, backgroundColor: '#f67570', padding: '20px', color: '#fffff', fontFamily: 'Raleway, sans-serif' }}>
                <h1 style={{ textAlign: 'left', marginBottom: '20px' }}>Frequently Asked Questions</h1>
                <Accordion />
            </div>
        </div>
    );
}

export default FAQSPage;