"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { useTranslations } from "next-intl";

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations('Footer');

  return (
    
      <Reveal as="footer" className="max-w-[1260px] mx-auto px-4 md:px-0 reveal-will-change" amount={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Left brand/intro */}
          <div className="col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="treplus" width={144} height={84} />
            </div>
            <p className="mt-8 text-[#474D57] text-base leading-relaxed max-w-[520px]">
              {t('tagline')}
            </p>
          </div>

          {/* Explore */}
          <div className="col-span-2 ">
            <h3 className="text-[#474D57] font-bold text-lg">{t('explore')}</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              <li><Link href="#">{t('nav.home')}</Link></li>
              <li><Link href="#services">{t('nav.services')}</Link></li>
              <li><Link href="#cases">{t('nav.cases')}</Link></li>
              <li><Link href="#insights">{t('nav.insights')}</Link></li>
              <li><Link href="#team">{t('nav.team')}</Link></li>
              <li><Link href="#contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2">
            <h3 className="text-[#474D57] font-bold text-lg">{t('services')}</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              {t.raw('servicesList').map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div className="col-span-2">
            <h3 className="text-[#474D57] font-bold text-lg">{t('work')}</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              {t.raw('workList').map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2">
            <h3 className="text-[#474D57] font-bold text-lg">{t('contact')}</h3>
            <ul className="mt-3 space-y-3 text-base text-[#474D57] font-medium">
              {t.raw('contactList').map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t py-7.5 mt-18 border-[#E4E7E9] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#474D57] text-base">{t('copyright')} {year}</p>
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


