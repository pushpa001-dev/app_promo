"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.problem-watermark', {
            scrollTrigger: {
                trigger: '.problem-watermark',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1
            },
            x: -200,
            opacity: 0,
            rotate: 0,
            ease: 'none'
        });

        gsap.from('.problem-image', {
            scrollTrigger: {
                trigger: '.problem-image',
                start: 'top 80%'
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        });

        gsap.from('.problem-content', {
            scrollTrigger: {
                trigger: '.problem-content',
                start: 'top 80%'
            },
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        });

        gsap.from('.problem-footer-text', {
            scrollTrigger: {
                trigger: '.problem-footer-text',
                start: 'top 90%'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        });
    }, { scope: container });

    return (
        <div ref={container} className='py-20 lg:py-32 bg-blue-100 relative overflow-hidden font-sans'>

            {/* Background Watermark */}
            <div className="problem-watermark absolute top-[20%] left-[-10%] text-[#c7deff] font-black text-[150px] lg:text-[250px] xl:text-[260px] leading-none select-none pointer-events-none z-0 rotate-[30deg] opacity-80">
                PROBLEM
            </div>

            <div className='container mx-auto px-4 lg:px-20 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    {/* Left side: Image */}
                    <div className='problem-image relative w-full h-[400px] lg:h-[600px]'>
                        <Image
                            src="/problem.png"
                            alt="Broken Folders"
                            fill
                            className='object-contain'
                        />
                    </div>

                    {/* Right side: Content */}
                    <div className='problem-content flex flex-col items-start lg:items-end text-left lg:text-right'>
                        <h2 className='text-[#0055D4] text-6xl lg:text-8xl font-black uppercase tracking-tight mb-8'>
                            PROBLEM
                        </h2>
                        <div className='max-w-md'>
                            <p className='text-[#003366] text-xl lg:text-2xl font-medium leading-tight mb-6'>
                                This is the place we store all the files that you use and leave. we provide 6GB of files to store in a free plan.
                            </p>
                            <p className='text-[#003366] text-xl lg:text-2xl font-medium leading-tight'>
                                This is the place we store all the files that you use and leave. we provide 6GB of files to store in a free plan.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Center Text */}
                <div className='problem-footer-text mt-20 text-center flex flex-col items-center'>
                    <p className='text-[#003366] text-2xl lg:text-3xl font-bold italic tracking-tight mb-8'>
                        " Here FILENEST comes to solve your problems. "
                    </p>
                    <div className="flex justify-center w-full lg:justify-end lg:pr-10">
                        <button className='bg-[#0055D4] text-white px-10 py-3 font-medium text-lg hover:bg-blue-700 transition-colors'>
                            Demo
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Problem;
