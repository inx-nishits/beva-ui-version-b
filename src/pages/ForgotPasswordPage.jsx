import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        setTimeout(() => {
            setEmailSent(true);
            setIsSending(false);
        }, 1500);
    };

    if (emailSent) {
        return (
            <div className="space-y-6 text-center">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={28} className="text-[var(--brand-green)]" />
                </div>

                <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Check your email
                    </h1>
                    <p className="text-sm text-gray-600">
                        We've sent password reset instructions to
                    </p>
                    <p className="font-semibold text-[var(--brand-green)] text-sm">
                        {email}
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                    <p className="text-xs text-blue-800">
                        Didn't receive the email? Check your spam folder or try again.
                    </p>
                </div>

                <div className="space-y-2.5 pt-2">
                    <button
                        onClick={() => setEmailSent(false)}
                        className="w-full border-2 border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all text-sm"
                    >
                        Try another email
                    </button>
                    <Link
                        to="/login"
                        className="w-full text-gray-600 px-6 py-2.5 rounded-xl font-semibold hover:text-gray-900 transition-all inline-flex items-center justify-center text-sm"
                    >
                        Back to sign in
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Forgot password?
                </h1>
                <p className="text-sm text-gray-600">
                    No worries, we'll send you reset instructions
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            id="email"
                            type="email"
                            className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all text-sm"
                            placeholder="name@example.com"
                            required
                            disabled={isSending}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">
                        Enter the email associated with your account
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-[var(--brand-green)] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[var(--brand-green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 group shadow-sm text-sm"
                >
                    {isSending ? (
                        'Sending...'
                    ) : (
                        <>
                            Send reset link
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>

            {/* Back to Login */}
            <div className="text-center pt-2">
                <Link
                    to="/login"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                    ← Back to sign in
                </Link>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
