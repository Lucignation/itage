import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

interface InfoPageLayoutProps {
  title: string;
  description: string;
  sectionLabel: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}

export const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({
  title,
  description,
  sectionLabel,
  heading,
  intro,
  backHref,
  backLabel,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Navbar />

    <main style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: 'calc(var(--nav-h) + 48px)' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <Link
            href={backHref}
            style={{ display: 'inline-flex', marginBottom: 24, color: 'rgba(255,255,255,0.45)', fontSize: 14 }}
          >
            ← {backLabel}
          </Link>

          <div className="section-label">{sectionLabel}</div>
          <h1 className="display-md" style={{ marginBottom: 20 }}>
            {heading}
          </h1>

          {intro ? (
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
              {intro}
            </p>
          ) : null}

          <div style={{ display: 'grid', gap: 24 }}>
            {children}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);
