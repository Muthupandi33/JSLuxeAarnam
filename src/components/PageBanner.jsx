import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle, image, className }) => {
    return (
        <div className={`relative ${className || 'h-[60vh] md:h-[50vh]'} flex items-center justify-center overflow-hidden bg-luxury-charcoal`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image || "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2000"}
                    alt={title}
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-100 text-lg md:text-xl font-light tracking-wide leading-relaxed drop-shadow-md"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default PageBanner;
