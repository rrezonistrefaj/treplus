'use client'

import Image from 'next/image'
import Reveal from "@/components/ui/Reveal";
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const t = useTranslations('Nav')
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const navigationLinks = [
    { name: t('services'), href: '/services' },
    { name: t('team'), href: '/team' },
    { name: t('cases'), href: '/cases' },
    { name: t('insights'), href: '/insights' },
    { name: t('contact'), href: '/contact' },
  ]

  return (
    <Reveal as="div" className="w-full sticky top-0 bg-background border-b border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.1)] z-50 reveal-will-change" amount={0.1}>
      <nav className="w-full max-w-[1260px] mx-auto px-4 sm:px-0 py-[25px]">
        <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="treplus logo"
            width={80}
            height={30}
            className="h-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors duration-200"
          >
            <span className="font-medium">{locale.toUpperCase()}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${
                isLanguageOpen ? 'rotate-180' : ''
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Language Dropdown */}
          {isLanguageOpen && (
            <div className="absolute right-0 top-full mt-2 w-20 bg-background border border-border rounded-md shadow-2xl  z-50">
              <div className="py-1">
                <button onClick={() => { setIsLanguageOpen(false); router.replace(pathname, { locale: 'en' }); }} className={`w-full text-left px-3 py-2 text-sm ${locale==='en' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}>EN</button>
                <button onClick={() => { setIsLanguageOpen(false); router.replace(pathname, { locale: 'al' }); }} className={`w-full text-left px-3 py-2 text-sm ${locale==='al' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}>AL</button>
                <button onClick={() => { setIsLanguageOpen(false); router.replace(pathname, { locale: 'nl' }); }} className={`w-full text-left px-3 py-2 text-sm ${locale==='nl' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}>NL</button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center justify-center w-8 h-8">
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>
      </nav>
    </Reveal>
  )
}
