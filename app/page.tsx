import React from 'react';
import BusinessForm from '../components/BusinessForm';
// import BusinessTestimonials from '../components/BusinessTestimonials'; // Commented out for now
// import TrustBadges from '../components/TrustBadges';  // Kept for future use
// import { CheckCircle } from 'lucide-react';
import { BusinessBenefits } from '../components/BusinessBenefits';
import { BusinessHowItWorks } from '../components/BusinessHowItWorks';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section id="business-form" className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-primary to-secondary bg-opacity-90">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Sell Your Small Business Quickly & Confidentially
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 px-4 sm:px-0">
              Fair offers for business owners - Close in 30 days, no broker fees, complete discretion
            </p>
          </div>
          <div className="max-w-md mx-auto px-2 sm:px-0">
            <BusinessForm />
          </div>
          <BusinessBenefits className="mx-auto mt-8 sm:mt-12" />
        </div>
      </section>

      {/* TrustBadges component removed but kept for future use */}
      {/* <TrustBadges /> */}
      
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary">
            Why Sell Your Business To Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Quick & Confidential',
                description: 'Complete discretion throughout the process with closing in 30 days or less'
              },
              {
                title: 'Fair Market Value',
                description: 'Get a fair valuation based on revenue, assets, and growth potential'
              },
              {
                title: 'No Broker Fees',
                description: 'Direct buyer means more money in your pocket - save 5-10% in broker commissions'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg bg-white border-t-4 border-secondary hover:shadow-xl transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BusinessHowItWorks />
      
      {/* Testimonials Section - Commented out for now */}
      {/* <section id="testimonials" className="py-12 sm:py-16 px-4 bg-gray-100">
        <BusinessTestimonials />
      </section> */}
    </main>
  );
}