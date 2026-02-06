import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Trophy, Shield, Globe, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    // Helper to check if link is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingTop = '0px';
        };
    }, [isMenuOpen]);

    // Handle scroll for smart sticky header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if at top or scrolling up
            // Hide if scrolling down AND past 100px
            if (currentScrollY < 100) {
                setVisible(true);
            } else {
                if (currentScrollY > lastScrollY) {
                    setVisible(false); // Scrolling down
                } else {
                    setVisible(true); // Scrolling up
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-beva-slate-100 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="catalyst-container py-5 flex items-center justify-between">
                <Link to="/" className="flex items-center group">
                    <img src="/images/logo-beva.png" alt="BEVA" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <Link to="/" className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-beva-green' : 'text-beva-slate-500 hover:text-beva-green'}`}>Home</Link>
                    <Link to="/tournaments" className={`text-sm font-semibold transition-colors ${isActive('/tournaments') ? 'text-beva-green' : 'text-beva-slate-500 hover:text-beva-green'}`}>Tournaments</Link>
                    <Link to="/about" className={`text-sm font-semibold transition-colors ${isActive('/about') ? 'text-beva-green' : 'text-beva-slate-500 hover:text-beva-green'}`}>About Us</Link>
                    <Link to="/faqs" className={`text-sm font-semibold transition-colors ${isActive('/faqs') ? 'text-beva-green' : 'text-beva-slate-500 hover:text-beva-green'}`}>FAQs</Link>
                    <Link to="/contact" className={`text-sm font-semibold transition-colors ${isActive('/contact') ? 'text-beva-green' : 'text-beva-slate-500 hover:text-beva-green'}`}>Contact Us</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <Link to="/tournaments" className="btn-cat-primary py-2.5 px-6 whitespace-nowrap">My Account</Link>
                    ) : (
                        <>
                            <Link to="/login" className="hidden sm:block text-sm font-bold text-beva-marine hover:text-beva-green transition-colors">Login</Link>
                            <Link to="/signup" className="btn-cat-primary py-2.5 px-6 whitespace-nowrap">Sign Up</Link>
                        </>
                    )}
                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-beva-slate-500 hover:bg-beva-slate-50 rounded-lg transition-colors">
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 left-0 w-full h-[100dvh] z-[9999] bg-white md:hidden flex flex-col"
                    >
                        <div className="px-6 py-5 flex items-center justify-between border-b border-beva-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white border border-beva-slate-100 shadow-sm flex items-center justify-center p-1">
                                    <img src="/images/logo-beva.png" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-black text-beva-marine text-xl">BEVA</span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 -mr-2 text-beva-slate-400 hover:text-beva-marine hover:bg-beva-slate-50 rounded-lg transition-all"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-lg transition-colors ${isActive('/') ? 'text-beva-green bg-beva-slate-50' : 'text-beva-marine hover:bg-beva-slate-50'}`}
                            >
                                <Globe size={20} className={isActive('/') ? 'text-beva-green' : 'text-beva-slate-400'} />
                                Home
                            </Link>
                            <Link
                                to="/tournaments"
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-lg transition-colors ${isActive('/tournaments') ? 'text-beva-green bg-beva-slate-50' : 'text-beva-marine hover:bg-beva-slate-50'}`}
                            >
                                <Trophy size={20} className={isActive('/tournaments') ? 'text-beva-green' : 'text-beva-slate-400'} />
                                Tournaments
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-lg transition-colors ${isActive('/about') ? 'text-beva-green bg-beva-slate-50' : 'text-beva-marine hover:bg-beva-slate-50'}`}
                            >
                                <Users size={20} className={isActive('/about') ? 'text-beva-green' : 'text-beva-slate-400'} />
                                About Us
                            </Link>
                            <Link
                                to="/faqs"
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-lg transition-colors ${isActive('/faqs') ? 'text-beva-green bg-beva-slate-50' : 'text-beva-marine hover:bg-beva-slate-50'}`}
                            >
                                <Shield size={20} className={isActive('/faqs') ? 'text-beva-green' : 'text-beva-slate-400'} />
                                FAQs
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-lg transition-colors ${isActive('/contact') ? 'text-beva-green bg-beva-slate-50' : 'text-beva-marine hover:bg-beva-slate-50'}`}
                            >
                                <Users size={20} className={isActive('/contact') ? 'text-beva-green' : 'text-beva-slate-400'} />
                                Contact Us
                            </Link>
                        </div>

                        <div className="p-6 border-t border-beva-slate-100 bg-beva-slate-50/50 pb-8 grid grid-cols-2 gap-4">
                            {isAuthenticated ? (
                                <Link
                                    to="/tournaments"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="col-span-2 flex w-full items-center justify-center py-3.5 rounded-xl bg-beva-marine text-white font-black text-base hover:bg-beva-slate-800 shadow-xl shadow-beva-marine/20 transition-all"
                                >
                                    My Account
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex w-full items-center justify-center py-3.5 rounded-xl border-2 border-beva-slate-200 font-black text-base text-beva-marine hover:border-beva-marine hover:bg-white transition-all bg-white"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex w-full items-center justify-center py-3.5 rounded-xl bg-beva-marine text-white font-black text-base hover:bg-beva-slate-800 shadow-xl shadow-beva-marine/20 transition-all"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
