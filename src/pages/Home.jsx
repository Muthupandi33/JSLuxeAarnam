import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/ProductGrid';
import Loader from '../components/Loader';
import SEOMeta from '../components/SEOMeta';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../assets/JewelleryLogo.jpg';

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
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-luxury-cream">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000"
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
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-luxury-pink/20"></div>
                            <img
                                src={img}
                                alt="Jewellery Craft - JS Luxe Aarnam"
                                className="rounded-2xl shadow-2xl w-full object-cover"
                            />

                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-luxury-pink/20"></div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-luxury-pink tracking-[0.2em] uppercase text-xs mb-3 font-bold">Our Vision</h4>
                            <h2 className="text-4xl font-serif text-luxury-charcoal mb-8">Crafting Memories for Generations</h2>
                            <p className="text-gray-500 mb-8 text-lg font-light leading-relaxed">
                                Founded by G. Seethalakshmi, JS Luxe Aarnam started with a simple vision: to bring curated, high-quality jewellery to businesses and lovers of fashion at  prices.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-luxury-charcoal">
                                    <div className="w-1.5 h-1.5 bg-luxury-pink rounded-full"></div>
                                    <span>Exclusive Indian Ethnic Designs</span>
                                </li>
                                <li className="flex items-center gap-3 text-luxury-charcoal">
                                    <div className="w-1.5 h-1.5 bg-luxury-pink rounded-full"></div>
                                    <span>Quality Assured </span>
                                </li>
                                <li className="flex items-center gap-3 text-luxury-charcoal">
                                    <div className="w-1.5 h-1.5 bg-luxury-pink rounded-full"></div>
                                    <span>Personalized Service Experience</span>
                                </li>
                            </ul>
                            <Link
                                to="/about"
                                className="inline-block border-b-2 border-luxury-pink pb-1 text-luxury-pink hover:text-luxury-charcoal hover:border-luxury-charcoal transition-all uppercase tracking-widest text-sm font-bold"
                            >
                                Learn More About Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
