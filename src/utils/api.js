import axios from 'axios';

const API_URL = import.meta.env.VITE_GOOGLE_SHEET_API || 'https://script.google.com/macros/s/AKfycbz_XXXXXXXXX/exec';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        // Return mock data for UI development if API fails
        return [
            {
                id: "1",
                name: "Diamond Stud Earrings",
                category: "Earrings",
                price: 4999,
                discountPrice: 3999,
                imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
                description: "Elegant diamond stud earrings for special occasions.",
                stockStatus: "In Stock",
                whatsappMessage: "Hi, I'm interested in the Diamond Stud Earrings (ID: 1). Is it available?"
            },
            {
                id: "2",
                name: "Gold Choker Necklace",
                category: "Necklaces",
                price: 12999,
                discountPrice: 10999,
                imageUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800",
                description: "Traditional hand-crafted gold choker necklace.",
                stockStatus: "In Stock",
                whatsappMessage: "Hi, I'm interested in the Gold Choker Necklace (ID: 2). Is it available?"
            },
            {
                id: "3",
                name: "Royal Polki Set",
                category: "Sets",
                price: 25000,
                discountPrice: 22000,
                imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800",
                description: "Stunning Polki set with emerald drops.",
                stockStatus: "Limited Stock",
                whatsappMessage: "Hi, I'm interested in the Royal Polki Set (ID: 3). Is it available?"
            }
        ];
    }
};
