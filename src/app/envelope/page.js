"use client";

import { useState } from "react";
import EnvelopeSurprise from "@/components/EnvelopeSurprise";
import MemoryGallery from "@/components/MemoryGallery";
import { motion, AnimatePresence } from "framer-motion";

export default function EnvelopePage() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <main>
      <EnvelopeSurprise onOpenComplete={() => setShowGallery(true)} />
      
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <MemoryGallery />
            <footer style={{
              backgroundColor: '#ffe6eb', 
              padding: '2rem 1rem', 
              textAlign: 'center', 
              marginTop: '4rem',
            }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-heading)' }}>Made with 💗 for Nancyy!!!</p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>I hope you like it</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
