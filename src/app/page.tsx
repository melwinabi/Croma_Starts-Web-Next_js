"use client";

import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Bot, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const technologies = [
  {
    icon: <Cpu size={32} />,
    title: "Embedded Synthesis",
    desc: "Precision engineering of ARM-based hardware architectures and mission-critical firmware logic.",
    items: ["STM32 Performance", "RTOS Optimization", "Hardware Security"]
  },
  {
    icon: <Wifi size={32} />,
    title: "Omni-Channel IoT",
    desc: "Developing secure, low-latency communication layers for industrial data telemetry.",
    items: ["LoRaWAN Integration", "Secure MQTT", "Edge Processing"]
  },
  {
    icon: <Bot size={32} />,
    title: "Autonomous Systems",
    desc: "Synthesizing robotics with advanced kinematics and AI-driven spatial intelligence.",
    items: ["Motion Precision", "CV Sensor Fusion", "Path Planning"]
  },
  {
    icon: <Zap size={32} />,
    title: "Energy Management",
    desc: "Optimizing high-efficiency power distribution for heavy industrial hardware platforms.",
    items: ["BMS Engineering", "Thermal Analysis", "Power Distribution"]
  }
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Core Capabilities */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: 'clamp(60px, 12vw, 100px)' }}
          >
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Elite <span className="gradient-text">R&D Ecosystem.</span></h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-muted)', fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: 1.7 }}>
              We apply rigorous scientific research and industrial engineering to manifest the next generation of hardware excellence.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 320px), 1fr))',
            gap: '2.5rem'
          }}>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card"
                style={{ padding: '3.5rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{tech.icon}</div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>{tech.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{tech.desc}</p>

                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {tech.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', color: 'var(--text-main)', opacity: 0.9, fontSize: '0.95rem', fontWeight: 600 }}>
                        <span style={{ width: '4px', height: '4px', background: 'var(--primary)', borderRadius: '50%' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Banner */}
      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              borderRadius: '48px',
              padding: 'clamp(50px, 10vw, 100px) 2rem',
              textAlign: 'center',
              background: 'white',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 20px 60px rgba(15, 23, 42, 0.04)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', marginBottom: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>Orchestrating <span className="gradient-text">Global Engineering.</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: 1.7 }}>
              Transform your visionary concepts into engineered reality. Join forces with Croma Starts to redefine the limits of industrial capability.
            </p>
            <Link href="/contact" className="btn-primary" style={{ padding: '20px 50px' }}>
              Initiate Inquiry <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
