"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    const handleTick = (time) => {
      lenis.raf(time * 1000);
    };

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", handleScroll);

    gsap.ticker.add(handleTick);

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", handleScroll);
      gsap.ticker.remove(handleTick);
      lenis.destroy();
    };
  }, []);

  return null;
}