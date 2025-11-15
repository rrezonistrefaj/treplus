"use client";
import React from "react";
import NumbersSectionMobile from "./NumbersSectionMobile";
import NumbersSectionDesktop from "./NumbersSectionDesktop";

export default function NumbersSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  // Detect mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <NumbersSectionMobile /> : <NumbersSectionDesktop />;
}


