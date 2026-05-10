"use client";

import { motion } from "framer-motion";
import styles from "./MemoryGallery.module.css";
import { Heart } from "lucide-react";

export default function MemoryGallery() {
  const memories = [
    { id: 1, caption: "Our first adventure", message: "I still remember how much we laughed that day. It was the beginning of everything.", angle: -3, delay: 0.1 },
    { id: 2, caption: "That unforgettable sunset", message: "Watching the colors change in the sky with you is my favorite memory of the summer.", angle: 2, delay: 0.3, isLandscape: true },
    { id: 3, caption: "Quiet mornings", message: "Just coffee, comfortable silence, and knowing I wouldn't want to be anywhere else.", angle: -2, delay: 0.5, isLandscape: true },
    { id: 4, caption: "Your beautiful smile", message: "The way your eyes light up when you smile is still my absolute favorite thing in the world.", angle: 4, delay: 0.7 },
  ];

  return (
    <section className={styles.gallerySection}>
      <motion.h2 
        className={styles.galleryTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        Beautiful Memories
      </motion.h2>

      <div className={styles.grid}>
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            className={`${styles.memoryWrapper} ${memory.isLandscape ? styles.landscapeWrapper : ""}`}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: memory.angle }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: memory.delay,
              ease: [0.25, 1, 0.5, 1] 
            }}
            style={{ rotate: memory.angle }} // Fallback base rotation
          >
            <div className={styles.polaroid}>
              <div className={styles.imagePlaceholder}>
                {/* This is a placeholder for actual images. 
                    Once photos are provided, an <Image> component can be used here. */}
                <Heart size={40} color="#cba37b" strokeWidth={1} opacity={0.5} />
              </div>
              <p className={styles.caption}>{memory.caption}</p>
            </div>
            
            <div className={styles.messageBox}>
              <p>{memory.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
