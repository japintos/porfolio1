import { renderToBuffer } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { CvPdfDocument } from '@/components/pdf/CvPdfDocument';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const origin = new URL(request.url).origin;
    const buf = await renderToBuffer(<CvPdfDocument baseUrl={origin} />);

    return new NextResponse(new Uint8Array(buf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'attachment; filename="CV-Julio-Pintos-Fullstack-Developer.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    console.error('CV PDF:', e);
    return new NextResponse('Error al generar el PDF', { status: 500 });
  }
}
