import React from 'react';
import SEOMeta from '../components/SEOMeta';
import logo from '../assets/LogonameLS.jpeg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-luxury-cream page-transition">
            <SEOMeta title="About Us" />

            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif mb-8 text-luxury-charcoal italic"
                        >
                            Our Heritage
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-xl font-light leading-relaxed mb-16"
                        >
                            Excellence defined through decades of craftsmanship and a passion for timeless jewellery.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Founder Story */}
            <section className="py-24 bg-luxury-soft">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square max-w-md mx-auto"
                        >
                            <div className="absolute inset-0 border border-luxury-pink/30 rounded-full translate-x-4 translate-y-4"></div>
                            <img
                                src={logo}
                                alt="Founder - G. Seethalakshmi"
                                className="w-full h-full object-cover rounded-full z-10 relative border-4 border-white shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-luxury-pink tracking-[0.3em] uppercase text-xs font-bold mb-4 block">The Visionary</span>
                            <h2 className="text-4xl font-serif text-luxury-charcoal mb-8">G. Seethalakshmi</h2>
                            <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                                JS Luxe Aarnam was founded on the principle that luxury should be accessible and eternal. Under the leadership of G. Seethalakshmi, we have grown from a boutique vision into a wholesale hub that serves clients across regions.
                            </p>
                            <p className="text-gray-600 mb-10 leading-relaxed text-lg italic border-l-2 border-luxury-pink pl-6 bg-white py-6 pr-6 rounded-r-lg shadow-sm">
                                "Our goal is not just to sell jewellery, but to be a part of the most precious moments in our customers' lives. We believe in building relationships through trust and quality."
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-luxury-pink text-3xl font-serif mb-1">1000+</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest">Happy Clients</p>
                                </div>
                                <div>
                                    <h4 className="text-luxury-pink text-3xl font-serif mb-1">5000+</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest">Unique Designs</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif mb-4 text-luxury-charcoal">Our Core Values</h2>
                        <div className="w-20 h-1 bg-luxury-pink mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Authenticity", desc: "Every piece is carefully vetted for quality and purity of material." },
                            { title: "Innovation", desc: "Blending traditional Indian designs with contemporary global trends." },
                            { title: "Commitment", desc: "Dedicated to providing unparalleled service to our wholesale partners." }
                        ].map((v, i) => (
                            <div key={i} className="bg-gray-50 p-10 text-center hover:shadow-lg transition-all group rounded-xl border border-gray-100 hover:border-luxury-pink/30">
                                <h3 className="text-2xl font-serif text-luxury-charcoal mb-6 group-hover:text-luxury-pink transition-colors">{v.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
