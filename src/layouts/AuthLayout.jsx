import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Trophy, Zap, Shield, BarChart3, Home, ArrowLeft } from 'lucide-react';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            {/* Centered Container */}
            <div className="w-full max-w-6xl mx-auto">
                {/* Two-Column Card - Scrollable */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-2">

                        {/* Left Column - Brand & Info */}
                        <div className="hidden lg:flex bg-gradient-to-br from-[var(--brand-marine)] to-[var(--brand-marine-light)] p-12 relative overflow-hidden h-[700px] max-h-[calc(100vh-8rem)]">
                            {/* Subtle Pattern Overlay */}
                            <div className="absolute inset-0 opacity-5" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}></div>

                            <div className="relative z-10 flex flex-col justify-between w-full h-full">
                                {/* Top Branding Section */}
                                <div className="space-y-10">
                                    <div className="flex items-center justify-between">
                                        <Link to="/" className="inline-block transition-transform hover:scale-105">
                                            <img
                                                src="/images/logo-beva.png"
                                                alt="Cuesports Central"
                                                className="h-10 w-auto"
                                            />
                                        </Link>
                                        <Link
                                            to="/"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all border border-white/10 font-semibold text-xs"
                                        >
                                            <Home size={14} />
                                            <span>Back to Home</span>
                                        </Link>
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                                            Australia's Premier
                                            <span className="block text-[var(--brand-green)]">Cuesports Platform</span>
                                        </h2>
                                        <p className="text-white/70 leading-relaxed text-sm">
                                            Professional tournament management with real-time scoring and fair rankings.
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-5">
                                        {[
                                            { icon: Trophy, label: 'Tournament Management', desc: 'Automated brackets & live updates' },
                                            { icon: Zap, label: 'Real-time Scoring', desc: 'Frame-by-frame tracking' },
                                            { icon: Shield, label: 'Fair Rankings', desc: 'Glicko-2 rating system' },
                                            { icon: BarChart3, label: 'Analytics', desc: 'Detailed stats & insights' }
                                        ].map((feature, i) => (
                                            <div key={i} className="flex items-start gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-green)] transition-all duration-300">
                                                    <feature.icon size={18} className="text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white group-hover:text-[var(--brand-green)] transition-colors">{feature.label}</p>
                                                    <p className="text-xs text-white/50">{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                    {[
                                        { value: '12k+', label: 'Players' },
                                        { value: '85', label: 'Venues' },
                                        { value: '150k+', label: 'Matches' }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                                            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Auth Forms */}
                        <div className="p-8 lg:p-12 h-full max-h-[calc(100vh-8rem)] overflow-y-auto bg-white flex flex-col">
                            {/* Mobile Logo & Back - Visible only on mobile/tablet */}
                            <div className="lg:hidden flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
                                <Link to="/">
                                    <img
                                        src="/images/logo-beva.png"
                                        alt="Cuesports Central"
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[var(--brand-green)] transition-colors"
                                >
                                    <ArrowLeft size={14} />
                                    <span>Home</span>
                                </Link>
                            </div>

                            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full py-4">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
