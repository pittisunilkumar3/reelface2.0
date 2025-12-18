"use client";

import * as React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<NextImageProps, "onError"> {
  fallback?: string;
  containerClassName?: string;
  onError?: () => void;
}

/**
 * Enhanced Image component with error handling and loading states
 */
export function OptimizedImage({
  src,
  alt,
  fallback = "/images/placeholder.png",
  containerClassName,
  className,
  onError,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallback) {
      setImgSrc(fallback);
    }
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
      )}
      <NextImage
        {...props}
        src={imgSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading && "opacity-0",
          !isLoading && "opacity-100",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
