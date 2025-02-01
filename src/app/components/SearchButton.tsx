"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchButtonProps {
    onSearch: (query: string) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [query, onSearch]);

    return (
        <div className="relative flex items-center">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="absolute right-0 bg-white shadow-lg rounded-lg p-4 w-64"
                        style={{ marginRight: '4rem' }} // Aumentado el margen derecho
                    >
                        <motion.input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform focus:scale-105"
                            placeholder="Buscar nota..."
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#b2b6f2] text-white px-4 py-2 rounded-lg hover:bg-[#9fa3e0] ml-4 flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchButton;
