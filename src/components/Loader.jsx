import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-luxury-pink/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-luxury-pink rounded-full animate-spin"></div>
            </div>
            <p className="mt-8 font-serif text-luxury-charcoal tracking-[0.3em] uppercase animate-pulse">
                Crafting Luxury...
            </p>
        </div>
    );
};

export default Loader;
