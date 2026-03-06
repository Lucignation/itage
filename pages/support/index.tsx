import type { NextPage } from 'next';
import Link from 'next/link';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const SUPPORT_LINKS = [
  {
    title: 'Help Center',
    href: '/support/help-center',
    body: 'Common guidance for rentals, wallets, playback, and creator onboarding.',
  },
  {
    title: 'Contact Us',
    href: '/support/contact-us',
    body: 'Primary contact path for support, billing, partnerships, and account issues.',
  },
  {
    title: 'Report Issue',
    href: '/support/report-issue',
    body: 'How to send bug reports and reproduction details to the team.',
  },
  {
    title: 'Accessibility',
    href: '/support/accessibility',
    body: 'Accessibility support and feedback information for Ìtàgé.',
  },
];

const SupportIndexPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Support"
    description="Support pages for Ìtàgé."
    sectionLabel="Support"
    heading={<>GET <span style={{ color: 'var(--red)' }}>HELP</span></>}
    intro="Support resources for viewers and content owners using Ìtàgé."
    backHref="/"
    backLabel="Back to home"
  >
    {SUPPORT_LINKS.map((item) => (
      <Link key={item.href} href={item.href} className="card" style={{ display: 'block' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '.03em', marginBottom: 12 }}>
          {item.title.toUpperCase()}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>{item.body}</p>
      </Link>
    ))}
  </InfoPageLayout>
);

export default SupportIndexPage;
