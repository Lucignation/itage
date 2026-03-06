// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { Navbar }       from '@/components/layout/Navbar';
import { Footer }       from '@/components/layout/Footer';
import { Hero }         from '@/components/sections/Hero';
import { TrustBar }     from '@/components/ui/TrustBar';
import { Features }     from '@/components/sections/Features';
import { HowItWorks }   from '@/components/sections/HowItWorks';
import { ContentOwner } from '@/components/sections/ContentOwner';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTABanner }    from '@/components/sections/CTABanner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const LandingPage: NextPage = () => {
  useScrollReveal();

  return (
    <>
      <Head>
        <title>Ìtàgé — Stream &amp; Rent Movies Anytime, Anywhere</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <TrustBar />
        <ContentOwner />
        <Testimonials />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
