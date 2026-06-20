"use client";

import { useRef } from "react";
import gsap from "@/libs/gsap";
import TextReveal from "./TextReveal";
import useViewTransition from "@/hooks/useViewTransition";

const CARD_W = 400;
const CARD_H = 480;
const SCALE = 1.35;

const CarouselCard = ({ project, onHoverStart, onHoverEnd }) => {


  const carRef = useRef(null);
  const imgRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);


  const onEnter = () => {
    onHoverStart?.();

    gsap.to(carRef.current, {
      width: CARD_W * SCALE,
      height: CARD_H * SCALE,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(imgRef.current,{
      scale:1,
      duration:0.42,
      ease:'power3.out'
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };


  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(carRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.17,
      ease: "power3.out",
    });
     gsap.to(imgRef.current,{
      scale:1.6,
      duration:0.19,
      ease:'power3.out'
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };


   const  {navigateTo} =  useViewTransition();

  const handleClick = () => {
    navigateTo(`/project/${project.slug}`);
  }

  return (
    <div
      ref={carRef}

      onClick={handleClick}

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
        style={{ bottom: 'calc(100% + 1.5rem)' }}
        className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[0.8rem]"
      >
        <TextReveal
          ref={numberRef}
          duration='0.25'
          trigger="manual"
          splitBy="chars"
        >
          <h3 className="text-[1.2rem]  text-[#010101]">
            {project.number}
          </h3>
        </TextReveal>

        <TextReveal ref={titleRef} duration='0.25' trigger="manual" splitBy="words">
          <h3 className="text-[1.2rem]  text-[#010101]">
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
          className="h-full object-cover w-full scale-[1.6]"
          ref={imgRef}
          src={project.coverImage}
          alt={project.title}
        />
      </div>
    </div>
  )
}

export default CarouselCard
