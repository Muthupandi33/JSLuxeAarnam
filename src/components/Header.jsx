import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/LogoLS.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Announcement Bar */}
            {/* <div className="bg-gradient-to-r from-luxury-pink to-luxury-pink-light text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide">
                 JEWELLERY & FASHION • TRUSTED BY 1000+ RETAILERS
            </div> */}

            <header
                className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'shadow-md py-2' : 'py-4'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Mobile Toggle & Search Placeholder (Left) */}
                        <div className="flex items-center gap-4 w-1/3">
                            <button
                                className="lg:hidden text-luxury-charcoal hover:text-luxury-pink transition-colors"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                            <div className="hidden lg:block">
                                <Link to="/products" className="text-gray-400 hover:text-luxury-pink transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Logo (Center) */}
                        <div className="w-1/3 flex justify-center">
                            <Link to="/" className="flex flex-col items-center gap-1 group">
                                <span className="text-2xl md:text-3xl font-bold font-serif text-luxury-charcoal group-hover:text-luxury-pink transition-colors">JS Luxe Aarnam</span>
                                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400"></span>
                            </Link>
                        </div>

                        {/* Desktop Navigation (Right - moved from loop) */}
                        <div className="w-1/3 flex justify-end gap-6">
                            <nav className="hidden lg:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-luxury-pink' : 'text-gray-500 hover:text-luxury-pink'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden bg-white border-b border-gray-100 absolute top-full left-0 w-full shadow-lg"
                        >
                            <nav className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-medium ${isActive(link.path) ? 'text-luxury-pink' : 'text-gray-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;
