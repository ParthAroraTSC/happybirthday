"use client";

import { motion } from "framer-motion";
import styles from "./MemoryGallery.module.css";
import { Heart } from "lucide-react";

export default function MemoryGallery() {
  const memories = [
    { id: 1, caption: "Hiee Beautiful!!!", message: "You were looking so gorgeous in this pink saree. When I saw you that day I was stunned by how beautiful you were looking!!💖", angle: -3, delay: 0.1, type: "image", src: "/first-poloroid.jpeg" },
    { id: 2, caption: "My fav photo!!!", message: "Remember this photo? We were adoreing this photo so muchhh!!", angle: 2, delay: 0.3, isLandscape: true, rotateMedia: true, type: "image", src: "/second-poloroid.jpeg" },
    { id: 3, caption: "First time in the same frame!!!", message: "Our first ever snap together! I remember we were doing a fit check lol!!", angle: -2, delay: 0.5, isLandscape: true, rotateMedia: true, type: "video", src: "/third-poloroid.mp4" },
    { id: 4, caption: "Fomo moment!!", message: "Mann!! I wanted to click a some good photos with you but I was so nervous😭😭 I couldn't even keep my hand on your shoulder properly🤦‍♂️", angle: 4, delay: 0.7, type: "image", src: "/fouth-poloroid.jpeg", objectPosition: "top" },
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
        Gallery of our moments!!!💖
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
                {memory.type === "image" && memory.src ? (
                  <img src={memory.src} alt={memory.caption} className={`${styles.media} ${memory.rotateMedia ? styles.rotatedMedia : ""}`} style={{ objectPosition: memory.objectPosition || "center" }} />
                ) : memory.type === "video" && memory.src ? (
                  <video src={memory.src} className={`${styles.media} ${memory.rotateMedia ? styles.rotatedMedia : ""}`} autoPlay loop muted playsInline style={{ objectPosition: memory.objectPosition || "center" }} />
                ) : (
                  <Heart size={40} color="#cba37b" strokeWidth={1} opacity={0.5} />
                )}
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
