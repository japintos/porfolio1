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

const c = {
  ink: '#0f172a',
  primary: '#1e1b4b',
  secondary: '#312e81',
  accent: '#6366f1',
  accentLight: '#a5b4fc',
  ice: '#e0e7ff',
  text: '#1e293b',
  muted: '#64748b',
  line: '#e2e8f0',
  white: '#ffffff',
  gold: '#d97706',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: c.text,
    paddingTop: 26,
    paddingBottom: 38,
    paddingHorizontal: 30,
    lineHeight: 1.38,
    backgroundColor: '#fafbfc',
  },

  /* Cabecera hero (solo pág. 1) */
  hero: {
    backgroundColor: c.primary,
    marginHorizontal: -30,
    marginTop: -26,
    paddingTop: 24,
    paddingBottom: 20,
    paddingHorizontal: 26,
    marginBottom: 16,
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  photo: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.85)',
    objectFit: 'cover',
  },
  heroTextCol: {
    flex: 1,
    minWidth: 0,
  },
  badgeSenior: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.11)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 16,
    marginBottom: 5,
  },
  badgeSeniorText: {
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    color: c.accentLight,
    letterSpacing: 0.6,
  },
  name: {
    fontSize: 21,
    fontFamily: 'Helvetica-Bold',
    color: c.white,
    letterSpacing: -0.3,
    marginBottom: 3,
  },
  accentBar: {
    width: 44,
    height: 3,
    backgroundColor: c.gold,
    borderRadius: 1,
    marginBottom: 7,
  },
  tagline: {
    fontSize: 8.5,
    color: c.accentLight,
    lineHeight: 1.42,
    marginBottom: 7,
  },
  contactRow: {
    fontSize: 7.5,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 1.45,
  },
  contactMuted: {
    color: 'rgba(255,255,255,0.62)',
    fontSize: 6.8,
    marginTop: 5,
  },
  linkLight: {
    color: c.accentLight,
    textDecoration: 'none',
  },

  sectionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 7,
    marginTop: 2,
  },
  sectionNum: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
    letterSpacing: 0.8,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: c.primary,
    letterSpacing: 0.5,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: c.line,
  },

  paragraph: {
    fontSize: 8.8,
    textAlign: 'justify',
    marginBottom: 5,
    color: c.text,
    lineHeight: 1.4,
  },

  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 3,
    marginBottom: 12,
  },
  statPill: {
    backgroundColor: c.ice,
    borderLeftWidth: 3,
    borderLeftColor: c.accent,
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 3,
    minWidth: 72,
  },
  statVal: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: c.primary,
  },
  statLbl: {
    fontSize: 6.8,
    color: c.muted,
    marginTop: 1,
  },

  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  highlightCard: {
    width: '48%',
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: c.line,
    borderRadius: 5,
    overflow: 'hidden',
  },
  highlightTop: {
    height: 3,
    backgroundColor: c.accent,
  },
  highlightBody: {
    padding: 7,
  },
  highlightTitle: {
    fontSize: 8.2,
    fontFamily: 'Helvetica-Bold',
    color: c.secondary,
    marginBottom: 3,
  },
  highlightText: {
    fontSize: 7.8,
    color: c.muted,
    lineHeight: 1.38,
  },

  expBlock: {
    marginBottom: 9,
    backgroundColor: '#f8fafc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: c.line,
    overflow: 'hidden',
  },
  expTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: c.primary,
    paddingVertical: 7,
    paddingHorizontal: 9,
  },
  expTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: c.white,
    flex: 1,
    paddingRight: 6,
  },
  expDatePill: {
    backgroundColor: 'rgba(255,255,255,0.14)',
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  expDate: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: c.accentLight,
  },
  expBody: {
    padding: 9,
  },
  expSummary: {
    fontSize: 8,
    color: c.muted,
    marginBottom: 5,
    fontStyle: 'italic',
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletDot: {
    width: 11,
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.2,
    color: c.text,
    lineHeight: 1.35,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 7,
    paddingTop: 7,
    borderTopWidth: 1,
    borderTopColor: c.line,
  },
  tag: {
    fontSize: 6.8,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: c.white,
    borderWidth: 1,
    borderColor: '#c7d2fe',
    borderRadius: 2,
    color: c.secondary,
  },

  subPageHeader: {
    marginBottom: 14,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: c.line,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subPageName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: c.primary,
  },
  subPageHint: {
    fontSize: 7.5,
    color: c.muted,
  },
  subPageRight: {
    fontSize: 7,
    color: c.muted,
  },

  eduCard: {
    marginBottom: 5,
    paddingLeft: 9,
    borderLeftWidth: 3,
    borderLeftColor: c.accent,
    paddingVertical: 3,
  },
  eduYears: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
    marginBottom: 1,
  },
  eduInst: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: c.primary,
  },
  eduMeta: {
    fontSize: 7.8,
    color: c.muted,
    marginTop: 2,
  },

  santanderHeader: {
    marginTop: 8,
    marginBottom: 5,
    paddingVertical: 4,
    paddingHorizontal: 7,
    backgroundColor: c.ice,
    borderRadius: 3,
  },
  santanderTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: c.secondary,
  },
  santanderGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  santanderItem: {
    width: '48%',
    fontSize: 7.5,
    color: c.muted,
    marginBottom: 2,
    paddingLeft: 5,
    borderLeftWidth: 2,
    borderLeftColor: c.line,
  },
  santYear: {
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
  },

  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  skillCol: {
    width: '47%',
  },
  skillBox: {
    backgroundColor: '#f8fafc',
    borderRadius: 4,
    padding: 7,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: c.line,
  },
  skillLabel: {
    fontSize: 7.8,
    fontFamily: 'Helvetica-Bold',
    color: c.primary,
    marginBottom: 4,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: c.ice,
  },
  skillText: {
    fontSize: 7.6,
    color: c.muted,
    lineHeight: 1.42,
  },

  footer: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: c.line,
  },
  footerText: {
    fontSize: 7.2,
    color: c.muted,
    textAlign: 'center',
  },

  pageNum: {
    paddingTop: 12,
    textAlign: 'center',
    fontSize: 7.2,
    color: c.muted,
  },
});

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <View style={styles.sectionLabel} wrap={false}>
      <Text style={styles.sectionNum}>{num}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

export function CvPdfDocument({ baseUrl }: { baseUrl: string }) {
  const photoSrc = `${baseUrl.replace(/\/$/, '')}${cvData.photoPath}`;
  const contact = cvData.contact;
  const footerDate = new Date().toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Document
      title={`CV — ${cvData.name}`}
      author={cvData.name}
      subject="Curriculum vitae — Full Stack & Tech Lead"
    >
      {/* Página 1 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.hero}>
          <View style={styles.heroRow}>
            <Image src={photoSrc} style={styles.photo} />
            <View style={styles.heroTextCol}>
              <View style={styles.badgeSenior}>
                <Text style={styles.badgeSeniorText}>
                  SENIOR FULL STACK · 18+ AÑOS
                </Text>
              </View>
              <Text style={styles.name}>{cvData.name}</Text>
              <View style={styles.accentBar} />
              <Text style={styles.tagline}>{cvData.roles}</Text>
              <Text style={styles.contactRow}>
                {contact.email} · {contact.phone} · {contact.location}
              </Text>
              <Text style={styles.contactRow}>
                <Link src={contact.portfolio} style={styles.linkLight}>
                  {contact.portfolio}
                </Link>
                {'  ·  '}
                <Link src={contact.linkedin} style={styles.linkLight}>
                  LinkedIn
                </Link>
                {'  ·  '}
                <Link src={contact.github} style={styles.linkLight}>
                  GitHub
                </Link>
              </Text>
              <Text style={styles.contactMuted}>
                Arquitectura · Liderazgo técnico · Entrega end-to-end
              </Text>
            </View>
          </View>
        </View>

        <SectionHeader num="01" title="PERFIL PROFESIONAL" />
        {cvData.summary.map((p, i) => (
          <Text key={i} style={styles.paragraph}>
            {p}
          </Text>
        ))}

        <View style={styles.statsRow}>
          {cvData.stats.map((s) => (
            <View key={s.label} style={styles.statPill}>
              <Text style={styles.statVal}>{s.value}</Text>
              <Text style={styles.statLbl}>{s.label}</Text>
            </View>
          ))}
        </View>

        <SectionHeader num="02" title="VALOR DIFERENCIAL" />
        <View style={styles.highlightGrid}>
          {cvData.highlights.map((h) => (
            <View key={h.title} style={styles.highlightCard}>
              <View style={styles.highlightTop} />
              <View style={styles.highlightBody}>
                <Text style={styles.highlightTitle}>{h.title}</Text>
                <Text style={styles.highlightText}>{h.text}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.pageNum}>Página 1 de 3</Text>
      </Page>

      {/* Página 2 — Experiencia */}
      <Page size="A4" style={styles.page}>
        <View style={styles.subPageHeader} wrap={false}>
          <View>
            <Text style={styles.subPageName}>{cvData.name}</Text>
            <Text style={styles.subPageHint}>Experiencia profesional</Text>
          </View>
          <Text style={styles.subPageRight}>CV · Full Stack & Tech Lead</Text>
        </View>

        <SectionHeader num="03" title="EXPERIENCIA LABORAL" />
        {cvData.experience.map((ex) => (
          <View key={ex.title} style={styles.expBlock}>
            <View style={styles.expTopBar}>
              <Text style={styles.expTitle}>{ex.title}</Text>
              <View style={styles.expDatePill}>
                <Text style={styles.expDate}>{ex.date}</Text>
              </View>
            </View>
            <View style={styles.expBody}>
              <Text style={styles.expSummary}>{ex.summary}</Text>
              {ex.bullets.map((b, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bulletDot}>›</Text>
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}
              <View style={styles.tags}>
                {ex.tags.map((t) => (
                  <Text key={t} style={styles.tag}>
                    {t}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}

        <Text style={styles.pageNum}>Página 2 de 3</Text>
      </Page>

      {/* Página 3 — Formación + stack */}
      <Page size="A4" style={styles.page}>
        <View style={styles.subPageHeader} wrap={false}>
          <View>
            <Text style={styles.subPageName}>{cvData.name}</Text>
            <Text style={styles.subPageHint}>Formación y competencias técnicas</Text>
          </View>
          <Text style={styles.subPageRight}>CV · Full Stack & Tech Lead</Text>
        </View>

        <SectionHeader num="04" title="FORMACIÓN" />
        {cvData.educationFormal.map((ed) => (
          <View
            key={`${ed.years}-${ed.institution}`}
            style={styles.eduCard}
          >
            <Text style={styles.eduYears}>{ed.years}</Text>
            <Text style={styles.eduInst}>{ed.institution}</Text>
            <Text style={styles.eduMeta}>{ed.detail}</Text>
          </View>
        ))}

        <View style={styles.santanderHeader}>
          <Text style={styles.santanderTitle}>Santander Open Academy</Text>
        </View>
        <View style={styles.santanderGrid}>
          {cvData.educationSantander.map((item) => (
            <Text key={item.text} style={styles.santanderItem}>
              <Text style={styles.santYear}>{item.year}</Text>
              {' — '}
              {item.text}
            </Text>
          ))}
        </View>

        <View style={{ marginTop: 10 }}>
          <SectionHeader num="05" title="STACK TÉCNICO" />
          <View style={styles.skillsGrid}>
            {Object.entries(cvData.skills).map(([key, list]) => (
              <View key={key} style={styles.skillCol}>
                <View style={styles.skillBox}>
                  <Text style={styles.skillLabel}>
                    {key.replace(/_/g, ' ').toUpperCase()}
                  </Text>
                  <Text style={styles.skillText}>{list.join(' · ')}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Documento generado digitalmente · {footerDate}
          </Text>
          <Text style={[styles.footerText, { marginTop: 3 }]}>
            Portfolio:{' '}
            <Link src={contact.portfolio}>{contact.portfolio}</Link>
          </Text>
        </View>

        <Text style={styles.pageNum}>Página 3 de 3</Text>
      </Page>
    </Document>
  );
}
