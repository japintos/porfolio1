/**
 * El portfolio sigue siendo el HTML/CSS/JS en /index.html (public).
 * Next envuelve la app y expone /api/cv para el PDF con react-pdf.
 */
export default function Home() {
  return (
    <iframe
      src="/index.html"
      title="Julio A. Pintos — Portfolio"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  );
}
