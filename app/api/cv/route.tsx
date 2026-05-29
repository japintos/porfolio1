import { renderToBuffer } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { CvPrintDocument } from '@/components/pdf/CvPrintDocument';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const origin = new URL(request.url).origin;
    const buf = await renderToBuffer(<CvPrintDocument baseUrl={origin} />);

    return new NextResponse(new Uint8Array(buf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'attachment; filename="CV-Julio-Pintos-Senior-Fullstack-Developer.pdf"',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
        'X-CV-Version': 'print-2026-05-30-sidebar',
      },
    });
  } catch (e) {
    console.error('CV PDF:', e);
    return new NextResponse('Error al generar el PDF', { status: 500 });
  }
}
