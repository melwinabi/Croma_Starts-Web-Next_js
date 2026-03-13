"use client";

import { motion } from 'framer-motion';

const CircuitAnimation = () => {
    // Shared path properties
    const strokeWidth = 2;
    const pulseStrokeWidth = 5;
    const primaryColor = "#FF9500"; // More saturated Amber/Gold

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.55 // Enhanced for stronger visual impact
        }}>
            <svg width="100%" height="100%" viewBox="0 0 1200 1200" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1   0 0 0 0 0.7   0 0 0 0 0  0 0 0 1 0" />
                        <feBlend in="SourceGraphic" in2="blur" mode="screen" />
                    </filter>

                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor={primaryColor} />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                {/* Complex Traces - Background (Static) */}
                <g stroke="rgba(15, 23, 42, 0.08)" fill="none" strokeWidth={strokeWidth}>
                    <path d="M 50 100 L 200 100 L 250 150 L 400 150 L 450 100 L 700 100 L 750 150 L 1000 150" />
                    <path d="M 100 300 L 250 300 L 300 350 L 500 350 L 550 400 L 800 400" />
                    <path d="M 50 600 L 150 600 L 200 550 L 400 550 L 450 600 L 700 600 L 750 550 L 950 550" />
                    <path d="M 300 900 L 450 900 L 500 850 L 700 850 L 750 900 L 1000 900" />

                    {/* Vertical / Interconnects */}
                    <path d="M 250 150 L 250 300" />
                    <path d="M 500 350 L 500 500" />
                    <path d="M 750 150 L 750 550" />
                    <path d="M 450 600 L 450 900" />
                </g>

                {/* Animated Pulsing Paths - The "Energy Flow" */}
                {/* Flow 1: Top Mainline */}
                <motion.path
                    d="M 50 100 L 200 100 L 250 150 L 400 150 L 450 100 L 700 100 L 750 150 L 1000 150"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={pulseStrokeWidth}
                    strokeDasharray="40 200"
                    filter="url(#glow)"
                    animate={{ strokeDashoffset: [240, -240] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* Flow 2: Mid Branch */}
                <motion.path
                    d="M 100 300 L 250 300 L 300 350 L 500 350 L 550 400 L 800 400"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={pulseStrokeWidth}
                    strokeDasharray="60 180"
                    filter="url(#glow)"
                    animate={{ strokeDashoffset: [-240, 240] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                />

                {/* Flow 3: Bottom Mainline */}
                <motion.path
                    d="M 50 600 L 150 600 L 200 550 L 400 550 L 450 600 L 700 600 L 750 550 L 950 550"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={pulseStrokeWidth}
                    strokeDasharray="50 300"
                    filter="url(#glow)"
                    animate={{ strokeDashoffset: [350, -350] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
                />

                {/* Flow 4: Vertical Interconnect Pulse */}
                <motion.path
                    d="M 500 350 L 500 500 L 700 500 L 700 600"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={2}
                    strokeDasharray="20 100"
                    filter="url(#intenseGlow)"
                    animate={{ strokeDashoffset: [120, -120] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Data Packets (Circles) flying along paths */}
                <motion.circle r="3" fill={primaryColor} filter="url(#intenseGlow)">
                    <animateMotion
                        path="M 50 100 L 200 100 L 250 150 L 400 150 L 450 100 L 700 100"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="0s"
                    />
                </motion.circle>

                <motion.circle r="3" fill={primaryColor} filter="url(#intenseGlow)">
                    <animateMotion
                        path="M 950 550 L 750 550 L 700 600 L 450 600 L 400 550 L 200 550"
                        dur="6s"
                        repeatCount="indefinite"
                        begin="2s"
                    />
                </motion.circle>

                {/* Strategic Nodes (Glowing dots at intersections) */}
                <g fill={primaryColor} filter="url(#glow)">
                    <circle cx="250" cy="150" r="4" />
                    <circle cx="250" cy="300" r="4" />
                    <circle cx="500" cy="350" r="4" />
                    <circle cx="750" cy="150" r="4" />
                    <circle cx="750" cy="550" r="4" />
                    <circle cx="450" cy="600" r="4" />
                    <circle cx="450" cy="900" r="4" />
                </g>

                {/* Intense Pulsing Nodes */}
                <motion.circle
                    cx="500" cy="350" r="6"
                    fill={primaryColor}
                    filter="url(#intenseGlow)"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="750" cy="550" r="6"
                    fill={primaryColor}
                    filter="url(#intenseGlow)"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
            </svg>
        </div>
    );
};

export default CircuitAnimation;
