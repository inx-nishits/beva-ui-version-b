import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Zap, Activity, Users, MapPin, Star, ChevronRight } from 'lucide-react';
import HeaderV2 from '../components/HeaderV2';
import { useCompetitions } from '../context/CompetitionContext';

const LandingPageV2 = () => {
    const { competitions } = useCompetitions();
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const featuredCompetition = competitions.find(c => c.status === 'LIVE') || competitions[0];

    const testimonials = [
        { name: 'James Wilson', role: 'Tournament Director', text: "Beva has completely transformed how we run our weekend majors. The bracket automation alone saves us hours." },
        { name: 'Sarah Chen', role: 'Pro Player', text: "Finally, a platform that accurately tracks my ranking across different venues. The Glicko-2 implementation is spot on." },
        { name: 'Mike Ross', role: 'Venue Manager', text: "Since switching to Beva, our player participation has increased by 40%. It's standard for Australian pool." },
        { name: 'David Miller', role: 'Club Captain', text: "Managing our local league used to be a nightmare of spreadsheets. Beva made it effortless and fun for everyone." },
        { name: 'Emma Watson', role: 'State Champion', text: "The real-time stats and leaderboards give me the motivation to keep improving. Love the interface!" },
        { name: 'Tom Hiddleston', role: 'Event Organizer', text: "A game changer for the industry. The seamless check-in and live scoring features are world class." },
    ];

    const liveCompetitions = competitions.filter(comp => comp.status === 'LIVE').slice(0, 5);

    return (
        <div className="min-h-screen bg-white">
            <HeaderV2 />

            {/* Hero Section */}
            <section className="v2-section-lg bg-gradient-to-b from-gray-50 to-white">
                <div className="v2-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Hero Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
                                <span className="w-2 h-2 bg-[var(--brand-green)] rounded-full animate-pulse"></span>
                                <span className="text-xs font-semibold text-[var(--brand-green)]">The Future of Cuesports</span>
                            </div>

                            <h1 className="v2-heading-xl">
                                Compete. <br />
                                <span className="text-[var(--brand-green)]">Win. Rise.</span>
                            </h1>

                            <p className="v2-text-lead max-w-xl">
                                Manage match results, track live competitions, and climb the leaderboards.
                                Your ultimate platform for pool and snooker tournaments across Australia.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/signup" className="v2-btn-primary v2-btn-lg group">
                                    Get Started
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/tournaments" className="v2-btn-outline v2-btn-lg">
                                    View Events
                                </Link>
                            </div>

                            <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">2.5k+</p>
                                    <p className="text-sm text-gray-600">Active Players</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">140+</p>
                                    <p className="text-sm text-gray-600">Verified Venues</p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/images/hero_pool.png"
                                    alt="Professional Pool Tournament - Ball Setup"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>

                                {/* Featured Match Card */}
                                {featuredCompetition && (
                                    <Link to="/tournaments" className="absolute bottom-6 left-6 right-6">
                                        <div className="v2-card-hover p-4 bg-white/95 backdrop-blur-sm">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-marine)] flex items-center justify-center text-white">
                                                        <Trophy size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-500 font-medium">Featured Match</p>
                                                        <p className="font-bold text-gray-900 truncate max-w-[200px]">
                                                            {featuredCompetition.title}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                    </span>
                                                    <span className="text-xs font-bold text-gray-900">LIVE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="v2-section">
                <div className="v2-container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="v2-heading-lg mb-4">Key Features</h2>
                        <p className="v2-text-lead">
                            Everything you need to manage and compete in professional cuesports tournaments
                        </p>
                    </div>

                    <div className="v2-grid-auto-lg">
                        {[
                            {
                                title: 'Easy Match Entry',
                                desc: 'Quickly input match results with a user-friendly interface designed for speed and accuracy.',
                                icon: Zap,
                                color: 'green'
                            },
                            {
                                title: 'Live Competition Tracking',
                                desc: 'Stay informed about all ongoing and upcoming competitions with real-time updates and notifications.',
                                icon: Activity,
                                color: 'blue'
                            },
                            {
                                title: 'Tournament Management',
                                desc: 'Create and manage tournaments with multiple formats including Round Robin and Double Elimination brackets.',
                                icon: Trophy,
                                color: 'yellow'
                            },
                        ].map((feature, i) => (
                            <div key={i} className="v2-card-hover p-8 group">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color === 'green' ? 'bg-green-100 text-[var(--brand-green)]' :
                                        feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                            'bg-yellow-100 text-[var(--brand-yellow)]'
                                    }`}>
                                    <feature.icon size={28} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="v2-text-body">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ongoing Competitions Section */}
            <section className="v2-section bg-gray-50">
                <div className="v2-container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full mb-4">
                            <span className="w-2 h-2 bg-[var(--brand-green)] rounded-full animate-pulse"></span>
                            <span className="text-xs font-semibold text-[var(--brand-green)]">LIVE</span>
                        </div>
                        <h2 className="v2-heading-lg mb-4">Ongoing Competitions</h2>
                        <p className="v2-text-lead">View live tournaments and upcoming events.</p>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden lg:block v2-card overflow-hidden p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Competition Name</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Start Date</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">End Date</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Total Participants</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {liveCompetitions.map((comp) => {
                                        const startDate = new Date(comp.startDate);
                                        const endDate = new Date(startDate);
                                        endDate.setDate(endDate.getDate() + 30);

                                        return (
                                            <tr key={comp.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-sm">
                                                            {comp.title.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{comp.title}</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <span>{comp.discipline}</span>
                                                                <span>•</span>
                                                                <span>{comp.format}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="v2-badge-success">
                                                        <span className="relative flex h-1.5 w-1.5">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                                        </span>
                                                        Ongoing
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center text-sm text-gray-700">
                                                    {startDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                                                </td>
                                                <td className="px-6 py-4 text-center text-sm text-gray-700">
                                                    {endDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg">
                                                        <Users size={16} className="text-[var(--brand-green)]" />
                                                        <span className="font-semibold text-gray-900">{comp.participants}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <Link to="/tournaments" className="v2-btn-primary v2-btn-sm">
                                                        View Details
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3 text-center">
                            <Link to="/tournaments" className="text-sm font-medium text-gray-600 hover:text-[var(--brand-green)] inline-flex items-center gap-2">
                                View Full Schedule
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Cards */}
                    <div className="lg:hidden space-y-4">
                        {liveCompetitions.map((comp) => {
                            const startDate = new Date(comp.startDate);
                            const endDate = new Date(startDate);
                            endDate.setDate(endDate.getDate() + 30);

                            return (
                                <div key={comp.id} className="v2-card">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-sm">
                                                {comp.title.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{comp.title}</h3>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <span>{comp.discipline}</span>
                                                    <span>•</span>
                                                    <span>{comp.format}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="v2-badge-success">Ongoing</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Start Date</p>
                                            <p className="text-sm font-medium text-gray-900">
                                                {startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">End Date</p>
                                            <p className="text-sm font-medium text-gray-900">
                                                {endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
                                            <Users size={16} className="text-[var(--brand-green)]" />
                                            <span className="font-semibold text-gray-900">{comp.participants}</span>
                                            <span className="text-sm text-gray-600">Players</span>
                                        </div>
                                        <Link to="/tournaments" className="v2-btn-primary v2-btn-sm">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Fair Play Section */}
            <section className="v2-section">
                <div className="v2-container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="v2-heading-lg mb-4">Built for Fair Competition.</h2>
                        <p className="v2-text-lead">
                            Beva provides the tools you need to improve your game, your tournament, and your venue.
                        </p>
                    </div>

                    <div className="v2-grid-auto-lg">
                        {[
                            { title: 'Official Rankings', icon: Activity, desc: 'Every frame counts. Our Glicko-2 system makes sure your ranking shows your real skill level.' },
                            { title: 'Player Development', icon: Activity, desc: 'Track your progress and improve your game with detailed match statistics and history.' },
                            { title: 'Venue Network', icon: MapPin, desc: 'Find and book sessions at the best venues in the country, fully connected with BEVA.' },
                        ].map((feature, i) => (
                            <div key={i} className="v2-card-hover p-8">
                                <div className="w-12 h-12 rounded-xl bg-green-100 text-[var(--brand-green)] flex items-center justify-center mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="v2-text-body">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="v2-section bg-gray-50">
                <div className="v2-container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="v2-heading-lg mb-4">Trusted by the Pros.</h2>
                        <p className="v2-text-lead">See what tournament organizers and players are saying.</p>
                    </div>

                    <div className="v2-grid-auto">
                        {testimonials.slice(0, 3).map((testimonial, i) => (
                            <div key={i} className="v2-card p-6">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-[var(--brand-yellow)] fill-[var(--brand-yellow)]" />
                                    ))}
                                </div>
                                <p className="v2-text-body mb-6">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-[var(--brand-green)]">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="v2-section-lg">
                <div className="v2-container">
                    <div className="v2-card p-12 lg:p-16 text-center bg-[var(--brand-marine)] border-0">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="v2-heading-lg text-white">Ready to join the competition?</h2>
                            <p className="v2-text-lead text-white/80">
                                Join thousands of players improving their game every day.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/signup" className="v2-btn-primary v2-btn-lg">
                                    Create Account
                                </Link>
                                <Link to="/contact" className="v2-btn v2-btn-lg bg-white/10 text-white border border-white/20 hover:bg-white/20">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="v2-section border-t border-gray-200">
                <div className="v2-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="lg:col-span-2 space-y-4">
                            <Link to="/" className="inline-block">
                                <img src="/images/logo-beva.png" alt="BEVA" className="h-14 w-auto object-contain" />
                            </Link>
                            <p className="v2-text-body max-w-md">
                                Your ultimate platform for real-time tournament tracking, seamless match management, and official rankings.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Tournaments</h4>
                            <div className="space-y-3">
                                {[
                                    { name: 'Upcoming Events', path: '/tournaments' },
                                    { name: 'Rankings', path: '/tournaments' },
                                    { name: 'Hall of Fame', path: '/tournaments' },
                                    { name: 'Venue Network', path: '/tournaments' },
                                ].map(item => (
                                    <Link key={item.name} to={item.path} className="block text-sm text-gray-600 hover:text-[var(--brand-green)] transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                            <div className="space-y-3">
                                {[
                                    { name: 'FAQs', path: '/faqs' },
                                    { name: 'Contact Us', path: '/contact' },
                                    { name: 'Fair Play', path: '/hub/privacy' },
                                    { name: 'Terms', path: '/hub/terms' },
                                    { name: 'Privacy', path: '/hub/privacy' },
                                ].map(item => (
                                    <Link key={item.name} to={item.path} className="block text-sm text-gray-600 hover:text-[var(--brand-green)] transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © 2026 BEVA SYSTEMS AUSTRALIA
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPageV2;
