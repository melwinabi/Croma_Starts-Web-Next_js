"use client";

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-hero" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '100px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    style={{ maxWidth: '850px', position: 'relative', zIndex: 2 }}
                >
                    <motion.div
                        variants={itemVars}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 20px',
                            borderRadius: '100px',
                            background: 'rgba(255, 184, 0, 0.08)',
                            border: '1px solid rgba(255, 184, 0, 0.3)',
                            marginBottom: '2.5rem',
                        }}
                    >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', display: 'block' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                            Pioneering Industrial R&D
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVars}
                        style={{
                            fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                            lineHeight: 0.95,
                            marginBottom: '2.5rem',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            color: 'var(--text-main)'
                        }}
                    >
                        Engineering <br />
                        <span className="gradient-text">the Industrial Future.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        style={{
                            fontSize: 'clamp(1rem, 4vw, 1.3rem)',
                            color: 'var(--text-muted)',
                            marginBottom: '3.5rem',
                            lineHeight: 1.6,
                            maxWidth: '650px'
                        }}
                    >
                        Elite R&D synthesis across Embedded Systems, IoT connectivity, and
                        Autonomous Robotics. We build high-performance hardware for global leaders.
                    </motion.p>

                    <motion.div
                        variants={itemVars}
                        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                        <Link href="/what-we-do" className="btn-primary" style={{ padding: '20px 45px' }}>
                            Our Portfolio <ArrowRight size={20} />
                        </Link>
                        <Link href="/contact" className="btn-outline" style={{ padding: '20px 45px' }}>
                            Scientific Inquiry
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Background Element */}
            <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 0.1, rotate: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                style={{
                    position: 'absolute',
                    right: '-5%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '600px',
                    height: '600px',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
                className="mobile-hide"
            >
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="var(--primary)" strokeWidth="0.1" />
                    <rect x="25" y="25" width="50" height="50" fill="none" stroke="var(--primary)" strokeWidth="0.05" transform="rotate(45 50 50)" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
