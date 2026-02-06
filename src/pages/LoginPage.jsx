import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsVerifying(true);

        setTimeout(() => {
            const result = login(email, password);
            if (result.success) {
                navigate('/tournaments');
            } else {
                setError(result.message);
                setIsVerifying(false);
            }
        }, 1500);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Welcome back
                </h1>
                <p className="text-sm text-gray-600">
                    Sign in to your account to continue
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <p className="text-sm text-red-800 font-medium">{error}</p>
                    </div>
                )}

                <div className="space-y-4">
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
                                disabled={isVerifying}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <Link
                                to="/forgot-password"
                                className="text-xs font-semibold text-[var(--brand-green)] hover:text-[var(--brand-green-dark)] transition-colors"
                            >
                                Forgot?
                            </Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="w-full pl-12 pr-12 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all text-sm"
                                placeholder="Enter your password"
                                required
                                disabled={isVerifying}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full bg-[var(--brand-green)] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[var(--brand-green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 group shadow-sm text-sm"
                >
                    {isVerifying ? (
                        'Signing in...'
                    ) : (
                        <>
                            Sign in
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>

            {/* Divider */}
            <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-gray-500 font-medium">
                        New to Cuesports Central?
                    </span>
                </div>
            </div>

            {/* Sign Up Link */}
            <Link
                to="/signup"
                className="w-full border-2 border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all inline-flex items-center justify-center text-sm"
            >
                Create an account
            </Link>
        </div>
    );
};

export default LoginPage;
