import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Zap, Target, Shield, Star, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import { useCompetitions } from '../context/CompetitionContext';
import { motion } from 'framer-motion';
import { LineChart, BarChart } from 'lucide-react';

const LandingPageV3 = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const { competitions } = useCompetitions();

    const liveCompetitions = competitions.filter(c => c.status === 'LIVE').slice(0, 6);

    const testimonials = [
        {
            name: 'James Wilson',
            role: 'Tournament Director',
            text: "Beva has completely transformed how we run our weekend majors. The bracket automation alone saves us hours.",
            avatar: 'JW'
        },
        {
            name: 'Sarah Chen',
            role: 'Venue Owner',
            text: "The platform is intuitive and our players love the live scoring. It's brought a new level of professionalism to our venue.",
            avatar: 'SC'
        },
        {
            name: 'Michael Torres',
            role: 'Pro Player',
            text: "Finally, a ranking system that actually reflects skill. The Glicko-2 implementation is spot on.",
            avatar: 'MT'
        },
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="min-h-screen bg-[var(--surface-secondary)]">
            <HeaderV3 />

            {/* Hero Section - Premium Design */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[var(--brand-green)]/5 rounded-full blur-3xl beva-animate-float"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--brand-marine)]/5 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="beva-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 beva-animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-[var(--border-light)]">
                                <span className="w-2 h-2 bg-[var(--brand-green)] rounded-full beva-animate-pulse-glow"></span>
                                <span className="text-sm font-semibold text-[var(--text-secondary)]">Australia's Premier Cuesports Platform</span>
                            </div>

                            <h1 className="beva-display">
                                Compete. Track. Dominate.
                            </h1>

                            <p className="beva-text-lead max-w-xl">
                                Join Australia's most advanced pool and snooker tournament platform. Real-time scoring, professional rankings, and seamless venue integration.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/signup" className="beva-btn-primary beva-btn-lg group">
                                    Get Started Free
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/tournaments" className="beva-btn-outline beva-btn-lg">
                                    Browse Tournaments
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border-light)]">
                                <div>
                                    <p className="text-3xl font-bold text-[var(--brand-green)]">150k+</p>
                                    <p className="text-sm text-[var(--text-tertiary)] font-medium">Matches Tracked</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[var(--brand-green)]">85</p>
                                    <p className="text-sm text-[var(--text-tertiary)] font-medium">Active Venues</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[var(--brand-green)]">12k+</p>
                                    <p className="text-sm text-[var(--text-tertiary)] font-medium">Players</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual - Modern Dashboard Mockup */}
                        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
                            {/* Decorative Background Glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[var(--brand-green)]/10 via-transparent to-[var(--brand-marine)]/10 rounded-full blur-3xl -z-10"></div>

                            {/* Main Platform Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative w-full max-w-[500px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden"
                            >
                                {/* Mock UI Header */}
                                <div className="bg-[var(--brand-marine)] p-4 flex items-center justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                    </div>
                                    <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] text-white/60 font-medium">Beva Platform v3.0</div>
                                </div>

                                {/* Mock UI Content */}
                                <div className="p-6 space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-bold text-[var(--brand-green)] uppercase tracking-wider">Tournament Live</p>
                                            <h3 className="text-xl font-bold text-[var(--text-primary)]">Brisbane 8-Ball Masters</h3>
                                        </div>
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Player" />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white z-10">
                                                +12
                                            </div>
                                        </div>
                                    </div>

                                    {/* Match Grid Mockup */}
                                    <div className="space-y-3">
                                        {[
                                            { p1: 'D. Smith', p2: 'J. Doe', s1: 4, s2: 2, status: 'Live' },
                                            { p1: 'R. Vance', p2: 'K. Lee', s1: 0, s2: 1, status: 'Live' },
                                            { p1: 'T. Brown', p2: 'L. Mason', s1: 5, s2: 5, status: 'Final' }
                                        ].map((match, i) => (
                                            <div key={i} className="p-3 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100 group hover:border-[var(--brand-green)]/30 transition-colors">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${match.s1 > match.s2 ? 'bg-[var(--brand-green)]' : 'bg-gray-300'}`}></div>
                                                        <span className="text-xs font-semibold text-gray-700">{match.p1}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${match.s2 > match.s1 ? 'bg-[var(--brand-green)]' : 'bg-gray-300'}`}></div>
                                                        <span className="text-xs font-semibold text-gray-700">{match.p2}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="text-right">
                                                        <p className={`text-xs font-bold ${match.s1 > match.s2 ? 'text-[var(--brand-green)]' : 'text-gray-400'}`}>{match.s1}</p>
                                                        <p className={`text-xs font-bold ${match.s2 > match.s1 ? 'text-[var(--brand-green)]' : 'text-gray-400'}`}>{match.s2}</p>
                                                    </div>
                                                    {match.status === 'Live' && (
                                                        <div className="px-2 py-0.5 bg-red-50 text-[10px] font-bold text-red-600 rounded-md">LIVE</div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Widget 1 - Live Table View */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -top-4 -right-2 lg:-right-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white max-w-[180px] hidden md:block"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                        <Target size={16} className="text-emerald-600" />
                                    </div>
                                    <p className="text-[11px] font-bold text-[var(--text-primary)]">Precision AI Scoring</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-[var(--brand-green)]"></div>
                                    </div>
                                    <p className="text-[9px] text-gray-500 font-medium">Auto-frame detection active</p>
                                </div>
                            </motion.div>

                            {/* Floating Widget 2 - Glicko-2 Progress */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute -bottom-8 -right-4 bg-[var(--brand-marine)] p-5 rounded-2xl shadow-2xl border border-white/10 min-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--brand-green)] flex items-center justify-center text-white shadow-lg shadow-[var(--brand-green)]/20">
                                        <Star size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest leading-none mb-1">Top Rated</p>
                                        <p className="text-sm font-bold text-white">James "The Rocket" W.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                                    <div>
                                        <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider mb-0.5">Current Rank</p>
                                        <p className="text-lg font-black text-[var(--brand-yellow)]">2405 pts</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-emerald-400 font-bold mb-0.5">+12.4</p>
                                        <p className="text-[10px] text-white/40 font-medium">Glicko-2</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Widget 3 - Activity Feed */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden xl:block"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Zap size={14} className="text-amber-500 fill-amber-500" />
                                    <p className="text-[11px] font-bold text-gray-800">Recent Activity</p>
                                </div>
                                <div className="space-y-4">
                                    {[1, 2].map(i => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"></div>
                                            <div className="space-y-0.5">
                                                <div className="w-16 h-1.5 bg-gray-200 rounded-full"></div>
                                                <div className="w-10 h-1 bg-gray-100 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Background Pattern */}
                            <div className="absolute top-[20%] right-[10%] -z-20 opacity-10">
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 0L117.365 67.6335L186.603 50L132.365 100L186.603 150L117.365 132.366L100 200L82.6352 132.366L13.3975 150L67.6352 100L13.3975 50L82.6352 67.6335L100 0Z" fill="var(--brand-green)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Modern Cards */}
            <section className="beva-section-sm bg-white">
                <div className="beva-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="beva-heading-lg mb-6">
                            Everything You Need to <span className="text-[var(--brand-green)]">Excel</span>
                        </h2>
                        <p className="beva-text-lead">
                            Professional-grade tools designed for players, venues, and tournament organizers.
                        </p>
                    </div>

                    <div className="beva-grid-3">
                        {[
                            {
                                icon: Trophy,
                                title: 'Tournament Management',
                                description: 'Automated brackets, real-time updates, and seamless check-ins for events of any size.',
                                color: 'text-[var(--brand-green)]',
                                bg: 'bg-emerald-50'
                            },
                            {
                                icon: Zap,
                                title: 'Live Scoring',
                                description: 'Frame-by-frame score tracking with instant leaderboard updates visible to all participants.',
                                color: 'text-[var(--brand-yellow)]',
                                bg: 'bg-amber-50'
                            },
                            {
                                icon: Shield,
                                title: 'Fair Rankings',
                                description: 'Glicko-2 rating system ensures accurate skill assessment and prevents manipulation.',
                                color: 'text-[var(--brand-marine)]',
                                bg: 'bg-blue-50'
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="beva-card-hover p-8 group">
                                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={feature.color} size={28} />
                                </div>
                                <h3 className="beva-heading-sm mb-3">{feature.title}</h3>
                                <p className="beva-text-body">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live Competitions - Premium Grid */}
            <section className="beva-section-sm">
                <div className="beva-container">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="beva-heading-lg mb-3">
                                Live <span className="text-[var(--brand-green)]">Tournaments</span>
                            </h2>
                            <p className="beva-text-body">Join the action happening right now across Australia</p>
                        </div>
                        <Link to="/tournaments" className="beva-btn-ghost group hidden md:inline-flex">
                            View All
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="beva-grid-3">
                        {liveCompetitions.map((comp) => (
                            <div key={comp.id} className="beva-card-hover p-0 overflow-hidden group">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={comp.image}
                                        alt={comp.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { e.target.src = '/images/hero_bg.png'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    {/* Live Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="beva-badge-live flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full beva-animate-pulse-glow"></span>
                                            LIVE
                                        </span>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-lg font-bold text-white mb-2">{comp.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="beva-badge bg-[var(--brand-green)] text-white border-0 text-xs">
                                                {comp.discipline}
                                            </span>
                                            <span className="text-xs text-white/80">{comp.venue}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-6 space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-[var(--text-tertiary)] text-xs mb-1">Prize Pool</p>
                                            <p className="font-semibold text-[var(--brand-green)]">{comp.prizePool}</p>
                                        </div>
                                        <div>
                                            <p className="text-[var(--text-tertiary)] text-xs mb-1">Players</p>
                                            <p className="font-semibold text-[var(--text-primary)]">{comp.participants}</p>
                                        </div>
                                    </div>
                                    <button className="w-full beva-btn-outline text-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 md:hidden">
                        <Link to="/tournaments" className="beva-btn-ghost">
                            View All Tournaments
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials - Modern Slider */}
            <section className="beva-section-sm bg-white">
                <div className="beva-container-narrow">
                    <div className="text-center mb-12">
                        <h2 className="beva-heading-lg mb-3">
                            Trusted by <span className="text-[var(--brand-green)]">Champions</span>
                        </h2>
                        <p className="beva-text-body">See what players and venues are saying about Beva</p>
                    </div>

                    <div className="relative">
                        <div className="beva-card p-8 lg:p-12">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-[var(--brand-green)] text-white flex items-center justify-center text-xl font-bold shrink-0">
                                    {testimonials[currentTestimonial].avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-[var(--text-primary)]">{testimonials[currentTestimonial].name}</p>
                                    <p className="text-sm text-[var(--text-tertiary)]">{testimonials[currentTestimonial].role}</p>
                                </div>
                            </div>
                            <p className="text-xl text-[var(--text-secondary)] leading-relaxed italic">
                                "{testimonials[currentTestimonial].text}"
                            </p>
                            <div className="flex items-center gap-1 mt-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-[var(--brand-yellow)] text-[var(--brand-yellow)]" />
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full bg-[var(--surface-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--brand-green)] hover:text-white transition-all duration-200"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentTestimonial(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${idx === currentTestimonial
                                            ? 'w-8 bg-[var(--brand-green)]'
                                            : 'bg-[var(--border-medium)]'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full bg-[var(--surface-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--brand-green)] hover:text-white transition-all duration-200"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Premium Gradient */}
            <section className="beva-section-sm">
                <div className="beva-container">
                    <div className="relative p-12 lg:p-16 text-center text-white overflow-hidden rounded-3xl" style={{ background: 'linear-gradient(135deg, #001E3E 0%, #003366 100%)' }}>
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--brand-green)]/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                                Ready to Elevate Your Game?
                            </h2>
                            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
                                Join thousands of players competing in Australia's premier cuesports network.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/signup" className="beva-btn-lg px-8 py-4 bg-white text-[var(--brand-marine)] hover:bg-gray-100 rounded-2xl font-semibold inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    Create Free Account
                                    <ArrowRight size={20} />
                                </Link>
                                <Link to="/tournaments" className="beva-btn-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/20 rounded-2xl font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300">
                                    Explore Tournaments
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Premium with Social Media */}
            <footer className="bg-[var(--brand-marine)] text-white">
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

export default LandingPageV3;
