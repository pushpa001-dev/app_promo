"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.features-heading', {
            scrollTrigger: {
                trigger: '.features-heading',
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 1
        });

        gsap.from('.feature-row', {
            scrollTrigger: {
                trigger: '.features-container',
                start: 'top 80%'
            },
            x: -50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power4.out'
        });

        gsap.from('.features-demo', {
            scrollTrigger: {
                trigger: '.features-demo',
                start: 'top 90%'
            },
            scale: 0,
            opacity: 0,
            duration: 1
        });
    }, { scope: container });

    return (
        <div ref={container} className='py-20 lg:py-32 bg-white font-sans relative overflow-hidden'>
            <div className='container mx-auto px-4 lg:px-20'>

                {/* Heading */}
                <h2 className="features-heading text-[#0055D4] text-6xl lg:text-8xl font-black uppercase tracking-tight mb-20">
                    FEATURES
                </h2>

                <div className="features-container flex flex-col space-y-4 lg:space-y-8 pl-4 lg:pl-10">

                    {/* Item 1: Free Access */}
                    <div className="feature-row flex items-center gap-6">
                        <span className="text-[#003366] text-5xl lg:text-7xl font-medium tracking-tight whitespace-nowrap">
                            Free
                        </span>
                        <div className="relative w-16 h-16 lg:w-24 lg:h-24 inline-block -mt-4">
                            <Image
                                src="/features.png"
                                alt="Folder Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[#003366] text-5xl lg:text-7xl font-medium tracking-tight whitespace-nowrap">
                            Access
                        </span>
                    </div>

                    {/* Item 2: Unlimited Downloads */}
                    <div className="feature-row flex items-center gap-6 lg:ml-20">
                        <span className="text-[#003366] text-5xl lg:text-7xl font-medium tracking-tight whitespace-nowrap">
                            Unlimited
                        </span>
                        <div className="relative w-16 h-16 lg:w-24 lg:h-24 inline-block -mt-4">
                            <Image
                                src="/features-2.png"
                                alt="Folder Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[#003366] text-5xl lg:text-7xl font-medium tracking-tight whitespace-nowrap">
                            Downloads
                        </span>
                    </div>

                    {/* Item 3: Correct Files */}
                    <div className="feature-row flex items-center gap-6 lg:ml-40">
                        <span className="text-[#003366] text-5xl lg:text-7xl font-medium tracking-tight whitespace-nowrap">
                            Correct
                        </span>
                        <div className="relative w-16 h-16 lg:w-24 lg:h-24 inline-block -mt-4">
                            <Image
                                src="/features-3.png"
                                alt="File Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[#003366] text-5xl lg:text-7xl font-medium tracking-tight whitespace-nowrap">
                            Files
                        </span>
                    </div>

                </div>

                {/* Demo Button */}
                <div className="features-demo flex justify-end mt-20 pr-10">
                    <button className="bg-[#0055D4] text-white px-10 py-3 font-medium text-lg hover:bg-blue-700 transition-colors">
                        Demo
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Features;
