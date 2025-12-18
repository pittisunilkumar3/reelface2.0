"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-10 w-40 bg-purple-100 animate-pulse rounded" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      )}
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="ReelFace Logo - Real Faces, Real Stories, Real Brands"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
          
          {/* Navigation Links removed as requested */}
        </div>
      </div>
    </motion.nav>
  );
}
