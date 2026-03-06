import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const AccessibilityPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Accessibility"
    description="Accessibility support for Ìtàgé."
    sectionLabel="Support"
    heading={<>ACCESSIBILITY <span style={{ color: 'var(--red)' }}>SUPPORT</span></>}
    intro="We are committed to making our platform accessible to everyone."
    backHref="/support"
    backLabel="Back to support"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Our accessibility efforts include:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Screen reader compatibility</li>
        <li>Keyboard navigation</li>
        <li>High contrast UI options</li>
        <li>Caption support for videos where available</li>
      </ul>
    </section>

    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
        If you encounter accessibility barriers, please contact us at:
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        accessibility@[yourdomain].com
      </p>
    </section>
  </InfoPageLayout>
);

export default AccessibilityPage;
