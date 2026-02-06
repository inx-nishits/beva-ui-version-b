import React, { useState } from 'react';
import { Search, Users, ChevronRight, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCompetitions } from '../context/CompetitionContext';

const DropdownFilter = ({ label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="v2-input-lg flex items-center justify-between w-full"
            >
                <span className="font-medium text-gray-900">
                    {value === 'All' ? label : value}
                </span>
                <ChevronDown size={18} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full left-0 right-0 mt-2 z-20 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-64 overflow-y-auto">
                        {options.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${value === opt
                                        ? 'bg-green-50 text-[var(--brand-green)] font-medium'
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {opt === 'All' ? label : opt}
                                {value === opt && <Check size={16} className="text-[var(--brand-green)]" />}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const CompetitionsV2 = () => {
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
        <div className="space-y-12 pb-16">
            {/* Page Header */}
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
                    <span className="w-2 h-2 bg-[var(--brand-green)] rounded-full animate-pulse"></span>
                    <span className="text-xs font-semibold text-[var(--brand-green)]">Discovery // Tournaments</span>
                </div>
                <h1 className="v2-heading-xl">
                    The <span className="text-[var(--brand-green)]">Tournaments.</span>
                </h1>
                <p className="v2-text-lead max-w-2xl">
                    Find and join top pool and snooker events across the Australian venue network.
                </p>
            </div>

            {/* Search & Filters */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-6 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by venue or title..."
                        className="v2-input-lg pl-12 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="lg:col-span-3">
                    <DropdownFilter
                        label="All Disciplines"
                        options={['All', '8-Ball', '9-Ball', '10-Ball', 'Snooker', 'Blackball']}
                        value={disciplineFilter}
                        onChange={setDisciplineFilter}
                    />
                </div>
                <div className="lg:col-span-3">
                    <DropdownFilter
                        label="All Types"
                        options={['All', 'Individual', 'Doubles', 'Team']}
                        value={typeFilter}
                        onChange={setTypeFilter}
                    />
                </div>
            </div>

            {/* Competitions Grid */}
            <div className="v2-grid-auto-lg">
                {filteredCompetitions.map((comp) => (
                    <div key={comp.id} className="v2-card-hover p-0 overflow-hidden flex flex-col">
                        {/* Competition Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={comp.image}
                                alt={comp.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                onError={(e) => { e.target.src = '/images/hero_bg.png'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg text-xs font-semibold">
                                    Fee: {comp.entryFee}
                                </span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${comp.status === 'LIVE'
                                        ? 'bg-[var(--brand-green)] text-white'
                                        : 'bg-white text-gray-900'
                                    }`}>
                                    {comp.status === 'LIVE' ? 'Ongoing' : 'Completed'}
                                </span>
                            </div>

                            {/* Title & Tags */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2.5 py-1 bg-[var(--brand-green)] text-white rounded-md text-xs font-semibold">
                                        {comp.discipline}
                                    </span>
                                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs font-semibold">
                                        {comp.format}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white">{comp.title}</h3>
                            </div>
                        </div>

                        {/* Competition Details */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Prize Pool</p>
                                    <p className="text-sm font-semibold text-[var(--brand-green)]">
                                        {comp.prizePool}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Venue</p>
                                    <p className="text-sm font-semibold text-gray-900 truncate">
                                        {comp.venue}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Start Date</p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {new Date(comp.startDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Participants</p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {comp.participants} Players
                                    </p>
                                </div>
                            </div>
                            <button className="v2-btn-primary w-full group">
                                View Details
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredCompetitions.length === 0 && (
                <div className="v2-card p-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                        <Search size={32} className="text-gray-400" />
                    </div>
                    <p className="text-lg font-semibold text-gray-900 mb-2">No tournaments found</p>
                    <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    );
};

export default CompetitionsV2;
