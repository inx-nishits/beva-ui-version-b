import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const HeaderV2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Tournaments', path: '/tournaments' },
        { name: 'About Us', path: '/about' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="v2-container">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img
                            src="/images/logo-beva.png"
                            alt="BEVA"
                            className="h-12 md:h-14 w-auto object-contain transition-opacity hover:opacity-80"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                        ? 'bg-[var(--brand-green)] text-white'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        {isAuthenticated ? (
                            <Link to="/tournaments" className="v2-btn-primary">
                                My Account
                            </Link>
                        ) : (
                            <>
                                <Link to="/login" className="v2-btn-ghost">
                                    Login
                                </Link>
                                <Link to="/signup" className="v2-btn-primary">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-white z-50 overflow-y-auto">
                    <div className="v2-container py-6 space-y-6">
                        {/* Mobile Navigation Links */}
                        <nav className="space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isActive(link.path)
                                            ? 'bg-[var(--brand-green)] text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Actions */}
                        <div className="pt-6 border-t border-gray-200 space-y-3">
                            {isAuthenticated ? (
                                <Link to="/tournaments" className="v2-btn-primary w-full">
                                    My Account
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login" className="v2-btn-outline w-full">
                                        Login
                                    </Link>
                                    <Link to="/signup" className="v2-btn-primary w-full">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeaderV2;
