"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, User, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [role, setRole] = useState<'admin' | 'staff'>('staff');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Mock authentication process
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (username == "Melwinabi" && password == "Melwin@123") {
                // For demonstration, any non-empty input works
                router.push('/dashboard');
            } else {
                setError('Please provide valid credentials.');
            }
        } catch (err) {
            setError('System authentication failure. Please retry.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-dark)',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    width: '100%',
                    maxWidth: '430px',
                    padding: 'clamp(2rem, 8vw, 4rem)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '40px',
                    boxShadow: '0 30px 70px rgba(15, 23, 42, 0.08)',
                    border: '1px solid var(--glass-border)'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'var(--primary-glow)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        color: 'var(--primary)'
                    }}>
                        <Shield size={32} />
                    </div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Portal Access</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Secure authentication for internal teams.</p>
                </div>

                <div style={{ display: 'flex', background: 'var(--bg-dark)', padding: '6px', borderRadius: '16px', marginBottom: '2.5rem' }}>
                    <button
                        onClick={() => setRole('staff')}
                        style={{
                            flex: 1,
                            padding: '12px',
                            borderRadius: '12px',
                            border: 'none',
                            background: role === 'staff' ? 'white' : 'transparent',
                            color: role === 'staff' ? 'var(--text-main)' : 'var(--text-muted)',
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow: role === 'staff' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                            transition: 'all 0.3s'
                        }}
                    >
                        Staff
                    </button>
                    <button
                        onClick={() => setRole('admin')}
                        style={{
                            flex: 1,
                            padding: '12px',
                            borderRadius: '12px',
                            border: 'none',
                            background: role === 'admin' ? 'white' : 'transparent',
                            color: role === 'admin' ? 'var(--text-main)' : 'var(--text-muted)',
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow: role === 'admin' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                            transition: 'all 0.3s'
                        }}
                    >
                        Admin
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    color: '#ef4444',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    fontSize: '0.85rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontWeight: 600
                                }}
                            >
                                <AlertCircle size={16} />
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ position: 'relative' }}>
                        <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '16px 16px 16px 48px',
                                borderRadius: '12px',
                                border: '1px solid var(--glass-border)',
                                background: 'white',
                                outline: 'none',
                                fontSize: '0.95rem',
                                color: 'var(--text-main)'
                            }}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '16px 16px 16px 48px',
                                borderRadius: '12px',
                                border: '1px solid var(--glass-border)',
                                background: 'white',
                                outline: 'none',
                                fontSize: '0.95rem',
                                color: 'var(--text-main)'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            padding: '20px',
                            marginTop: '1rem',
                            opacity: isLoading ? 0.7 : 1,
                            cursor: isLoading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isLoading ? (
                            <>Authorizing... <Loader2 size={20} className="animate-spin" /></>
                        ) : (
                            <>Authorize Access <ArrowRight size={20} /></>
                        )}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        Return to Public Interface
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
