import type { NextPage } from 'next';
import Link from 'next/link';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const LEGAL_LINKS = [
  {
    title: 'Privacy Policy',
    href: '/legal/privacy-policy',
    body: 'How Ìtàgé collects, uses, shares, and protects user information.',
  },
  {
    title: 'Terms of Service',
    href: '/legal/terms-of-service',
    body: 'Rules governing viewer rentals, creator uploads, and platform usage.',
  },
  {
    title: 'Cookie Policy',
    href: '/legal/cookie-policy',
    body: 'How cookies and similar technologies are used on Ìtàgé web surfaces.',
  },
  {
    title: 'DMCA',
    href: '/legal/dmca',
    body: 'Copyright notice and counter-notice procedures for rights holders.',
  },
];

const LegalIndexPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Legal"
    description="Legal pages for Ìtàgé."
    sectionLabel="Legal"
    heading={<>PLATFORM <span style={{ color: 'var(--red)' }}>POLICIES</span></>}
    intro="Browse privacy, terms, cookie, and copyright information for Ìtàgé."
    backHref="/"
    backLabel="Back to home"
  >
    {LEGAL_LINKS.map((item) => (
      <Link key={item.href} href={item.href} className="card" style={{ display: 'block' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '.03em', marginBottom: 12 }}>
          {item.title.toUpperCase()}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>{item.body}</p>
      </Link>
    ))}
  </InfoPageLayout>
);

export default LegalIndexPage;
