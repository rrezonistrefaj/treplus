'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
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

  const handleLanguageChange = (newLocale: string) => {
    setIsLanguageOpen(false)
    setIsMobileMenuOpen(false)
    router.replace(pathname, { locale: newLocale })
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="w-full sticky top-0 bg-background border-b border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.1)] z-50">
      <nav className="w-full max-w-[1260px] mx-auto px-4 sm:px-0 md:py-[25px] h-[46px] md:h-auto flex items-center">
        <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-[41px] h-6 md:w-20 md:h-[30px]">
            {!logoLoaded && <div className="absolute inset-0 rounded skeleton" />}
            <Image
              src="/logo.png"
              alt="treplus logo"
              width={80}
              height={30}
              className="h-full w-auto relative object-contain"
              priority
              onLoadingComplete={() => setLogoLoaded(true)}
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-foreground hover:text-primary transition-all duration-200 ${
                  isActive ? 'font-bold' : 'font-medium hover:font-bold'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Right side: Language Selector and Mobile Menu Button */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Selector - visible on mobile and desktop */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              <span className="font-medium text-sm md:text-base">{locale.toUpperCase()}</span>
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
            <AnimatePresence>
              {isLanguageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-2 w-20 bg-background border border-border rounded-md shadow-2xl z-50"
                >
                  <div className="py-1">
                    <button onClick={() => handleLanguageChange('en')} className={`w-full text-left px-3 py-2 text-sm ${locale==='en' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}>EN</button>
                    <button onClick={() => handleLanguageChange('al')} className={`w-full text-left px-3 py-2 text-sm ${locale==='al' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}>AL</button>
                    <button onClick={() => handleLanguageChange('nl')} className={`w-full text-left px-3 py-2 text-sm ${locale==='nl' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}>NL</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-5 h-5 z-50 relative"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-4 h-4 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16" />
            </svg>
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-6">
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-6 mb-8">
                  {navigationLinks.map((link, index) => {
                    const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className={`text-foreground hover:text-primary transition-all duration-200 text-lg block py-2 ${
                            isActive ? 'font-bold' : 'font-medium hover:font-bold'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Language Selector */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="relative">
                    <button
                      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                      className="flex items-center justify-between w-full text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium text-lg py-2"
                    >
                      <span>{locale.toUpperCase()}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
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
                    <AnimatePresence>
                      {isLanguageOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                          className="mt-2 bg-background border border-border rounded-md shadow-lg"
                        >
                          <div className="py-1">
                            <button 
                              onClick={() => handleLanguageChange('en')} 
                              className={`w-full text-left px-4 py-2 text-base ${locale==='en' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}
                            >
                              EN
                            </button>
                            <button 
                              onClick={() => handleLanguageChange('al')} 
                              className={`w-full text-left px-4 py-2 text-base ${locale==='al' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}
                            >
                              AL
                            </button>
                            <button 
                              onClick={() => handleLanguageChange('nl')} 
                              className={`w-full text-left px-4 py-2 text-base ${locale==='nl' ? 'text-orange-500' : 'text-foreground'} hover:bg-orange-50 transition-colors duration-200`}
                            >
                              NL
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
