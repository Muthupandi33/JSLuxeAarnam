import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import Loader from '../components/Loader';
import SEOMeta from '../components/SEOMeta';
import { ShoppingBag, ArrowLeft, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, loading } = useProducts();

    const product = useMemo(() => {
        return products.find(p => p.id === id);
    }, [products, id]);

    if (loading) return <div className="pt-32"><Loader /></div>;

    if (!product) {
        return (
            <div className="pt-32 min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-serif mb-6">Product Not Found</h2>
                <Link to="/products" className="text-luxury-gold underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Collection
                </Link>
            </div>
        );
    }

    const whatsappLink = `https://wa.me/+916383812040?text=${encodeURIComponent(
        `Hi JS Luxe Aarnam, I'm interested in ordering:
    
*Product:* ${product.name}
*ID:* ${product.id}
*Price:* ₹${product.discountPrice}
*Description:* ${product.description}

Is this available for wholesale purchase?`
    )}`;

    return (
        <div className="pt-24 min-h-screen bg-luxury-cream page-transition">
            <SEOMeta
                title={product.name}
                description={product.description}
                image={product.imageUrl}
            />

            <div className="container mx-auto px-4 md:px-6 py-12">
                <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-luxury-pink transition-colors mb-8 group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase text-xs tracking-widest font-bold">Back to Collections</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Product Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <span className="text-luxury-pink uppercase tracking-[0.3em] font-bold text-sm mb-4">{product.category}</span>
                        <h1 className="text-3xl md:text-5xl font-serif text-luxury-charcoal mb-6 leading-tight">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-bold text-luxury-charcoal">₹{product.discountPrice?.toLocaleString()}</span>
                            {product.price > product.discountPrice && (
                                <span className="text-xl text-gray-400 line-through">₹{product.price?.toLocaleString()}</span>
                            )}
                            <span className="bg-luxury-pink/10 text-luxury-pink px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                Save ₹{(product.price - product.discountPrice).toLocaleString()}
                            </span>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm mb-8 border-l-4 border-l-luxury-pink">
                            <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-3">Status</h3>
                            <p className="text-luxury-charcoal font-serif text-lg">{product.stockStatus || 'Available'}</p>
                        </div>

                        <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                            {product.description}
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-luxury-pink hover:bg-luxury-pink/90 text-white font-bold py-5 px-10 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all transform active:scale-95 mb-10"
                        >
                            <ShoppingBag size={24} />
                            <span className="text-lg">Order on WhatsApp</span>
                        </a>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-200">
                            <div className="flex flex-col gap-3">
                                <Truck className="text-luxury-pink" size={24} />
                                <h4 className="text-luxury-charcoal text-xs uppercase tracking-widest font-bold">Fast Transit</h4>
                                <p className="text-gray-400 text-[10px] uppercase">Secure Global Shipping</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <ShieldCheck className="text-luxury-pink" size={24} />
                                <h4 className="text-luxury-charcoal text-xs uppercase tracking-widest font-bold">100% Authentic</h4>
                                <p className="text-gray-400 text-[10px] uppercase">Quality Guaranteed</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <RefreshCcw className="text-luxury-pink" size={24} />
                                <h4 className="text-luxury-charcoal text-xs uppercase tracking-widest font-bold">Easy Reorder</h4>
                                <p className="text-gray-400 text-[10px] uppercase">Seamless Wholesale</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
