// components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import itageLogo from '@/assets/images/itage-logo.png';

const NAV_LINKS = [
  { label: 'Browse',   href: '#browse'   },
  { label: 'Creators', href: '#creators' },
  { label: 'About',    href: '#about'    },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position:     'fixed',
        top:          0, left: 0, right: 0,
        zIndex:       100,
        height:       'var(--nav-h)',
        display:      'flex',
        alignItems:   'center',
        transition:   'background 0.35s, backdrop-filter 0.35s, border-color 0.35s',
        background:   scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }} aria-label="Ìtàgé home">
            <Image
              src={itageLogo}
              alt="Ìtàgé"
              priority
              style={{ width: 'auto', height: 40 }}
            />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="nav-desktop">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)',
                transition: 'color 0.2s', letterSpacing: '.02em',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', gap: 12 }} className="nav-desktop">
            <a href="#" className="btn btn-ghost" style={{ padding: '10px 20px', fontSize: 14 }}>Sign In</a>
            <a href="#" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: 14 }}>Start Free</a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="nav-mobile"
            style={{
              background: 'none', border: 'none', color: 'var(--white)',
              fontSize: 22, lineHeight: 1, padding: 8,
            }}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(0,0,0,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 36,
          animation: 'fadeIn 0.2s ease',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 48, letterSpacing: '.04em', color: 'var(--white)',
              }}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
            <a href="#" className="btn btn-outline" onClick={() => setOpen(false)}>Sign In</a>
            <a href="#" className="btn btn-primary" onClick={() => setOpen(false)}>Start Free</a>
          </div>
        </div>
      )}

      <style>{`
        .nav-mobile { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
    </>
  );
};
