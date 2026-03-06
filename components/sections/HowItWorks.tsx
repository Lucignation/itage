// components/sections/HowItWorks.tsx
import React from 'react';

const STEPS = [
  { num: '01', icon: '🔍', title: 'Browse Movies',   body: 'Explore thousands of titles across every genre. Filter by mood, rating, year, or language.' },
  { num: '02', icon: '🎞',  title: 'Watch Trailers',  body: 'Stream high-quality trailers for free — no account needed. Know exactly what you\'re renting.' },
  { num: '03', icon: '💳', title: 'Rent & Stream',   body: 'Fund your wallet, pick your movie, and hit play. Instant access, no waiting.' },
  { num: '04', icon: '📱', title: 'Watch on Mobile',  body: 'Enjoy your rental in the mobile app for 48 hours, wherever you are.' },
];

export const HowItWorks: React.FC = () => (
  <section className="section" style={{
    background: 'linear-gradient(180deg, var(--black) 0%, var(--gray-900) 50%, var(--black) 100%)',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Large ghost number background */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(200px, 30vw, 400px)',
      color: 'rgba(255,0,0,0.03)',
      pointerEvents: 'none', userSelect: 'none',
      letterSpacing: '-.05em', whiteSpace: 'nowrap',
    }}>STREAM</div>

    <div className="container">
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
        <h2 className="display-md">
          START WATCHING IN<br />
          <span style={{ color: 'var(--red)' }}>FOUR STEPS</span>
        </h2>
      </div>

      {/* Steps */}
      <div style={{ position: 'relative' }}>
        {/* connecting line (desktop) */}
        <div style={{
          position: 'absolute', top: 56, left: '12.5%', right: '12.5%',
          height: 1, background: 'linear-gradient(to right, transparent, rgba(255,0,0,0.3), rgba(255,0,0,0.3), transparent)',
          pointerEvents: 'none',
        }} className="step-line" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }} className="steps-grid">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ textAlign: 'center' }}
            >
              {/* Number circle */}
              <div style={{
                width: 88, height: 88, borderRadius: '50%',
                border: '1px solid rgba(255,0,0,0.3)',
                background: 'radial-gradient(circle, rgba(255,0,0,0.08) 0%, transparent 70%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 28px',
                position: 'relative',
                fontSize: 32,
              }}>
                {step.icon}
                {/* step number badge */}
                <div style={{
                  position: 'absolute', top: -8, right: -8,
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'var(--red)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 800, color: 'var(--white)',
                  border: '2px solid var(--black)',
                }}>
                  {i + 1}
                </div>
              </div>

              {/* ghost step number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14, letterSpacing: '.15em',
                color: 'var(--red)', opacity: 0.6,
                marginBottom: 8,
              }}>
                {step.num}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 24, letterSpacing: '.04em',
                marginBottom: 12,
              }}>
                {step.title.toUpperCase()}
              </h3>

              <p style={{
                fontSize: 14, color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="reveal" style={{ textAlign: 'center', marginTop: 72 }}>
        <a href="#" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 48px' }}>
          ▶ &nbsp;Start Watching Now
        </a>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .steps-grid { grid-template-columns: 1fr 1fr !important; }
        .step-line  { display: none; }
      }
      @media (max-width: 500px) {
        .steps-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);
