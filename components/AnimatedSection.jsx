import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    const [ref, inView] = useInView({
        // triggerOnce: true,
        threshold: 0.1, // Adjust this to control when the animation triggers
    });

    return (
        <div ref={ref} className="section-container"  style={{ minHeight: '100vh' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default AnimatedSection;
