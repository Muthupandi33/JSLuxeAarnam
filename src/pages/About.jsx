import React from 'react';
import SEOMeta from '../components/SEOMeta';
import logo from '../assets/LogonameLS.jpeg';
import { motion } from 'framer-motion';

import PageBanner from '../components/PageBanner';
import aboutusbanner from '../assets/aboutus.avif';

const About = () => {
    return (
        <div className="min-h-screen bg-luxury-cream page-transition">
            <SEOMeta title="About Us" />

            {/* Hero Section */}
            <PageBanner
                title="Our Heritage"
                subtitle="Excellence defined through decades of craftsmanship and a passion for timeless jewellery."
                image={aboutusbanner}
                className="h-[88vh]"
            />

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
                            <h2 className="text-4xl font-serif text-luxury-charcoal mb-8">G. Seetha Lakshmi</h2>
                            <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                                JS Luxe Aarnam was founded on the principle that luxury should be accessible and eternal. Under the leadership of G. Seethalakshmi, we have grown from a boutique vision into a  hub that serves clients across regions.
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
                        <h2 className="text-4xl font-serif mb-4 text-luxury-charcoal">Our Values</h2>
                        <div className="w-20 h-1 bg-luxury-pink mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Authenticity", desc: "Every piece is carefully vetted for quality and purity of material." },
                            { title: "Innovation", desc: "Blending traditional Indian designs with contemporary global trends." },
                            { title: "Commitment", desc: "Dedicated to providing unparalleled service to our  partners." }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-10 text-center hover:shadow-lg transition-all group rounded-xl border border-gray-100 hover:border-luxury-pink/30"
                            >
                                <h3 className="text-2xl font-serif text-luxury-charcoal mb-6 group-hover:text-luxury-pink transition-colors">{v.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
