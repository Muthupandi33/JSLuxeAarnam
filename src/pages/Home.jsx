import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/ProductGrid';
import Loader from '../components/Loader';
import SEOMeta from '../components/SEOMeta';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../assets/JewelleryLogo.jpg';
import banner from '../assets/home.avif';

const Home = () => {
    const { products, loading } = useProducts();
    const featuredProducts = products.slice(0, 4);

    const features = [
        { icon: <Star className="text-luxury-pink" />, title: "Premium Quality", desc: "Handpicked artisanal jewellery collections." },
        { icon: <ShieldCheck className="text-luxury-pink" />, title: "Trusted Source", desc: "Established  heritage since years." },
        { icon: <Truck className="text-luxury-pink" />, title: "Secure Shipping", desc: "Express delivery with tamper-proof packaging." },
    ];

    return (
        <div className="page-transition">
            <SEOMeta title="Home" />

            {/* Hero Section */}
            <section className="relative h-[88vh] flex items-center justify-center overflow-hidden bg-luxury-cream">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src={banner}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 z-20 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-luxury-pink tracking-[0.4em] uppercase text-sm md:text-base mb-4 font-bold">Exquisite Collections</h4>
                        <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight text-luxury-charcoal">
                            Timeless <br /> <span className="gold-gradient">Elegance</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-light leading-relaxed">
                            Discover the finest  jewellery and fashion essentials at JS Luxe Aarnam. Curated for those who appreciate true craftsmanship.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                to="/products"
                                className="bg-luxury-pink text-white hover:bg-luxury-pink/90 font-bold px-10 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                            >
                                Shop Collection <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/about"
                                className="bg-white hover:bg-gray-50 text-luxury-charcoal border border-gray-200 px-10 py-4 rounded-full transition-all shadow-sm"
                            >
                                Our Heritage
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="py-20 bg-white"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-2xl hover:bg-luxury-soft transition-colors"
                            >
                                <div className="mb-6 flex justify-center text-luxury-pink">{f.icon}</div>
                                <h3 className="text-xl font-serif text-luxury-charcoal mb-3">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Featured Products */}
            <section className="py-24 bg-luxury-soft">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                    >
                        <div>
                            <h4 className="text-luxury-pink tracking-[0.2em] uppercase text-xs mb-3 font-bold">Handpicked Styles</h4>
                            <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">Featured Collections</h2>
                        </div>
                        <Link to="/products" className="text-luxury-pink flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm font-bold">
                            View All Products <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    {loading ? (
                        <Loader />
                    ) : (
                        <ProductGrid products={featuredProducts} />
                    )}
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group"
                        >
                            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-luxury-pink/40 transition-all duration-700 group-hover:w-full group-hover:h-full"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src={img}
                                    alt="Jewellery Craft - JS Luxe Aarnam"
                                    className="w-full h-[500px] object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-luxury-pink/40 transition-all duration-700 group-hover:w-full group-hover:h-full"></div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.h4
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-luxury-pink tracking-[0.3em] uppercase text-xs mb-4 font-bold flex items-center gap-2"
                            >
                                <span className="w-8 h-[1px] bg-luxury-pink"></span> Our Vision
                            </motion.h4>
                            <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-8 leading-tight">
                                Crafting Memories <br /><span className="italic text-luxury-gold">for Generations</span>
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg font-light leading-relaxed">
                                Founded by G. Seethalakshmi, JS Luxe Aarnam started with a simple vision: to bring curated, high-quality jewellery to businesses and lovers of fashion at accessible prices.
                            </p>

                            <ul className="space-y-5 mb-10">
                                {[
                                    "Exclusive Indian Ethnic Designs",
                                    "Quality Assured Craftsmanship",
                                    "Personalized Service Experience"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        className="flex items-center gap-4 text-luxury-charcoal group"
                                    >
                                        <span className="w-8 h-8 rounded-full bg-luxury-pink/10 flex items-center justify-center text-luxury-pink group-hover:bg-luxury-pink group-hover:text-white transition-colors">
                                            <Star size={14} fill="currentColor" />
                                        </span>
                                        <span className="text-lg font-light">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 border-b-2 border-luxury-pink pb-1 text-luxury-pink hover:text-luxury-charcoal hover:border-luxury-charcoal transition-all uppercase tracking-widest text-sm font-bold group"
                                >
                                    Learn More About Us
                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
