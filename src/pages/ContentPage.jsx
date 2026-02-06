import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, CheckCircle2, AlertCircle, Scale, HelpCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ContentPage = () => {
    const location = useLocation();
    const path = location.pathname;

    const getContent = () => {
        if (path.includes('privacy')) {
            return {
                title: 'Privacy Policy',
                subtitle: 'Data Protection',
                icon: Lock,
                color: 'text-beva-marine-500',
                bg: 'bg-beva-marine-50',
                sections: [
                    { title: 'Player Data Collection', content: 'We collect minimal information required for identity verification and ranking accuracy. This includes name, email, and historical game data.', icon: CheckCircle2 },
                    { title: 'Information Utilization', content: 'Your data is used exclusively to maintain the ranking system, prevent cheating, and provide venue-specific check-in services.', icon: CheckCircle2 },
                    { title: 'Third-Party Isolation', content: 'Beva does not sell player data. Information is only shared with verified venue partners during active tournament sessions.', icon: AlertCircle }
                ]
            };
        }
        if (path.includes('terms')) {
            return {
                title: 'Rules of Engagement',
                subtitle: 'Terms & Conditions',
                icon: FileText,
                color: 'text-beva-yellow-500',
                bg: 'bg-beva-yellow-50',
                sections: [
                    { title: 'Participation', content: 'Players must maintain a single account. Multi-accounting will result in immediate account suspension.', icon: Scale },
                    { title: 'Fair Play', content: 'By playing in a BEVA venue, you agree to real-time score logging and verification by venue staff.', icon: Scale },
                    { title: 'Disputes', content: 'Disputes must be raised through the Help Center within 24 hours of match completion.', icon: AlertCircle }
                ]
            };
        }
        if (path.includes('faqs')) {
            return {
                title: 'Common Questions',
                subtitle: 'Frequently Asked',
                icon: HelpCircle,
                color: 'text-purple-500',
                bg: 'bg-purple-50',
                sections: [
                    { title: 'How do I join a competition?', content: 'Navigate to the Tournaments page, select an active tournament, and follow the registration instructions provided by the venue.', icon: CheckCircle2 },
                    { title: 'Is there a membership fee?', content: 'Basic membership is free. Some tournaments may have entry fees which are payable directly to the venue.', icon: Scale },
                    { title: 'How are rankings calculated?', content: 'Rankings are based on your performance in verified tournaments. Winning against higher-ranked opponents yields more points.', icon: CheckCircle2 }
                ]
            };
        }
        return {
            title: 'Fair Play Policy',
            subtitle: 'Ranking and Anti-Cheating',
            icon: Shield,
            color: 'text-beva-green-500',
            bg: 'bg-beva-green-50',
            sections: [
                { title: 'Ranking Standard', content: 'We utilize a standard rating system to ensure a more accurate representation of skill, accounting for both player ability and rating volatility.', icon: CheckCircle2 },
                { title: 'Match Verification', content: 'Every match recorded on the platform must be verified by a Venue Manager to maintain accurate records.', icon: CheckCircle2 },
                { title: 'Cheating', content: 'Attempting to falsify results or "trade" points is a serious offense, leading to a permanent ban from the network.', icon: AlertCircle }
            ]
        };
    };

    const content = getContent();

    return (
        <div className="space-y-12 md:space-y-16 pb-16 md:pb-24 pt-6 md:pt-10 page-transition max-w-4xl mx-auto">
            <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                    <div className={`p-4 ${content.bg} ${content.color} rounded-2xl`}>
                        <content.icon size={32} />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-beva-marine tracking-tighter leading-none">{content.title}</h1>
                <p className="text-xl text-beva-slate-500 font-bold uppercase tracking-widest">{content.subtitle}</p>
            </div>

            <div className="space-y-8">
                {content.sections.map((section, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="catalyst-card p-10 flex gap-8 items-start hover:border-beva-slate-200"
                    >
                        <div className={`mt-1 shrink-0 ${content.color}`}>
                            <section.icon size={24} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-beva-marine tracking-tight">{section.title}</h3>
                            <p className="text-lg text-beva-slate-500 font-medium leading-relaxed">{section.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>


        </div>
    );
};

export default ContentPage;
