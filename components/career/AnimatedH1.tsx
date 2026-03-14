"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

export default function AnimatedH1({ children, className = "", animationDelay = "100ms" }: Props) {
  return (
    <h1
      className={`clip-reveal ${className}`}
      style={{ animationDelay, animationFillMode: "both" }}
    >
      {children}
    </h1>
  );
}
