import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, MapPin } from 'lucide-react';

const DeliveryModal = ({ isOpen, onClose, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: ''
    });
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
        else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) newErrors.mobile = "Enter a valid 10-digit number";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        // Format WhatsApp Message
        const message = `*New Order Request*
-------------------------
*Product:* ${product.name}
*ID:* ${product.id}
*Price:* ₹${product.discountPrice?.toLocaleString()}
*Image:* ${product.imageUrl}
-------------------------
*Customer Details:*
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
${formData.address ? `*Address:* ${formData.address}` : ''}
-------------------------
Is this item available for delivery?`;

        const whatsappUrl = `https://wa.me/916383812040?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-luxury-charcoal p-6 flex justify-between items-center text-white">
                        <h3 className="font-serif text-xl tracking-wide">Delivery Details</h3>
                        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Form */}
                    <div className="p-6 md:p-8 bg-luxury-cream/20">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Name Input */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-500">
                                    <User size={14} className="text-luxury-pink" /> Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full p-4 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'} focus:outline-none focus:border-luxury-pink transition-all`}
                                />
                                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                            </div>

                            {/* Mobile Input */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-500">
                                    <Phone size={14} className="text-luxury-pink" /> Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter 10-digit number"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                    className={`w-full p-4 rounded-xl border ${errors.mobile ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'} focus:outline-none focus:border-luxury-pink transition-all`}
                                />
                                {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
                            </div>

                            {/* Address Input */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-500">
                                    <MapPin size={14} className="text-luxury-pink" /> Delivery Address <span className="text-gray-400 font-normal normal-case">(Optional)</span>
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="City, State, Pincode"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-luxury-pink transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-luxury-pink text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-luxury-pink/90 hover:shadow-lg transition-all active:scale-[0.98]"
                            >
                                <Send size={20} />
                                <span>Proceed to WhatsApp</span>
                            </button>

                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default DeliveryModal;
