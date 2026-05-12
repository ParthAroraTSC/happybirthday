"use client";

import { motion } from "framer-motion";
import styles from "./PetalEffect.module.css";

const COLORS = ["#ffb7c5", "#ffc0cb", "#ff91a4", "#ff69b4", "#ffe4e1"];

export default function PetalEffect({ count = 30 }) {
  const petals = Array.from({ length: count }).map((_, i) => ({
    id: i,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    angle: Math.random() * 360,
    distance: Math.random() * 200 + 100,
    size: Math.random() * 15 + 10,
    duration: Math.random() * 2 + 1,
    rotation: Math.random() * 360,
    delay: Math.random() * 0.2,
  }));

  return (
    <div className={styles.container}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className={styles.petal}
          style={{
            backgroundColor: petal.color,
            width: petal.size,
            height: petal.size,
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 1, 
            scale: 0, 
            rotate: 0 
          }}
          animate={{
            x: Math.cos((petal.angle * Math.PI) / 180) * petal.distance,
            y: Math.sin((petal.angle * Math.PI) / 180) * petal.distance - 100,
            opacity: 0,
            scale: [0, 1, 0.8, 0.5],
            rotate: petal.rotation + 360,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
