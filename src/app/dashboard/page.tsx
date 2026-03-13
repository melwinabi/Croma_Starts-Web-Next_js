"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, Settings, LogOut, ShieldCheck, Activity, Database, Bell, Mail, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ScientificQuery {
    id: string;
    fullName: string;
    corporateEmail: string;
    solutionBrief: string;
    createdAt: string;
}

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [queries, setQueries] = useState<ScientificQuery[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedQuery, setSelectedQuery] = useState<ScientificQuery | null>(null);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const response = await fetch('/api/admin/queries');
                const data = await response.json();
                if (data.queries) {
                    setQueries(data.queries);
                }
            } catch (error) {
                console.error('Failed to fetch queries:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchQueries();
    }, []);

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', display: 'flex' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                background: 'white',
                borderRight: '1px solid var(--glass-border)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
            }}>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-main)', letterSpacing: '1px' }}>
                    CROMA <span style={{ color: 'var(--primary)' }}>PORTAL</span>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {[
                        { icon: <LayoutDashboard size={20} />, label: 'Overview' },
                        { icon: <Database size={20} />, label: 'R&D Assets' },
                        { icon: <Users size={20} />, label: 'Team' },
                        { icon: <Activity size={20} />, label: 'Telemetry' },
                        { icon: <Bell size={20} />, label: 'Alerts' },
                        { icon: <Settings size={20} />, label: 'Settings' },
                    ].map((item) => (
                        <div
                            key={item.label}
                            onClick={() => setActiveTab(item.label)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                background: activeTab === item.label ? 'var(--primary-glow)' : 'transparent',
                                color: activeTab === item.label ? 'var(--primary)' : 'var(--text-muted)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </div>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto' }}>
                    <Link href="/login" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        color: '#ef4444',
                        fontWeight: 700,
                        fontSize: '0.9rem'
                    }}>
                        <LogOut size={20} />
                        Terminate Session
                    </Link>
                </div>
            </aside>

            {/* Content */}
            <section style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>{activeTab}</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Welcome back to the Croma Starts R&D hub.</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 20px',
                        background: 'white',
                        borderRadius: '100px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                    }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                        <span style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Internal Secure Node</span>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'Overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                {[
                                    { label: 'Pending Scientific Queries', value: queries.length.toString(), trend: 'Updated Now', icon: <Mail size={24} />, action: () => setActiveTab('R&D Assets') },
                                    { label: 'Hardware Prototypes', value: '47', trend: 'Stable', icon: <Database size={24} /> },
                                    { label: 'System Integrity', value: '99.9%', trend: 'Optimal', icon: <ShieldCheck size={24} /> },
                                ].map((stat) => (
                                    <motion.div
                                        key={stat.label}
                                        whileHover={{ y: -5 }}
                                        onClick={stat.action}
                                        style={{
                                            background: 'white',
                                            padding: '2rem',
                                            borderRadius: '24px',
                                            border: '1px solid var(--glass-border)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                            cursor: stat.action ? 'pointer' : 'default'
                                        }}
                                    >
                                        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{stat.icon}</div>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{stat.label}</p>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                                            <span style={{ fontSize: '2rem', fontWeight: 800 }}>{stat.value}</span>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981' }}>{stat.trend}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{
                                marginTop: '3rem',
                                background: 'white',
                                padding: '3rem',
                                borderRadius: '32px',
                                border: '1px solid var(--glass-border)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                            }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem' }}>Recent Activity</h3>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', textAlign: 'center', flexDirection: 'column', gap: '1rem' }}>
                                    <Activity size={48} color="var(--primary)" opacity={0.2} />
                                    <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Initializing Real-time Data Visualization...</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'R&D Assets' && (
                        <motion.div
                            key="queries"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Scientific Queries Archive</h3>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total: {queries.length}</div>
                            </div>

                            {isLoading ? (
                                <div style={{ textAlign: 'center', padding: '5rem' }}>
                                    <Activity className="animate-spin" color="var(--primary)" />
                                    <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Retrieving secure data...</p>
                                </div>
                            ) : queries.length === 0 ? (
                                <div style={{ background: 'white', padding: '5rem', borderRadius: '32px', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
                                    <Mail size={48} color="var(--text-muted)" opacity={0.3} style={{ margin: '0 auto 1.5rem' }} />
                                    <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>No queries found in the database.</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {queries.map((query) => (
                                        <motion.div
                                            key={query.id}
                                            whileHover={{ x: 5 }}
                                            onClick={() => setSelectedQuery(query)}
                                            style={{
                                                background: 'white',
                                                padding: '2.5rem',
                                                borderRadius: '24px',
                                                border: '1px solid var(--glass-border)',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: '2rem',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                                                    <h4 style={{ fontWeight: 800, fontSize: '1.2rem' }}>{query.fullName}</h4>
                                                    <span style={{ fontSize: '0.8rem', background: 'var(--primary-glow)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>{query.corporateEmail}</span>
                                                </div>
                                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                                    {query.solutionBrief}
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexShrink: 0 }}>
                                                <div style={{ textAlign: 'right' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                                                        <Clock size={14} />
                                                        {new Date(query.createdAt).toLocaleDateString()}
                                                    </div>
                                                </div>
                                                <div style={{ width: '40px', height: '40px', background: 'var(--bg-dark)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <ChevronRight size={20} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Modal for Query Details */}
            <AnimatePresence>
                {selectedQuery && (
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(15, 23, 42, 0.4)',
                        backdropFilter: 'blur(8px)',
                        padding: '2rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            style={{
                                background: 'white',
                                width: '100%',
                                maxWidth: '700px',
                                borderRadius: '32px',
                                padding: '3rem',
                                position: 'relative',
                                boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            <button
                                onClick={() => setSelectedQuery(null)}
                                style={{
                                    position: 'absolute',
                                    top: '24px',
                                    right: '24px',
                                    background: 'var(--bg-dark)',
                                    border: 'none',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: 'var(--text-muted)',
                                    fontWeight: 800
                                }}
                            >
                                ✕
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2.5rem' }}>
                                <div style={{ width: '56px', height: '56px', background: 'var(--primary-glow)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>Scientific Inquiry</h2>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, marginTop: '8px' }}>
                                        Received on {new Date(selectedQuery.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div>
                                        <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Scientist / Lead</p>
                                        <p style={{ fontSize: '1.2rem', fontWeight: 800 }}>{selectedQuery.fullName}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Corporate Node</p>
                                        <p style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>{selectedQuery.corporateEmail}</p>
                                    </div>
                                </div>

                                <div>
                                    <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Full Solution Brief</p>
                                    <div style={{
                                        background: 'var(--bg-dark)',
                                        padding: '2rem',
                                        borderRadius: '20px',
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                        color: 'var(--text-main)',
                                        fontWeight: 500,
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        {selectedQuery.solutionBrief}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <button
                                        onClick={() => setSelectedQuery(null)}
                                        style={{
                                            flex: 1,
                                            padding: '18px',
                                            borderRadius: '16px',
                                            background: 'var(--primary)',
                                            color: 'white',
                                            border: 'none',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 15px rgba(255, 184, 0, 0.2)'
                                        }}
                                    >
                                        Acknowledge Brief
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
