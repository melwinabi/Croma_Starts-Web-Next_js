"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isMobile, setIsMobile] = useState(false);
    const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 200 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("resize", checkMobile);
        };
    }, [cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "var(--primary)",
                pointerEvents: "none",
                zIndex: 10000,
                x: cursorX,
                y: cursorY,
                mixBlendMode: "difference",
            }}
        />
    );
}
