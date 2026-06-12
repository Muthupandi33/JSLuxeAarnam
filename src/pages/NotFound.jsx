import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-luxury-cream flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            <SEOMeta title="404 - Not Found" />

            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-pink/10 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                <h1 className="text-[150px] md:text-[200px] font-serif text-luxury-pink/20 leading-none mb-4">333</h1>
                <h2 className="text-2xl md:text-3xl font-serif text-luxury-charcoal mb-8 tracking-widest uppercase">Elegance is lost...</h2>
                <p className="text-gray-500 max-w-md mx-auto mb-12 text-lg font-light">
                    The page you are looking for has been moved or doesn't exist in our current collection.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-luxury-pink text-white font-bold px-12 py-4 rounded-full transition-all hover:bg-luxury-pink-light hover:shadow-lg transform active:scale-95"
                >
                    Return to Boutique
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
