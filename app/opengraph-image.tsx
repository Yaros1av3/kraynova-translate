import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kraynova Translate — Mündlicher Übersetzungsdienst Berlin';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0c',
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(245,158,11,0.18), transparent 60%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, backgroundColor: '#f59e0b' }} />
          <div style={{ fontSize: 58, fontWeight: 800, color: 'white', letterSpacing: 2 }}>
            KRAYNOVA <span style={{ color: '#f59e0b', fontWeight: 300 }}>TRANSLATE</span>
          </div>
        </div>
        <div style={{ fontSize: 28, color: '#a3a3a3', maxWidth: 900, textAlign: 'center' }}>
          Mündlicher Übersetzungsdienst · Berlin
        </div>
        <div style={{ display: 'flex', gap: 44, marginTop: 44 }}>
          {['100% Vertraulich', 'Behörden & Ärzte', 'RU · DE'].map((label) => (
            <div
              key={label}
              style={{
                fontSize: 20,
                color: '#f59e0b',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              ◆ {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}