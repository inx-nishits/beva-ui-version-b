import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, LayoutGrid, ChevronRight, ArrowUpRight, Cpu } from 'lucide-react';

const MatchCard = ({ p1, p2, s1, s2, winner, status, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white border border-beva-slate-100 rounded-2xl overflow-hidden w-72 shadow-sm hover:shadow-xl hover:border-beva-green transition-all group cursor-pointer ${onClick ? 'active:scale-95' : ''}`}
        >
            <div className={`flex justify-between items-center p-5 border-b border-beva-slate-50 ${winner === 1 ? 'bg-beva-green-50/30' : ''}`}>
                <div className="flex items-center gap-4">
                    <div className={`w-1.5 h-8 rounded-full ${winner === 1 ? 'bg-beva-green' : 'bg-beva-slate-100'}`}></div>
                    <span className={`text-sm font-black uppercase tracking-tight ${winner === 1 ? 'text-beva-green' : 'text-beva-marine'}`}>{p1}</span>
                </div>
                <span className={`text-xl font-black ${winner === 1 ? 'text-beva-green' : 'text-beva-marine'}`}>{s1 ?? '-'}</span>
            </div>
            <div className={`flex justify-between items-center p-5 ${winner === 2 ? 'bg-beva-green-50/30' : ''}`}>
                <div className="flex items-center gap-4">
                    <div className={`w-1.5 h-8 rounded-full ${winner === 2 ? 'bg-beva-green' : 'bg-beva-slate-100'}`}></div>
                    <span className={`text-sm font-black uppercase tracking-tight ${winner === 2 ? 'text-beva-green' : 'text-beva-marine'}`}>{p2}</span>
                </div>
                <span className={`text-xl font-black ${winner === 2 ? 'text-beva-green' : 'text-beva-marine'}`}>{s2 ?? '-'}</span>
            </div>
            {status && (
                <div className="bg-beva-marine text-white text-[9px] font-black uppercase text-center py-2 tracking-[0.2em]">
                    {status === 'Completed' ? 'FINALIZED' : status}
                </div>
            )}
        </div>
    );
};

export const SingleEliminationBracket = ({ onMatchClick, scores = [] }) => {
    // Merge props scores with default structure for demo
    // In a real app, this whole structure would come from props/context
    const rounds = [
        {
            title: 'Qualifiers',
            matches: [
                { id: 'm1', p1: 'Alex Thompson', p2: 'Sarah Miller', s1: 4, s2: 2, winner: 1, status: 'Completed' },
                { id: 'm2', p1: 'David Chen', p2: 'Mike Ross', s1: 3, s2: 4, winner: 2, status: 'Completed' },
            ]
        },
        {
            title: 'Semi-Finals',
            matches: [
                { id: 'm3', p1: 'Alex Thompson', p2: 'Mike Ross', s1: null, s2: null, winner: null, status: 'LIVE_BROADCAST' },
            ]
        },
        {
            title: 'Championship',
            matches: [
                { id: 'm4', p1: 'TBD', p2: 'TBD', s1: null, s2: null, winner: null },
            ]
        }
    ];

    // Overlay dynamic scores if they exist
    const getMatchData = (defaultMatch) => {
        const updated = scores.find(s => s.id === defaultMatch.id);
        return updated ? { ...defaultMatch, ...updated } : defaultMatch;
    };

    return (
        <div className="flex gap-16 overflow-x-auto pb-10 pt-4 no-scrollbar">
            {rounds.map((round, rIndex) => (
                <div key={rIndex} className="flex flex-col justify-around min-w-[288px] gap-8">
                    <div className="text-center">
                        <span className="badge-cat bg-white border border-beva-slate-200 text-beva-slate-400 font-black">{round.title}</span>
                    </div>
                    <div className="flex flex-col justify-around flex-grow gap-12">
                        {round.matches.map((match, mIndex) => {
                            const data = getMatchData(match);
                            return (
                                <div key={mIndex} className="relative flex items-center">
                                    <MatchCard
                                        {...data}
                                        onClick={() => onMatchClick && onMatchClick(data)}
                                    />
                                    {rIndex < rounds.length - 1 && (
                                        <div className="absolute -right-16 w-16 border-t-2 border-dashed border-beva-slate-200 -z-10"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const RoundRobinTable = () => {
    const players = [
        { name: 'Alex Thompson', w: 3, l: 0, pts: 1420 },
        { name: 'Sarah Miller', w: 2, l: 1, pts: 1385 },
        { name: 'David Chen', w: 1, l: 2, pts: 1350 },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-beva-slate-100">
                        <th className="py-8 px-6 text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Operator Identity</th>
                        <th className="py-8 px-6 text-center text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Victory</th>
                        <th className="py-8 px-6 text-center text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Defeat</th>
                        <th className="py-8 px-6 text-center text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">G2_Rating</th>
                        <th className="py-8 px-6 text-right"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-beva-slate-50">
                    {players.map((p, i) => (
                        <tr key={i} className="group hover:bg-beva-slate-50 transition-all">
                            <td className="py-8 px-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-beva-marine text-white rounded-xl flex items-center justify-center font-black group-hover:bg-beva-green transition-all">
                                        {p.name[0]}
                                    </div>
                                    <span className="text-lg font-black text-beva-marine uppercase tracking-tighter">{p.name}</span>
                                </div>
                            </td>
                            <td className="py-8 px-6 text-center text-2xl font-black text-beva-green">{p.w}</td>
                            <td className="py-8 px-6 text-center text-2xl font-black text-beva-slate-200">{p.l}</td>
                            <td className="py-8 px-6 text-center">
                                <span className="bg-beva-slate-900 text-white px-6 py-2 rounded-xl font-black text-sm mono">
                                    {p.pts}
                                </span>
                            </td>
                            <td className="py-8 px-6 text-right">
                                <button className="w-12 h-12 bg-white border border-beva-slate-100 rounded-xl flex items-center justify-center text-beva-slate-200 hover:text-beva-green hover:border-beva-green transition-all shadow-sm">
                                    <ArrowUpRight size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const DoubleEliminationBracket = () => {
    return (
        <div className="space-y-24">
            <div className="space-y-10">
                <div className="flex items-center gap-4 text-beva-green">
                    <Trophy size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">Superior Circuit (Winners)</h3>
                </div>
                <SingleEliminationBracket />
            </div>
            <div className="pt-24 border-t border-beva-slate-100 space-y-10">
                <div className="flex items-center gap-4 text-beva-yellow-500">
                    <Award size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">Recovery Sector (Losers)</h3>
                </div>
                {/* Visual Loser Bracket Implementation */}
                <div className="flex gap-16 overflow-x-auto pb-10 pt-4 no-scrollbar">
                    {/* Loser Round 1 */}
                    <div className="flex flex-col justify-around min-w-[288px] gap-8">
                        <div className="text-center">
                            <span className="badge-cat bg-white border border-beva-slate-200 text-beva-slate-400 font-black">L-Round 1</span>
                        </div>
                        <div className="flex flex-col gap-12">
                            <div className="relative flex items-center">
                                <MatchCard p1="Sarah Miller" p2="Loser Match 2" s1={3} s2={1} winner={1} status="Completed" />
                                <div className="absolute -right-16 w-16 border-t-2 border-dashed border-beva-slate-200 -z-10"></div>
                            </div>
                        </div>
                    </div>
                    {/* Loser Round 2 */}
                    <div className="flex flex-col justify-around min-w-[288px] gap-8">
                        <div className="text-center">
                            <span className="badge-cat bg-white border border-beva-slate-200 text-beva-slate-400 font-black">L-Round 2</span>
                        </div>
                        <div className="relative flex items-center">
                            <MatchCard p1="Sarah Miller" p2="David Chen" s1={null} s2={null} winner={null} status="Waiting" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const McIntyreSystem = () => {
    return (
        <div className="space-y-16">
            <div className="p-8 bg-beva-slate-900 rounded-[2rem] text-white text-center space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-widest text-beva-green">McIntyre Top 8 Final Series</h3>
                <p className="text-xs font-bold text-white/50 max-w-2xl mx-auto">
                    The McIntyre System gives advantages to top seeds. Seeds 1 & 2 play directly for SF spots. Seeds 3-6 play elimination. Seeds 7-8 play against 3-6 losers.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-8 overflow-x-auto no-scrollbar pb-10">
                {/* Week 1: Qualifying Finals */}
                <div className="col-span-4 min-w-[280px] space-y-8">
                    <h4 className="text-xs font-black text-beva-marine uppercase tracking-[0.3em] text-center border-b border-beva-slate-100 pb-4">Week 1: Qualification</h4>
                    <div className="space-y-12">
                        <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Match 1 (1v2)</div>
                            <MatchCard p1="Seed #1" p2="Seed #2" s1={4} s2={3} winner={1} status="Finished" />
                            <p className="text-[10px] text-center mt-2 text-beva-green font-bold">Winner → Semi Final</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Match 2 (3v4)</div>
                            <MatchCard p1="Seed #3" p2="Seed #4" s1={2} s2={4} winner={2} status="Finished" />
                        </div>
                        <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Match 3 (5v6)</div>
                            <MatchCard p1="Seed #5" p2="Seed #6" s1={1} s2={4} winner={2} status="Finished" />
                        </div>
                        <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Match 4 (7v8)</div>
                            <MatchCard p1="Seed #7" p2="Seed #8" s1={4} s2={2} winner={1} status="Finished" />
                            <p className="text-[10px] text-center mt-2 text-red-400 font-bold">Loser Eliminated</p>
                        </div>
                    </div>
                </div>

                {/* Week 2: Semi-Finals Prep */}
                <div className="col-span-4 min-w-[280px] space-y-8 pt-20">
                    <h4 className="text-xs font-black text-beva-marine uppercase tracking-[0.3em] text-center border-b border-beva-slate-100 pb-4">Week 2: Elimination</h4>
                    <div className="space-y-24">
                        <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Minor SF 1</div>
                            <MatchCard p1="Loser M1" p2="Winner M3" s1={null} s2={null} winner={null} status="Live" />
                        </div>
                        <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-beva-slate-300 uppercase tracking-widest">Minor SF 2</div>
                            <MatchCard p1="Loser M2" p2="Winner M4" s1={null} s2={null} winner={null} status="Live" />
                        </div>
                    </div>
                </div>

                {/* Week 3: Prelim Finals */}
                <div className="col-span-4 min-w-[280px] space-y-8 pt-40">
                    <h4 className="text-xs font-black text-beva-marine uppercase tracking-[0.3em] text-center border-b border-beva-slate-100 pb-4">Week 3: Prelim Final</h4>
                    <div className="space-y-12">
                        <div className="relative">
                            <MatchCard p1="Winner M1" p2="Winner Minor SF2" s1={null} s2={null} winner={null} status="TBD" />
                        </div>
                        <div className="relative">
                            <MatchCard p1="Winner M2" p2="Winner Minor SF1" s1={null} s2={null} winner={null} status="TBD" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-10 border-t border-beva-slate-100">
                <div className="text-center space-y-4">
                    <Trophy size={48} className="mx-auto text-beva-yellow-500" />
                    <h2 className="text-4xl font-black text-beva-marine uppercase tracking-tighter">Grand Final</h2>
                    <p className="text-sm font-bold text-beva-slate-400 uppercase tracking-widest">The Ultimate Showdown</p>
                </div>
            </div>
        </div>
    );
};

export const TwoStageTournament = () => {
    return (
        <div className="space-y-24">
            <div className="space-y-10">
                <div className="flex items-center gap-4 text-beva-green">
                    <LayoutGrid size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">I: Group Protocol</h3>
                </div>
                <RoundRobinTable />
            </div>
            <div className="pt-24 border-t border-beva-slate-100 space-y-10">
                <div className="flex items-center gap-4 text-beva-green">
                    <Trophy size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">II: Knockout Link</h3>
                </div>
                <SingleEliminationBracket />
            </div>
        </div>
    );
};

export const MultiGroupRRTable = () => {
    const groups = ['Group Alpha', 'Group Beta', 'Group Gamma'];
    return (
        <div className="space-y-20">
            {groups.map((group, idx) => (
                <div key={idx} className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-beva-slate-900 text-white rounded-xl flex items-center justify-center font-black text-xs">
                            {idx + 1}
                        </div>
                        <h3 className="text-xl font-black text-beva-marine uppercase tracking-tight">{group}</h3>
                    </div>
                    <RoundRobinTable />
                </div>
            ))}
            <div className="pt-20 border-t border-beva-slate-100 space-y-10">
                <div className="flex items-center gap-4 text-beva-green">
                    <Trophy size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">III: Final Payout Round</h3>
                </div>
                <RoundRobinTable />
            </div>
        </div>
    );
};

export const ThreeStageTournament = () => {
    return (
        <div className="space-y-24">
            <div className="space-y-10">
                <div className="flex items-center gap-4 text-beva-green">
                    <LayoutGrid size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">I: Regional Seeding</h3>
                </div>
                <RoundRobinTable />
            </div>
            <div className="pt-24 border-t border-beva-slate-100 space-y-10">
                <div className="flex items-center gap-4 text-beva-green">
                    <Award size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">II: National Qualifiers</h3>
                </div>
                <RoundRobinTable />
            </div>
            <div className="pt-24 border-t border-beva-slate-100 space-y-10">
                <div className="flex items-center gap-4 text-beva-green">
                    <Trophy size={28} />
                    <h3 className="text-2xl font-black text-beva-marine uppercase tracking-tighter">III: Championship Bracket</h3>
                </div>
                <SingleEliminationBracket />
            </div>
        </div>
    );
};
