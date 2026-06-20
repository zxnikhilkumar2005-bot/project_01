"use client";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import TextReveal from "@/components/TextReveal";
import { projects } from "@/data/projects";
import { useRef } from "react";

export default function Home() {
  const triggerRef = useRef(null);

  const handleHoverEnter = () => {
    triggerRef.current?.play();
  };

  const handlHoverLeave = () => {
    triggerRef.current?.reverse();
  };

  return (
    <main className="h-screen w-full flex pt-[5rem]  " >
      <InfiniteCarousel projects={projects} />
    </main>
  );
}