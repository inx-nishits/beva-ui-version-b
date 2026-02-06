import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

const ContactPageV3 = () => {
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
        <div className="beva-grid-2 gap-12 lg:gap-16">
            {/* Left Column: Info */}
            <div className="space-y-8">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-[var(--border-light)]">
                        <span className="w-2 h-2 bg-[var(--brand-green)] rounded-full beva-animate-pulse-glow"></span>
                        <span className="text-sm font-semibold text-[var(--text-secondary)]">We're Here to Help</span>
                    </div>
                    <h1 className="beva-heading-xl">
                        Get in <span className="text-[var(--brand-green)]">Touch</span>
                    </h1>
                    <p className="beva-text-lead">
                        Have a question about a tournament, venue, or just want to say hello? Drop us a line and we'll get back to you shortly.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="beva-card-hover p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[var(--brand-green)] shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[var(--text-primary)] mb-1">Email Us Directly</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-2">For general inquiries and support.</p>
                            <a href="mailto:support@beva.com.au" className="text-[var(--brand-green)] font-semibold hover:underline text-sm">
                                support@beva.com.au
                            </a>
                        </div>
                    </div>

                    <div className="beva-card-hover p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[var(--text-primary)] mb-1">Call Us</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-2">Mon-Fri, 9am to 5pm AEST.</p>
                            <a href="tel:+6125550123" className="text-[var(--brand-green)] font-semibold hover:underline text-sm">
                                +61 (02) 5550 1234
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="beva-card p-8 lg:p-10">
                {submitted ? (
                    <div className="text-center py-20 space-y-6">
                        <div className="w-20 h-20 bg-emerald-50 text-[var(--brand-green)] rounded-full flex items-center justify-center mx-auto">
                            <Send size={32} />
                        </div>
                        <h3 className="beva-heading-sm">Message Sent!</h3>
                        <p className="beva-text-body max-w-xs mx-auto">
                            Thanks for contacting us. We've received your message and will be in touch soon.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="beva-btn-outline"
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="beva-label">User Name</label>
                            <input
                                type="text"
                                required
                                className="beva-input-lg"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="beva-label">User Email</label>
                            <input
                                type="email"
                                required
                                className="beva-input-lg"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="beva-label">Notes / Message</label>
                            <div className="relative">
                                <textarea
                                    required
                                    className="beva-textarea beva-input-lg"
                                    placeholder="How can we help you?"
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                ></textarea>
                                <MessageSquare className="absolute top-4 right-4 text-[var(--text-tertiary)] pointer-events-none" size={20} />
                            </div>
                            <p className="text-xs text-[var(--text-tertiary)] text-right mt-2">
                                Your details will be sent directly to our support team.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className="beva-btn-primary beva-btn-lg w-full group"
                        >
                            {sending ? (
                                'Sending...'
                            ) : (
                                <>
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactPageV3;
