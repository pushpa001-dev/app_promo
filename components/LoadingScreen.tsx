"use client";

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LoadingScreen = () => {
    const container = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsVisible(false);
            }
        });

        tl.from(".loader-text span", {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power4.out"
        })
            .to(".loader-progress", {
                width: "100%",
                duration: 0.4,
                ease: "power2.inOut"
            })
            .to(".loader-text", {
                y: -50,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            })
            .to(container.current, {
                yPercent: -100,
                duration: 0.4,
                ease: "power4.inOut"
            });
    }, { scope: container });

    if (!isVisible) return null;

    return (
        <div
            ref={container}
            className="fixed inset-0 z-[9999] bg-[#0055D4] flex flex-col items-center justify-center font-sans overflow-hidden"
        >
            <div className="loader-text flex overflow-hidden mb-8">
                {"FILENEST".split("").map((char, i) => (
                    <span key={i} className="text-white text-6xl lg:text-9xl font-black tracking-tighter inline-block">
                        {char}
                    </span>
                ))}
            </div>

            <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden">
                <div className="loader-progress absolute top-0 left-0 h-full w-0 bg-white"></div>
            </div>

            <div className="absolute bottom-10 text-white/50 text-sm font-medium tracking-widest uppercase">
                Preparing your experience
            </div>
        </div>
    );
};

export default LoadingScreen;
