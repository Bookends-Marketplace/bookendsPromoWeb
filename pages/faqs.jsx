import Card from "../components/Card";
import Nav from '../components/Nav';
import faqs from '../data/faqs.json';
import AnimatedSection from '../components/AnimatedSection';
import '../app/globals.css';


const FAQSPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            {/* <AnimatedSection> */}
                <div className="flex items-center p-4">
                    <div className="w-full p-5 text-aliceblue">
                        <h1 className="text-4xl mb-8 font-bold font-raleway text-center hidden md:block">
                            Frequently Asked Questions
                        </h1>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                                {faqs.map((faq, index) => (
                                    <Card key={index} question={faq.question} answer={faq.answer} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* </AnimatedSection> */}
        </div>
    );
}

export default FAQSPage;

