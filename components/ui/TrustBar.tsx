// components/ui/TrustBar.tsx
import React from 'react';

const ITEMS = [
  '🔒 256-BIT ENCRYPTION',
  '▶ 4K ULTRA HD',
  '📱 ALL DEVICES',
  '💳 WALLET PAYMENTS',
  '🎬 50,000+ TITLES',
  '⚡ INSTANT STREAMING',
  '🌍 GLOBAL LIBRARY',
  '🏆 AWARD-WINNING FILMS',
];

export const TrustBar: React.FC = () => (
  <div style={{
    background: 'var(--red)',
    padding: '14px 0',
    overflow: 'hidden',
    position: 'relative',
  }}>
    <div style={{
      display: 'flex',
      width: 'max-content',
      animation: 'marquee 20s linear infinite',
    }}>
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <div key={i} style={{
          padding: '0 40px',
          fontSize: 12, fontWeight: 700, letterSpacing: '.14em',
          color: 'var(--white)', whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', gap: 40,
        }}>
          {item}
          <span style={{ opacity: 0.4 }}>·</span>
        </div>
      ))}
    </div>
  </div>
);
