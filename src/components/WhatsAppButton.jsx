import React from 'react';

import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = '+916383812040';
    const defaultMessage = encodeURIComponent("Hi JS Luxe Aarnam, I'm interested in your products. Can I get more details?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                boxShadow: ["0px 0px 0px 0px rgba(37, 211, 102, 0.7)", "0px 0px 0px 10px rgba(37, 211, 102, 0)"]
            }}
            transition={{
                boxShadow: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                },
                scale: { duration: 0.5 },
                opacity: { duration: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-all"
            aria-label="Order via WhatsApp"
        >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.466 7.462m4.093-5.584c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.15.224-.579.73-.71.88-.131.149-.262.168-.486.056-.224-.112-.945-.349-1.8-1.112-.667-.595-1.117-1.329-1.248-1.554-.131-.225-.014-.346.099-.458.101-.1.224-.261.336-.393.112-.131.149-.224.224-.374.075-.149.038-.28-.019-.393-.056-.113-.504-1.214-.69-1.663-.181-.435-.366-.377-.504-.383-.131-.006-.28-.006-.43-.006-.15 0-.393.056-.599.28-.206.225-.785.767-.785 1.871 0 1.104.804 2.17.916 2.32.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.43-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.206-.15-.43-.262" />
            </svg>
            <span className="absolute -top-12 right-0 bg-white text-pink-700 text-xs font-bold py-1 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-pink-100">
                Order via WhatsApp
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
