import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ScoreEntryModal = ({ isOpen, onClose, match, onUpdateScore }) => {
    const [score1, setScore1] = useState(match?.s1 || 0);
    const [score2, setScore2] = useState(match?.s2 || 0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen || !match) return null;

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            const winner = parseInt(score1) > parseInt(score2) ? 1 : 2;
            onUpdateScore({ ...match, s1: parseInt(score1), s2: parseInt(score2), winner, status: 'Completed' });
            setIsSubmitting(false);
            onClose();
        }, 800);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-beva-marine/80 backdrop-blur-sm"
            />
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl z-10"
            >
                <button onClick={onClose} className="absolute top-6 right-6 text-beva-slate-300 hover:text-beva-marine transition-colors">
                    <X size={24} />
                </button>

                <div className="text-center mb-10">
                    <span className="text-xs font-black font-mono text-beva-green bg-beva-green-50 px-3 py-1.5 rounded-full">Protocol: Match Update</span>
                    <h3 className="text-3xl font-black text-beva-marine tracking-tighter mt-4">Record Result</h3>
                </div>

                <div className="flex items-center justify-between gap-6 mb-10">
                    <div className="flex flex-col items-center gap-4 w-1/2">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black transition-colors ${parseInt(score1) > parseInt(score2) ? 'bg-beva-green text-white shadow-lg shadow-beva-green/30' : 'bg-beva-slate-100 text-beva-slate-400'}`}>
                            {match.p1[0]}
                        </div>
                        <h4 className="text-sm font-black text-beva-marine tracking-tight text-center">{match.p1}</h4>
                        <input
                            type="number"
                            min="0"
                            value={score1}
                            onChange={(e) => setScore1(e.target.value)}
                            className="w-20 h-16 bg-beva-slate-50 border-2 border-beva-slate-100 rounded-2xl text-center text-3xl font-black text-beva-marine focus:border-beva-green focus:outline-none transition-colors"
                        />
                    </div>

                    <div className="text-beva-slate-200 font-black text-xl">VS</div>

                    <div className="flex flex-col items-center gap-4 w-1/2">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black transition-colors ${parseInt(score2) > parseInt(score1) ? 'bg-beva-green text-white shadow-lg shadow-beva-green/30' : 'bg-beva-slate-100 text-beva-slate-400'}`}>
                            {match.p2[0]}
                        </div>
                        <h4 className="text-sm font-black text-beva-marine tracking-tight text-center">{match.p2}</h4>
                        <input
                            type="number"
                            min="0"
                            value={score2}
                            onChange={(e) => setScore2(e.target.value)}
                            className="w-20 h-16 bg-beva-slate-50 border-2 border-beva-slate-100 rounded-2xl text-center text-3xl font-black text-beva-marine focus:border-beva-green focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-cat-primary w-full py-4 text-xs font-black flex items-center justify-center gap-3"
                >
                    {isSubmitting ? (
                        <>Syncing database...</>
                    ) : (
                        <><Check size={18} /> Confirm Protocol</>
                    )}
                </button>
            </motion.div>
        </div>
    );
};

export default ScoreEntryModal;
