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
                            Pioneering high-tech R&D in Embedded Systems, IoT, Software Solutions and Robotics.
                            Engineering the next generation of intelligent systems.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <motion.a whileHover={{ color: 'var(--primary)' }} href="https://www.linkedin.com/in/croma-starts-aa87793a4/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></motion.a>
                            <motion.a whileHover={{ color: 'var(--primary)' }} href="https://twitter.com/cromastarts"><Twitter size={20} /></motion.a>
                            <motion.a whileHover={{ color: 'var(--primary)' }} href="https://github.com/cromastarts"><Github size={20} /></motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Sitemap</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link href="/"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>Home</motion.span></Link>
                            <Link href="/what-we-do"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>What We Do</motion.span></Link>
                            <Link href="/about"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>About Company</motion.span></Link>
                            <Link href="/career"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', transition: 'var(--transition)', display: 'block' }}>Careers</motion.span></Link>
                            <Link href="/login"><motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ color: 'var(--text-main)', fontWeight: 700, transition: 'var(--transition)', display: 'block', marginTop: '1rem' }}>Portal Login</motion.span></Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Mail size={18} color="var(--primary)" />
                                <span>cromastarts@gmail.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Phone size={18} color="var(--primary)" />
                                <a href="https://wa.me/918807387674" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 88073 87674</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <MapPin size={18} color="var(--primary)" />
                                <span>Chennai, Nagercoil</span>
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
