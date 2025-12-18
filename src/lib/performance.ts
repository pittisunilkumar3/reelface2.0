/**
 * Performance monitoring utilities
 */

type PerformanceMetric = {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
};

/**
 * Reports Web Vitals metrics
 */
export function reportWebVitals(metric: PerformanceMetric) {
  if (process.env.NODE_ENV === "development") {
    console.log(metric);
  }
  
  // Send to analytics in production
  if (process.env.NEXT_PUBLIC_GA_ID) {
    // Example: Send to Google Analytics
    // window.gtag?.('event', metric.name, {
    //   value: Math.round(metric.value),
    //   event_label: metric.rating,
    // });
  }
}

/**
 * Measures component render time
 */
export function measureRender(componentName: string, callback: () => void) {
  const start = performance.now();
  callback();
  const end = performance.now();
  
  if (process.env.NODE_ENV === "development") {
    console.log(`${componentName} rendered in ${(end - start).toFixed(2)}ms`);
  }
}

/**
 * Prefetches a resource
 */
export function prefetch(url: string, type: "script" | "style" | "image" = "script") {
  if (typeof window === "undefined") return;
  
  const link = document.createElement("link");
  link.rel = type === "image" ? "preload" : "prefetch";
  link.as = type;
  link.href = url;
  
  if (type === "image") {
    link.as = "image";
  }
  
  document.head.appendChild(link);
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img.lazy").forEach((img) => {
    imageObserver.observe(img);
  });
}
