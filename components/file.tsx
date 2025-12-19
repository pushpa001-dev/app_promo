"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FileSection = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.file-top-text', {
      scrollTrigger: {
        trigger: '.file-top-text',
        start: 'top 80%'
      },
      y: -100,
      opacity: 0,
      duration: 1
    });

    gsap.from('.file-bottom-text', {
      scrollTrigger: {
        trigger: '.file-bottom-text',
        start: 'top 80%'
      },
      y: 100,
      opacity: 0,
      duration: 1
    });

    gsap.from('.file-left-info', {
      scrollTrigger: {
        trigger: '.file-cabinet-img',
        start: 'top 80%'
      },
      x: -50,
      opacity: 0,
      duration: 1
    });

    gsap.from('.file-right-info', {
      scrollTrigger: {
        trigger: '.file-cabinet-img',
        start: 'top 80%'
      },
      x: 50,
      opacity: 0,
      duration: 1
    });

    gsap.from('.file-cabinet-img', {
      scrollTrigger: {
        trigger: '.file-cabinet-img',
        start: 'top 80%'
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'back.out(1.7)'
    });
  }, { scope: container });

  return (
    <div ref={container} className='py-20 lg:py-32 bg-blue-100 relative font-sans overflow-hidden'>
      <div className='container mx-auto px-4 lg:px-20'>
        <div className="flex flex-col items-center justify-center relative">

          {/* Top Text: FILE */}
          <h2 className="file-top-text text-[#0055D4] text-[100px] lg:text-[200px] font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
            FILE
          </h2>

          {/* Middle Section: Text - Image - Text */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-20 relative z-20 -mt-10 lg:-mt-20 mb-10 lg:mb-20">

            {/* Left Text */}
            <div className="file-left-info max-w-[250px] text-center lg:text-right">
              <p className="text-[#003366] text-xl font-medium leading-tight">
                We provide <span className="font-bold text-[#0055D4]">6GB</span> of <br />
                files to store in a <br />
                free plan.
              </p>
            </div>

            {/* Center Image */}
            <div className='file-cabinet-img 2xl:w-[400px] 2xl:h-[400px] flex items-center justify-center'>
              <div className="absolute w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
                <Image
                  src="/file.png"
                  alt="File Storage Cabinet"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="file-right-info max-w-[250px] text-center lg:text-left">
              <p className="text-[#003366] text-xl font-medium leading-tight">
                We provide <span className="font-bold text-[#0055D4]">16GB</span> of <br />
                files to store in a <br />
                premium plan plan.
              </p>
            </div>

          </div>

          {/* Bottom Text: STORAGE */}
          <h2 className="file-bottom-text text-[#0055D4] text-[80px] lg:text-[180px] font-black uppercase tracking-tighter leading-none relative z-10 -mt-20">
            STORAGE
          </h2>

        </div>
      </div>
    </div>
  )
}

export default FileSection;
