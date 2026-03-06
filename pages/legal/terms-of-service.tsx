import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const TermsOfServicePage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Terms of Service"
    description="Terms of Service for Ìtàgé."
    sectionLabel="Legal"
    heading={<>TERMS OF <span style={{ color: 'var(--red)' }}>SERVICE</span></>}
    intro="Last Updated: March 6, 2026"
    backHref="/legal"
    backLabel="Back to legal"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        By using this platform, you agree to these Terms of Service.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>1. PLATFORM DESCRIPTION</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        The platform allows users to:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
        <li>Fund a wallet</li>
        <li>Rent and stream movies</li>
        <li>Watch trailers</li>
        <li>Access content uploaded by content owners</li>
      </ul>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Content owners may upload and monetize their movies.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>2. ACCOUNT RESPONSIBILITY</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Users are responsible for maintaining the confidentiality of their account credentials.
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        You agree not to:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Share accounts</li>
        <li>Circumvent payment systems</li>
        <li>Attempt to copy or distribute protected content</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>3. PAYMENTS &amp; RENTALS</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Users must fund their wallet before renting content.
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Rental prices are determined by content owners.
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Payments are processed through third-party payment providers.
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        All transactions are final unless otherwise required by law.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>4. CONTENT OWNERSHIP</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Content owners retain ownership of their uploaded content but grant the platform a
        license to distribute it to users.
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Users are not permitted to:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Record</li>
        <li>Re-distribute</li>
        <li>Download</li>
        <li>Publicly share rented content</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>5. PLATFORM RIGHTS</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        We reserve the right to:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Remove content</li>
        <li>Suspend accounts</li>
        <li>Modify platform features</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>6. LIMITATION OF LIABILITY</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        The platform is provided &ldquo;as is&rdquo; without warranties of any kind.
      </p>
    </section>
  </InfoPageLayout>
);

export default TermsOfServicePage;
