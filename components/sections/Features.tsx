// components/sections/Features.tsx
import React from 'react';

const FEATURES = [
  {
    icon: '💳',
    title: 'Fund & Rent Instantly',
    body:  'Top up your wallet in seconds and rent any movie with a single tap from the mobile app. No subscriptions, no commitments.',
    accent: true,
  },
  {
    icon: '🎬',
    title: 'Watch Trailers First',
    body:  'Preview every movie with a high-quality trailer before committing. Rent only what you actually want to watch.',
    accent: false,
  },
  {
    icon: '🔒',
    title: 'Secure Streaming',
    body:  'Advanced DRM protection keeps mobile viewing secure. Your content — and creators\' livelihoods — stay protected.',
    accent: false,
  },
  {
    icon: '📈',
    title: 'Real-Time Creator Revenue',
    body:  'Content owners track earnings the moment a rental happens across web and mobile dashboards, with instant withdrawals.',
    accent: false,
  },
];

export const Features: React.FC = () => (
  <section className="section" id="browse" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
    {/* background accent */}
    <div style={{
      position: 'absolute', bottom: -200, right: -200, width: 600, height: 600,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,0,0,0.06) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div className="container">
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Platform Benefits</div>
        <h2 className="display-md" style={{ marginBottom: 20 }}>
          EVERYTHING YOU NEED<br />
          <span style={{ color: 'var(--red)' }}>TO WATCH AND EARN</span>
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto' }}>
          Built for mobile viewers and content owners who need full control on web and mobile.
        </p>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 24,
      }}>
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`card reveal reveal-delay-${i + 1}`}
            style={{
              background: f.accent ? 'var(--red)' : 'var(--gray-900)',
              border:     f.accent ? 'none' : '1px solid rgba(255,255,255,0.07)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* card glow */}
            {!f.accent && (
              <div style={{
                position: 'absolute', top: -40, left: -40, width: 120, height: 120,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,0,0,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
            )}

            {/* icon */}
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: f.accent ? 'rgba(0,0,0,0.25)' : 'rgba(255,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, marginBottom: 24,
            }}>
              {f.icon}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 28, letterSpacing: '.03em',
              color: f.accent ? 'var(--white)' : 'var(--white)',
              marginBottom: 12,
            }}>
              {f.title.toUpperCase()}
            </h3>

            <p style={{
              fontSize: 15, lineHeight: 1.65,
              color: f.accent ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.5)',
            }}>
              {f.body}
            </p>

            {/* corner accent */}
            {!f.accent && (
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: 60, height: 60,
                borderTop: '1px solid rgba(255,0,0,0.2)',
                borderLeft: '1px solid rgba(255,0,0,0.2)',
                borderRadius: '60px 0 0 0',
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
