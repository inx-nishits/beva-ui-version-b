import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '../components/Header';

import { useAuth } from '../context/AuthContext';

const GuestLayout = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="bg-white min-h-screen text-beva-marine selection:bg-beva-green selection:text-white overflow-x-hidden flex flex-col">
            <Header />

            <main className="flex-grow pt-32">
                <div className="catalyst-container">
                    <Outlet />
                </div>
            </main>

            <footer className="py-10 md:py-20 border-t border-beva-slate-100 bg-white mt-auto">
                <div className="catalyst-container grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    <div className="col-span-2 space-y-6 md:space-y-8">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/images/logo-beva.png" alt="BEVA" className="h-16 w-auto object-contain" />
                        </Link>
                        <p className="text-beva-slate-400 max-w-md font-medium">Your ultimate platform for real-time tournament tracking, seamless match management, and official rankings.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-black text-xs text-beva-marine uppercase tracking-wider">Tournaments</h4>
                        <div className="flex flex-col gap-4 text-sm font-medium text-beva-slate-500">
                            {[
                                { name: 'Upcoming Events', path: '/tournaments' },
                                { name: 'Rankings', path: '/tournaments' },
                                { name: 'Hall of Fame', path: '/tournaments' },
                                { name: 'Venue Network', path: '/tournaments' },
                            ].map(item => (
                                <Link key={item.name} to={item.path} className="hover:text-beva-green transition-colors">{item.name}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-black text-xs text-beva-marine uppercase tracking-wider">Support</h4>
                        <div className="flex flex-col gap-4 text-sm font-medium text-beva-slate-500">
                            {[
                                { name: 'FAQs', path: '/faqs' },
                                { name: 'Contact Us', path: '/contact' },
                                { name: 'Fair Play', path: '/hub/privacy' },
                                { name: 'Terms', path: '/hub/terms' },
                                { name: 'Privacy', path: '/hub/privacy' },
                            ].map(item => (
                                <Link key={item.name} to={item.path} className="hover:text-beva-green transition-colors">{item.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="catalyst-container pt-10 mt-10 md:pt-20 md:mt-20 border-t border-beva-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-black text-beva-slate-300 uppercase">
                        © 2026 BEVA SYSTEMS AUSTRALIA
                    </p>
                    <div className="flex gap-6 text-beva-slate-400">
                        <a href="#" className="hover:text-beva-green transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-beva-green transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-beva-green transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-beva-green transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GuestLayout;
