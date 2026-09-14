import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0c',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 84,
            fontWeight: 800,
            color: '#f59e0b',
            fontFamily: 'sans-serif',
          }}
        >
          K
        </div>
      </div>
    ),
    { ...size }
  );
}