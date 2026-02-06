import React from 'react';
import { Target, Users, Shield, Zap, TrendingUp, Award, Globe, Heart } from 'lucide-react';

const AboutPageV2 = () => {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="text-center max-w-4xl mx-auto space-y-6">
                <h1 className="v2-heading-xl">
                    Elevating the Game of <br />
                    <span className="text-[var(--brand-green)]">Cuesports.</span>
                </h1>
                <p className="v2-text-lead max-w-2xl mx-auto">
                    Beva is Australia's premier digital platform for pool and snooker. We bridge the gap between casual play and professional competition through technology.
                </p>
            </section>

            {/* Mission & Vision Grid */}
            <section className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="v2-heading-md">Our Mission</h2>
                        <p className="v2-text-body">
                            To create a unified ecosystem where every frame counts. Whether you're a local club hero or a state champion, Beva provides the professional infrastructure to track your progress, manage tournaments, and grow the sport.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: Shield, title: "Integrity First", desc: "Unbiased Glicko-2 ratings." },
                            { icon: Users, title: "Community Driven", desc: "Connecting players & venues." },
                            { icon: Zap, title: "Modern Tech", desc: "Real-time live scoring." },
                            { icon: TrendingUp, title: "Growth Focused", desc: "Pathways to pro play." }
                        ].map((item, i) => (
                            <div key={i} className="v2-card-hover p-6">
                                <item.icon className="text-[var(--brand-green)] mb-4" size={24} />
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="v2-card p-8 lg:p-12 bg-[var(--brand-marine)] text-white border-0">
                    <div className="space-y-6">
                        <QuoteIcon className="text-[var(--brand-green)] w-12 h-12" />
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                            "We built Beva because we love the sport. Cuesports deserved a digital revolution, and we're proud to lead the charge."
                        </h3>
                        <div>
                            <p className="font-bold text-lg">David Sterling</p>
                            <p className="text-[var(--brand-green)] text-sm font-semibold">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="v2-card p-12 lg:p-16 bg-gray-900 text-white border-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
                    {[
                        { label: 'Matches Tracked', value: '150k+' },
                        { label: 'Active Venues', value: '85' },
                        { label: 'Prize Money', value: '$2.5M' },
                        { label: 'Unique Players', value: '12k+' },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <p className="text-4xl lg:text-5xl font-bold">{stat.value}</p>
                            <p className="text-xs font-semibold text-[var(--brand-green)] uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

const QuoteIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
);

export default AboutPageV2;
