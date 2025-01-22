import { motion } from 'framer-motion';

const Hero = () => (
    <section id="hero" className="h-screen flex items-center justify-center">
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold"
        >
            Hi, I&apos;m Jean-Eudes Assogba.
        </motion.h1>
    </section>
);
export default Hero;
