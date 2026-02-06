import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Users, ChevronRight, Trophy, Zap, ArrowUpRight, Activity, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useCompetitions } from '../context/CompetitionContext';

const CustomDropdown = ({ label, options, value, onChange, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full input-cat h-16 px-6 flex items-center justify-between group transition-all duration-300 hover:border-beva-green/50"
            >
                <div className="flex items-center gap-4">
                    <Icon size={20} className={`transition-colors duration-300 ${isOpen ? 'text-beva-green' : 'text-beva-slate-300 group-hover:text-beva-green/70'}`} />
                    <span className="font-bold text-beva-marine">
                        {value === 'All' ? label : value}
                    </span>
                </div>
                <ChevronDown size={18} className={`text-beva-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-beva-green' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop to close on click outside */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-white rounded-2xl shadow-2xl border border-beva-slate-100 p-2 overflow-hidden"
                        >
                            <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                {options.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => {
                                            onChange(opt);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${value === opt
                                            ? 'bg-beva-green/10 text-beva-green'
                                            : 'text-beva-slate-500 hover:bg-beva-slate-50 hover:text-beva-marine'
                                            }`}
                                    >
                                        {opt === 'All' ? label : opt}
                                        {value === opt && <Check size={16} className="text-beva-green" />}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

const Competitions = () => {
    const { competitions } = useCompetitions();
    const [searchTerm, setSearchTerm] = useState('');
    const [disciplineFilter, setDisciplineFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');

    const filteredCompetitions = competitions.filter(comp => {
        const matchesSearch = comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comp.venue.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDiscipline = disciplineFilter === 'All' || comp.discipline === disciplineFilter;
        const matchesType = typeFilter === 'All' || comp.format === typeFilter;

        return matchesSearch && matchesDiscipline && matchesType;
    });

    return (
        <div className="space-y-12 md:space-y-16 pb-16 md:pb-24 page-transition">
            {/* Search & Filters */}
            <div className="flex flex-col gap-10">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-beva-green rounded-full animate-pulse"></div>
                        <span className="text-xs font-black text-beva-green">Discovery // Tournaments</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-beva-marine tracking-tighter leading-none">The <span className="text-beva-green">Tournaments.</span></h1>
                    <p className="text-xl text-beva-slate-500 font-medium max-w-2xl leading-relaxed">Find and join top pool and snooker events across the Australian venue network.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    <div className="lg:col-span-6 relative group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-beva-slate-300 group-focus-within:text-beva-green transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by venue or title..."
                            className="input-cat pl-14 h-16 font-semibold"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <CustomDropdown
                            label="All Disciplines"
                            options={['All', '8-Ball', '9-Ball', '10-Ball', 'Snooker', 'Blackball']}
                            value={disciplineFilter}
                            onChange={setDisciplineFilter}
                            icon={Zap}
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <CustomDropdown
                            label="All Types"
                            options={['All', 'Individual', 'Doubles', 'Team']}
                            value={typeFilter}
                            onChange={setTypeFilter}
                            icon={Users}
                        />
                    </div>
                </div>
            </div>

            {/* Circuit Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredCompetitions.map((comp, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={comp.id}
                        className="catalyst-card-vibrant group flex flex-col h-full bg-white p-0 overflow-hidden"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={comp.image}
                                alt={comp.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                onError={(e) => { e.target.src = '/images/hero_bg.png'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-beva-marine/90 via-beva-marine/40 to-transparent"></div>

                            {/* Entry Fee Badge */}
                            <div className="absolute top-6 left-6">
                                <span className="bg-beva-marine/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-black shadow-lg border border-white/10 uppercase tracking-widest">
                                    Fee: {comp.entryFee}
                                </span>
                            </div>

                            <div className="absolute top-6 right-6">
                                <span className={`badge-cat shadow-lg ${comp.status === 'LIVE' ? 'bg-beva-green text-white' : 'bg-white text-beva-marine shadow-xl'} font-black`}>
                                    {comp.status === 'LIVE' ? 'Ongoing' : 'Completed'}
                                </span>
                            </div>

                            <div className="absolute bottom-6 left-8 right-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest bg-beva-green px-2.5 py-1 rounded-lg shadow-lg">
                                        {comp.discipline}
                                    </span>
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-lg">
                                        {comp.format}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-white leading-none tracking-tighter drop-shadow-md">{comp.title}</h3>
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col justify-between space-y-10">
                            <div className="space-y-6 flex-1">
                                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-beva-slate-400">Prize Pool</p>
                                        <p className="text-sm font-bold text-beva-green">
                                            {comp.prizePool}
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-beva-slate-400">Venue</p>
                                        <p className="text-sm font-bold text-beva-marine truncate">
                                            {comp.venue}
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-beva-slate-400">Start Date</p>
                                        <p className="text-sm font-bold text-beva-marine">
                                            {new Date(comp.startDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-beva-slate-400">Participants</p>
                                        <p className="text-sm font-bold text-beva-marine">
                                            {comp.participants} Players
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full btn-cat-primary py-3 text-sm font-black group">
                                View Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredCompetitions.length === 0 && (
                <div className="text-center py-40 catalyst-card border-dashed">
                    <Activity size={48} className="text-beva-slate-200 mx-auto mb-6" />
                    <p className="text-xl font-bold text-beva-slate-400">No tournaments found</p>
                </div>
            )}
        </div>
    );
};

export default Competitions;
