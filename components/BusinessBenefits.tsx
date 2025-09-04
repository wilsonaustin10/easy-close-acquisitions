import React from 'react'
import { CheckCircle } from 'lucide-react'

interface BenefitsProps {
  className?: string;
}

export function BusinessBenefits({ className }: BenefitsProps) {
  const benefits = [
    "100% Confidential Process",
    "Free Business Valuation",
    "No Broker Fees",
    "Employee Protection",
    "Flexible Exit Terms",
    "Expert M&A Support"
  ]

  return (
    <div className={`max-w-3xl mx-auto my-8 sm:my-12 md:my-16 px-4 text-center ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-2 p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
            <div className="relative">
              <CheckCircle className="h-6 sm:h-8 w-6 sm:w-8 text-white stroke-[2.5] drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]" />
            </div>
            <span className="text-white text-base sm:text-lg md:text-xl font-semibold sm:font-bold">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}