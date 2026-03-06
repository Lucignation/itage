// components/sections/CTABanner.tsx
import React from 'react';

export const CTABanner: React.FC = () => (
  <section style={{
    background: 'var(--black)',
    padding: '120px 0',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background: angled red stripe */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(255,0,0,0.12) 0%, transparent 50%)',
      pointerEvents: 'none',
    }} />

    {/* Animated ring */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 700, height: 700, borderRadius: '50%',
      border: '1px solid rgba(255,0,0,0.08)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 500, height: 500, borderRadius: '50%',
      border: '1px solid rgba(255,0,0,0.12)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 300, height: 300, borderRadius: '50%',
      border: '1px solid rgba(255,0,0,0.18)',
      pointerEvents: 'none',
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <div className="reveal">
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 9vw, 120px)',
          lineHeight: 0.9, letterSpacing: '.01em',
          marginBottom: 32,
        }}>
          <div style={{ color: 'var(--white)' }}>READY TO</div>
          <div style={{ color: 'var(--red)' }}>START?</div>
        </div>

        <p style={{
          fontSize: 18, color: 'rgba(255,255,255,0.5)',
          maxWidth: 480, margin: '0 auto 48px',
          lineHeight: 1.65,
        }}>
          Join 2 million mobile viewers and 12,000 creators. No subscription required for viewers, with creator tools on web and mobile.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="btn btn-primary" style={{ fontSize: 17, padding: '18px 52px' }}>
            ▶ &nbsp;Start Watching Free
          </a>
          <a href="#" className="btn btn-outline" style={{ fontSize: 17, padding: '18px 44px' }}>
            Upload Your Movie
          </a>
        </div>

        {/* Micro trust signals */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          {['No monthly fee', 'Mobile viewing', 'Creator web + mobile', '24/7 support'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              <span style={{ color: 'var(--red)', fontSize: 15 }}>✓</span> {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
