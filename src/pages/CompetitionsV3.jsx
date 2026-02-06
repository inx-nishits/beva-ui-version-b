import React, { useState } from 'react';
import { Search, Filter, MapPin, Users, Calendar, Trophy, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCompetitions } from '../context/CompetitionContext';

const FilterDropdown = ({ label, options, value, onChange, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="beva-input flex items-center justify-between w-full gap-2"
            >
                <div className="flex items-center gap-2">
                    {Icon && <Icon size={18} className="text-[var(--text-tertiary)]" />}
                    <span className="font-medium text-[var(--text-primary)]">
                        {value === 'All' ? label : value}
                    </span>
                </div>
                <ChevronDown size={18} className={`text-[var(--text-tertiary)] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full left-0 right-0 mt-2 z-20 bg-white rounded-xl shadow-xl border border-[var(--border-light)] py-2 max-h-64 overflow-y-auto">
                        {options.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${value === opt
                                        ? 'bg-emerald-50 text-[var(--brand-green)] font-semibold'
                                        : 'text-[var(--text-secondary)] hover:bg-[var(--surface-tertiary)]'
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

const CompetitionsV3 = () => {
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
        <div className="space-y-12">
            {/* Page Header - Premium */}
            <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-[var(--border-light)] mb-6">
                    <Trophy size={16} className="text-[var(--brand-green)]" />
                    <span className="text-sm font-semibold text-[var(--text-secondary)]">Tournament Discovery</span>
                </div>
                <h1 className="beva-heading-xl mb-4">
                    Find Your Next <span className="text-[var(--brand-green)]">Challenge</span>
                </h1>
                <p className="beva-text-lead max-w-3xl">
                    Explore live and upcoming pool and snooker tournaments across Australia's premier venue network.
                </p>
            </div>

            {/* Search & Filters - Modern Design */}
            <div className="beva-card p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-6 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" size={20} />
                        <input
                            type="text"
                            placeholder="Search by tournament name or venue..."
                            className="beva-input pl-12 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <FilterDropdown
                            label="All Disciplines"
                            options={['All', '8-Ball', '9-Ball', '10-Ball', 'Snooker', 'Blackball']}
                            value={disciplineFilter}
                            onChange={setDisciplineFilter}
                            icon={Filter}
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <FilterDropdown
                            label="All Formats"
                            options={['All', 'Individual', 'Doubles', 'Team']}
                            value={typeFilter}
                            onChange={setTypeFilter}
                            icon={Users}
                        />
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--text-tertiary)]">
                    Showing <span className="font-semibold text-[var(--text-primary)]">{filteredCompetitions.length}</span> tournament{filteredCompetitions.length !== 1 ? 's' : ''}
                </p>
            </div>

            {/* Competitions Grid - Premium Cards */}
            <div className="beva-grid-3">
                {filteredCompetitions.map((comp) => (
                    <div key={comp.id} className="beva-card-hover p-0 overflow-hidden group">
                        {/* Image Header */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={comp.image}
                                alt={comp.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => { e.target.src = '/images/hero_bg.png'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                                {comp.status === 'LIVE' ? (
                                    <span className="beva-badge-live flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full beva-animate-pulse-glow"></span>
                                        LIVE NOW
                                    </span>
                                ) : (
                                    <span className="beva-badge-neutral bg-white/90 backdrop-blur-sm">
                                        Completed
                                    </span>
                                )}
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="beva-badge bg-[var(--brand-green)] text-white border-0">
                                        {comp.discipline}
                                    </span>
                                    <span className="beva-badge bg-white/20 backdrop-blur-sm text-white border-0">
                                        {comp.format}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{comp.title}</h3>
                                <div className="flex items-center gap-2 text-white/80 text-sm">
                                    <MapPin size={14} />
                                    <span>{comp.venue}</span>
                                </div>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-6 space-y-6">
                            {/* Info Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-xs text-[var(--text-tertiary)] font-medium">Prize Pool</p>
                                    <p className="text-lg font-bold text-[var(--brand-green)]">{comp.prizePool}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-[var(--text-tertiary)] font-medium">Entry Fee</p>
                                    <p className="text-lg font-bold text-[var(--text-primary)]">{comp.entryFee}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-[var(--text-tertiary)] font-medium">Start Date</p>
                                    <p className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1">
                                        <Calendar size={14} />
                                        {new Date(comp.startDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-[var(--text-tertiary)] font-medium">Players</p>
                                    <p className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1">
                                        <Users size={14} />
                                        {comp.participants}
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className="beva-btn-primary w-full group">
                                View Tournament Details
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State - Premium */}
            {filteredCompetitions.length === 0 && (
                <div className="beva-card p-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--surface-tertiary)] flex items-center justify-center mx-auto mb-6">
                        <Search size={36} className="text-[var(--text-tertiary)]" />
                    </div>
                    <h3 className="beva-heading-sm mb-3">No Tournaments Found</h3>
                    <p className="beva-text-body max-w-md mx-auto mb-6">
                        We couldn't find any tournaments matching your search criteria. Try adjusting your filters or search term.
                    </p>
                    <button
                        onClick={() => {
                            setSearchTerm('');
                            setDisciplineFilter('All');
                            setTypeFilter('All');
                        }}
                        className="beva-btn-outline"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default CompetitionsV3;
