'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import BusinessFooter from './BusinessFooter';

export default function Footer() {
  const pathname = usePathname();
  
  // Always show BusinessFooter since we're focused on business acquisition
  return <BusinessFooter />;

  // Removed since we're using BusinessFooter
} 
