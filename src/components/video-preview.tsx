"use client";

import * as React from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface VideoPreviewProps {
  src: string;
  alt: string;
  onPlay?: () => void;
}

export function VideoPreview({ src, alt, onPlay }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay?.();
  };

  return (
    <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-200 to-red-100 flex items-center justify-center overflow-hidden relative group">
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        fallback="/images/placeholder.png"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-500/30 to-transparent flex items-center justify-center transition-opacity duration-300">
        {!isPlaying && (
          <button
            className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/50 hover:scale-110 active:scale-95"
            aria-label="Play interview preview video"
            onClick={handlePlay}
          >
            <svg
              className="h-12 w-12 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
