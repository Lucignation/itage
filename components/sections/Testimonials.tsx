// components/sections/Testimonials.tsx
import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote:    string;
  name:     string;
  role:     string;
  initials: string;
  rating:   number;
  type:     'viewer' | 'creator';
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:    "I uploaded my first short film on a Thursday night. By Saturday morning I had $340 in earnings. No other platform comes close to that speed.",
    name:     'Marcus Webb',
    role:     'Independent Filmmaker',
    initials: 'MW',
    rating:   5,
    type:     'creator',
  },
  {
    quote:    "The trailer previews are genuinely useful — I've saved so much money not renting movies I end up hating. The 4K quality is stunning.",
    name:     'Priya Nair',
    role:     'Cinephile, Mumbai',
    initials: 'PN',
    rating:   5,
    type:     'viewer',
  },
  {
    quote:    "As a documentary director, finding an audience felt impossible. Ìtàgé gave my film a home. 18,000 rentals in six months — I'm genuinely emotional.",
    name:     'Claudia Ferretti',
    role:     'Documentary Director, Rome',
    initials: 'CF',
    rating:   5,
    type:     'creator',
  },
  {
    quote:    "The wallet system is brilliant. I top up once a month and just rent whatever looks good. No surprise subscription charges.",
    name:     'James Okafor',
    role:     'Film Student, Lagos',
    initials: 'JO',
    rating:   5,
    type:     'viewer',
  },
  {
    quote:    "85% revenue share is unheard of. They actually respect creators here. My studio migrated our entire back catalogue in two weeks.",
    name:     'Sandra Liu',
    role:     'Studio Owner, LA',
    initials: 'SL',
    rating:   5,
    type:     'creator',
  },
  {
    quote:    "The mobile experience is smooth from trailer to checkout. I rented a film on my commute and finished it later without any friction.",
    name:     'Tom Berglund',
    role:     'Viewer, Stockholm',
    initials: 'TB',
    rating:   5,
    type:     'viewer',
  },
];

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: 'var(--red)', fontSize: 14 }}>★</span>
    ))}
  </div>
);

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const iv = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 4800);
    return () => clearInterval(iv);
  }, []);

  const VISIBLE = 3;
  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    TESTIMONIALS[(active + i) % TESTIMONIALS.length]
  );

  return (
    <section className="section" style={{
      background: 'var(--gray-900)',
      borderTop:    '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      overflow: 'hidden', position: 'relative',
    }}>
      {/* ghost quote mark */}
      <div style={{
        position: 'absolute', top: -20, left: 40,
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(200px, 25vw, 320px)',
        color: 'rgba(255,0,0,0.04)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none',
      }}>"</div>

      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>What People Say</div>
          <h2 className="display-md">
            LOVED BY VIEWERS<br />
            <span style={{ color: 'var(--red)' }}>TRUSTED BY CREATORS</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 48,
        }} className="testimonial-grid">
          {visible.map((t, i) => (
            <div
              key={`${active}-${i}`}
              style={{
                background: 'var(--black)',
                border: `1px solid ${i === 1 ? 'rgba(255,0,0,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 20, padding: 32,
                transform: i === 1 ? 'scale(1.03)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(.16,1,.3,1)',
                boxShadow: i === 1 ? '0 20px 60px rgba(255,0,0,0.1)' : 'none',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* type badge */}
              <div style={{
                position: 'absolute', top: 20, right: 20,
                fontSize: 10, fontWeight: 700, letterSpacing: '.1em',
                padding: '4px 10px', borderRadius: 100,
                background: t.type === 'creator' ? 'rgba(255,0,0,0.15)' : 'rgba(255,255,255,0.06)',
                color: t.type === 'creator' ? 'var(--red)' : 'rgba(255,255,255,0.4)',
                border: `1px solid ${t.type === 'creator' ? 'rgba(255,0,0,0.25)' : 'rgba(255,255,255,0.1)'}`,
                textTransform: 'uppercase',
              }}>
                {t.type === 'creator' ? '🎬 Creator' : '👁 Viewer'}
              </div>

              <Stars count={t.rating} />

              <p style={{
                fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)',
                margin: '20px 0 28px', fontStyle: 'italic',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: i === 1 ? 'var(--red)' : 'rgba(255,0,0,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width:      i === active ? 28 : 8,
              height:     8,
              borderRadius: 4,
              background: i === active ? 'var(--red)' : 'rgba(255,255,255,0.15)',
              border:     'none',
              cursor:     'pointer',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
};
