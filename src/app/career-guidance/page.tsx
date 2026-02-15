"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Award, Target, Star, ChevronRight, Trophy } from 'lucide-react';

const programs = [
    {
        title: "Project Mentorship",
        icon: <Target size={28} />,
        desc: "Elite guidance for final-year industrial projects and academic research defense.",
        accent: "var(--primary)"
    },
    {
        title: "R&D Internships",
        icon: <Trophy size={28} />,
        desc: "Hands-on exposure to our product development lifecycle, from concept to industrial prototype.",
        accent: "var(--primary)"
    },
    {
        title: "Industrial Certification",
        icon: <Award size={28} />,
        desc: "Advanced modules in RTOS synthesis, IoT security clusters, and advanced hardware engineering.",
        accent: "var(--primary)"
    }
];

export default function CareerGuidance() {
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
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 24px',
                                borderRadius: '100px',
                                background: 'white',
                                border: '1px solid rgba(15, 23, 42, 0.1)',
                                marginBottom: '2.5rem',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                            }}>
                                <GraduationCap size={20} color="var(--primary)" />
                                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                    Industrial Mastery
                                </span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1, marginBottom: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                                Bridging the <br />
                                <span className="gradient-text">Industrial Gap.</span>
                            </h1>
                            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3.5rem' }}>
                                We empower the next generation of engineers with high-stakes research exposure. Learn from the professionals who architect the industrial future.
                            </p>
                            <button className="btn-primary" style={{ padding: '20px 50px' }}>Initiate Mentorship <ChevronRight size={20} /></button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="glass-card"
                            style={{ position: 'relative', overflow: 'hidden', height: 'clamp(400px, 50vw, 600px)', borderRadius: '48px', background: 'white' }}
                        >
                            <Image
                                src="/images/student.png"
                                alt="Students engineering"
                                fill
                                style={{ objectFit: 'cover', opacity: 0.9 }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(253, 251, 247, 0.9), transparent)' }} />
                            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', background: 'white', padding: '2.5rem', borderRadius: '32px', border: '1px solid var(--glass-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="var(--primary)" color="var(--primary)" size={16} />)}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800, color: 'var(--text-main)' }}>"A catalyst for industrial innovation."</h3>
                                <p style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.9rem' }}>— S. MEHTA, R&D ASSOCIATE</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program Track Info */}
            <section className="section-padding" style={{ background: 'white', borderTop: '1px solid var(--glass-border)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 100%, 350px), 1fr))',
                        gap: '3rem'
                    }}>
                        {programs.map((prog, index) => (
                            <motion.div
                                key={prog.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="glass-card"
                                style={{ padding: '4rem 3rem', textAlign: 'center', background: 'var(--bg-dark)' }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    margin: '0 auto 2.5rem',
                                    background: 'white',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: prog.accent,
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                                    border: '1px solid rgba(255,184,0,0.2)'
                                }}>
                                    {prog.icon}
                                </div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>{prog.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>{prog.desc}</p>
                                <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Explore Tracks</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
