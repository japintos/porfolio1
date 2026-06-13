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

/** Alineado con el portfolio: navy + cyan + violeta */
const c = {
  bg: '#0f172a',
  bgDeep: '#060816',
  accent: '#06b6d4',
  accentSoft: '#22d3ee',
  violet: '#7c3aed',
  white: '#ffffff',
  paper: '#ffffff',
  ink: '#111827',
  text: '#334155',
  muted: '#64748b',
  line: '#e2e8f0',
  panel: '#f8fafc',
};

const SIDEBAR_W = 152;

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    lineHeight: 1.35,
    color: c.text,
    backgroundColor: c.paper,
    paddingBottom: 32,
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_W,
    backgroundColor: c.bg,
    paddingHorizontal: 14,
    paddingTop: 20,
    paddingBottom: 24,
  },
  sidebarPhoto: {
    width: 72,
    height: 72,
    borderRadius: 10,
    objectFit: 'cover',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: c.accent,
  },
  sidebarLogo: {
    width: 90,
    height: 24,
    objectFit: 'contain',
    marginBottom: 12,
  },
  sidebarName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: c.white,
    lineHeight: 1.2,
    marginBottom: 4,
  },
  sidebarRole: {
    fontSize: 7.8,
    color: c.accentSoft,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  sidebarBlock: {
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.12)',
  },
  sidebarLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  sidebarText: {
    fontSize: 7.4,
    color: '#e2e8f0',
    lineHeight: 1.38,
    marginBottom: 2,
  },
  sidebarLink: {
    fontSize: 7.2,
    color: c.accentSoft,
    textDecoration: 'none',
    marginBottom: 2,
  },
  sidebarSkillTitle: {
    fontSize: 7.2,
    fontFamily: 'Helvetica-Bold',
    color: c.white,
    marginBottom: 2,
    marginTop: 3,
  },
  sidebarSkillItems: {
    fontSize: 6.9,
    color: '#cbd5e1',
    lineHeight: 1.32,
  },
  sidebarBadge: {
    marginTop: 6,
    paddingVertical: 5,
    paddingHorizontal: 6,
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.35)',
  },
  sidebarBadgeValue: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: c.accentSoft,
  },
  sidebarBadgeLabel: {
    fontSize: 6.8,
    color: '#94a3b8',
    marginTop: 1,
  },
  main: {
    marginLeft: SIDEBAR_W,
    paddingHorizontal: 22,
    paddingTop: 18,
  },
  mainHero: {
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: c.accent,
  },
  mainHeroTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: c.violet,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
  },
  mainHeroText: {
    fontSize: 8.8,
    lineHeight: 1.42,
    color: c.ink,
    marginBottom: 5,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletMark: {
    width: 10,
    fontSize: 8,
    color: c.accent,
    fontFamily: 'Helvetica-Bold',
  },
  bulletText: {
    flex: 1,
    fontSize: 8.2,
    lineHeight: 1.34,
    color: c.text,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: c.bg,
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: c.line,
  },
  job: {
    marginBottom: 7,
    padding: 8,
    backgroundColor: c.panel,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: c.accent,
  },
  jobHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 2,
  },
  jobRole: {
    flex: 1,
    fontSize: 9.2,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
  },
  jobPeriod: {
    fontSize: 7.6,
    fontFamily: 'Helvetica-Bold',
    color: c.violet,
  },
  jobContext: {
    fontSize: 7.4,
    color: c.muted,
    marginBottom: 4,
  },
  eduItem: {
    marginBottom: 5,
    flexDirection: 'row',
    gap: 8,
  },
  eduPeriod: {
    width: 58,
    fontSize: 7.4,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
  },
  eduTitle: {
    fontSize: 8.2,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
  },
  eduMeta: {
    fontSize: 7.5,
    color: c.muted,
  },
  certGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  certCard: {
    width: '48.5%',
    padding: 6,
    backgroundColor: c.panel,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: c.line,
  },
  certArea: {
    fontSize: 6.4,
    fontFamily: 'Helvetica-Bold',
    color: c.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 2,
  },
  certTitle: {
    fontSize: 7.4,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
    lineHeight: 1.26,
    marginBottom: 2,
  },
  certMeta: {
    fontSize: 6.8,
    color: c.muted,
    lineHeight: 1.28,
  },
  skillRow: {
    marginBottom: 3,
    flexDirection: 'row',
    gap: 4,
  },
  skillLabel: {
    width: 72,
    fontSize: 7.6,
    fontFamily: 'Helvetica-Bold',
    color: c.ink,
  },
  skillValues: {
    flex: 1,
    fontSize: 7.6,
    color: c.text,
    lineHeight: 1.32,
  },
  footer: {
    position: 'absolute',
    left: SIDEBAR_W + 22,
    right: 22,
    bottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 6.5,
    color: c.muted,
    borderTopWidth: 1,
    borderTopColor: c.line,
    paddingTop: 4,
  },
});

function Sidebar({
  photoSrc,
  logoSrc,
}: {
  photoSrc: string;
  logoSrc: string;
}) {
  return (
    <View style={styles.sidebar} fixed>
      <Image src={photoSrc} style={styles.sidebarPhoto} />
      <Image src={logoSrc} style={styles.sidebarLogo} />
      <Text style={styles.sidebarName}>{cvData.name}</Text>
      <Text style={styles.sidebarRole}>
        {cvData.headline}
        {'\n'}
        {cvData.subtitle}
      </Text>

      <View style={styles.sidebarBadge}>
        <Text style={styles.sidebarBadgeValue}>{cvData.yearsExperience}</Text>
        <Text style={styles.sidebarBadgeLabel}>años de experiencia</Text>
      </View>

      <View style={[styles.sidebarBlock, { marginTop: 10 }]}>
        <Text style={styles.sidebarLabel}>Contacto</Text>
        <Text style={styles.sidebarText}>{cvData.contact.email}</Text>
        <Text style={styles.sidebarText}>{cvData.contact.phone}</Text>
        <Text style={styles.sidebarText}>{cvData.contact.location}</Text>
        <Link src={cvData.contact.portfolio} style={styles.sidebarLink}>
          Portfolio
        </Link>
        <Link src={cvData.contact.linkedin} style={styles.sidebarLink}>
          LinkedIn
        </Link>
        <Link src={cvData.contact.github} style={styles.sidebarLink}>
          GitHub
        </Link>
      </View>

      <View style={styles.sidebarBlock}>
        <Text style={styles.sidebarLabel}>Idiomas</Text>
        {cvData.languages.map((lang) => (
          <Text key={lang.label} style={styles.sidebarText}>
            {lang.label}: {lang.level}
          </Text>
        ))}
        <Text style={[styles.sidebarText, { marginTop: 4 }]}>
          Disponibilidad: {cvData.availability}
        </Text>
      </View>

    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export function CvPrintDocument({ baseUrl }: { baseUrl: string }) {
  const origin = baseUrl.replace(/\/$/, '');
  const photoSrc = `${origin}${cvData.photoPath}`;
  const logoSrc = `${origin}${cvData.logoPath}`;

  return (
    <Document
      title={`CV — ${cvData.name}`}
      author={cvData.name}
      subject="Curriculum vitae — Fullstack Developer"
    >
      <Page size="A4" style={styles.page} wrap>
        <Sidebar photoSrc={photoSrc} logoSrc={logoSrc} />

        <View style={styles.main}>
          <View style={styles.mainHero}>
            <Text style={styles.mainHeroTitle}>Perfil profesional</Text>
            <Text style={styles.mainHeroText}>{cvData.profileSummary}</Text>
            {cvData.profileBullets.map((bullet) => (
              <View key={bullet} style={styles.bulletRow}>
                <Text style={styles.bulletMark}>›</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <SectionTitle>Experiencia laboral</SectionTitle>
            {cvData.experience.map((job) => (
              <View key={`${job.organization}-${job.role}`} style={styles.job}>
                <View style={styles.jobHead}>
                  <Text style={styles.jobRole}>
                    {job.role} — {job.organization}
                  </Text>
                  <Text style={styles.jobPeriod}>{job.period}</Text>
                </View>
                {job.context ? <Text style={styles.jobContext}>{job.context}</Text> : null}
                {job.bullets.map((bullet) => (
                  <View key={bullet} style={styles.bulletRow}>
                    <Text style={styles.bulletMark}>•</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <SectionTitle>Formación académica</SectionTitle>
            {cvData.education.map((edu) => (
              <View key={`${edu.period}-${edu.title}`} style={styles.eduItem}>
                <Text style={styles.eduPeriod}>{edu.period}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.eduTitle}>{edu.title}</Text>
                  <Text style={styles.eduMeta}>
                    {edu.institution} · {edu.status}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <SectionTitle>{`Certificaciones (${cvData.totalCertifications})`}</SectionTitle>
            <View style={styles.certGrid}>
              {cvData.certifications.map((cert) => (
                <View key={`${cert.year}-${cert.title}`} style={styles.certCard}>
                  <Text style={styles.certArea}>{cert.area}</Text>
                  <Text style={styles.certTitle}>{cert.title}</Text>
                  <Text style={styles.certMeta}>
                    {cert.issuer} · {cert.year}
                    {cert.hours ? ` · ${cert.hours}` : ''}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionTitle>Competencias técnicas</SectionTitle>
            {cvData.skillGroups.map((group) => (
              <View key={group.title} style={styles.skillRow}>
                <Text style={styles.skillLabel}>{group.title}</Text>
                <Text style={styles.skillValues}>{group.items.join(' · ')}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text>
            {cvData.name} · {cvData.contact.portfolio}
          </Text>
          <Text render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
