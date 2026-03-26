import React, { useState, useEffect, useRef } from 'react';

/**
 * REVOLQ SYSTEM COMPONENT: DecryptedText
 * Handles the high-speed character scrambling reveal.
 */
interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  onComplete?: () => void;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  speed = 40, 
  maxIterations = 10, 
  className = "",
  onComplete
}) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "01$#!&%@_INIT_SYS_2026_";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => 
        text.split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / maxIterations;
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        if (onComplete) onComplete();
      }
    }, speed);
  };

  useEffect(() => {
    // Trigger scramble on initial mount
    startScramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return (
    <span 
      className={className}
      onMouseEnter={startScramble}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;
