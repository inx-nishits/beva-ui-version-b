import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Leaf, Mail, MessageSquare, Phone } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        notes: ''
    });
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        // Simulate sending email to super admin
        setTimeout(() => {
            setSending(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', notes: '' });
        }, 1500);
    };

    return (
        <div className="pt-6 pb-16 md:pt-10 md:pb-24 page-transition">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Column: Info */}
                <div className="space-y-10 lg:sticky lg:top-32">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-beva-green-50 rounded-full border border-beva-green-100">
                            <span className="w-2 h-2 bg-beva-green rounded-full animate-ping"></span>
                            <span className="text-xs font-bold text-beva-green-600">Get in Touch</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-beva-marine tracking-tighter leading-none">
                            Get in <span className="text-beva-green">Touch.</span>
                        </h1>
                        <p className="text-xl text-beva-slate-500 font-medium max-w-lg leading-relaxed">
                            Have a question about a tournament, venue, or just want to say hello? Drop us a line and we'll get back to you shortly.
                        </p>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-beva-slate-100">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-beva-slate-50 flex items-center justify-center text-beva-marine shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-beva-marine mb-1">Email Us Directly</h3>
                                <p className="text-beva-slate-500 font-medium mb-2">For general inquiries and support.</p>
                                <a href="mailto:support@beva.com.au" className="text-beva-green font-bold hover:underline">support@beva.com.au</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-beva-slate-50 flex items-center justify-center text-beva-marine shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-beva-marine mb-1">Call Us</h3>
                                <p className="text-beva-slate-500 font-medium mb-2">Mon-Fri, 9am to 5pm AEST.</p>
                                <a href="tel:+6125550123" className="text-beva-green font-bold hover:underline">+61 (02) 5550 1234</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-beva-slate-200/50 border border-beva-slate-100"
                >
                    {submitted ? (
                        <div className="text-center py-20 space-y-6">
                            <div className="w-20 h-20 bg-beva-green-100 text-beva-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-beva-marine">Message Sent!</h3>
                            <p className="text-beva-slate-500 font-medium max-w-xs mx-auto">
                                Thanks for contacting us. We've received your message and will be in touch soon.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="btn-cat-outline py-3 px-8 mt-4"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-beva-marine uppercase tracking-wider pl-1">User Name</label>
                                <input
                                    type="text"
                                    required
                                    className="input-cat h-16 text-lg font-bold"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-beva-marine uppercase tracking-wider pl-1">User Email</label>
                                <input
                                    type="email"
                                    required
                                    className="input-cat h-16 text-lg font-bold"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-beva-marine uppercase tracking-wider pl-1">Notes / Message</label>
                                <div className="relative">
                                    <textarea
                                        required
                                        className="input-cat min-h-[160px] py-6 text-lg font-medium resize-none leading-relaxed"
                                        placeholder="How can we help you?"
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    ></textarea>
                                    <MessageSquare className="absolute top-6 right-6 text-beva-slate-300 pointer-events-none" size={20} />
                                </div>
                                <p className="text-xs font-bold text-beva-slate-400 text-right pt-2">
                                    Your details will be sent directly to our support team.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full btn-cat-primary py-5 text-lg font-black group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {sending ? 'Sending...' : (
                                    <div className="flex items-center justify-center gap-2">
                                        Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
