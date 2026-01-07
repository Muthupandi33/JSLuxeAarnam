import React, { useState, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/ProductGrid';
import Loader from '../components/Loader';
import SEOMeta from '../components/SEOMeta';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import productsBanner from '../assets/products.avif';

import PageBanner from '../components/PageBanner';

const Products = () => {
    const { products, loading } = useProducts();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const categories = useMemo(() => {
        const cats = products.map(p => p.category);
        return ['All', ...new Set(cats)];
    }, [products]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchCategory = activeCategory === 'All' || product.category === activeCategory;
            const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [products, activeCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-luxury-cream page-transition">
            <SEOMeta title="Our Collection" />

            <PageBanner
                title="The Treasury"
                subtitle="Explore our curated collections of jewellery and fashion accessories."
                image={productsBanner}
                className="h-[88vh]"
            />

            <div className="container mx-auto px-4 md:px-6 py-12">

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
                >
                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search elegance..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-full py-3 pl-12 pr-4 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all shadow-sm"
                        />
                    </div>

                    {/* Category Filter Toggle (Mobile) */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="md:hidden flex items-center gap-2 text-luxury-pink border border-luxury-pink/30 px-6 py-3 rounded-full bg-white"
                    >
                        <Filter size={20} />
                        <span>Categories</span>
                    </button>

                    {/* Desktop Categories */}
                    <div className="hidden md:flex flex-wrap items-center justify-center gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${activeCategory === cat
                                    ? 'bg-luxury-pink border-luxury-pink text-white shadow-md'
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-luxury-pink hover:text-luxury-pink'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile Filter Sheet */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="fixed inset-0 z-[60] bg-white p-8 md:hidden"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <h3 className="text-2xl font-serif text-luxury-charcoal">Categories</h3>
                                <button onClick={() => setShowFilters(false)} className="text-luxury-charcoal"><X size={32} /></button>
                            </div>
                            <div className="flex flex-col gap-6">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setShowFilters(false);
                                        }}
                                        className={`text-2xl text-left font-serif ${activeCategory === cat ? 'text-luxury-pink underline' : 'text-gray-500'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Results */}
                {loading ? (
                    <Loader />
                ) : (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-4">
                            <span>Showing {filteredProducts.length} Results</span>
                            <span>Category: {activeCategory}</span>
                        </div>
                        <ProductGrid products={filteredProducts} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
