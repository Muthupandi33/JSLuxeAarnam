import React from 'react';
import SEOMeta from '../components/SEOMeta';

const Terms = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-luxury-cream page-transition">
            <SEOMeta title="Terms & Conditions" />
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif mb-12 text-luxury-charcoal">Terms & Conditions</h1>
                <div className="bg-white p-8 md:p-12 space-y-8 text-gray-500 leading-relaxed font-light text-lg rounded-2xl shadow-sm border border-gray-100">
                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Agreement to Terms</h2>
                        <p>By accessing or using the JS Luxe Aarnam website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4"> Business</h2>
                        <p>JS Luxe Aarnam primarily operates as a  jewellery and fashion provider. Prices listed are subject to  terms and minimum order quantities where applicable.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Intellectual Property</h2>
                        <p>All content on this website, including designs, text, graphics, and logos, is the property of JS Luxe Aarnam and protected by intellectual property laws. Unauthorized use of this content is prohibited.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Ordering via WhatsApp</h2>
                        <p>Direct orders placed via WhatsApp are subject to confirmation by our team. Availability and final pricing will be discussed during the ordering process.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Limitation of Liability</h2>
                        <p>JS Luxe Aarnam shall not be liable for any direct, indirect, or incidental damages resulting from the use or inability to use the products or service.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
