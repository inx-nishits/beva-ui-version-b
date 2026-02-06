import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Send } from 'lucide-react';

const DisputeModal = ({ isOpen, onClose, matchId }) => {
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                onClose();
            }, 2000);
        }, 1000);
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

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-beva-marine tracking-tighter">Raise Dispute</h3>
                            <p className="text-xs font-bold text-beva-slate-400">Match ID: #{matchId || 'Unknown'}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-beva-marine uppercase tracking-widest pl-1">Reason Code</label>
                                <select
                                    className="input-cat font-semibold"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    required
                                >
                                    <option value="">Select Issue Type...</option>
                                    <option value="score_mismatch">Score Mismatch</option>
                                    <option value="rule_violation">Rule Violation</option>
                                    <option value="misconduct">Player Misconduct</option>
                                    <option value="equipment">Equipment Failure</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-beva-marine uppercase tracking-widest pl-1">Description</label>
                                <textarea
                                    className="input-cat pt-4 font-medium resize-none"
                                    rows="4"
                                    placeholder="Describe the issue in detail..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`btn-cat-primary w-full py-4 text-xs font-black flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70' : ''}`}
                        >
                            {isSubmitting ? 'Submitting...' : <><Send size={16} /> Submit Report</>}
                        </button>
                    </form>
                ) : (
                    <div className="py-10 text-center space-y-6">
                        <div className="w-20 h-20 bg-green-50 text-beva-green rounded-full flex items-center justify-center mx-auto animate-bounce">
                            <Send size={40} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-beva-marine">Dispute Logged</h3>
                            <p className="text-sm font-bold text-beva-slate-400">An admin will review your case shortly.</p>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default DisputeModal;
