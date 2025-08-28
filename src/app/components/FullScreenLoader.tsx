"use client";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

interface FullScreenLoaderProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  isLoading,
  onLoadingComplete,
}) => {
  const [isVisible, setIsVisible] = useState(isLoading);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Geometric shapes animation data
  const geometricLoaderAnimation = {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 400,
    h: 400,
    nm: "Geometric Loader",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Triangle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 0,
                s: [0],
              },
              { t: 180, s: [360] },
            ],
          },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "sh",
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                    ],
                    v: [
                      [0, -40],
                      [-35, 20],
                      [35, 20],
                    ],
                    c: true,
                  },
                },
              },
              {
                ty: "st",
                c: { a: 0, k: [1, 1, 1, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 3 },
                lc: 2,
                lj: 2,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
              },
            ],
          },
        ],
        ip: 0,
        op: 180,
        st: 0,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Square",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 0,
                s: [0],
              },
              { t: 180, s: [-360] },
            ],
          },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                t: 0,
                s: [50, 50, 100],
              },
              {
                i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                t: 90,
                s: [120, 120, 100],
              },
              { t: 180, s: [50, 50, 100] },
            ],
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                s: { a: 0, k: [60, 60] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 },
              },
              {
                ty: "st",
                c: { a: 0, k: [1, 1, 1, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 3 },
                lc: 2,
                lj: 2,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
              },
            ],
          },
        ],
        ip: 0,
        op: 180,
        st: 0,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 0,
                s: [100],
              },
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 60,
                s: [30],
              },
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 120,
                s: [100],
              },
              { t: 180, s: [30] },
            ],
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                s: { a: 0, k: [80, 80] },
                p: { a: 0, k: [0, 0] },
              },
              {
                ty: "st",
                c: { a: 0, k: [1, 1, 1, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 3 },
                lc: 2,
                lj: 2,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
              },
            ],
          },
        ],
        ip: 0,
        op: 180,
        st: 0,
      },
    ],
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: geometricLoaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (!isLoading && isVisible) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 500); // Animation duration

      return () => clearTimeout(timer);
    } else if (isLoading && !isVisible) {
      setIsVisible(true);
      setIsAnimatingOut(false);
    }
  }, [isLoading, isVisible, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500 ${
        isAnimatingOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Lottie Animation */}
        <div className="relative">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-white font-averta text-2xl sm:text-4xl tracking-wider">
              VIVIAN
            </h2>
            <span className="text-slate-400 font-flanel text-2xl sm:text-4xl">
              STUDIOS
            </span>
          </div>

          {/* Animated dots */}
          <div className="flex justify-center space-x-1">
            <div
              className="w-2 h-2 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-2 h-2 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "200ms" }}
            />
            <div
              className="w-2 h-2 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "400ms" }}
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-slate-300 font-averta text-sm sm:text-base tracking-wide opacity-80">
          SHAPE CINEMATIC DREAMS
        </p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
