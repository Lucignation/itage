import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const DmcaPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé DMCA"
    description="DMCA policy for Ìtàgé."
    sectionLabel="Legal"
    heading={<>COPYRIGHT <span style={{ color: 'var(--red)' }}>POLICY</span></>}
    intro="Last Updated: March 6, 2026"
    backHref="/legal"
    backLabel="Back to legal"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        We respect intellectual property rights and comply with the Digital Millennium
        Copyright Act (DMCA).
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        REPORTING COPYRIGHT INFRINGEMENT
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        If you believe your copyrighted work has been uploaded without authorization,
        please send a notice including:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
        <li>Your contact information</li>
        <li>Description of the copyrighted work</li>
        <li>URL of the infringing content</li>
        <li>Statement of good faith belief</li>
        <li>Signature of the copyright owner</li>
      </ul>
      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Send reports to:</p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Email: [copyright email]
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        COUNTER NOTICE
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        If you believe your content was removed incorrectly, you may submit a counter-notification.
      </p>
    </section>
  </InfoPageLayout>
);

export default DmcaPage;
