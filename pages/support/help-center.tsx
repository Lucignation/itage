import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const HelpCenterPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Help Center"
    description="Help Center for Ìtàgé."
    sectionLabel="Support"
    heading={<>HELP <span style={{ color: 'var(--red)' }}>CENTER</span></>}
    intro="Welcome to our Help Center."
    backHref="/support"
    backLabel="Back to support"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Common topics include:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Creating an account</li>
        <li>Funding your wallet</li>
        <li>Renting movies</li>
        <li>Troubleshooting streaming issues</li>
        <li>Managing content as a creator</li>
      </ul>
    </section>

    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        If you cannot find an answer, contact support.
      </p>
    </section>
  </InfoPageLayout>
);

export default HelpCenterPage;
