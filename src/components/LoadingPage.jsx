import React, { useState, useEffect } from "react";
import "./LoadingPage.css";

export default function LoadingPage({
  progress: externalProgress,
  onLoadingComplete,
}) {
  const [dots, setDots] = useState("");
  const [internalProgress, setInternalProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const progress =
    externalProgress !== undefined ? externalProgress : internalProgress;

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    let progressInterval;
    if (externalProgress === undefined) {
      progressInterval = setInterval(() => {
        setInternalProgress((prev) => {
          if (prev >= 100) {
            return 100;
          }
          return prev + 1;
        });
      }, 25);
    }

    return () => {
      clearInterval(dotsInterval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [externalProgress]);

  useEffect(() => {
    if (progress >= 100 && !isFadingOut) {
      setIsFadingOut(true);

      const timer = setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 800); 

      return () => clearTimeout(timer);
    }
  }, [progress, isFadingOut, onLoadingComplete]);

  return (
    <div className={`loading-page ${isFadingOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        {/* Terminal Window */}
        <div className="terminal-window">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <span className="terminal-title">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="terminal-content">
            <div className="terminal-prompt">
              <span className="terminal-user">user@portfolio</span>
              <span className="terminal-separator">:</span>
              <span className="terminal-path">~</span>
              <span className="terminal-command">$ npm run dev</span>
            </div>

            <div className="terminal-lines">
              <div className="terminal-line">
                <span className="terminal-icon">✓</span>
                <span>Compiling dependencies...</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-icon">✓</span>
                <span>Building components...</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-icon">✓</span>
                <span>Optimizing assets...</span>
              </div>
              <div className="terminal-line">
                <div className="spinner"></div>
                <span className="loading-line">Loading portfolio{dots}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="progress-text">{Math.round(progress)}%</div>
            </div>

            {/* Blinking Cursor */}
            <div className="terminal-cursor-line">
              <span className="terminal-arrow">▸</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </div>

        {/* Code Brackets Animation */}
        <div className="code-brackets">
          <span className="bracket-open">&lt;</span>
          <span className="bracket-slash">/</span>
          <span className="bracket-close">&gt;</span>
        </div>
      </div>
    </div>
  );
}
