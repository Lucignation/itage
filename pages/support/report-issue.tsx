import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const ReportIssuePage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Report Issue"
    description="Issue reporting for Ìtàgé."
    sectionLabel="Support"
    heading={<>REPORT AN <span style={{ color: 'var(--red)' }}>ISSUE</span></>}
    intro="If you experience technical problems on the platform, please report them."
    backHref="/support"
    backLabel="Back to support"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Include the following details:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Description of the issue</li>
        <li>Device type</li>
        <li>Browser or app version</li>
        <li>Screenshot if possible</li>
      </ul>
    </section>

    <section className="card">
      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Submit reports to:</p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Email: support@[yourdomain].com
      </p>
    </section>
  </InfoPageLayout>
);

export default ReportIssuePage;
