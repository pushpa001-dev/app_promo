"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.footer-col', {
            scrollTrigger: {
                trigger: '.footer-col',
                start: 'top 90%'
            },
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power4.out'
        });
    }, { scope: container });

    return (
        <footer ref={container} className='py-20 lg:py-32 bg-blue-100 font-sans border-t border-gray-100'>
            <div className='container mx-auto px-4 lg:px-20'>
                <div className="flex flex-col lg:flex-row justify-between items-start">

                    {/* Left Column: Logo & Tagline */}
                    <div className="footer-col flex flex-col gap-4 mb-10 lg:mb-0">
                        <h2 className="text-[#0055D4] text-5xl lg:text-7xl font-black uppercase tracking-tight">
                            FILENEST
                        </h2>
                        <p className="text-[#003366] text-xl font-medium">
                            Get your <br />
                            first demo.
                        </p>
                    </div>

                    {/* Middle Column: Navigation */}
                    <div className="footer-col flex flex-col gap-2 mb-10 lg:mb-0 lg:mt-4">
                        <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">Home</a>
                        <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">Features</a>
                        <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">Includes</a>
                        <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">Demo</a>
                    </div>

                    {/* Right Column: Contact & Social */}
                    <div className="footer-col flex flex-col gap-4 lg:mt-4 text-right lg:text-right w-full lg:w-auto items-start lg:items-end">
                        <h3 className="text-[#003366] text-xl font-medium uppercase tracking-wide mb-2">CONTACT</h3>
                        <div className="flex flex-col gap-2 items-start lg:items-end">
                            <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">Instagram</a>
                            <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">Facebook</a>
                            <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">X</a>
                            <a href="#" className="text-[#003366] text-xl font-medium hover:text-[#0055D4] transition-colors">Youtube</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;
