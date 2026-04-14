import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { cvData } from '@/lib/cv-data';

const colors = {
  primary: '#1e1b4b',
  secondary: '#312e81',
  accent: '#6366f1',
  accentDark: '#4f46e5',
  text: '#1e293b',
  muted: '#475569',
  border: '#e5e7eb',
  soft: '#f8fafc',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
    color: colors.text,
    lineHeight: 1.45,
  },
  header: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
  },
  photo: {
    width: 112,
    height: 112,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.accent,
    objectFit: 'cover',
  },
  headerMain: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.accentDark,
    marginBottom: 6,
    lineHeight: 1.35,
  },
  contact: {
    fontSize: 8,
    color: colors.muted,
    lineHeight: 1.4,
  },
  sectionTitle: {
    fontSize: 11.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginTop: 10,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.accent,
  },
  paragraph: {
    fontSize: 10,
    textAlign: 'justify',
    marginBottom: 5,
    color: colors.text,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
    marginBottom: 8,
  },
  stat: {
    fontSize: 8.5,
    backgroundColor: colors.soft,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statStrong: {
    fontFamily: 'Helvetica-Bold',
    color: colors.accentDark,
  },
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  highlight: {
    width: '48%',
    minWidth: 200,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    padding: 6,
  },
  highlightTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.secondary,
    marginBottom: 3,
  },
  highlightText: {
    fontSize: 8.5,
    color: colors.muted,
    lineHeight: 1.35,
  },
  expBlock: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: colors.soft,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
    borderRadius: 4,
  },
  expHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
    flexWrap: 'wrap',
    gap: 4,
  },
  expTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    flex: 1,
  },
  expDate: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.accentDark,
  },
  expSummary: {
    fontSize: 9.5,
    color: colors.muted,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 9,
    marginLeft: 8,
    marginBottom: 2,
    color: colors.text,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 4,
  },
  tag: {
    fontSize: 7.5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 3,
    color: colors.secondary,
    backgroundColor: '#ffffff',
  },
  eduRow: {
    marginBottom: 5,
    paddingLeft: 6,
    borderLeftWidth: 2,
    borderLeftColor: '#a5b4fc',
  },
  eduYears: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.accentDark,
    width: 70,
  },
  eduInst: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
  },
  eduMeta: {
    fontSize: 8.5,
    color: colors.muted,
    marginTop: 2,
    marginLeft: 70,
  },
  santanderTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.secondary,
    marginTop: 8,
    marginBottom: 4,
  },
  santanderLine: {
    fontSize: 8.5,
    color: colors.muted,
    marginBottom: 2,
    marginLeft: 6,
  },
  skillLine: {
    fontSize: 9,
    marginBottom: 4,
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    color: colors.secondary,
  },
  footer: {
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: colors.muted,
    textAlign: 'center',
  },
});

export function CvPdfDocument({ baseUrl }: { baseUrl: string }) {
  const photoSrc = `${baseUrl.replace(/\/$/, '')}${cvData.photoPath}`;
  const c = cvData.contact;
  const footerDate = new Date().toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Document
      title={`CV — ${cvData.name}`}
      author={cvData.name}
      subject="Curriculum vitae"
    >
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image src={photoSrc} style={styles.photo} />
          <View style={styles.headerMain}>
            <Text style={styles.name}>{cvData.name}</Text>
            <Text style={styles.tagline}>{cvData.roles}</Text>
            <Text style={styles.contact}>
              {c.email} · {c.phone} · {c.location}
            </Text>
            <Text style={styles.contact}>
              <Link src={c.portfolio}>{c.portfolio}</Link>
            </Text>
            <Text style={styles.contact}>
              LinkedIn: <Link src={c.linkedin}>perfil</Link> · GitHub:{' '}
              <Link src={c.github}>japintos</Link>
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Perfil profesional</Text>
        {cvData.summary.map((p, i) => (
          <Text key={i} style={styles.paragraph}>
            {p}
          </Text>
        ))}
        <View style={styles.statsRow}>
          {cvData.stats.map((s) => (
            <Text key={s.label} style={styles.stat}>
              <Text style={styles.statStrong}>{s.value}</Text>
              <Text> {s.label}</Text>
            </Text>
          ))}
        </View>

        <View style={styles.highlightGrid}>
          {cvData.highlights.map((h) => (
            <View key={h.title} style={styles.highlight}>
              <Text style={styles.highlightTitle}>{h.title}</Text>
              <Text style={styles.highlightText}>{h.text}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Experiencia laboral</Text>
        {cvData.experience.map((ex) => (
          <View key={ex.title} style={styles.expBlock}>
            <View style={styles.expHead}>
              <Text style={styles.expTitle}>{ex.title}</Text>
              <Text style={styles.expDate}>{ex.date}</Text>
            </View>
            <Text style={styles.expSummary}>{ex.summary}</Text>
            {ex.bullets.map((b, i) => (
              <Text key={i} style={styles.bullet}>
                • {b}
              </Text>
            ))}
            <View style={styles.tags}>
              {ex.tags.map((t) => (
                <Text key={t} style={styles.tag}>
                  {t}
                </Text>
              ))}
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle} break>
          Formación académica y cursos
        </Text>
        {cvData.educationFormal.map((ed) => (
          <View key={`${ed.years}-${ed.institution}`} style={styles.eduRow}>
            <Text>
              <Text style={styles.eduYears}>{ed.years}</Text>{' '}
              <Text style={styles.eduInst}>{ed.institution}</Text>
            </Text>
            <Text style={styles.eduMeta}>{ed.detail}</Text>
          </View>
        ))}

        <Text style={styles.santanderTitle}>Santander Open Academy</Text>
        {cvData.educationSantander.map((item) => (
          <Text key={item.text} style={styles.santanderLine}>
            {item.year} — {item.text}
          </Text>
        ))}

        <Text style={styles.sectionTitle} break>
          Habilidades y tecnologías
        </Text>
        {Object.entries(cvData.skills).map(([key, list]) => (
          <Text key={key} style={styles.skillLine}>
            <Text style={styles.skillLabel}>
              {key.replace(/_/g, ' ')}:{' '}
            </Text>
            {list.join(', ')}
          </Text>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            CV generado desde el portafolio · {footerDate} ·{' '}
            <Link src={c.portfolio}>{c.portfolio}</Link>
          </Text>
        </View>
      </Page>
    </Document>
  );
}
