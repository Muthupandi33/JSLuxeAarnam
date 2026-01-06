import React from 'react';
import SEOMeta from '../components/SEOMeta';

const Privacy = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-luxury-cream page-transition">
            <SEOMeta title="Privacy Policy" />
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif mb-12 text-luxury-charcoal">Privacy Policy</h1>
                <div className="bg-white p-8 md:p-12 space-y-8 text-gray-500 leading-relaxed font-light text-lg rounded-2xl shadow-sm border border-gray-100">
                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Introduction</h2>
                        <p>At JS Luxe Aarnam, we respect your privacy and are committed to protecting it. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Information Collection</h2>
                        <p>We collect information you provide directly to us through contact forms, WhatsApp inquiries, and when you communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Use of Information</h2>
                        <p>We use the information collected to fulfill orders, respond to inquiries, improve our services, and send promotional communications (if you've opted in). We do not sell your personal data to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Data Security</h2>
                        <p>We implement industry-standard security measures to protect your information. However, please be aware that no method of transmission over the internet is 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="text-luxury-charcoal font-serif text-2xl mb-4">Contact</h2>
                        <p>If you have any questions about this policy, please contact us at jsluxeaarnam@gmail.com.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
