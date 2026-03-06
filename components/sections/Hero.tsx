// components/sections/Hero.tsx
import React, { useEffect, useRef } from 'react';

// Fake movie poster placeholders using CSS gradients
const POSTERS = [
  { bg: 'linear-gradient(135deg,#1a0000,#4a0000)', label: 'NOIR CITY' },
  { bg: 'linear-gradient(135deg,#000a1a,#001a4a)', label: 'DEEP SPACE' },
  { bg: 'linear-gradient(135deg,#0a1a00,#1a4000)', label: 'WILDERNESS' },
  { bg: 'linear-gradient(135deg,#1a000a,#4a001a)', label: 'CRIMSON' },
  { bg: 'linear-gradient(135deg,#1a1000,#4a2a00)', label: 'GOLDEN ERA' },
  { bg: 'linear-gradient(135deg,#001a1a,#004a4a)', label: 'ABYSS' },
  { bg: 'linear-gradient(135deg,#0a001a,#2a004a)', label: 'PHANTOM' },
  { bg: 'linear-gradient(135deg,#1a0005,#4a0015)', label: 'BLOOD MOON' },
];

const PosterCard: React.FC<{ bg: string; label: string }> = ({ bg, label }) => (
  <div style={{
    flex: '0 0 140px', height: 210,
    borderRadius: 10,
    background: bg,
    border: '1px solid rgba(255,255,255,0.08)',
    display: 'flex', alignItems: 'flex-end',
    padding: 12,
    position: 'relative', overflow: 'hidden',
  }}>
    {/* play icon overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 32, color: 'rgba(255,255,255,0.15)',
    }}>▶</div>
    <div style={{
      fontSize: 10, fontWeight: 700, letterSpacing: '.12em',
      color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
    }}>{label}</div>
    {/* red bottom bar */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 2, background: 'var(--red)',
    }} />
  </div>
);

export const Hero: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--black)',
    }}>
      {/* ── Background: grid + radial glow ─────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,0,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Scanline effect ─────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0,
      }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, height: '2px',
          background: 'linear-gradient(transparent, rgba(255,0,0,0.04), transparent)',
          animation: 'scanline 6s linear infinite',
        }} />
      </div>

      {/* ── Main content ────────────────────────────────────────────── */}
      <div className="container" style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', paddingTop: 'calc(var(--nav-h) + 48px)',
        paddingBottom: 48, zIndex: 1, position: 'relative',
      }}>
        {/* Pre-badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,0,0,0.1)',
          border: '1px solid rgba(255,0,0,0.25)',
          borderRadius: 100, padding: '6px 14px', marginBottom: 32,
          fontSize: 12, fontWeight: 600, letterSpacing: '.1em',
          color: 'var(--red)', width: 'fit-content',
          animation: 'fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.1s both',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', animation: 'pulseRed 2s ease-in-out infinite', flexShrink: 0 }} />
          NOW STREAMING · 4K ULTRA HD
        </div>

        {/* Headline */}
        <div style={{ animation: 'fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.2s both' }}>
          <h1 className="display-xl" style={{ maxWidth: 900, marginBottom: 24 }}>
            <span style={{ color: 'var(--white)' }}>STREAM &</span>
            <br />
            <span style={{ color: 'var(--red)', WebkitTextStroke: '0px' }}> RENT MOVIES</span>
            <br />
            <span style={{ color: 'var(--white)' }}>ANYTIME.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: 520,
          marginBottom: 48,
          lineHeight: 1.65,
          animation: 'fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.3s both',
        }}>
          Watch trailers and rent full movies on mobile, while content owners manage releases across web and mobile.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          animation: 'fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.4s both',
        }}>
          <a href="#browse" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
            <span>▶</span> Start Watching
          </a>
          <a href="#creators" className="btn btn-outline" style={{ fontSize: 16, padding: '16px 36px' }}>
            Upload Your Movies
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap',
          animation: 'fadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.5s both',
        }}>
          {[
            { num: '50K+',  label: 'Movies Available' },
            { num: '2M+',   label: 'Active Viewers'   },
            { num: '12K+',  label: 'Content Creators'  },
            { num: '4K',    label: 'Ultra HD Quality'  },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, letterSpacing: '.03em', color: 'var(--white)' }}>
                {s.num}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: '.05em', marginTop: 2 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Poster ticker ───────────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 1,
        paddingBottom: 48, overflow: 'hidden',
      }}>
        {/* fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to right, var(--black), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to left, var(--black), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', gap: 16, width: 'max-content', animation: 'marquee 28s linear infinite' }}>
          {[...POSTERS, ...POSTERS].map((p, i) => (
            <PosterCard key={i} bg={p.bg} label={p.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
