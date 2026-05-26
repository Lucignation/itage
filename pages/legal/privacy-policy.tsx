import type { NextPage } from 'next';

import { InfoPageLayout } from '@/components/layout/InfoPageLayout';

const SUPPORT_EMAIL = 'support@itagetv.com';

const PrivacyPolicyPage: NextPage = () => (
  <InfoPageLayout
    title="Ìtàgé Privacy Policy"
    description="Privacy Policy for Ìtàgé."
    sectionLabel="Legal"
    heading={<>PRIVACY <span style={{ color: 'var(--red)' }}>POLICY</span></>}
    intro="Last Updated: May 24, 2026"
    backHref="/legal"
    backLabel="Back to legal"
  >
    <section className="card">
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you use our video streaming platform ("Platform", "Service",
        "we", "our", or "us").
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>1. INFORMATION WE COLLECT</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        We may collect the following information:
      </p>
      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Personal Information</p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Payment information</li>
        <li>Account credentials</li>
      </ul>
      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Usage Information</p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
        <li>Movies watched</li>
        <li>Rental history</li>
        <li>Device information</li>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Interaction with the platform</li>
      </ul>
      <p style={{ color: 'var(--white)', fontWeight: 700, marginBottom: 8 }}>Payment Information</p>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Payments are processed through third-party payment providers such as Flutterwave.
        We do not store your card details.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>2. HOW WE USE YOUR INFORMATION</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        We use your information to:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15 }}>
        <li>Provide and maintain the platform</li>
        <li>Process wallet funding and movie rentals</li>
        <li>Improve user experience</li>
        <li>Send important service notifications</li>
        <li>Prevent fraud and abuse</li>
        <li>Analyze platform usage</li>
      </ul>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>3. SHARING YOUR INFORMATION</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        We may share your information with:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
        <li>Payment processors</li>
        <li>Cloud service providers</li>
        <li>Legal authorities when required by law</li>
      </ul>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        We do not sell personal data to third parties.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>4. DATA SECURITY</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        We use industry-standard security practices to protect your information.
        However, no system is completely secure.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>5. YOUR RIGHTS</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>
        Users may:
      </p>
      <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
        <li>Access their account data</li>
        <li>Update their information</li>
        <li>Delete their account</li>
      </ul>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        Account deletion is available from the viewer mobile app profile screen and the owner app or
        owner web settings page. If you cannot access your account, contact {SUPPORT_EMAIL}. Please
        also review our Account Deletion Policy for more information about verification, processing
        timelines, and retained records.
      </p>
    </section>

    <section className="card">
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>6. CHANGES TO THIS POLICY</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 15 }}>
        We may update this Privacy Policy periodically. Updates will be posted on this page.
      </p>
    </section>
  </InfoPageLayout>
);

export default PrivacyPolicyPage;
