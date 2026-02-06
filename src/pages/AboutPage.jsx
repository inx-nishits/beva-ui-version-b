import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Zap, TrendingUp, Award, Globe, Heart } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="space-y-16 md:space-y-24 pb-16 md:pb-24 page-transition">
            {/* Hero Section - Standardized Hero Spacing */}
            <section className="relative py-12 md:py-20 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-beva-green-50/50 blur-[100px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-full bg-beva-marine-50/50 blur-[100px] rounded-full -translate-x-1/2"></div>

                <div className="text-center max-w-4xl mx-auto space-y-8">


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-beva-marine tracking-tighter leading-none"
                    >
                        Elevating the Game of <br />
                        <span className="text-beva-green">Cuesports.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-beva-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        Beva is Australia's premier digital platform for pool and snooker. We bridge the gap between casual play and professional competition through technology.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision Grid */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black text-beva-marine tracking-tighter">Our Mission</h2>
                        <p className="text-lg text-beva-slate-500 leading-relaxed">
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
                            <div key={i} className="bg-beva-slate-50 p-6 rounded-2xl border border-beva-slate-100 hover:border-beva-green transition-colors group">
                                <item.icon className="text-beva-slate-400 group-hover:text-beva-green mb-4 transition-colors" size={24} />
                                <h3 className="font-bold text-beva-marine mb-2">{item.title}</h3>
                                <p className="text-sm text-beva-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[600px] bg-beva-marine rounded-[3rem] overflow-hidden p-12 text-white flex flex-col justify-end">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1571597576558-7c858b1621aa?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-beva-marine via-transparent to-transparent"></div>

                    <div className="relative z-10 space-y-6">
                        <QuoteIcon className="text-beva-green w-12 h-12" />
                        <h3 className="text-3xl font-black leading-tight">
                            "We built Beva because we love the sport. Cuesports deserved a digital revolution, and we're proud to lead the charge."
                        </h3>
                        <div>
                            <p className="font-bold text-lg">David Sterling</p>
                            <p className="text-beva-green text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Standardized Section Spacing */}
            <section className="bg-beva-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-beva-green/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { label: 'Matches Tracked', value: '150k+' },
                        { label: 'Active Venues', value: '85' },
                        { label: 'Prize Money', value: '$2.5M' },
                        { label: 'Unique Players', value: '12k+' },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <p className="text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">{stat.value}</p>
                            <p className="text-xs font-bold text-beva-green uppercase tracking-[0.2em]">{stat.label}</p>
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

export default AboutPage;
