"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Next = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.next-left-panel', {
            scrollTrigger: {
                trigger: '.next-left-panel',
                start: 'top 80%'
            },
            xPercent: -100,
            duration: 1.5,
            ease: 'power4.out'
        });

        gsap.from('.next-right-panel', {
            scrollTrigger: {
                trigger: '.next-right-panel',
                start: 'top 80%'
            },
            xPercent: 100,
            duration: 1.5,
            ease: 'power4.out'
        });

        gsap.from('.next-center-item', {
            scrollTrigger: {
                trigger: '.next-center-container',
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: 'power4.out'
        });
    }, { scope: container });

    return (
        <div ref={container} className='py-20 lg:py-0 h-screen bg-white relative overflow-hidden flex items-center justify-center font-sans'>

            {/* Left Blue Curve Panel */}
            <div className="next-left-panel absolute top-0 left-0 w-[30%] h-full bg-[#0055D4] rounded-r-[100%] z-10 flex items-center justify-end pr-10 lg:pr-20">
                <h2 className="text-white text-[100px] lg:text-[180px] font-black uppercase tracking-widest writing-vertical-rl -rotate-90 select-none">
                    FILE
                </h2>
            </div>

            {/* Right Blue Curve Panel */}
            <div className="next-right-panel absolute top-0 right-0 w-[30%] h-full bg-[#0055D4] rounded-l-[100%] z-10 flex items-center justify-start pl-10 lg:pl-20">
                <h2 className="text-white text-[100px] lg:text-[180px] font-black uppercase tracking-widest writing-vertical-rl -rotate-90 select-none">
                    NEXT
                </h2>
            </div>

            {/* Center Content */}
            <div className="next-center-container relative z-0 w-[40%] h-full flex flex-col justify-between py-20 lg:py-40 items-center">

                {/* Top Text Block */}
                <div className="next-center-item flex flex-col items-center text-center gap-4">
                    <p className="text-[#003366] text-xl 2xl:text-3xl font-medium leading-tight ">
                        We us simple ui spa <span className="inline-block relative w-6 h-6 align-middle mx-1"><Image
                            src="/problem.png"
                            alt="Icon"
                            fill
                            className="object-contain"
                        /></span> <br />
                        and make your life <br />
                        easier
                    </p>
                </div>

                {/* Bottom Text Block */}
                <div className="next-center-item flex flex-col items-center text-center gap-4">
                    <p className="text-[#003366] text-xl 2xl:text-3xl font-medium leading-tight  text-left">
                        Just search the file <br />
                        in your community <br />
                        and <span className="inline-block relative w-6 h-6 align-middle mx-1"><Image src="/next.png" alt="Search" fill className="object-contain" /></span> easily get <br />
                        access to it.
                    </p>
                    {/* Small square dot */}
                    <div className="w-2 h-2 bg-[#0055D4] ml-auto mr-10"></div>
                </div>

            </div>

        </div>
    )
}

export default Next;
