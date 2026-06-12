import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import contactbanner from '../assets/contact.avif';

import PageBanner from '../components/PageBanner';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'textarea' ? 'message' : e.target.placeholder.toLowerCase().includes('name') ? 'fullName' : e.target.type === 'email' ? 'email' : 'subject']: e.target.value });
    };

    // More robust input handling by adding name attributes to inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwArw7ehccOZcnc8jL1j--EU7WYk809j4XRmT_sXT3llZc1UH5hX-6BzBCALC7RSeGVCw/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Since no-cors doesn't return JSON, we assume success if no network error
            setStatus('success');
            setFormData({ fullName: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-luxury-cream page-transition">
            <SEOMeta title="Contact Us" />

            <PageBanner
                title="Get In Touch"
                subtitle="Have a query or looking for partnerships? Reach out to us directly or fill the form."
                image={contactbanner}
                className="h-[88vh]"
            />

            <div className="container mx-auto px-4 md:px-6 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="bg-white p-8 flex items-start gap-6 border-l-4 border-luxury-pink shadow-md rounded-r-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="p-3 bg-luxury-pink/10 rounded-xl text-luxury-pink"><Phone size={24} /></div>
                            <div>
                                <h4 className="text-luxury-charcoal font-serif text-lg mb-1">WhatsApp & Call</h4>
                                <p className="text-gray-500 font-light">+91 63838 12040</p>
                                <a href="https://wa.me/916383812040" className="text-luxury-pink text-xs uppercase tracking-widest font-bold mt-2 inline-block">Message Now</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 flex items-start gap-6 border-l-4 border-luxury-pink shadow-md rounded-r-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="p-3 bg-luxury-pink rounded-xl text-white shadow-lg shadow-luxury-pink/30"><Mail size={24} /></div>
                            <div className="min-w-0"> {/* min-w-0 required for flex child truncation/wrap */}
                                <h4 className="text-luxury-charcoal font-serif text-lg mb-1">E-mail</h4>
                                <p className="text-gray-500 font-light break-all">jsluxeaarnam@gmail.com</p>
                                <a href="mailto:jsluxeaarnam@gmail.com" className="text-luxury-pink text-xs uppercase tracking-widest font-bold mt-2 inline-block hover:underline">Send Email</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 flex items-start gap-6 border-l-4 border-luxury-pink shadow-md rounded-r-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="p-3 bg-luxury-pink/10 rounded-xl text-luxury-pink"><MapPin size={24} /></div>
                            <div>
                                <h4 className="text-luxury-charcoal font-serif text-lg mb-1">Headquarters</h4>
                                <p className="text-gray-500 font-light">G. Seethalakshmi,<br />JS Luxe Aarnam, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 relative overflow-hidden rounded-2xl shadow-lg border border-gray-100"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder=" Inquiry"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Your Message</label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="How can we help you today?"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-luxury-charcoal focus:outline-none focus:border-luxury-pink transition-all resize-none"
                                        required
                                    ></textarea>
                                </div>

                                {status === 'success' && (
                                    <div className="md:col-span-2 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="md:col-span-2 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                                        Something went wrong. Please try again later.
                                    </div>
                                )}

                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-luxury-pink text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:bg-luxury-pink-light transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <Send size={20} className={status === 'submitting' ? 'animate-pulse' : ''} />
                                        <span>{status === 'submitting' ? 'Sending...' : 'Send Inquiry'}</span>
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
