"use client"

import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"

interface ReadMoreButtonProps {
  onClick?: () => void
  className?: string
  color?: string
}

export function ReadMoreButton({ onClick, className = "", color = "#01AC53" }: ReadMoreButtonProps) {
  const t = useTranslations('Common')
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer group relative inline-flex items-center overflow-hidden rounded-full transition-all duration-300 hover:scale-105 bg-white/20 ${className}`}
    >
      {/* Left side - Glass morphism effect with set height */}
      <div className="flex items-center justify-center h-11 px-4 text-white font-medium text-lg ">
        {t('readMore')}
      </div>

      {/* Right side - White circle with colored arrow */}
      <div className="flex items-center justify-center w-11 h-11 bg-white rounded-full ">
        <ArrowUpRight className="w-[24px] h-[24px] stroke-1" style={{ color }} />
      </div>
    </button>
  )
}
