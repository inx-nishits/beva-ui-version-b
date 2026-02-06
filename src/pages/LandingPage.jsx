import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Zap, Target, Activity, Quote, Star, Users, MapPin, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import { useCompetitions } from '../context/CompetitionContext';

const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { competitions } = useCompetitions();

    // Find the primary featured competition (Live or first available)
    const featuredCompetition = competitions.find(c => c.status === 'LIVE') || competitions[0];



    const testimonials = [
        { name: 'James Wilson', role: 'Tournament Director', text: "Beva has completely transformed how we run our weekend majors. The bracket automation alone saves us hours." },
        { name: 'Sarah Chen', role: 'Pro Player', text: "Finally, a platform that accurately tracks my ranking across different venues. The Glicko-2 implementation is spot on." },
        { name: 'Mike Ross', role: 'Venue Manager', text: "Since switching to Beva, our player participation has increased by 40%. It's standard for Australian pool." },
        { name: 'David Miller', role: 'Club Captain', text: "Managing our local league used to be a nightmare of spreadsheets. Beva made it effortless and fun for everyone." },
        { name: 'Emma Watson', role: 'State Champion', text: "The real-time stats and leaderboards give me the motivation to keep improving. Love the interface!" },
        { name: 'Tom Hiddleston', role: 'Event Organizer', text: "A game changer for the industry. The seamless check-in and live scoring features are world class." },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-white min-h-screen text-beva-marine selection:bg-beva-green selection:text-white overflow-x-hidden">
            <Header />



            <main>
                {/* Hero Section - Standardized Hero Spacing */}
                <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative">
                    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full overflow-hidden rounded-l-[10rem] hidden lg:block">
                        <img src="/images/hero_bg.png" alt="Background" className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
                    </div>
                    <div className="catalyst-container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-beva-green-50 rounded-full border border-beva-green-100">
                                    <span className="w-2 h-2 bg-beva-green rounded-full animate-ping"></span>
                                    <span className="text-xs font-bold text-beva-green-600">The Future of Cuesports</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] text-beva-marine">
                                    Compete. <br />
                                    <span className="text-beva-green">Win. Rise.</span>
                                </h1>
                                <p className="text-xl text-beva-slate-500 max-w-xl font-medium leading-relaxed">
                                    Manage match results, track live competitions, and climb the leaderboards.
                                    Your ultimate platform for pool and snooker tournaments across Australia.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link to="/signup" className="btn-cat-primary py-4 px-10 text-base group">
                                        Get Started <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                    <Link to="/tournaments" className="btn-cat-outline py-4 px-10 text-base font-bold">
                                        View Events
                                    </Link>
                                </div>
                                <div className="flex items-center gap-10 pt-8 border-t border-beva-slate-100">
                                    <div className="space-y-1">
                                        <p className="text-3xl font-black text-beva-marine">2.5k+</p>
                                        <p className="text-xs font-bold text-beva-slate-400">Active Players</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-black text-beva-marine">140+</p>
                                        <p className="text-xs font-bold text-beva-slate-400">Verified Venues</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative hidden lg:block perspective-1000"
                            >
                                <div className="absolute inset-0 bg-beva-green/20 blur-3xl rounded-full transform rotate-12 scale-110"></div>
                                <div
                                    className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-beva-marine rotate-2 hover:rotate-0 transition-all duration-700 ease-out group transform-gpu z-0"
                                    style={{ isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                                >
                                    <img
                                        src="/images/hero_pool.png"
                                        alt="Professional Pool Tournament - Ball Setup"
                                        className="w-full h-full object-cover min-h-[500px] opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-beva-marine via-beva-marine/20 to-transparent opacity-80"></div>

                                    {/* Floating Live Card - Clickable Link to First Item */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <Link to="/tournaments" className="block">
                                            <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl p-5 border border-white/50 flex items-center justify-between transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 hover:bg-white">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-beva-marine flex items-center justify-center text-white shadow-lg shadow-beva-marine/20">
                                                        <Trophy size={20} strokeWidth={3} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-beva-slate-400 mb-0.5">Featured Match</p>
                                                        <p className="font-black text-beva-marine text-lg leading-none truncate max-w-[150px] lg:max-w-[200px]">
                                                            {featuredCompetition ? featuredCompetition.title : 'Pro Series 2025'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                        </span>
                                                        <span className="text-xs font-black text-beva-marine">LIVE</span>
                                                    </div>
                                                    <p className="text-xs font-bold text-beva-slate-400 group-hover:text-beva-green transition-colors">View Match</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Key Features Section - Standardized Section Spacing */}
                <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                    <div className="catalyst-container relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-beva-marine">
                                    Key Features
                                </h2>
                                <p className="text-lg text-beva-slate-500 font-medium mt-6">
                                    Everything you need to manage and compete in professional cuesports tournaments
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Easy Match Entry',
                                    desc: 'Quickly input match results with a user-friendly interface designed for speed and accuracy.',
                                    icon: Zap,
                                    gradient: 'from-beva-green-500 to-beva-green-700',
                                    bgColor: 'bg-beva-green-50',
                                    iconColor: 'text-beva-green-600'
                                },
                                {
                                    title: 'Live Competition Tracking',
                                    desc: 'Stay informed about all ongoing and upcoming competitions with real-time updates and notifications.',
                                    icon: Activity,
                                    gradient: 'from-beva-marine-500 to-beva-marine-700',
                                    bgColor: 'bg-beva-marine-50',
                                    iconColor: 'text-beva-marine-600'
                                },
                                {
                                    title: 'Tournament Management',
                                    desc: 'Create and manage tournaments with multiple formats including Round Robin and Double Elimination brackets.',
                                    icon: Trophy,
                                    gradient: 'from-beva-yellow-500 to-orange-600',
                                    bgColor: 'bg-beva-yellow-50',
                                    iconColor: 'text-beva-yellow-600'
                                },
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="catalyst-card bg-white p-10 h-full flex flex-col hover:-translate-y-2 transition-all duration-300 border-2 border-beva-slate-100 hover:border-beva-green/30 hover:shadow-2xl">
                                        {/* Icon Container */}
                                        <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <feature.icon size={32} className={feature.iconColor} strokeWidth={2.5} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-black mb-4 tracking-tight text-beva-marine group-hover:text-beva-green transition-colors">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-beva-slate-500 text-base leading-relaxed flex-1">
                                            {feature.desc}
                                        </p>

                                        {/* Decorative gradient bar */}
                                        <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded-full mt-6 transition-all duration-500`}></div>
                                    </div>

                                    {/* Background glow effect on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ongoing Competitions Section - Standardized Section Spacing */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-beva-slate-50 to-white relative overflow-hidden">
                    <div className="catalyst-container relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-beva-green-50 rounded-full border border-beva-green-100 mb-6">
                                    <span className="w-2 h-2 bg-beva-green rounded-full animate-ping"></span>
                                    <span className="text-xs font-bold text-beva-green-600">LIVE</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-beva-marine">
                                    Ongoing Competitions
                                </h2>
                                <p className="text-lg text-beva-slate-500 font-medium mt-6">
                                    View live tournaments and upcoming events.
                                </p>
                            </motion.div>
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden lg:block catalyst-card overflow-hidden p-0 border-2 border-beva-slate-100 shadow-xl">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-beva-marine text-white">
                                            <th className="px-8 py-5 text-left text-xs font-black uppercase tracking-wider w-1/3">Competition Name</th>
                                            <th className="px-8 py-5 text-center text-xs font-black uppercase tracking-wider">Status</th>
                                            <th className="px-8 py-5 text-center text-xs font-black uppercase tracking-wider">Start Date</th>
                                            <th className="px-8 py-5 text-center text-xs font-black uppercase tracking-wider">End Date</th>
                                            <th className="px-8 py-5 text-center text-xs font-black uppercase tracking-wider">Total Participants</th>
                                            <th className="px-8 py-5 text-center text-xs font-black uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-beva-slate-100 bg-white">
                                        {competitions.filter(comp => comp.status === 'LIVE').slice(0, 5).map((comp, i) => {
                                            const startDate = new Date(comp.startDate);
                                            const endDate = new Date(startDate);
                                            endDate.setDate(endDate.getDate() + 30);

                                            const isActive = comp.status === 'LIVE';

                                            return (
                                                <motion.tr
                                                    key={comp.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                    className="hover:bg-beva-slate-50/80 transition-colors group"
                                                >
                                                    <td className="px-8 py-6">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-lg bg-beva-slate-100 flex items-center justify-center text-beva-marine font-black text-xs shadow-sm border border-beva-slate-200">
                                                                {comp.title.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <p className="font-black text-beva-marine group-hover:text-beva-green transition-colors text-sm">{comp.title}</p>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-[10px] font-bold text-beva-green uppercase tracking-wider">{comp.discipline}</span>
                                                                    <span className="text-[10px] font-bold text-beva-slate-400 uppercase tracking-wider">• {comp.format}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 text-center">
                                                        <span className={`inline-flex w-24 justify-center items-center gap-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${isActive
                                                            ? 'bg-beva-green-100 text-beva-green-700 border border-beva-green-100'
                                                            : 'bg-beva-marine-50 text-beva-marine-700 border border-beva-marine-100'
                                                            }`}>
                                                            {isActive && (
                                                                <span className="relative flex h-2 w-2">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beva-green-500 opacity-75"></span>
                                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-beva-green-600"></span>
                                                                </span>
                                                            )}
                                                            {isActive ? 'Ongoing' : 'Completed'}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-6 text-center">
                                                        <span className="font-bold text-beva-marine text-sm">{startDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
                                                    </td>
                                                    <td className="px-8 py-6 text-center">
                                                        <span className="font-bold text-beva-marine text-sm">{endDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
                                                    </td>
                                                    <td className="px-8 py-6 text-center">
                                                        <div className="inline-flex items-center gap-2 bg-beva-slate-50 px-4 py-2 rounded-xl">
                                                            <Users size={16} className="text-beva-green" />
                                                            <span className="font-black text-beva-marine">{comp.participants}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 text-center">
                                                        <Link to="/tournaments" className="bg-beva-green hover:bg-beva-green-600 text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 inline-block">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </motion.tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-beva-slate-50 border-t border-beva-slate-100 p-3 text-center">
                                <Link to="/tournaments" className="text-xs font-black text-beva-slate-400 hover:text-beva-marine uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                                    View Full Schedule <ArrowRight size={12} />
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Card View */}
                        <div className="lg:hidden space-y-4">
                            {competitions.filter(comp => comp.status === 'LIVE').slice(0, 4).map((comp, i) => {
                                const startDate = new Date(comp.startDate);
                                const isActive = comp.status === 'LIVE';

                                return (
                                    <motion.div
                                        key={comp.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="catalyst-card p-5 border border-beva-slate-200 shadow-sm"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-beva-slate-100 flex items-center justify-center text-beva-marine font-black text-xs">
                                                    {comp.title.charAt(0)}
                                                </div>
                                                <div>
                                                    <h3 className="font-black text-beva-marine text-sm leading-tight mb-0.5">{comp.title}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-black text-beva-green uppercase tracking-wider">{comp.discipline}</span>
                                                        <span className="text-[10px] font-bold text-beva-slate-400 uppercase tracking-wider">• {comp.format}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className={`w-20 justify-center py-0.5 rounded text-[10px] font-black uppercase tracking-wide flex items-center gap-1.5 ${isActive ? 'bg-beva-green-100 text-beva-green-700' : 'bg-beva-marine-50 text-beva-marine-700'
                                                    }`}>
                                                    {isActive && (
                                                        <span className="relative flex h-1.5 w-1.5">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beva-green-500 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-beva-green-600"></span>
                                                        </span>
                                                    )}
                                                    {isActive ? 'Ongoing' : 'Completed'}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mb-4 bg-beva-slate-50 p-3 rounded-lg border border-beva-slate-100">
                                            <div>
                                                <p className="text-[10px] font-black text-beva-slate-400 uppercase tracking-wider mb-1">Start Date</p>
                                                <p className="font-bold text-beva-marine text-xs">
                                                    {startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-beva-slate-400 uppercase tracking-wider mb-1">End Date</p>
                                                <p className="font-bold text-beva-marine text-xs">
                                                    {new Date(new Date(comp.startDate).setDate(new Date(comp.startDate).getDate() + 30)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 bg-beva-slate-50 px-4 py-2 rounded-xl">
                                                <Users size={16} className="text-beva-green" />
                                                <span className="font-black text-beva-marine">{comp.participants}</span>
                                                <span className="text-xs font-bold text-beva-slate-400">Players</span>
                                            </div>
                                            <Link to="/tournaments" className="bg-beva-green hover:bg-beva-green-600 text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 inline-block text-center">
                                                View Details
                                            </Link>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Comparison/Fair Play Section - Standardized Section Spacing */}
                <section className="py-16 md:py-24 bg-beva-slate-50 relative overflow-hidden">
                    <div className="catalyst-container relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-beva-marine uppercase">Built for Fair Competition.</h2>
                            <p className="text-lg text-beva-slate-500 font-medium">Beva provides the tools you need to improve your game, your tournament, and your venue.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Official Rankings', icon: Activity, desc: 'Every frame counts. Our Glicko-2 system makes sure your ranking shows your real skill level.' },
                                { title: 'Player Development', icon: Activity, desc: 'Track your progress and improve your game with detailed match statistics and history.' },
                                { title: 'Venue Network', icon: MapPin, desc: 'Find and book sessions at the best venues in the country, fully connected with BEVA.' },
                            ].map((feature, i) => (
                                <div key={i} className="catalyst-card bg-white p-10 group hover:-translate-y-1 transition-transform">
                                    <div className="w-14 h-14 bg-beva-green-50 text-beva-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-beva-green group-hover:text-white transition-colors">
                                        <feature.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 tracking-tight text-beva-marine">{feature.title}</h3>
                                    <p className="text-beva-slate-500 text-base leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Slider Section - Standardized Section Spacing */}
                <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                    <div className="catalyst-container relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div className="space-y-4 max-w-2xl text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-beva-marine uppercase">Trusted by the Pros.</h2>
                                <p className="text-lg text-beva-slate-500 font-medium">See what tournament organizers and players are saying.</p>
                            </div>
                            {/* Hide arrows on mobile as requested */}
                            <div className="hidden md:flex gap-4">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-14 h-14 rounded-2xl border-2 border-beva-slate-100 flex items-center justify-center text-beva-slate-400 hover:border-beva-green hover:text-beva-green transition-all"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="w-14 h-14 rounded-2xl bg-beva-marine text-white flex items-center justify-center hover:bg-beva-green transition-all shadow-lg"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Carousel Track with Drag Support for Mobile */}
                        <div className="relative">
                            <motion.div
                                className="flex gap-8 cursor-grab active:cursor-grabbing"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = offset.x;
                                    const swipeThreshold = 50;
                                    if (swipe < -swipeThreshold) {
                                        nextTestimonial();
                                    } else if (swipe > swipeThreshold) {
                                        prevTestimonial();
                                    }
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full shrink-0">
                                    {[0, 1, 2].map((offset) => {
                                        const item = testimonials[(currentIndex + offset) % testimonials.length];
                                        return (
                                            <motion.div
                                                key={`${currentIndex}-${offset}`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4 }}
                                                className={`${offset > 0 ? 'hidden md:flex' : 'flex'} bg-beva-slate-50 rounded-[2rem] p-8 md:p-10 relative hover:-translate-y-1 transition-transform duration-300 h-full flex-col justify-between select-none`}
                                            >
                                                <Quote className="text-beva-green/20 absolute top-8 right-8" size={48} md:size={64} />
                                                <div className="space-y-6 relative z-10">
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} size={16} className="text-beva-yellow-500 fill-beva-yellow-500" />
                                                        ))}
                                                    </div>
                                                    <p className="text-beva-marine font-bold text-base md:text-lg leading-relaxed min-h-[5rem]">"{item.text}"</p>
                                                    <div>
                                                        <p className="font-black text-beva-marine text-lg">{item.name}</p>
                                                        <p className="text-xs font-bold text-beva-green uppercase tracking-wider">{item.role}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Mobile Pagination Dots - Draggable indicator */}
                            <div className="flex justify-center gap-2 mt-12 md:hidden">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-beva-green w-6' : 'bg-beva-slate-200'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Standardized Emphasized Spacing */}
                <section className="py-16 md:py-24">
                    <div className="catalyst-container">
                        <div className="bg-beva-marine rounded-[3rem] p-12 lg:p-24 text-white text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-beva-green/20 to-transparent opacity-50" />
                            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                                <h2 className="text-3xl md:text-7xl font-black tracking-tighter leading-none">Ready to join the competition?</h2>
                                <p className="text-xl text-white/60 font-medium">Join thousands of players improving their game every day.</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link to="/signup" className="btn-cat-primary py-5 px-12 text-lg">Create Account</Link>
                                    <Link to="/contact" className="btn-cat-outline bg-white/5 border-white/20 text-white hover:bg-white/10 py-5 px-12 text-lg">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-10 md:py-20 border-t border-beva-slate-100 bg-white">
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
        </div >
    );
};



export default LandingPage;
