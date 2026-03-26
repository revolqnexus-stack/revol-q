'use client';

import { useEffect, useRef, useState, useCallback, useId } from 'react';

interface LiquidBoundaryProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function LiquidBoundary({ children, className = '', id }: LiquidBoundaryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filterId = useId().replace(/:/g, ''); // Unique ID for SVG filter
  const rafRef = useRef<number>(undefined);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Update CSS variables for mouse tracking
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      containerRef.current.style.setProperty('--mouse-x', x.toFixed(3));
      containerRef.current.style.setProperty('--mouse-y', y.toFixed(3));
      
      rafRef.current = undefined;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <div 
      ref={containerRef}
      id={id}
      className={`liquid-glass-section ${className}`}
      style={{ '--mouse-x': '0.5', '--mouse-y': '0.5' } as React.CSSProperties}
    >
      {/* SVG Definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id={`liquidFilter-${filterId}`}>
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.02 0.1" 
              numOctaves="2" 
              result="noise"
            >
              <animate 
                attributeName="baseFrequency" 
                dur="20s" 
                values="0.02 0.1;0.03 0.15;0.02 0.1" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="15" 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="0.5" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.6" />
            </feComponentTransfer>
          </filter>
          
          <linearGradient id={`glassGradient-${filterId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top boundary */}
      <div className="liquid-edge liquid-edge-top">
        <svg className="liquid-svg" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <rect 
            x="0" 
            y="0" 
            width="1200" 
            height="40" 
            fill={`url(#glassGradient-${filterId})`} 
            filter={`url(#liquidFilter-${filterId})`}
          />
        </svg>
      </div>
      
      <div className="liquid-content" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
      
      {/* Bottom boundary */}
      <div className="liquid-edge liquid-edge-bottom">
        <svg className="liquid-svg" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <rect 
            x="0" 
            y="0" 
            width="1200" 
            height="40" 
            fill={`url(#glassGradient-${filterId})`} 
            filter={`url(#liquidFilter-${filterId})`}
          />
        </svg>
      </div>
    </div>
  );
}
