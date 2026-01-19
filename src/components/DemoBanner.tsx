'use client'

import { motion } from "framer-motion";
import { X, Eye } from "lucide-react";
import { useState } from "react";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-3 px-4 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Eye className="w-5 h-5" />
          <span className="font-medium">
            Portfolio Demo - Landing Page Sample
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close demo banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}