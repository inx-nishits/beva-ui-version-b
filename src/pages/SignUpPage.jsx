import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setIsCreating(true);

        setTimeout(() => {
            const result = signup(formData.name, formData.email, formData.password);
            if (result.success) {
                navigate('/tournaments');
            } else {
                setError(result.message);
                setIsCreating(false);
            }
        }, 1500);
    };

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Create your account
                </h1>
                <p className="text-sm text-gray-600">
                    Join Australia's premier cuesports network
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <p className="text-sm text-red-800 font-medium">{error}</p>
                    </div>
                )}

                <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Full name
                    </label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all text-sm"
                            placeholder="John Doe"
                            required
                            disabled={isCreating}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all text-sm"
                            placeholder="name@example.com"
                            required
                            disabled={isCreating}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="w-full pl-12 pr-12 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all text-sm"
                            placeholder="At least 6 characters"
                            required
                            disabled={isCreating}
                            value={formData.password}
                            onChange={handleChange}
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

                <div className="space-y-1.5">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                        Confirm password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full pl-12 pr-12 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all text-sm"
                            placeholder="Re-enter your password"
                            required
                            disabled={isCreating}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isCreating}
                    className="w-full bg-[var(--brand-green)] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[var(--brand-green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 group shadow-sm text-sm"
                >
                    {isCreating ? (
                        'Creating account...'
                    ) : (
                        <>
                            Create account
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed pt-1">
                    By signing up, you agree to our{' '}
                    <Link to="/terms" className="text-[var(--brand-green)] hover:underline font-medium">Terms</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-[var(--brand-green)] hover:underline font-medium">Privacy Policy</Link>
                </p>
            </form>

            {/* Divider */}
            <div className="relative py-1">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-gray-500 font-medium">
                        Already have an account?
                    </span>
                </div>
            </div>

            {/* Login Link */}
            <Link
                to="/login"
                className="w-full border-2 border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all inline-flex items-center justify-center text-sm"
            >
                Sign in instead
            </Link>
        </div>
    );
};

export default SignUpPage;
