import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const CONTACT_CHANNELS = [
  {
    label: 'Email Support',
    value: 'support@[yourdomain].com',
    detail: 'Best for account help, billing questions, and general assistance.',
  },
  {
    label: 'Phone Line',
    value: '[Insert phone number]',
    detail: 'Use for urgent escalations and time-sensitive support requests.',
  },
  {
    label: 'Office Address',
    value: '[Insert company address]',
    detail: 'For business correspondence and registered company inquiries.',
  },
];

const SUPPORT_AREAS = [
  'Account access and profile recovery',
  'Wallet funding and rental issues',
  'Playback troubleshooting on mobile',
  'Content owner onboarding and operations',
];

const RESPONSE_NOTES = [
  'Our support team will respond within 24-48 hours.',
  'Include your account email and a short summary for faster routing.',
  'Technical issues are easier to resolve with screenshots when possible.',
];

const RELATED_LINKS = [
  {
    title: 'Help Center',
    href: '/support/help-center',
    body: 'Browse common questions before opening a support request.',
  },
  {
    title: 'Report Issue',
    href: '/support/report-issue',
    body: 'Send technical details, device info, and screenshots to the team.',
  },
  {
    title: 'Accessibility',
    href: '/support/accessibility',
    body: 'Get help with accessibility barriers and inclusive product support.',
  },
];

const ContactUsPage: NextPage = () => (
  <>
    <Head>
      <title>Ìtàgé Contact Us</title>
      <meta name="description" content="Contact support for Ìtàgé." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Navbar />

    <main
      style={{
        background: 'var(--black)',
        minHeight: '100vh',
        paddingTop: 'calc(var(--nav-h) + 32px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(255,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 120,
          right: -180,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,0,0,0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: -120,
          width: 440,
          height: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,0,0,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <Link
            href="/support"
            style={{ display: 'inline-flex', marginBottom: 24, color: 'rgba(255,255,255,0.45)', fontSize: 14 }}
          >
            ← Back to support
          </Link>

          <div className="contact-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 28, marginBottom: 28 }}>
            <section
              className="card"
              style={{
                background: 'linear-gradient(135deg, rgba(255,0,0,0.14) 0%, rgba(13,13,13,0.98) 40%, rgba(13,13,13,0.98) 100%)',
                border: '1px solid rgba(255,0,0,0.22)',
                padding: 40,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -120,
                  right: -80,
                  width: 260,
                  height: 260,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              />

              <div className="section-label">Support</div>
              <h1 className="display-lg" style={{ maxWidth: 620, marginBottom: 18 }}>
                TALK TO THE <span style={{ color: 'var(--red)' }}>ÌTÀGÉ TEAM</span>
              </h1>
              <p style={{ maxWidth: 560, fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.62)', marginBottom: 28 }}>
                If you have questions or require assistance, this is the fastest route into the
                support queue. Reach out for billing, rentals, playback, or creator operations.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <a href="#contact-details" className="btn btn-primary" style={{ animation: 'none', padding: '15px 28px' }}>
                  View Contact Details
                </a>
                <Link href="/support/help-center" className="btn btn-outline" style={{ padding: '15px 28px' }}>
                  Open Help Center
                </Link>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {['24-48h response window', 'Viewer + creator support', 'Email, phone, and address'].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 999,
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: 'rgba(255,255,255,0.72)',
                      fontSize: 13,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section
              className="card"
              style={{
                background: 'rgba(13,13,13,0.94)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 0,
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: 'var(--red)', textTransform: 'uppercase', marginBottom: 10 }}>
                  Support Desk
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 0.95, letterSpacing: '.02em', marginBottom: 8 }}>
                  24-48H
                </div>
                <p style={{ color: 'rgba(255,255,255,0.56)', fontSize: 14, lineHeight: 1.7 }}>
                  Average response window for incoming support requests.
                </p>
              </div>

              <div style={{ padding: 24 }}>
                <div style={{ marginBottom: 18, fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: 'rgba(255,255,255,0.34)', textTransform: 'uppercase' }}>
                  We can help with
                </div>
                <div style={{ display: 'grid', gap: 12 }}>
                  {SUPPORT_AREAS.map((item, index) => (
                    <div
                      key={item}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '36px 1fr',
                        gap: 12,
                        alignItems: 'center',
                        padding: '12px 14px',
                        borderRadius: 14,
                        background: index === 0 ? 'rgba(255,0,0,0.14)' : 'rgba(255,255,255,0.03)',
                        border: index === 0 ? '1px solid rgba(255,0,0,0.2)' : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: 'rgba(255,255,255,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 13,
                          fontWeight: 700,
                          color: 'var(--white)',
                        }}
                      >
                        0{index + 1}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.55 }}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div id="contact-details" className="contact-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20, marginBottom: 24 }}>
            {CONTACT_CHANNELS.map((channel) => (
              <section
                key={channel.label}
                className="card"
                style={{
                  background: 'rgba(13,13,13,0.94)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: 28,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: 'var(--red)', textTransform: 'uppercase', marginBottom: 12 }}>
                  {channel.label}
                </div>
                <div
                  style={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace',
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: 'var(--white)',
                    marginBottom: 14,
                    wordBreak: 'break-word',
                  }}
                >
                  {channel.value}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 14, lineHeight: 1.7 }}>{channel.detail}</p>
              </section>
            ))}
          </div>

          <div className="contact-guidance-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            <section
              className="card"
              style={{
                background: 'rgba(13,13,13,0.94)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 32,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: 'var(--red)', textTransform: 'uppercase', marginBottom: 14 }}>
                Before You Send
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 34, letterSpacing: '.03em', marginBottom: 16 }}>
                HELP US ROUTE YOUR REQUEST FAST
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.56)', lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>
                A concise request usually gets resolved faster than a long one. Include the most
                useful details up front.
              </p>
              <div style={{ display: 'grid', gap: 14 }}>
                {[
                  'Use the email tied to your Ìtàgé account.',
                  'Mention whether the issue affects viewing or creator tools.',
                  'Add device details, app version, or browser details when relevant.',
                  'Attach a screenshot if the issue is visual or reproducible.',
                ].map((item) => (
                  <div key={item} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 12, alignItems: 'start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--red)', marginTop: 3 }} />
                    <div style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, fontSize: 14 }}>{item}</div>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="card"
              style={{
                background: 'linear-gradient(180deg, rgba(255,0,0,0.12) 0%, rgba(13,13,13,0.96) 100%)',
                border: '1px solid rgba(255,0,0,0.18)',
                padding: 32,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: 'rgba(255,255,255,0.72)', textTransform: 'uppercase', marginBottom: 14 }}>
                Response Notes
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 34, letterSpacing: '.03em', marginBottom: 16 }}>
                WHAT HAPPENS NEXT
              </h2>
              <div style={{ display: 'grid', gap: 14, marginBottom: 24 }}>
                {RESPONSE_NOTES.map((note, index) => (
                  <div
                    key={note}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 16,
                      background: 'rgba(0,0,0,0.28)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', color: 'var(--red)', textTransform: 'uppercase', marginBottom: 8 }}>
                      Step 0{index + 1}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontSize: 14 }}>{note}</div>
                  </div>
                ))}
              </div>

              <Link href="/support/report-issue" className="btn btn-outline" style={{ width: 'fit-content', padding: '14px 24px' }}>
                Need Technical Help?
              </Link>
            </section>
          </div>

          <div className="contact-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
            {RELATED_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card"
                style={{
                  display: 'block',
                  background: 'rgba(13,13,13,0.94)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: 28,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: 'var(--red)', textTransform: 'uppercase', marginBottom: 12 }}>
                  Related
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '.03em', marginBottom: 10 }}>
                  {item.title.toUpperCase()}
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.56)', lineHeight: 1.7, fontSize: 14 }}>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default ContactUsPage;
