import React from 'react';
import { Target, Users, Shield, Zap, TrendingUp, Award, Quote } from 'lucide-react';

const AboutPageV3 = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section - Premium */}
            <section className="text-center max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-[var(--border-light)] mb-4">
                    <Target size={16} className="text-[var(--brand-green)]" />
                    <span className="text-sm font-semibold text-[var(--text-secondary)]">Our Story</span>
                </div>
                <h1 className="beva-display">
                    Elevating Cuesports
                </h1>
                <p className="beva-text-lead max-w-2xl mx-auto">
                    Beva is Australia's premier digital platform for pool and snooker. We bridge the gap between casual play and professional competition through technology.
                </p>
            </section>

            {/* Mission & Values - Modern Grid */}
            <section className="beva-grid-2 items-start">
                <div className="space-y-8">
                    <div className="beva-card p-8">
                        <h2 className="beva-heading-md mb-4">Our Mission</h2>
                        <p className="beva-text-body">
                            To create a unified ecosystem where every frame counts. Whether you're a local club hero or a state champion, Beva provides the professional infrastructure to track your progress, manage tournaments, and grow the sport.
                        </p>
                    </div>

                    <div className="beva-grid-2">
                        {[
                            { icon: Shield, title: "Integrity First", desc: "Unbiased Glicko-2 ratings.", color: "text-[var(--brand-green)]", bg: "bg-emerald-50" },
                            { icon: Users, title: "Community Driven", desc: "Connecting players & venues.", color: "text-blue-600", bg: "bg-blue-50" },
                            { icon: Zap, title: "Modern Tech", desc: "Real-time live scoring.", color: "text-[var(--brand-yellow)]", bg: "bg-amber-50" },
                            { icon: TrendingUp, title: "Growth Focused", desc: "Pathways to pro play.", color: "text-purple-600", bg: "bg-purple-50" }
                        ].map((item, i) => (
                            <div key={i} className="beva-card-hover p-6 group">
                                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={item.color} size={24} />
                                </div>
                                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative p-10 lg:p-12 text-white overflow-hidden rounded-3xl" style={{ background: 'linear-gradient(135deg, #001E3E 0%, #003366 100%)' }}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 space-y-6">
                        <Quote className="text-[var(--brand-green)] w-12 h-12" />
                        <h3 className="text-3xl font-bold leading-tight text-white">
                            "We built Beva because we love the sport. Cuesports deserved a digital revolution, and we're proud to lead the charge."
                        </h3>
                        <div className="pt-6 border-t border-white/20">
                            <p className="font-bold text-xl">David Sterling</p>
                            <p className="text-[var(--brand-green)] text-sm font-semibold">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Premium */}
            <section className="relative p-12 lg:p-16 text-white overflow-hidden rounded-3xl" style={{ background: 'linear-gradient(135deg, #001E3E 0%, #003366 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-[var(--brand-green)]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 beva-grid-4 text-center">
                    {[
                        { label: 'Matches Tracked', value: '150k+' },
                        { label: 'Active Venues', value: '85' },
                        { label: 'Prize Money', value: '$2.5M' },
                        { label: 'Unique Players', value: '12k+' },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <p className="text-5xl lg:text-6xl font-bold text-white">{stat.value}</p>
                            <p className="text-sm font-semibold text-[var(--brand-green)] uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPageV3;
