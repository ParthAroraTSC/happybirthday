"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Gift.module.css";
import { Gift, Heart, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [step, setStep] = useState("ask"); // ask, rejected
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleNoHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleNoClick = () => {
    setStep("rejected");
  };

  const handleYesClick = () => {
    // Redirect to the envelope page
    router.push("/envelope");
  };

  const handleTryAgain = () => {
    setStep("ask");
    setNoButtonPos({ x: 0, y: 0 });
  };

  return (
    <main className={styles.container}>
      <div className={styles.backgroundDecorations}>
        <Heart className={styles.floatingHeart1} />
        <Heart className={styles.floatingHeart2} />
      </div>

      <AnimatePresence mode="wait">
        {step === "ask" && (
          <motion.div
            key="ask"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <Gift size={48} color="#e06c75" />
            </div>
            <h1 className={styles.title}>Hiee Nancyy!!!</h1>
            <p className={styles.message}>I have a small gift for you... Will you please accept it? 💖</p>
            
            <div className={styles.buttonGroup}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={styles.yesButton}
                onClick={handleYesClick}
              >
                Yes, I will!
              </motion.button>
              
              <motion.button
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                onHoverStart={handleNoHover}
                onClick={handleNoClick}
                className={styles.noButton}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === "rejected" && (
          <motion.div
            key="rejected"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <X size={48} color="#c0392b" />
            </div>
            <h2 className={styles.title}>Try again? 🥺</h2>
            <p className={styles.message}>But... why won't you accept my gift? I made it with so much love... 😭</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.yesButton}
              onClick={handleTryAgain}
            >
              Okay, let me try again!
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
