"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Icon = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export const EvervaultCard = ({ text, className }: { text?: string; className?: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", () => setIsHovered(true));
      card.addEventListener("mouseleave", () => setIsHovered(false));
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", () => setIsHovered(true));
        card.removeEventListener("mouseleave", () => setIsHovered(false));
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border-0 bg-transparent",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.3), transparent 40%)`,
          }}
        />
      </div>

      {text && (
        <div className="relative z-10">
          <div className="text-center text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
