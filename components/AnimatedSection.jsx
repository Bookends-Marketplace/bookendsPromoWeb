// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion, AnimatePresence } from 'framer-motion';

// const AnimatedSection = ({ children }) => {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         threshold: 0.1 // Adjust threshold to control when the animation should start
//     });

//     return (
//         <div ref={ref}>
//             <AnimatePresence>
//                 {inView && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -50 }}
//                         transition={{ duration: 1 }}
//                     >
//                         {children}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default AnimatedSection;

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Triggers when 50% of the element is visible
        rootMargin: "-30% 0px -30% 0px", // Adjusts the margin around the root
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="min-h-screen flex items-center justify-center" // Ensures each section takes up full viewport height
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
