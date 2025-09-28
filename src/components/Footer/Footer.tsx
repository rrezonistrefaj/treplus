"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    
      <Reveal as="footer" className="max-w-[1260px] mx-auto px-4 md:px-0 reveal-will-change" amount={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Left brand/intro */}
          <div className="col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="treplus" width={144} height={84} />
            </div>
            <p className="mt-8 text-[#474D57] text-base leading-relaxed max-w-[520px]">
              Design amazing digital experiences that create <br /> more happy in the world.
            </p>
          </div>

          {/* Explore */}
          <div className="col-span-2 ">
            <h3 className="text-[#474D57] font-bold text-lg">Explore</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#cases">Cases</Link></li>
              <li><Link href="#insights">Insights</Link></li>
              <li><Link href="#team">Team</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2">
            <h3 className="text-[#474D57] font-bold text-lg">Services</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              <li>Development</li>
              <li>Design</li>
              <li>Marketing</li>
              <li>Process</li>
            </ul>
          </div>

          {/* Work */}
          <div className="col-span-2">
            <h3 className="text-[#474D57] font-bold text-lg">Work</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              <li>Case Studies (All)</li>
              <li>Marketing cases</li>
              <li>Software cases</li>
              <li>Creative cases</li>
              <li>Insights &amp; News</li>
              <li>Industry News</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2">
            <h3 className="text-[#474D57] font-bold text-lg">Contact</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              <li>Contact form</li>
              <li>Schedule a meeting</li>
              <li>Press inquiry</li>
              <li>(info@treplus.com)</li>
            </ul>
          </div>
        </div>

        <div className="border-t py-7.5 mt-18 border-[#E4E7E9] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#474D57] text-base">Copyright © {year}</p>
          <div className="flex items-center gap-5 text-gray-400">
            <Link aria-label="Facebook" href="#" className="hover:text-gray-600">
              <Image src="/facebookIcon.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link aria-label="Instagram" href="#" className="hover:text-gray-600">
              <Image src="/instagramIcon.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link aria-label="LinkedIn" href="#" className="hover:text-gray-600">
              <Image src="/linkedinIcon.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link aria-label="YouTube" href="#" className="hover:text-gray-600">
              <Image src="/youtubeIcon.svg" alt="YouTube" width={24} height={24} />
            </Link>
          </div>
        </div>
      </Reveal>

  );
};

export default Footer;


