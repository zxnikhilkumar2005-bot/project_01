"use client";

import { useRef } from "react";
import gsap from "@/libs/gsap";
import TextReveal from "./TextReveal";

const CARD_W = 300;
const CARD_H = 380;
const SCALE = 1.35;

const CarouselCard = ({ project,onHoverStart,onHoverEnd }) => {


  const carRef = useRef(null);
  const imgRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);

  
  const onEnter = () =>{
    onHoverStart?.();

    gsap.to(carRef.current, {
      width: CARD_W * SCALE,
      height: CARD_H * SCALE,
      duration:0.45,
      ease: "power3.out",
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };


  const onLeave = () =>{
    onHoverEnd?.();

    gsap.to(carRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration:0.24,
      ease: "power3.out",
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  return (
    <div
      ref={carRef}

      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: "visible",


      }}
      className="relative"
    >
      {/* Title panel */}
      <div
        style={{ bottom: 'calc(100% + 3rem)' }}
        className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[1rem]"
      >
        <TextReveal ref={numberRef} trigger="manual" splitBy="chars">
          <h3 className="text-[1rem]  text-[#010101]">
            {project.number}
          </h3>
        </TextReveal>

        <TextReveal ref={titleRef} trigger="manual" splitBy="words">
          <h3 className="text-[1rem]  text-[#010101]">
            {project.title}
          </h3>
        </TextReveal>
      </div>

      <div className="imageDiv absolute top-0 left-0 w-full h-full overflow-hidden ">
        <img

        style={{
          transformOrigin: "center center",
          userSelect: "none",

        }}
          className="h-full object-cover"
          ref={imgRef}
          src={project.coverImage}
          alt={project.title}
        />
      </div>
    </div>
  )
}

export default CarouselCard
