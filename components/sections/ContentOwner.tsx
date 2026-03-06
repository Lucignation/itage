// components/sections/ContentOwner.tsx
import React from 'react';

const BENEFITS = [
  { icon: '⬆', title: 'Upload in Minutes',      body: 'Upload from web or mobile. Supports MP4, MOV, MKV up to 5GB with auto-transcoding included.' },
  { icon: '📊', title: 'Track Earnings Live',    body: 'Real-time dashboard shows views, rentals, and revenue. Know exactly who\'s watching and what\'s earning.' },
  { icon: '🌍', title: 'Reach Millions',          body: 'Your film, our audience. 2M+ active viewers and growing — with built-in discovery and promotion tools.' },
  { icon: '💸', title: 'Instant Withdrawals',    body: 'Withdraw earnings to your bank, PayPal, or Stripe any time. 85% revenue share — one of the best in the industry.' },
];

export const ContentOwner: React.FC = () => (
  <section className="section" id="creators" style={{
    background: 'var(--black)',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* large red glow left */}
    <div style={{
      position: 'absolute', top: '50%', left: -200, transform: 'translateY(-50%)',
      width: 600, height: 600, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }} className="creator-grid">

        {/* Left: visual panel */}
        <div className="reveal" style={{ position: 'relative' }}>
          {/* Mock dashboard */}
          <div style={{
            background: 'var(--gray-900)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Top bar */}
            <div style={{
              background: 'var(--gray-800)',
              padding: '14px 20px',
              display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              {['#ff5f56','#ffbd2e','#27c93f'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
              <div style={{ flex: 1, height: 20, background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginLeft: 8 }} />
            </div>

            {/* Dashboard body */}
            <div style={{ padding: 20 }}>
              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'Revenue', val: '$4,280', up: true },
                  { label: 'Rentals', val: '847', up: true },
                  { label: 'Views',   val: '12.4K', up: false },
                ].map(s => (
                  <div key={s.label} style={{
                    background: 'var(--gray-800)', borderRadius: 10, padding: '14px 16px',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '.1em', marginBottom: 6 }}>
                      {s.label.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: '.02em', color: 'var(--white)' }}>
                      {s.val}
                    </div>
                    <div style={{ fontSize: 11, color: s.up ? '#36D68A' : '#ff6b6b', marginTop: 4 }}>
                      {s.up ? '↑ 18.4%' : '↓ 2.1%'} this week
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenue bars */}
              <div style={{
                background: 'var(--gray-800)', borderRadius: 10, padding: 16,
                border: '1px solid rgba(255,255,255,0.05)', marginBottom: 16,
              }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '.1em', marginBottom: 14 }}>WEEKLY REVENUE</div>
                <div style={{ display: 'flex', gap: 6, height: 60, alignItems: 'flex-end' }}>
                  {[35,52,41,68,84,61,90].map((h, i) => (
                    <div key={i} style={{ flex: 1, borderRadius: '3px 3px 0 0', position: 'relative' }}>
                      <div style={{
                        height: `${h}%`, background: i === 6 ? 'var(--red)' : 'rgba(255,0,0,0.3)',
                        borderRadius: '3px 3px 0 0', transition: 'height 1s',
                      }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Movie list */}
              {[
                { title: 'Noir City', rentals: 214, pct: 78 },
                { title: 'Deep Space', rentals: 186, pct: 64 },
                { title: 'Crimson', rentals: 147, pct: 52 },
              ].map(m => (
                <div key={m.title} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <div style={{ width: 32, height: 48, borderRadius: 4, background: 'rgba(255,0,0,0.2)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{m.title}</div>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                      <div style={{ height: '100%', width: `${m.pct}%`, background: 'var(--red)', borderRadius: 2 }} />
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{m.rentals} rentals</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: -20, right: -20,
            background: 'var(--red)', borderRadius: 14, padding: '14px 20px',
            boxShadow: '0 16px 48px rgba(255,0,0,0.4)',
            animation: 'float 4s ease-in-out infinite',
          }}>
            <div style={{ fontSize: 22, fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '.03em' }}>85%</div>
            <div style={{ fontSize: 11, opacity: 0.85, letterSpacing: '.06em' }}>REVENUE SHARE</div>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <div className="section-label reveal">For Creators</div>

          <h2 className="display-md reveal reveal-delay-1" style={{ marginBottom: 24 }}>
            YOUR FILMS.<br />
            <span style={{ color: 'var(--red)' }}>YOUR REVENUE.</span>
          </h2>

          <p className="reveal reveal-delay-2" style={{
            fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 40,
          }}>
            Join thousands of independent filmmakers and studios monetising their content on Ìtàgé. Full control, transparent analytics, real earnings.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
            {BENEFITS.map((b, i) => (
              <div key={b.title} className={`reveal reveal-delay-${i + 1}`} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(255,0,0,0.1)',
                  border: '1px solid rgba(255,0,0,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                }}>
                  {b.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{b.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{b.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary" style={{ fontSize: 15, padding: '15px 36px' }}>
              Get Started as a Creator
            </a>
            <a href="#" className="btn btn-outline" style={{ fontSize: 15, padding: '15px 28px' }}>
              See Creator Docs →
            </a>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .creator-grid {
        @media (max-width: 900px) {
          grid-template-columns: 1fr !important;
        }
      }
      @media (max-width: 900px) {
        .creator-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
      }
    `}</style>
  </section>
);
