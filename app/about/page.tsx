import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          About Easy Close Acquisitions
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div className="flex justify-center mb-8">
            <Image
              src="/easy-close-acquisitions-logo.png"
              alt="Easy Close Acquisitions"
              width={150}
              height={40}
              className="mb-6"
            />
          </div>
          
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Easy Close Acquisitions, we&apos;re more than just business investors – our team has a genuine passion for helping business owners transition successfully to their next chapter. We understand that selling a business you&apos;ve built is one of life&apos;s most important decisions.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Each member of our team brings not only professional expertise in mergers & acquisitions but also personal understanding of the entrepreneurial journey. We&apos;ve dedicated ourselves to creating a confidential, transparent, and efficient process that protects your legacy while putting your needs first.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We specialize in acquiring small to medium-sized businesses across all industries. Our team takes pride in maintaining the culture and values you&apos;ve built, ensuring that each business we acquire continues to thrive under new ownership while protecting employees and customers.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond the financial transaction, we find fulfillment in helping business owners achieve their personal goals. Whether you&apos;re retiring, facing health challenges, experiencing burnout, or pursuing new opportunities, we offer a smooth transition with complete discretion and a fair valuation.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
            <li><span className="font-medium">Integrity:</span> We believe in honest, transparent dealings in every transaction.</li>
            <li><span className="font-medium">Compassion:</span> We approach each situation with empathy and understanding.</li>
            <li><span className="font-medium">Excellence:</span> We strive for the highest quality in both customer service and property renovation.</li>
            <li><span className="font-medium">Legacy:</span> We&apos;re committed to preserving the businesses you&apos;ve built and protecting your employees.</li>
          </ul>
          
          <div className="text-center mt-8 space-y-4">
            <Link
              href="/#how-it-works"
              className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium mr-4"
            >
              How It Works
            </Link>
            <Link 
              href="/#business-form"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
            >
              Get Your Business Valuation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 