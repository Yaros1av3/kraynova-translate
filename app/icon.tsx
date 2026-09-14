import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: '#f59e0b' }} />
      </div>
    ),
    { ...size }
  );
}