import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const HeaderV3 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Tournaments', path: '/tournaments' },
        { name: 'About Us', path: '/about' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-[var(--border-light)]'
                        : 'bg-white border-b border-[var(--border-light)]'
                    }`}
            >
                <nav className="beva-container">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center group relative z-10">
                            <div className="relative">
                                <img
                                    src="/images/logo-beva.png"
                                    alt="Cuesports Central"
                                    className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[var(--brand-green)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${isActive(link.path)
                                            ? 'text-[var(--brand-green)]'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)]'
                                        }`}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--brand-green)] rounded-full"></span>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-3">
                            {isAuthenticated ? (
                                <Link to="/tournaments" className="beva-btn-primary">
                                    My Account
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login" className="beva-btn-ghost">
                                        Login
                                    </Link>
                                    <Link to="/signup" className="beva-btn-primary">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)] rounded-xl transition-all duration-200"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Menu Panel */}
                    <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-[var(--border-light)]">
                            <img
                                src="/images/logo-beva.png"
                                alt="Cuesports Central"
                                className="h-12 w-auto object-contain"
                            />
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)] rounded-xl transition-all duration-200"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="p-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-200 ${isActive(link.path)
                                            ? 'bg-[var(--brand-green)] text-white shadow-md'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Actions */}
                        <div className="p-6 border-t border-[var(--border-light)] space-y-3">
                            {isAuthenticated ? (
                                <Link
                                    to="/tournaments"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="beva-btn-primary w-full"
                                >
                                    My Account
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="beva-btn-outline w-full"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="beva-btn-primary w-full"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderV3;
