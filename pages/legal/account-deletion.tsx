import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const SUPPORT_EMAIL = 'support@itagetv.com';

const AccountDeletionPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Account Deletion Policy"
    description="Account deletion policy for Ìtàgé."
    sectionLabel="Legal"
    heading={<>ACCOUNT <span style={{ color: 'var(--red)' }}>DELETION</span></>}
    intro="Last Updated: May 24, 2026"
    backHref="/legal"
    backLabel="Back to legal"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        This Account Deletion Policy explains how viewers and content owners can request deletion
        of their Ìtàgé account, what happens after a valid request is submitted, and which records
        may still be retained for legal, security, tax, payment, and anti-fraud purposes.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        1. WHO CAN REQUEST DELETION
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Registered users may request deletion of their own account.
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Viewer accounts may be deleted after identity verification.</li>
        <li>Content owner accounts may be deleted after identity verification and account review.</li>
        <li>We may refuse requests submitted by anyone who is not the account holder or legally authorized representative.</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        2. HOW TO REQUEST ACCOUNT DELETION
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        To request deletion, email:
      </p>
      <p style={{ color: 'var(--white)', fontWeight: 700, fontSize: 16, marginBottom: 16 }}>
        {SUPPORT_EMAIL}
      </p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Include enough information for us to confirm ownership of the account:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Full name on the account</li>
        <li>Registered email address or phone number</li>
        <li>Whether the account is a viewer or content owner account</li>
        <li>Any additional information that helps us locate the account</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        3. REVIEW AND PROCESSING
      </h2>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
        <li>We review the request and may ask for additional verification.</li>
        <li>Access to the account may be disabled while the request is being processed.</li>
        <li>Deletion may be delayed if there is an unresolved payment issue, dispute, fraud review, or legal obligation.</li>
      </ul>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        We aim to process valid requests within 30 days, although some requests may take longer
        when further verification or compliance checks are required.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        4. WHAT WILL BE REMOVED
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        After approval, we may delete or permanently anonymize non-essential account data such as:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Profile information</li>
        <li>Login credentials and active sessions</li>
        <li>Saved preferences and non-essential account settings</li>
        <li>Support records that no longer need to be retained</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        5. WHAT WE MAY RETAIN
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        We may retain certain information where reasonably necessary or legally required, including:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Wallet, payment, rental, transaction, and payout records</li>
        <li>Tax, accounting, and financial reporting records</li>
        <li>Fraud-prevention, abuse-prevention, security, and audit logs</li>
        <li>Records needed to resolve disputes, chargebacks, or regulatory requests</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        6. EFFECT OF ACCOUNT DELETION
      </h2>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Deleted accounts may not be recoverable.</li>
        <li>Access to rentals, watch history, and saved account preferences may be lost.</li>
        <li>Content owners may lose access to uploaded content, earnings views, and analytics dashboards.</li>
        <li>Open obligations or unresolved compliance reviews may prevent immediate deletion.</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>
        7. CONTACT
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
        If you have questions about this policy or want to submit a deletion request, contact:
      </p>
      <p style={{ color: 'var(--white)', fontWeight: 700, fontSize: 16 }}>
        {SUPPORT_EMAIL}
      </p>
    </section>
  </InfoPageLayout>
);

export default AccountDeletionPage;
