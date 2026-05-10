"use client";

import { useState } from "react";
import EnvelopeSurprise from "@/components/EnvelopeSurprise";
import MemoryGallery from "@/components/MemoryGallery";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
