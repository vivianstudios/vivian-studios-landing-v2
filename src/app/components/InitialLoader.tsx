"use client";
import React, { useEffect, useState } from "react";

interface InitialLoaderProps {
  onComplete?: () => void;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / (15 * 60); // 15 seconds = 900 frames at 60fps
      });
    }, 1000 / 60); // 60fps

    // Main timer for 15 seconds
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);

      // Wait for fade out animation to complete
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 1000); // 1 second fade out
    }, 15000); // 15 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-1000 ease-in-out ${
        isAnimatingOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/5 animate-pulse" />
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 border border-white/10 rotate-12 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <div className="relative flex flex-col items-center justify-center space-y-8 z-10">
        {/* Main Logo/Title */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <h1 className="text-white font-averta text-4xl sm:text-7xl font-extrabold tracking-wider">
              VIVIAN
            </h1>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <h2 className="text-slate-300 font-averta text-2xl sm:text-4xl font-bold tracking-[0.3em]">
            STUDIOS
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 font-averta text-sm sm:text-lg tracking-wide opacity-80 text-center max-w-md">
          SHAPING CINEMATIC DREAMS
        </p>

        {/* Progress Indicator */}
        <div className="w-64 sm:w-80 space-y-2">
          <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white/60 to-white transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500 font-averta">
            <span>LOADING</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white/60 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 200}ms`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>

        {/* Subtle loading text */}
        <div className="text-center">
          <p className="text-white/50 font-averta text-xs tracking-widest">
            PREPARING EXPERIENCE
          </p>
        </div>
      </div>

      {/* Corner elements */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-white/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-white/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-white/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-white/20" />
    </div>
  );
};

export default InitialLoader;
