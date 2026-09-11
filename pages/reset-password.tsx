import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useMemo, useState } from 'react';

function getApiUrl(path: string) {
  const rawBase = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://backend-itage.onrender.com')
    .replace(/\/+$/, '');
  const apiBase = rawBase.endsWith('/api') ? rawBase : `${rawBase}/api`;
  return `${apiBase}${path}`;
}

async function readApiError(res: Response, fallback: string) {
  try {
    const payload = await res.json();
    if (typeof payload?.error === 'string' && payload.error.trim()) return payload.error;
    if (typeof payload?.message === 'string' && payload.message.trim()) return payload.message;
    return fallback;
  } catch {
    return fallback;
  }
}

const ResetPasswordPage: NextPage = () => {
  const router = useRouter();
  const token = useMemo(() => {
    const raw = router.query.token;
    return Array.isArray(raw) ? raw[0] : raw || '';
  }, [router.query.token]);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (!token) {
      setError('This reset link is missing a token. Please request a new password reset link.');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl('/auth/reset-password'), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (!res.ok) {
        throw new Error(await readApiError(res, 'Unable to reset password.'));
      }

      const payload = await res.json();
      setMessage(payload?.message || 'Password reset successfully. You can sign in with your new password.');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to reset password.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password - Itage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: 'radial-gradient(circle at 15% 10%, rgba(255,0,0,0.18), transparent 36%), var(--black)',
      }}>
        <section style={{
          width: '100%',
          maxWidth: 460,
          padding: 28,
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'linear-gradient(180deg, rgba(26,26,26,0.92), rgba(13,13,13,0.96))',
          boxShadow: '0 24px 70px rgba(0,0,0,0.5)',
        }}>
          <p style={{ color: 'var(--red)', fontSize: 12, fontWeight: 700, letterSpacing: '.18em', marginBottom: 10 }}>
            PASSWORD RESET
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1, marginBottom: 10 }}>
            Choose a new password
          </h1>
          <p style={{ color: 'var(--gray-400)', fontSize: 15, marginBottom: 24 }}>
            This works for both viewer and owner accounts. After resetting, return to the app and sign in again.
          </p>

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <label style={{ color: 'var(--gray-100)', fontSize: 14, fontWeight: 600 }}>
              New Password
              <input
                type="password"
                autoComplete="new-password"
                placeholder="At least 8 characters"
                value={newPassword}
                onChange={event => setNewPassword(event.target.value)}
                style={{
                  width: '100%',
                  marginTop: 8,
                  padding: '13px 14px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'var(--gray-800)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                }}
                required
              />
            </label>

            <label style={{ color: 'var(--gray-100)', fontSize: 14, fontWeight: 600 }}>
              Confirm Password
              <input
                type="password"
                autoComplete="new-password"
                placeholder="Repeat your password"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
                style={{
                  width: '100%',
                  marginTop: 8,
                  padding: '13px 14px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'var(--gray-800)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                }}
                required
              />
            </label>

            {message && <p style={{ color: '#36D68A', fontSize: 13 }}>{message}</p>}
            {error && <p style={{ color: '#FF6666', fontSize: 13 }}>{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{
                justifyContent: 'center',
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          <p style={{ color: 'var(--gray-400)', marginTop: 18, fontSize: 14 }}>
            Need a new link? Request password reset again from the Itage app login screen.
          </p>
          <Link href="/" style={{ display: 'inline-flex', marginTop: 12, color: 'var(--red)', fontWeight: 700 }}>
            Back to Itage
          </Link>
        </section>
      </main>
    </>
  );
};

export default ResetPasswordPage;
