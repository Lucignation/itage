import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const CookiePolicyPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Cookie Policy"
    description="Cookie Policy for Ìtàgé."
    sectionLabel="Legal"
    heading={<>COOKIE <span style={{ color: 'var(--red)' }}>POLICY</span></>}
    intro="Last Updated: March 6, 2026"
    backHref="/legal"
    backLabel="Back to legal"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        This Cookie Policy explains how we use cookies on our platform.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>WHAT ARE COOKIES?</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Cookies are small files stored on your device that help improve your experience.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>TYPES OF COOKIES WE USE</h2>
      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Essential Cookies</p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Required for login and platform functionality.
      </p>

      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Analytics Cookies</p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Used to analyze how users interact with the platform.
      </p>

      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Performance Cookies</p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Improve platform speed and performance.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>MANAGING COOKIES</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Users can control cookies through browser settings.
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Disabling cookies may affect platform functionality.
      </p>
    </section>
  </InfoPageLayout>
);

export default CookiePolicyPage;
