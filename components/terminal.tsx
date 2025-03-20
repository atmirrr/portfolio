"use client";

import { useEffect, useState, useRef } from "react";
import React from "react";

interface TerminalProps {
  texts: string[];
  typingSpeed?: number;
  className?: string;
  showPrompt?: boolean;
  onComplete?: () => void;
  title?: string;
  onlyAnimateFirstLine?: boolean;
}

export function Terminal({
  texts,
  typingSpeed = 50,
  className = "",
  showPrompt = true,
  onComplete,
  title = "terminal",
  onlyAnimateFirstLine = false,
}: TerminalProps) {
  // Initialize displayed texts - when onlyAnimateFirstLine is true,
  // only have the first line empty, show all other lines immediately
  const initialTexts = React.useMemo(() => {
    if (onlyAnimateFirstLine) {
      // Start with an array of empty strings
      const result = Array(texts.length).fill("");

      // Fill in all but the first line with the complete text
      for (let i = 1; i < texts.length; i++) {
        result[i] = texts[i];
      }

      return result;
    }

    // Default case: all empty strings
    return Array(texts.length).fill("");
  }, [texts, onlyAnimateFirstLine]);

  const [displayedTexts, setDisplayedTexts] = useState<string[]>(initialTexts);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If we're going past the first line with onlyAnimateFirstLine set,
    // immediately show all other lines and complete the animation
    if (onlyAnimateFirstLine && currentTextIndex === 1) {
      // Once first line is done, make sure all other lines are shown
      // This should already be done by initialTexts but let's ensure it
      setDisplayedTexts((prev) => {
        const newTexts = [...prev];
        for (let i = 1; i < texts.length; i++) {
          newTexts[i] = texts[i];
        }
        return newTexts;
      });

      // Call onComplete callback right after first line is done
      if (onComplete) onComplete();

      // Continue with the rest of the state updates
      setCurrentTextIndex(texts.length);
      setIsTyping(false);
      setIsComplete(true);
      return;
    }

    if (currentTextIndex >= texts.length) {
      setIsTyping(false);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    let currentCharIndex = 0;
    let timer: NodeJS.Timeout;

    const typeNextCharacter = () => {
      const currentText = texts[currentTextIndex];

      if (currentCharIndex < currentText.length) {
        setDisplayedTexts((prev) => {
          const newTexts = [...prev];
          newTexts[currentTextIndex] = currentText.substring(
            0,
            currentCharIndex + 1
          );
          return newTexts;
        });
        currentCharIndex++;
        timer = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        // Move to next text after a pause
        timer = setTimeout(() => {
          setCurrentTextIndex((prev) => prev + 1);
        }, typingSpeed * 10); // Longer pause between paragraphs
      }
    };

    typeNextCharacter();

    return () => {
      clearTimeout(timer);
    };
  }, [texts, typingSpeed, onComplete, currentTextIndex, onlyAnimateFirstLine]);

  // Process text to convert "Let's connect" in the last line to a link
  const processText = (text: string, index: number) => {
    if (
      (isComplete || onlyAnimateFirstLine) &&
      index === texts.length - 1 &&
      text.includes("Let's connect")
    ) {
      const parts = text.split("Let's connect");
      return (
        <>
          {parts[0]}
          <a
            href="mailto:amir.aetari@gmail.com"
            className="text-primary hover:underline glitch"
            data-text="Let's connect →"
          >
            Let's connect →
          </a>
        </>
      );
    }
    return text;
  };

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-content space-y-4" ref={containerRef}>
        {texts.map((originalText, index) => {
          const displayedText = displayedTexts[index];
          const isEmpty = !displayedText;

          return (
            <div key={index} className={isEmpty ? "invisible" : ""}>
              {showPrompt && index === 0 && (
                <span className="text-primary">$ </span>
              )}
              {/* If the text hasn't been displayed yet, use the original text as a placeholder */}
              <span>
                {isEmpty ? originalText : processText(displayedText, index)}
              </span>
              {/* Show the cursor at the end of the first line when typing is complete */}
              {(isTyping && currentTextIndex === index) ||
              (isComplete && index === 0) ? (
                <span className="terminal-cursor"></span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
