import React from 'react';
import { MessageSquare, Clock, HandshakeIcon, Banknote } from 'lucide-react';

export function BusinessHowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Share Your Business Details',
      description: "Quick 2-minute confidential form"
    },
    {
      icon: Clock,
      title: 'Free Business Valuation',
      description: 'Our M&A experts analyze your business within 24 hours'
    },
    {
      icon: HandshakeIcon,
      title: 'Receive Your Fair Offer',
      description: 'Fair offer based on revenue, assets, and potential'
    },
    {
      icon: Banknote,
      title: 'Close on Your Timeline',
      description: 'Complete the sale in 30 days or on your schedule'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Your Exit Strategy in 4 Simple Steps
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-7 sm:w-8 h-7 sm:h-8 text-secondary" />
                  </div>
                </div>
                <div className="absolute -top-3 -left-2 sm:-top-4 sm:left-0 w-7 sm:w-8 h-7 sm:h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <p className="text-center text-sm sm:text-base text-gray-700">
            <span className="font-semibold">Complete Confidentiality:</span> Your employees, customers, and competitors won&apos;t know until you&apos;re ready. We understand the sensitive nature of business sales.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 sm:p-6 rounded-lg border border-primary/20">
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 text-center">
            We help <span className="font-bold text-primary">business owners</span> transition successfully. Our team handles all legal, financial, and operational aspects, ensuring your legacy continues while you move on to your next chapter.
          </p>
        </div>
      </div>
    </section>
  );
}