"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations('Footer');

  return (
    <footer className="w-full">
      <div className="max-w-[1260px] mx-auto px-4 xl:px-0 ">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 }
          }
        }}
      >
        {/* Left brand/intro */}
        <motion.div 
          className="col-span-1 sm:col-span-2 md:col-span-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-center sm:justify-start items-center gap-3">
            <Image src="/logo.png" alt="treplus" width={144} height={84} />
          </div>
          <p className="mt-8 text-[#474D57] text-[14px] sm:text-base text-center sm:text-left leading-relaxed max-w-[520px]">
            {t('tagline')}
          </p>
        </motion.div>

        {/* Explore */}
        <motion.div 
          className="col-span-1 sm:col-span-1 md:col-span-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start sm:block">
            <h3 className="text-[#474D57] font-bold text-lg">{t('explore')}</h3>
            <ul className="flex flex-col items-end sm:items-start sm:mt-3 sm:space-y-3 text-base text-[#474D57] font-medium space-y-3">
              <li><Link href="#">{t('nav.home')}</Link></li>
              <li><Link href="#services">{t('nav.services')}</Link></li>
              <li><Link href="#cases">{t('nav.cases')}</Link></li>
              <li><Link href="#insights">{t('nav.insights')}</Link></li>
              <li><Link href="#team">{t('nav.team')}</Link></li>
              <li><Link href="#contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div 
          className="col-span-1 sm:col-span-1 md:col-span-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start sm:block">
            <h3 className="text-[#474D57] font-bold text-lg">{t('services')}</h3>
            <ul className="flex flex-col items-end sm:items-start sm:mt-3 sm:space-y-3 text-base text-[#474D57] font-medium space-y-3">
              {t.raw('servicesList').map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Work */}
        <motion.div 
          className="col-span-1 sm:col-span-1 md:col-span-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start sm:block">
            <h3 className="text-[#474D57] font-bold text-lg">{t('work')}</h3>
            <ul className="flex flex-col items-end sm:items-start sm:mt-3 sm:space-y-3 text-base text-[#474D57] font-medium space-y-3">
              {t.raw('workList').map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div 
          className="col-span-1 sm:col-span-1 md:col-span-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start sm:block">
            <h3 className="text-[#474D57] font-bold text-lg">{t('contact')}</h3>
            <ul className="flex flex-col items-end sm:items-start sm:mt-3 sm:space-y-3 text-base text-[#474D57] font-medium space-y-3">
              {t.raw('contactList').map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="border-t py-7.5 mt-18 border-[#E4E7E9] flex flex-col md:flex-row items-center justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.p 
          className="text-[#474D57] text-base"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t('copyright')} {year}
        </motion.p>
        <motion.div 
          className="flex items-center gap-5 text-gray-400"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a aria-label="Facebook" href="#" rel="noopener noreferrer" className="hover:text-gray-600">
            <Image src="/facebookIcon.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a aria-label="Instagram" href="#" rel="noopener noreferrer" className="hover:text-gray-600">
            <Image src="/instagramIcon.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a aria-label="LinkedIn" href="#" rel="noopener noreferrer" className="hover:text-gray-600">
            <Image src="/linkedinIcon.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a aria-label="YouTube" href="#" rel="noopener noreferrer" className="hover:text-gray-600">
            <Image src="/youtubeIcon.svg" alt="YouTube" width={24} height={24} />
          </a>
        </motion.div>
      </motion.div>
      </div>
      </footer>

  );
};

export default Footer;


