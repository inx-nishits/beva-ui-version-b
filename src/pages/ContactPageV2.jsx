import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Phone } from 'lucide-react';

const ContactPageV2 = () => {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Info */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
                        <span className="w-2 h-2 bg-[var(--brand-green)] rounded-full animate-pulse"></span>
                        <span className="text-xs font-semibold text-[var(--brand-green)]">Get in Touch</span>
                    </div>
                    <h1 className="v2-heading-xl">
                        Get in <span className="text-[var(--brand-green)]">Touch.</span>
                    </h1>
                    <p className="v2-text-lead max-w-lg">
                        Have a question about a tournament, venue, or just want to say hello? Drop us a line and we'll get back to you shortly.
                    </p>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-200">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us Directly</h3>
                            <p className="text-sm text-gray-600 mb-2">For general inquiries and support.</p>
                            <a href="mailto:support@beva.com.au" className="text-[var(--brand-green)] font-semibold hover:underline">
                                support@beva.com.au
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                            <p className="text-sm text-gray-600 mb-2">Mon-Fri, 9am to 5pm AEST.</p>
                            <a href="tel:+6125550123" className="text-[var(--brand-green)] font-semibold hover:underline">
                                +61 (02) 5550 1234
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="v2-card p-8 lg:p-10">
                {submitted ? (
                    <div className="text-center py-16 space-y-6">
                        <div className="w-16 h-16 bg-green-100 text-[var(--brand-green)] rounded-full flex items-center justify-center mx-auto">
                            <Send size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                        <p className="v2-text-body max-w-xs mx-auto">
                            Thanks for contacting us. We've received your message and will be in touch soon.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="v2-btn-outline"
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="v2-label">User Name</label>
                            <input
                                type="text"
                                required
                                className="v2-input-lg"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="v2-label">User Email</label>
                            <input
                                type="email"
                                required
                                className="v2-input-lg"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="v2-label">Notes / Message</label>
                            <div className="relative">
                                <textarea
                                    required
                                    className="v2-input-lg min-h-[160px] resize-none"
                                    placeholder="How can we help you?"
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                ></textarea>
                                <MessageSquare className="absolute top-4 right-4 text-gray-300 pointer-events-none" size={20} />
                            </div>
                            <p className="text-xs text-gray-500 text-right mt-2">
                                Your details will be sent directly to our support team.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className="v2-btn-primary v2-btn-lg w-full group"
                        >
                            {sending ? 'Sending...' : (
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

export default ContactPageV2;
