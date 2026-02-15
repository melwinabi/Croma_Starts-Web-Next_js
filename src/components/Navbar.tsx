"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Solutions', path: '/what-we-do' },
        { name: 'About', path: '/about' },
        { name: 'Students', path: '/career-guidance' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: isScrolled ? 'rgba(253, 251, 247, 0.85)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(15px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(15, 23, 42, 0.05)' : '1px solid transparent'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', maxWidth: '75%' }}>
                    <div style={{
                        position: 'relative',
                        width: 'clamp(32px, 8vw, 45px)',
                        height: 'clamp(32px, 8vw, 45px)',
                        flexShrink: 0
                    }}>
                        <Image
                            src="/images/logo.png"
                            alt="Croma Starts Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <span className="font-display" style={{
                        fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: 'var(--text-main)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        Croma<span style={{ color: 'var(--primary)' }}>Starts</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-only">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path}>
                            <motion.span
                                whileHover={{ color: 'var(--primary)', y: -2 }}
                                style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', opacity: 0.8 }}
                            >
                                {link.name}
                            </motion.span>
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem', borderRadius: '10px' }}>
                        Inquiry <ArrowUpRight size={14} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mobile-only"
                    style={{
                        background: 'rgba(15, 23, 42, 0.05)',
                        border: '1px solid rgba(15, 23, 42, 0.1)',
                        cursor: 'pointer',
                        color: 'var(--text-main)',
                        padding: '10px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: '#FDFBF7',
                            padding: '2rem 5%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
                            zIndex: 1001,
                            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.05)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                        <Link href="/contact" className="btn-primary" onClick={() => setIsOpen(false)} style={{ justifyContent: 'center' }}>
                            Connect with Experts
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
