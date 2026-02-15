"use client";

import { motion } from 'framer-motion';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="glass" style={{
            marginTop: '100px',
            padding: '80px 0 40px',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderRadius: '40px 40px 0 0'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '60px'
                }}>
                    {/* Brand Info */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <Cpu color="var(--primary)" size={28} />
                            <span className="font-tech" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '2px' }}>
                                CROMA<span style={{ color: 'var(--primary)' }}>STARTS</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Pioneering high-tech R&D in Embedded Systems, IoT, and Robotics.
                            Engineering the next generation of intelligent systems.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <motion.a whileHover={{ color: 'var(--primary)' }} href="#"><Linkedin size={20} /></motion.a>
                            <motion.a whileHover={{ color: 'var(--primary)' }} href="#"><Twitter size={20} /></motion.a>
                            <motion.a whileHover={{ color: 'var(--primary)' }} href="#"><Github size={20} /></motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Sitemap</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link href="/"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>Home</motion.span></Link>
                            <Link href="/what-we-do"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>What We Do</motion.span></Link>
                            <Link href="/about"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>About Company</motion.span></Link>
                            <Link href="/career-guidance"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>Career & Guidance</motion.span></Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Mail size={18} color="var(--primary)" />
                                <span>hello@cromastarts.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Phone size={18} color="var(--primary)" />
                                <span>+1 (234) 567-890</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <MapPin size={18} color="var(--primary)" />
                                <span>Tech Park, Innovative Way, Silicon Valley</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '30px',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    © {new Date().getFullYear()} Croma Starts. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
