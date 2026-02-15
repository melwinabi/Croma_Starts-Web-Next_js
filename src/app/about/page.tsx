"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Award, Zap } from 'lucide-react';

export default function About() {
    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(320px, 100%, 500px), 1fr))', gap: 'clamp(4rem, 10vw, 8rem)', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }} />
                                <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem' }}>The Charter</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', lineHeight: 1, marginBottom: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                                Engineering <br />
                                <span className="gradient-text">Eminence.</span>
                            </h1>
                            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--text-main)', opacity: 0.9, lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                Croma Starts is a specialized technology hub dedicated to the upper echelons of industrial R&D. We provide the intellectual and technical substrate for global hardware evolution.
                            </p>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                Our trajectory ensures that every system we engineer is a benchmark for security, performance, and industrial longevity.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}
                        >
                            {[
                                { icon: <Target />, title: "Precision", body: "Ultra-accurate logic synthesis for mission-critical hardware." },
                                { icon: <ShieldCheck />, title: "Integrity", body: "Industrial-grade security architecture across all layers." },
                                { icon: <Award />, title: "Excellence", body: "Direct R&D mentorship for rapid industrial scaling." },
                                { icon: <Zap />, title: "Performance", body: "Superior power-to-performance synthesis in every design." }
                            ].map((val) => (
                                <div key={val.title} className="glass-card" style={{ padding: '2.5rem', borderRadius: '32px', background: 'white' }}>
                                    <div style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{val.icon}</div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontWeight: 800, color: 'var(--text-main)' }}>{val.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{val.body}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
