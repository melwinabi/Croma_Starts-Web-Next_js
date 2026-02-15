"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Wifi, Bot, ArrowRight, FlaskConical } from 'lucide-react';

const services = [
    {
        title: "Embedded Synthesis",
        icon: <Cpu size={24} />,
        desc: "Precision engineering of high-reliability ARM hardware architectures and critical firmware logic.",
        img: "/images/hero_bg.png",
    },
    {
        title: "Industrial IoT Data Hubs",
        icon: <Wifi size={24} />,
        desc: "Architecting secure communication layers that bridge physical assets with world-class cloud telemetry.",
        img: "/images/iot.png",
    },
    {
        title: "Autonomous Motion Control",
        icon: <Bot size={24} />,
        desc: "Next-generation robotics with advanced kinematics, computer vision, and AI-driven precision.",
        img: "/images/robotics.png",
    }
];

export default function WhatWeDo() {
    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', marginBottom: 'clamp(80px, 15vw, 120px)' }}
                    >
                        <div style={{ display: 'inline-flex', padding: '16px', background: 'white', border: '1px solid var(--primary)', borderRadius: '20px', marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(255,184,0,0.1)' }}>
                            <FlaskConical size={32} color="var(--primary)" />
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>Core <span className="gradient-text">R&D Portfolio.</span></h1>
                        <p style={{ maxWidth: '850px', margin: '0 auto', color: 'var(--text-muted)', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', lineHeight: 1.8 }}>
                            Transforming visionary concepts into high-performance industrial assets through unparalleled research and engineering excellence.
                        </p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(80px, 15vw, 140px)' }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                    alignItems: 'center',
                                    gap: 'clamp(3rem, 10vw, 6rem)',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <div style={{ flex: 1, minWidth: 'clamp(300px, 100%, 450px)' }}>
                                    <div className="glass-card" style={{
                                        position: 'relative',
                                        height: 'clamp(350px, 50vw, 500px)',
                                        borderRadius: '40px',
                                        overflow: 'hidden',
                                        background: 'white',
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        <Image
                                            src={service.img}
                                            alt={service.title}
                                            fill
                                            style={{ objectFit: 'cover', opacity: 0.9 }}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div style={{ position: 'absolute', top: '30px', left: '30px', background: 'white', padding: '15px', borderRadius: '16px', border: '1px solid var(--primary)', boxShadow: '0 4px 15px rgba(255,184,0,0.1)' }}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ flex: 1.2, minWidth: 'clamp(300px, 100%, 400px)' }}>
                                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{service.title}</h2>
                                    <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                        {service.desc}
                                    </p>
                                    <span style={{ fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        Technical Audit <ArrowRight size={20} />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
