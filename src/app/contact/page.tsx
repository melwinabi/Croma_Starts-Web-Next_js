"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Twitter, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        corporateEmail: '',
        solutionBrief: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/queries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error('Submission failed');
            }
        } catch (err) {
            console.error('Error submitting form:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <main style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card"
                        style={{
                            maxWidth: '600px',
                            margin: '0 auto',
                            padding: '4rem',
                            textAlign: 'center',
                            background: 'white'
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--primary-glow)',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 2.5rem',
                            color: 'var(--primary)'
                        }}>
                            <CheckCircle2 size={40} />
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Inquiry Initiated.</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>
                            Our elite strategy team has received your brief. A specialist will coordinate a secure consultation within 24 hours.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="btn-outline"
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            Submit Another Solution Brief
                        </button>
                    </motion.div>
                </div>
            </main>
        );
    }

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', marginBottom: 'clamp(60px, 12vw, 100px)' }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>Secure <span className="gradient-text">Consultation.</span></h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', lineHeight: 1.8 }}>
                            Connect with our elite R&D hub to discuss your high-stakes industrial requirements and hardware vision.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(350px, 100%, 500px), 1fr))', gap: 'clamp(3rem, 10vw, 6rem)', alignItems: 'start' }}>
                        {/* Elite Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card"
                            style={{ padding: 'clamp(2.5rem, 6vw, 4rem)', background: 'white' }}
                        >
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '2px' }}>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Johnathan Doe"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        style={{
                                            padding: '1.2rem',
                                            borderRadius: '12px',
                                            background: '#F9FAFB',
                                            border: '1.5px solid rgba(15, 23, 42, 0.08)',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            transition: 'var(--transition-base)'
                                        }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '2px' }}>Corporate Email</label>
                                    <input
                                        type="email"
                                        placeholder="doe@corporation.com"
                                        required
                                        value={formData.corporateEmail}
                                        onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                                        style={{
                                            padding: '1.2rem',
                                            borderRadius: '12px',
                                            background: '#F9FAFB',
                                            border: '1.5px solid rgba(15, 23, 42, 0.08)',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            transition: 'var(--transition-base)'
                                        }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '2px' }}>Solution Brief</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Initial overview of technological requirements..."
                                        required
                                        value={formData.solutionBrief}
                                        onChange={(e) => setFormData({ ...formData, solutionBrief: e.target.value })}
                                        style={{
                                            padding: '1.2rem',
                                            borderRadius: '12px',
                                            background: '#F9FAFB',
                                            border: '1.5px solid rgba(15, 23, 42, 0.08)',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            resize: 'none',
                                            transition: 'var(--transition-base)'
                                        }} />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={isSubmitting}
                                    style={{
                                        height: '65px',
                                        justifyContent: 'center',
                                        fontSize: '1.1rem',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>Processing... <Loader2 size={24} className="animate-spin" /></>
                                    ) : (
                                        <>Initiate Process <ArrowRight size={22} /></>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Elite Direct Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Strategic Channels</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                                        <div style={{ width: '56px', height: '56px', background: 'rgba(255, 184, 0, 0.08)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', flexShrink: 0, border: '1px solid rgba(255, 184, 0, 0.2)' }}>
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: 800, color: 'var(--text-main)' }}>Corporate Strategy</h4>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>solutions@cromastarts.com</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                                        <div style={{ width: '56px', height: '56px', background: 'rgba(255, 184, 0, 0.08)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', flexShrink: 0, border: '1px solid rgba(255, 184, 0, 0.2)' }}>
                                            <MessageSquare size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: 800, color: 'var(--text-main)' }}>WhatsApp & Call</h4>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>+91 88073 87674</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card" style={{ padding: '3rem', borderRadius: '40px', background: 'white' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Industrial Hub</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                                    Innovation Wing <br />
                                    Main Road, Nagercoil <br />
                                    Tamil Nadu, India
                                </p>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <motion.a whileHover={{ scale: 1.1, color: 'var(--primary)' }} href="https://www.linkedin.com/in/croma-starts-aa87793a4/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)' }}><Linkedin size={24} /></motion.a>
                                    <motion.a whileHover={{ scale: 1.1, color: 'var(--primary)' }} href="https://wa.me/918807387674" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)' }}><MessageSquare size={24} /></motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
