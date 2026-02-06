import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuestLayoutV3 = () => {
    return (
        <div className="min-h-screen bg-[var(--surface-secondary)] flex flex-col">
            <HeaderV3 />

            <main className="flex-1 pt-20">
                <div className="beva-container beva-section-sm">
                    <Outlet />
                </div>
            </main>

            {/* Premium Footer with Social Media */}
            <footer className="bg-[var(--brand-marine)] text-white mt-auto">
                <div className="beva-container py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <img
                                src="/images/logo-beva.png"
                                alt="Cuesports Central"
                                className="h-12 w-auto mb-4"
                            />
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                Australia's premier digital platform for pool and snooker tournaments.
                            </p>
                            {/* Social Media Links */}
                            <div className="flex items-center gap-3">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--brand-green)] transition-all duration-300 hover:-translate-y-1">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--brand-green)] transition-all duration-300 hover:-translate-y-1">
                                    <Twitter size={18} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--brand-green)] transition-all duration-300 hover:-translate-y-1">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--brand-green)] transition-all duration-300 hover:-translate-y-1">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">Home</Link></li>
                                <li><Link to="/tournaments" className="text-white/70 hover:text-white transition-colors text-sm">Tournaments</Link></li>
                                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link></li>
                                <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
                            <ul className="space-y-3">
                                <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                                <li><Link to="/fair-play" className="text-white/70 hover:text-white transition-colors text-sm">Fair Play Policy</Link></li>
                                <li><Link to="/faqs" className="text-white/70 hover:text-white transition-colors text-sm">FAQs</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-white">Get in Touch</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-white/70 text-sm">
                                    <Mail size={16} />
                                    <a href="mailto:support@beva.com.au" className="hover:text-white transition-colors">
                                        support@beva.com.au
                                    </a>
                                </li>
                                <li className="text-white/70 text-sm">
                                    Mon-Fri, 9am to 5pm AEST
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 text-center">
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} Cuesports Central. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GuestLayoutV3;
