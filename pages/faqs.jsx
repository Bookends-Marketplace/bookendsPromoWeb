import Card from "../components/Card";
import Nav from '../components/Nav';
// import faqs from '../data/faqs.json';
import fs from 'fs';
import path from 'path';
import '../app/globals.css';
import AnimatedSection from "../components/AnimatedSection";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'faqs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const faqs = JSON.parse(fileContents);

    return {
        props: { faqs }
    };
}

const FAQSPage = (faqs) => {

    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <AnimatedSection>
                <div className="flex items-center p-4">
                    <div className="w-full p-5 text-aliceblue">
                        <h1 className="text-4xl mb-8 font-bold font-raleway text-center hidden md:block">
                            Frequently Asked Questions
                        </h1>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                                {faqs.map((faq) => (
                                    <Card key={faq.id} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </AnimatedSection>
        </div>
    );
}

export default FAQSPage;

