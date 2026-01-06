import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="pt-24 min-h-screen bg-luxury-cream page-transition">
            <SEOMeta title="Contact Us" />

            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 text-luxury-charcoal">Get In Touch</h1>
                    <p className="text-gray-500 text-lg">Have a query or looking for wholesale partnerships? Reach out to us directly or fill the form.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Details */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 flex items-start gap-6 border-l-4 border-luxury-pink shadow-md rounded-r-xl">
                            <div className="p-3 bg-luxury-pink/10 rounded-xl text-luxury-pink"><Phone size={24} /></div>
                            <div>
                                <h4 className="text-luxury-charcoal font-serif text-lg mb-1">WhatsApp & Call</h4>
                                <p className="text-gray-500 font-light">+91 63838 12040</p>
                                <a href="https://wa.me/916383812040" className="text-luxury-pink text-xs uppercase tracking-widest font-bold mt-2 inline-block">Message Now</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 flex items-start gap-6 border-l-4 border-luxury-pink shadow-md rounded-r-xl">
                            <div className="p-3 bg-luxury-pink rounded-xl text-white shadow-lg shadow-luxury-pink/30"><Mail size={24} /></div>
                            <div className="min-w-0"> {/* min-w-0 required for flex child truncation/wrap */}
                                <h4 className="text-luxury-charcoal font-serif text-lg mb-1">Email</h4>
                                <p className="text-gray-500 font-light break-all">jsluxeaarnam@gmail.com</p>
                                <a href="mailto:jsluxeaarnam@gmail.com" className="text-luxury-pink text-xs uppercase tracking-widest font-bold mt-2 inline-block hover:underline">Send Email</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 flex items-start gap-6 border-l-4 border-luxury-pink shadow-md rounded-r-xl">
                            <div className="p-3 bg-luxury-pink/10 rounded-xl text-luxury-pink"><MapPin size={24} /></div>
                            <div>
                                <h4 className="text-luxury-charcoal font-serif text-lg mb-1">Headquarters</h4>
                                <p className="text-gray-500 font-light">G. Seethalakshmi,<br />JS Luxe Aarnam, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 relative overflow-hidden rounded-2xl shadow-lg border border-gray-100"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Subject</label>
                                    <input type="text" placeholder="Wholesale Inquiry" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Your Message</label>
                                    <textarea rows="6" placeholder="How can we help you today?" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all resize-none"></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="w-full bg-luxury-pink text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:bg-luxury-pink-light transition-all transform active:scale-[0.98]">
                                        <Send size={20} />
                                        <span>Send Inquiry</span>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
