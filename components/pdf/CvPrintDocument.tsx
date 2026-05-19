import {
  Document,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { cvData } from '@/lib/cv-data';

const c = {
  ink: '#0f172a',
  text: '#1e293b',
  muted: '#64748b',
  accent: '#0e7490',
  line: '#e2e8f0',
  soft: '#f8fafc',
  white: '#ffffff',
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 22,
    paddingBottom: 36,
    paddingHorizontal: 26,
    fontFamily: 'Helvetica',
    fontSize: 8.2,
    lineHeight: 1.38,
    color: c.text,
    backgroundColor: c.white,
  },
  header: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: c.ink,
  },
  photoWrap: {
    width: 62,
    height: 62,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: c.line,
  },
  photo: {
    width: 62,
    height: 62,
    objectFit: 'cover',
  },
  headerMain: {
    flex: 1,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  name: {
    fontSize: 17,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    letterSpacing: -0.4,
    marginBottom: 2,
  },
  headline: {
    fontSize: 9.2,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 7.8,
    color: c.muted,
    marginBottom: 5,
  },
  contactRow: {
    fontSize: 7.4,
    color: c.text,
    marginBottom: 3,
  },
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  link: {
    fontSize: 7.2,
    color: c.accent,
    textDecoration: 'none',
    fontFamily: 'Helvetica-Bold',
  },
  logo: {
    width: 88,
    height: 24,
    objectFit: 'contain',
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: c.soft,
    borderRadius: 6,
  },
  metaItem: {
    fontSize: 7.5,
    color: c.text,
  },
  metaLabel: {
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: c.line,
  },
  paragraph: {
    fontSize: 8.1,
    lineHeight: 1.42,
    color: c.text,
    marginBottom: 4,
  },
  strengthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  strengthItem: {
    width: '48.5%',
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: c.soft,
    borderRadius: 4,
  },
  strengthTitle: {
    fontSize: 7.4,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    marginBottom: 1,
  },
  strengthText: {
    fontSize: 7.1,
    color: c.muted,
    lineHeight: 1.32,
  },
  job: {
    marginBottom: 8,
    paddingLeft: 8,
    borderLeftWidth: 2.5,
    borderLeftColor: c.accent,
  },
  jobHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 2,
  },
  jobRole: {
    fontSize: 8.8,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    flex: 1,
  },
  jobPeriod: {
    fontSize: 7.2,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
  },
  jobOrg: {
    fontSize: 7.5,
    color: c.muted,
    marginBottom: 4,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletMark: {
    width: 9,
    fontSize: 8,
    color: c.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 7.85,
    lineHeight: 1.34,
    color: c.text,
  },
  eduRow: {
    flexDirection: 'row',
    marginBottom: 5,
    gap: 8,
  },
  eduPeriod: {
    width: 58,
    fontSize: 7.2,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
  },
  eduBody: {
    flex: 1,
  },
  eduTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
  },
  eduInst: {
    fontSize: 7.3,
    color: c.text,
  },
  eduStatus: {
    fontSize: 7.1,
    color: c.muted,
  },
  certFeaturedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 8,
  },
  certFeatured: {
    width: '48.8%',
    padding: 5,
    backgroundColor: c.soft,
    borderRadius: 4,
    borderLeftWidth: 2,
    borderLeftColor: c.accent,
  },
  certFeaturedTitle: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    lineHeight: 1.25,
  },
  certFeaturedMeta: {
    fontSize: 6.8,
    color: c.muted,
    marginTop: 1,
  },
  certGroup: {
    marginBottom: 5,
  },
  certGroupTheme: {
    fontSize: 7.4,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    marginBottom: 2,
  },
  certGroupItem: {
    fontSize: 7.1,
    color: c.text,
    lineHeight: 1.32,
    marginBottom: 1,
    paddingLeft: 6,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillBlock: {
    width: '48.5%',
    marginBottom: 4,
  },
  skillTitle: {
    fontSize: 7.6,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    marginBottom: 2,
  },
  skillItems: {
    fontSize: 7.2,
    color: c.text,
    lineHeight: 1.35,
  },
  contactBox: {
    marginTop: 6,
    padding: 8,
    backgroundColor: c.soft,
    borderRadius: 6,
  },
  contactLine: {
    fontSize: 7.6,
    color: c.text,
    marginBottom: 2,
  },
  footerNote: {
    fontSize: 6.8,
    color: c.muted,
    fontStyle: 'italic',
    marginTop: 4,
  },
  pageFooter: {
    position: 'absolute',
    left: 26,
    right: 26,
    bottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: c.line,
    paddingTop: 5,
    fontSize: 6.5,
    color: c.muted,
  },
  pageHeaderMini: {
    position: 'absolute',
    top: 14,
    left: 26,
    right: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: c.line,
    paddingBottom: 4,
    marginBottom: 8,
  },
  pageHeaderName: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
  },
  pageHeaderHint: {
    fontSize: 7,
    color: c.muted,
  },
  page2Content: {
    marginTop: 28,
  },
});

function PageFooter() {
  return (
    <View style={styles.pageFooter} fixed>
      <Text>{cvData.name} — Senior Fullstack Developer</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Page2MiniHeader() {
  return (
    <View style={styles.pageHeaderMini} fixed>
      <Text style={styles.pageHeaderName}>{cvData.name}</Text>
      <Text style={styles.pageHeaderHint}>Formación · Certificaciones · Competencias</Text>
    </View>
  );
}

export function CvPrintDocument({ baseUrl }: { baseUrl: string }) {
  const origin = baseUrl.replace(/\/$/, '');
  const photoSrc = `${origin}${cvData.photoPath}`;
  const logoSrc = `${origin}${cvData.logoPath}`;

  return (
    <Document
      title={`CV — ${cvData.name}`}
      author={cvData.name}
      subject="Curriculum vitae — Senior Fullstack Developer"
    >
      {/* Página 1: identidad, perfil, experiencia */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.photoWrap}>
            <Image src={photoSrc} style={styles.photo} />
          </View>
          <View style={styles.headerMain}>
            <View style={styles.headerTopRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{cvData.name}</Text>
                <Text style={styles.headline}>{cvData.headline}</Text>
                <Text style={styles.subtitle}>{cvData.subtitle}</Text>
              </View>
              <Image src={logoSrc} style={styles.logo} />
            </View>
            <Text style={styles.contactRow}>
              {cvData.contact.email} · {cvData.contact.phone} · {cvData.contact.location}
            </Text>
            <View style={styles.linksRow}>
              <Link src={cvData.contact.portfolio} style={styles.link}>
                Portfolio
              </Link>
              <Link src={cvData.contact.linkedin} style={styles.link}>
                LinkedIn
              </Link>
              <Link src={cvData.contact.github} style={styles.link}>
                GitHub
              </Link>
            </View>
          </View>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaItem}>
            <Text style={styles.metaLabel}>Experiencia: </Text>
            {cvData.yearsExperience} años
          </Text>
          <Text style={styles.metaItem}>
            <Text style={styles.metaLabel}>Idiomas: </Text>
            {cvData.languages.map((l) => `${l.label} (${l.level})`).join(' · ')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil profesional</Text>
          {cvData.profile.map((p) => (
            <Text key={p.slice(0, 24)} style={styles.paragraph}>
              {p}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fortalezas</Text>
          <View style={styles.strengthGrid}>
            {cvData.strengths.map((s) => (
              <View key={s.title} style={styles.strengthItem}>
                <Text style={styles.strengthTitle}>{s.title}</Text>
                <Text style={styles.strengthText}>{s.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia laboral</Text>
          {cvData.experience.map((job) => (
            <View key={`${job.organization}-${job.role}`} style={styles.job} wrap={false}>
              <View style={styles.jobHead}>
                <Text style={styles.jobRole}>
                  {job.role} — {job.organization}
                </Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              {job.context ? <Text style={styles.jobOrg}>{job.context}</Text> : null}
              {job.bullets.map((bullet) => (
                <View key={bullet} style={styles.bullet}>
                  <Text style={styles.bulletMark}>•</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <PageFooter />
      </Page>

      {/* Página 2: formación, certificaciones, competencias, contacto */}
      <Page size="A4" style={styles.page}>
        <Page2MiniHeader />
        <View style={styles.page2Content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Formación académica</Text>
            {cvData.education.map((edu) => (
              <View key={`${edu.period}-${edu.title}`} style={styles.eduRow}>
                <Text style={styles.eduPeriod}>{edu.period}</Text>
                <View style={styles.eduBody}>
                  <Text style={styles.eduTitle}>{edu.title}</Text>
                  <Text style={styles.eduInst}>{edu.institution}</Text>
                  <Text style={styles.eduStatus}>{edu.status}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Formación continua — destacada</Text>
            <View style={styles.certFeaturedGrid}>
              {cvData.featuredCertifications.map((cert) => (
                <View key={cert.title} style={styles.certFeatured}>
                  <Text style={styles.certFeaturedTitle}>{cert.title}</Text>
                  <Text style={styles.certFeaturedMeta}>
                    {cert.issuer} · {cert.year}
                    {cert.hours ? ` · ${cert.hours}` : ''}
                  </Text>
                </View>
              ))}
            </View>
            <Text style={[styles.sectionTitle, { fontSize: 8, marginTop: 4, marginBottom: 4 }]}>
              Otras certificaciones (2025–2026)
            </Text>
            {cvData.certificationGroups.map((group) => (
              <View key={group.theme} style={styles.certGroup}>
                <Text style={styles.certGroupTheme}>{group.theme}</Text>
                {group.items.map((item) => (
                  <Text key={item} style={styles.certGroupItem}>
                    · {item}
                  </Text>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Competencias técnicas</Text>
            <View style={styles.skillsGrid}>
              {cvData.skillGroups.map((group) => (
                <View key={group.title} style={styles.skillBlock}>
                  <Text style={styles.skillTitle}>{group.title}</Text>
                  <Text style={styles.skillItems}>{group.items.join(' · ')}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contacto y disponibilidad</Text>
            <View style={styles.contactBox}>
              <Text style={styles.contactLine}>{cvData.availability}</Text>
              <Text style={styles.contactLine}>
                {cvData.contact.email} · {cvData.contact.phone}
              </Text>
              <Text style={styles.contactLine}>{cvData.contact.location}</Text>
              <Text style={styles.contactLine}>
                Portfolio: {cvData.contact.portfolio}
              </Text>
              <Text style={styles.footerNote}>{cvData.footerNote}</Text>
            </View>
          </View>
        </View>

        <PageFooter />
      </Page>
    </Document>
  );
}
