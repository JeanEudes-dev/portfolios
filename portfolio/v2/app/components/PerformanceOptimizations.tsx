"use client";

import { useEffect } from 'react';

const PerformanceOptimizations = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = [
      '/portfolios/me.jpg',
      '/portfolios/Jean-Eudes_ASSOGBA_dev.pdf'
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.jpg') ? 'image' : 'document';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Optimize images with intersection observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });

    // Cleanup
    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//res.cloudinary.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//x.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      
      {/* Resource hints */}
      <link rel="preload" href="/portfolios/me.jpg" as="image" />
      <link rel="prefetch" href="/portfolios/Jean-Eudes_ASSOGBA_dev.pdf" />
      
      {/* Critical CSS inline styles for performance */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .dot-bg {
            background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          .light-effect {
            position: fixed;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%);
            pointer-events: none;
            z-index: 1;
          }
          /* Prevent layout shift */
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          /* Performance optimizations */
          * {
            will-change: auto;
          }
          .motion-reduce\\:transition-none {
            transition: none !important;
          }
          @media (prefers-reduced-motion: reduce) {
            .motion-reduce\\:transition-none {
              transition: none !important;
            }
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `
      }} />
    </>
  );
};

export default PerformanceOptimizations;