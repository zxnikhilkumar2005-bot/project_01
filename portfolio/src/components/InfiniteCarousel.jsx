"use client";

import { useEffect, useRef } from "react";
import gsap from "@/libs/gsap";
import CarouselCard from "./CarouselCard";



const CARD_W = 400;
const CARD_H = 480;
const SCALE = 1.35;

const CARD_GAP = 27;
const DURATION = 25;

const TRACK_H = CARD_H * SCALE;


const InfiniteCarousel = ({ projects }) => {


    const trackRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const singlewidth = projects.length * (CARD_W + CARD_GAP);

        tweenRef.current = gsap.to(trackRef.current, {
            x: -singlewidth,
            duration: DURATION,
            ease: "none",
            repeat: -1,
        })
        return () => tweenRef.current?.kill();

    }, [projects]);

    const doubled = [...projects, ...projects];

    return (
        <div
            style={{

                padding: `${TRACK_H * 0.134}px 24px`,
            }

            }
            className="overflow-hidden" >
            <div ref={trackRef}
                style={{
                    
                    gap: `${CARD_GAP}px`,
                    width: 'max-content',
                    height: `${TRACK_H}px`
                }}
                className="track flex items-center"
            >
                {doubled.map((project, i) => (
                    <CarouselCard
                        key={i}
                        project={project}
                        onHoverStart={() => tweenRef.current?.pause()}
                        onHoverEnd={() => tweenRef.current?.play()}
                    />
                ))}
            </div>
        </div>
    )
}

export default InfiniteCarousel
