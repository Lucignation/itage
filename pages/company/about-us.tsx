import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const AboutPage: NextPage = () => (
  <InfoPageLayout
    title="About Ìtàgé"
    description="About Ìtàgé and A Vic Expose Limited."
    sectionLabel="Company"
    heading={<>ABOUT THE <span style={{ color: 'var(--red)' }}>COMPANY</span></>}
    intro="Who we are"
    backHref="/legal"
    backLabel="Back to legal"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Ìtàgé is a pay-per-rent movie streaming platform owned and operated by A Vic Expose Limited, a
        company incorporated in Nigeria. Ìtàgé gives viewers a simple way to fund a wallet and rent
        individual titles, while giving content owners a straightforward way to monetize their work.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>OUR MISSION</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        We built Ìtàgé to make movie rental fair and flexible: viewers only pay for what they watch,
        and content owners set their own prices and keep ownership of their work.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>WHAT WE OFFER</h2>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>A wallet-based, pay-per-rent model with no subscription required</li>
        <li>A catalogue of titles from independent and established content owners</li>
        <li>Trailers to preview content before renting</li>
        <li>A platform for content owners to upload and monetize their movies</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>THE COMPANY</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Ìtàgé is a product of A Vic Expose Limited, the legal entity responsible for the platform,
        its content licensing agreements, and its compliance with applicable Nigerian law.
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        References to &ldquo;Ìtàgé&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo; on this platform refer to A
        Vic Expose Limited.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>CONTACT</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        For company or partnership inquiries, reach out through the support channels listed on the
        platform.
      </p>
    </section>
  </InfoPageLayout>
);

export default AboutPage;