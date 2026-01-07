import React from 'react';
import ProductCard from './ProductCard';
import { AnimatePresence, motion } from 'framer-motion';

const ProductGrid = ({ products }) => {
    const validProducts = products.filter(p => p.name && p.price && p.imageUrl);

    if (!validProducts || validProducts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found for this selection.</p>
            </div>
        );
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
            <AnimatePresence mode='popLayout'>
                {validProducts.map((product) => (
                    <motion.div key={product.id} variants={item}>
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProductGrid;
