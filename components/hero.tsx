"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

        tl.from('.nav-item', {
            y: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            delay: 1.5,
        })
            .from('.hero-text-left', {
                x: -100,
                opacity: 0
            }, "-=0.5")
            .from('.hero-text-right', {
                x: 100,
                opacity: 0
            }, "-=1")
            .from('.hero-image', {
                scale: 0.5,
                opacity: 0,
                duration: 1.5,
                ease: 'elastic.out(1, 0.75)'
            }, "-=1")
            .from('.demo-btn', {
                scale: 0,
                opacity: 0
            }, "-=1")
            .from('.hero-decoration', {
                x: 50,
                opacity: 0
            }, "-=0.8");
    }, { scope: container });

    return (
        <div ref={container} className="flex flex-col min-h-screen bg-white font-sans">
            {/* Navbar */}
            <nav className="w-full bg-[#0055D4] py-4">
                <div className="container mx-auto flex justify-center gap-12 text-white text-lg font-medium">
                    <a href="#" className="nav-item hover:opacity-80">Home</a>
                    <a href="#" className="nav-item hover:opacity-80">About</a>
                    <a href="#" className="nav-item hover:opacity-80">More</a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-grow container mx-auto px-4 lg:px-10 py-20 relative flex items-center justify-center overflow-hidden">

                {/* Background Text and Layout */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-0">

                    {/* Left Side */}
                    <div className="hero-text-left flex flex-col items-start justify-start lg:items-end lg:pr-32 lg:-mr-20 z-0">
                        <div className="flex flex-col">
                            <span className="text-[#003366] text-lg font-medium mb-0 ml-1">Every File you use.</span>
                            <h1 className="text-[#0055D4] text-[150px] 2xl:text-[280px] leading-[0.8] font-black tracking-tighter">
                                FILE
                            </h1>
                            <p className="text-[#003366] mt-6 max-w-[250px] text-lg leading-tight lg:self-start">
                                This is the place we store all the files that you use and leave.
                            </p>
                        </div>
                    </div>

                    <div className="hero-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] 2xl:w-[700px] 2xl:h-[700px]">
                        <Image
                            src="/hero.png"
                            alt="Yellow Folder"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="hero-text-right absolute top-1/2 left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-start lg:pl-32 lg:-ml-20 z-20">
                        <div className="flex flex-col">
                            <h1 className="text-[#0055D4] text-[150px] 2xl:text-[280px] leading-[0.8] font-black tracking-tighter">
                                NEXT
                            </h1>
                            <p className="text-[#003366] mt-6 max-w-[250px] text-lg leading-tight lg:self-end text-right">
                                This is the place we store all the files that you use and leave.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Demo Button */}
                <div className="demo-btn absolute bottom-10 left-10 lg:left-20">
                    <button className="bg-[#0055D4] text-white px-8 py-3 font-semibold text-lg hover:bg-blue-700 transition-colors">
                        Demo
                    </button>
                </div>

                {/* Bottom Right Decoration */}
                <div className="hero-decoration absolute bottom-10 right-10 lg:right-20 flex items-center gap-2">
                    <div className="w-24 border-t-2 border-dashed border-[#003366]"></div>
                    <div className="relative w-12 h-12">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L12 22" stroke="#0055D4" strokeWidth="4" strokeLinecap="round" />
                            <path d="M2.5 7.5L21.5 16.5" stroke="#0055D4" strokeWidth="4" strokeLinecap="round" />
                            <path d="M2.5 16.5L21.5 7.5" stroke="#0055D4" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
