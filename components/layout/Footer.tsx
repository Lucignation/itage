// components/layout/Footer.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import itageLogo from '@/assets/images/itage-logo.png';

const LINKS = {
  Platform: [
    { label: 'Browse Movies', href: '#browse' },
    { label: 'New Releases', href: '#browse' },
    { label: 'Trending', href: '#browse' },
    { label: 'Categories', href: '#browse' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#about' },
    { label: 'Press', href: '#about' },
    { label: 'Blog', href: '#about' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Service', href: '/legal/terms-of-service' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
    { label: 'DMCA', href: '/legal/dmca' },
  ],
  Support: [
    { label: 'Help Center', href: '/support/help-center' },
    { label: 'Contact Us', href: '/support/contact-us' },
    { label: 'Report Issue', href: '/support/report-issue' },
    { label: 'Accessibility', href: '/support/accessibility' },
  ],
};

const SOCIAL = [
  { label: 'Twitter / X', icon: '𝕏', href: '#' },
  { label: 'Instagram',   icon: '◎', href: '#' },
  { label: 'YouTube',     icon: '▶', href: '#' },
  { label: 'TikTok',      icon: '♪', href: '#' },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [done, setDone]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setDone(true); setEmail(''); }
  };

  return (
    <footer id="about" style={{ background: 'var(--gray-900)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Newsletter bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '48px 0' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '.04em', marginBottom: 6 }}>
              STAY IN THE LOOP
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              New releases, exclusive deals, creator spotlights.
            </p>
          </div>
          {done ? (
            <div style={{ fontSize: 15, color: 'var(--red)', fontWeight: 600 }}>✓ You're subscribed!</div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 0, maxWidth: 420, width: '100%' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRight: 'none', borderRadius: '6px 0 0 6px',
                  color: 'var(--white)', fontSize: 14, padding: '13px 18px',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <button type="submit" className="btn btn-primary" style={{
                borderRadius: '0 6px 6px 0', animation: 'none', padding: '13px 24px',
              }}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Links grid */}
      <div className="container" style={{ padding: '64px 24px 48px' }}>
        <div
          className="footer-links-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, flexWrap: 'wrap' }}
        >
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 20 }} aria-label="Ìtàgé home">
              <Image
                src={itageLogo}
                alt="Ìtàgé"
                style={{ width: 'auto', height: 42 }}
              />
            </Link>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 24, maxWidth: 240 }}>
              Mobile viewing for audiences, with content owner tools available across web and mobile.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} title={s.label} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--red)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: 'var(--red)', marginBottom: 18, textTransform: 'uppercase' }}>
                {category}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{
                      fontSize: 14, color: 'rgba(255,255,255,0.45)',
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Ìtàgé. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            Made for Ìtàgé, by{' '}
            <a
              href="https://lucighq.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Lucignation
            </a>
            .
          </p>
        </div>
      </div>

    </footer>
  );
};
