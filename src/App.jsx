import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CompetitionProvider } from './context/CompetitionContext';

// Scroll To Top Component
const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

// Lazy load components to catch errors - UI VERSION 3 PREMIUM
const LandingPage = React.lazy(() => import('./pages/LandingPageV3'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));
const ForgotPasswordPage = React.lazy(() => import('./pages/ForgotPasswordPage'));
const Competitions = React.lazy(() => import('./pages/CompetitionsV3'));
const ContentPage = React.lazy(() => import('./pages/ContentPageV3'));
const AboutPage = React.lazy(() => import('./pages/AboutPageV3'));
const ContactPage = React.lazy(() => import('./pages/ContactPageV3'));


const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'));
const GuestLayout = React.lazy(() => import('./layouts/GuestLayoutV3'));

// Loading fallback
const LoadingScreen = () => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
        <div style={{ textAlign: 'center' }}>
            <div style={{
                width: '48px',
                height: '48px',
                border: '4px solid #e5e7eb',
                borderTopColor: '#10b981',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 16px'
            }}></div>
            <p style={{
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#9ca3af'
            }}>Loading BEVA...</p>
        </div>
        <style>{`
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);

// Error boundary
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('React Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '40px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    maxWidth: '600px',
                    margin: '40px auto'
                }}>
                    <h1 style={{ color: '#ef4444', marginBottom: '16px' }}>⚠️ Application Error</h1>
                    <div style={{
                        backgroundColor: '#fef2f2',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #fecaca',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>Error Details:</p>
                        <pre style={{
                            fontSize: '12px',
                            overflow: 'auto',
                            backgroundColor: '#fff',
                            padding: '10px',
                            borderRadius: '4px'
                        }}>
                            {this.state.error?.toString()}
                        </pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            backgroundColor: '#10b981',
                            color: 'white',
                            padding: '12px 24px',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Reload Application
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

const App = () => {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <CompetitionProvider>
                    <BrowserRouter>
                        <ScrollToTop />
                        <React.Suspense fallback={<LoadingScreen />}>
                            <Routes>
                                {/* Public Routes */}
                                <Route path="/" element={<LandingPage />} />

                                {/* Auth Routes */}
                                <Route element={<AuthLayout />}>
                                    <Route path="/login" element={<LoginPage />} />
                                    <Route path="/signup" element={<SignUpPage />} />
                                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                                </Route>

                                {/* Guest / Public Routes */}
                                <Route element={<GuestLayout />}>
                                    <Route path="/tournaments" element={<Competitions />} />
                                    <Route path="/competitions" element={<Navigate to="/tournaments" replace />} />

                                    <Route path="/faqs" element={<ContentPage />} />
                                    <Route path="/hub/privacy" element={<ContentPage />} />
                                    <Route path="/hub/terms" element={<ContentPage />} />
                                    <Route path="/about" element={<AboutPage />} />
                                    <Route path="/contact" element={<ContactPage />} />

                                    {/* Redirects for removed pages or legacy links */}
                                    <Route path="/hub" element={<Navigate to="/faqs" replace />} />
                                    <Route path="/leaderboards" element={<Navigate to="/tournaments" replace />} />
                                </Route>

                                {/* Fallback */}
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </React.Suspense>
                    </BrowserRouter>
                </CompetitionProvider>
            </AuthProvider>
        </ErrorBoundary>
    );
};

export default App;
