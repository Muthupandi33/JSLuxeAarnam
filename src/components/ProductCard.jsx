import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const { id, name, category, price, discountPrice, imageUrl, stockStatus } = product;
    const discount = Math.round(((price - discountPrice) / price) * 100);

    const whatsappLink = `https://wa.me/+916383812040?text=${encodeURIComponent(
        `Hi JS Luxe Aarnam, I'm interested in ordering:
    
*Product:* ${name}
*ID:* ${id}
*Price:* ₹${discountPrice}

Is this available?`
    )}`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                <Link to={`/product/${id}`}>
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                </Link>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {discount > 0 && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                            {discount}% OFF
                        </span>
                    )}
                </div>

                {/* Action Buttons Overlay */}
                <div className="absolute inset-x-0 bottom-4 px-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex gap-2">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-luxury-charcoal text-white hover:bg-black font-bold py-3 px-2 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
                        >
                            <ShoppingBag size={16} />
                            <span>Order</span>
                        </a>
                        <Link
                            to={`/product/${id}`}
                            className="p-3 bg-white text-luxury-charcoal hover:text-luxury-pink rounded-lg shadow-lg border border-gray-100 transition-colors"
                        >
                            <Eye size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-1">{category}</p>
                <Link to={`/product/${id}`}>
                    <h3 className="text-luxury-charcoal font-serif text-lg mb-2 group-hover:text-luxury-pink transition-colors line-clamp-1">
                        {name}
                    </h3>
                </Link>
                <div className="flex items-center justify-center gap-3">
                    <span className="text-luxury-pink font-bold text-lg">₹{discountPrice?.toLocaleString()}</span>
                    {price > discountPrice && (
                        <span className="text-gray-400 line-through text-xs">₹{price?.toLocaleString()}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
