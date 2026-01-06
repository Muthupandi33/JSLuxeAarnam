import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/LogoLS.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Instagram size={20} />, url: 'https://instagram.com/js_luxe_aarnam', label: 'Instagram' },
        { icon: <Youtube size={20} />, url: 'https://youtube.com/@js_luxe_aarnam', label: 'YouTube' },
        { icon: <Facebook size={20} />, url: 'https://facebook.com/js_luxe_aarnam', label: 'Facebook' },
    ];

    return (
        <footer className="bg-luxury-soft pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="JS Luxe Aarnam" className="h-12 w-12 rounded-full border border-luxury-pink/30" />
                            <span className="text-xl font-bold font-serif text-luxury-charcoal">JS Luxe Aarnam</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Premium  jewellery and fashion products. Elegance redefined for the modern woman.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white border border-gray-200 hover:border-luxury-pink hover:text-luxury-pink text-gray-400 transition-all shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-luxury-charcoal font-serif text-lg mb-6 tracking-wider font-bold">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-500 hover:text-luxury-pink transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-500 hover:text-luxury-pink transition-colors">All Products</Link></li>
                            <li><Link to="/about" className="text-gray-500 hover:text-luxury-pink transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-luxury-pink transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="text-luxury-charcoal font-serif text-lg mb-6 tracking-wider font-bold">Policies</h4>
                        <ul className="space-y-4">
                            <li><Link to="/privacy" className="text-gray-500 hover:text-luxury-pink transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-500 hover:text-luxury-pink transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/shipping" className="text-gray-500 hover:text-luxury-pink transition-colors">Shipping Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-luxury-charcoal font-serif text-lg mb-6 tracking-wider font-bold">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-500">
                                <Phone size={18} className="text-luxury-pink" />
                                <span>+91 63838 12040</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <div className="p-1.5 bg-luxury-pink/10 rounded-full text-luxury-pink">
                                    <Mail size={16} />
                                </div>
                                <span className="break-all">jsluxeaarnam@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500">
                                <MapPin size={18} className="text-luxury-pink mt-1" />
                                <span>G. Seethalakshmi,<br />JS Luxe Aarnam -  Hub</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
                    <p>© {currentYear} JS Luxe Aarnam. All Rights Reserved.</p>
                    <p>Designed with Luxury & Craftsmanship</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
