"use client";
import React, { useState, useEffect } from "react";
import ServicesSectionDesktop from "./ServicesSectionDesktop";
import ServicesSectionMobile from "./ServicesSectionMobile";

const ServicesSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Listen for resize
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null;
  }

  return isDesktop ? <ServicesSectionDesktop /> : <ServicesSectionMobile />;
};

export default ServicesSection;