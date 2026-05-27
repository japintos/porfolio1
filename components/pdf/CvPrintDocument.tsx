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

const theme = {
  navy: '#1e3a5f',
  blue: '#2563eb',
  blueSoft: '#dbeafe',
  ink: '#0f172a',
  text: '#334155',
  muted: '#64748b',
  line: '#e2e8f0',
  panel: '#f8fafc',
  white: '#ffffff',
};

const SECTIONS = {
  profile: { label: 'Perfil profesional', icon: 'P' },
  strengths: { label: 'Fortalezas', icon: 'F' },
  experience: { label: 'Experiencia laboral', icon: 'E' },
  education: { label: 'Formación académica', icon: 'A' },
  certifications: { label: 'Certificaciones', icon: 'C' },
  skills: { label: 'Competencias técnicas', icon: 'S' },
  contact: { label: 'Contacto', icon: '@' },
} as const;

const styles = StyleSheet.create({
  page: {
    paddingTop: 18,
    paddingBottom: 28,
    paddingHorizontal: 28,
    fontFamily: 'Helvetica',
    fontSize: 7.8,
    lineHeight: 1.28,
    color: theme.text,
    backgroundColor: theme.white,
  },
  headerBand: {
    marginHorizontal: -28,
    marginTop: -18,
    paddingHorizontal: 28,
    paddingTop: 12,
    paddingBottom: 10,
    backgroundColor: theme.navy,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 6,
  },
  photoWrap: {
    width: 52,
    height: 52,
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: theme.blueSoft,
  },
  photo: { width: 52, height: 52, objectFit: 'cover' },
  headerContent: { flex: 1 },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: theme.white,
    marginBottom: 2,
  },
  headline: {
    fontSize: 8.8,
    fontFamily: 'Helvetica-Bold',
    color: theme.blueSoft,
    marginBottom: 1,
  },
  subtitle: { fontSize: 7.5, color: '#cbd5e1', marginBottom: 4 },
  contactLine: { fontSize: 7.2, color: '#e2e8f0', marginBottom: 1 },
  linksRow: { flexDirection: 'row', gap: 10, marginTop: 2 },
  link: {
    fontSize: 7,
    color: '#93c5fd',
    textDecoration: 'none',
    fontFamily: 'Helvetica-Bold',
  },
  logo: { width: 68, height: 18, objectFit: 'contain' },
  metaStrip: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: theme.panel,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.line,
  },
  metaPill: { fontSize: 7.1, color: theme.text },
  metaBold: { fontFamily: 'Helvetica-Bold', color: theme.navy },
  section: { marginBottom: 4 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 3,
    paddingBottom: 2,
    borderBottomWidth: 0.75,
    borderBottomColor: theme.line,
  },
  sectionIcon: {
    width: 14,
    height: 14,
    borderRadius: 3,
    backgroundColor: theme.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIconText: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: theme.white,
  },
  sectionTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: 7.6,
    lineHeight: 1.32,
    color: theme.text,
    marginBottom: 2,
  },
  strengthGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  strengthCard: {
    width: '48.8%',
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: theme.panel,
    borderLeftWidth: 2,
    borderLeftColor: theme.blue,
  },
  strengthTitle: {
    fontSize: 7.2,
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
  },
  strengthText: { fontSize: 6.9, color: theme.muted, lineHeight: 1.25 },
  jobBlock: {
    marginBottom: 4,
    paddingLeft: 6,
    borderLeftWidth: 2,
    borderLeftColor: theme.blue,
  },
  jobHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
    marginBottom: 1,
  },
  jobTitle: {
    flex: 1,
    fontSize: 7.8,
    fontFamily: 'Helvetica-Bold',
    color: theme.ink,
  },
  jobPeriod: {
    fontSize: 6.9,
    fontFamily: 'Helvetica-Bold',
    color: theme.blue,
  },
  jobContext: { fontSize: 6.8, color: theme.muted, marginBottom: 2 },
  bulletRow: { flexDirection: 'row', marginBottom: 1 },
  bulletDot: { width: 8, fontSize: 7, color: theme.blue },
  bulletText: { flex: 1, fontSize: 7.2, lineHeight: 1.28, color: theme.text },
  eduRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 2,
    paddingBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.line,
  },
  eduPeriod: {
    width: 54,
    fontSize: 6.8,
    fontFamily: 'Helvetica-Bold',
    color: theme.blue,
  },
  eduTitle: { fontSize: 7.4, fontFamily: 'Helvetica-Bold', color: theme.ink },
  eduInst: { fontSize: 6.9, color: theme.text },
  eduStatus: { fontSize: 6.7, color: theme.muted },
  apaColWrap: { flexDirection: 'row', gap: 8 },
  apaCol: { flex: 1 },
  apaCitation: {
    fontSize: 6.5,
    lineHeight: 1.26,
    color: theme.text,
    marginBottom: 1.5,
    paddingLeft: 10,
    textIndent: -10,
  },
  skillLine: { marginBottom: 2 },
  skillLabel: {
    fontSize: 7.1,
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
  },
  skillItems: { fontSize: 6.9, color: theme.text },
  contactStrip: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    backgroundColor: theme.navy,
    borderRadius: 4,
  },
  contactStripLine: { fontSize: 7, color: '#e2e8f0', marginBottom: 1 },
  contactBold: { fontFamily: 'Helvetica-Bold', color: theme.white },
  footerNote: { fontSize: 6.2, color: '#94a3b8', marginTop: 2 },
  pageFooter: {
    position: 'absolute',
    left: 28,
    right: 28,
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
    borderTopWidth: 0.75,
    borderTopColor: theme.line,
    fontSize: 6.2,
    color: theme.muted,
  },
});

function SectionHeader({ id }: { id: keyof typeof SECTIONS }) {
  const section = SECTIONS[id];
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionIcon}>
        <Text style={styles.sectionIconText}>{section.icon}</Text>
      </View>
      <Text style={styles.sectionTitle}>{section.label}</Text>
    </View>
  );
}

function PageFooter() {
  return (
    <View style={styles.pageFooter} fixed>
      <Text>
        {cvData.name} · {cvData.headline}
      </Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Header({ photoSrc, logoSrc }: { photoSrc: string; logoSrc: string }) {
  return (
    <View style={styles.headerBand} wrap={false}>
      <View style={styles.photoWrap}>
        <Image src={photoSrc} style={styles.photo} />
      </View>
      <View style={styles.headerContent}>
        <View style={styles.headerTop}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{cvData.name}</Text>
            <Text style={styles.headline}>
              {cvData.headline} · {cvData.subtitle}
            </Text>
          </View>
          <Image src={logoSrc} style={styles.logo} />
        </View>
        <Text style={styles.contactLine}>
          {cvData.contact.email} · {cvData.contact.phone} · {cvData.contact.location}
        </Text>
        <Text style={styles.contactLine}>Portfolio: {cvData.contact.portfolio}</Text>
        <View style={styles.linksRow}>
          <Link src={cvData.contact.linkedin} style={styles.link}>
            LinkedIn
          </Link>
          <Link src={cvData.contact.github} style={styles.link}>
            GitHub
          </Link>
        </View>
      </View>
    </View>
  );
}

function splitInHalf<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export function CvPrintDocument({ baseUrl }: { baseUrl: string }) {
  const origin = baseUrl.replace(/\/$/, '');
  const photoSrc = `${origin}${cvData.photoPath}`;
  const logoSrc = `${origin}${cvData.logoPath}`;
  const [apaLeft, apaRight] = splitInHalf(cvData.apaCertifications);

  return (
    <Document
      title={`CV — ${cvData.name}`}
      author={cvData.name}
      subject="Curriculum vitae — Senior Fullstack Developer"
    >
      {/* Una sola Page: el contenido fluye en 2 hojas sin saltos forzados ni huecos */}
      <Page size="A4" style={styles.page}>
        <Header photoSrc={photoSrc} logoSrc={logoSrc} />

        <View style={styles.metaStrip} wrap={false}>
          <Text style={styles.metaPill}>
            <Text style={styles.metaBold}>Experiencia: </Text>
            {cvData.yearsExperience} años · desarrollo web, arquitectura y liderazgo técnico
          </Text>
          <Text style={styles.metaPill}>
            <Text style={styles.metaBold}>Idiomas: </Text>
            {cvData.languages.map((l) => `${l.label} (${l.level})`).join(' · ')}
          </Text>
        </View>

        <View style={styles.section}>
          <SectionHeader id="profile" />
          {cvData.profile.map((p) => (
            <Text key={p.slice(0, 20)} style={styles.paragraph}>
              {p}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader id="strengths" />
          <View style={styles.strengthGrid}>
            {cvData.strengths.map((s) => (
              <View key={s.title} style={styles.strengthCard}>
                <Text style={styles.strengthTitle}>{s.title}</Text>
                <Text style={styles.strengthText}>{s.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader id="experience" />
          {cvData.experience.map((job) => (
            <View key={`${job.organization}-${job.role}`} style={styles.jobBlock}>
              <View style={styles.jobHead}>
                <Text style={styles.jobTitle}>
                  {job.role} — {job.organization}
                </Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              {job.context ? <Text style={styles.jobContext}>{job.context}</Text> : null}
              {job.bullets.slice(0, 5).map((bullet) => (
                <View key={bullet} style={styles.bulletRow}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader id="education" />
          {cvData.education.map((edu, index) => (
            <View
              key={`${edu.period}-${edu.title}`}
              style={[
                styles.eduRow,
                index === cvData.education.length - 1
                  ? { borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0 }
                  : {},
              ]}
            >
              <Text style={styles.eduPeriod}>{edu.period}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.eduTitle}>{edu.title}</Text>
                <Text style={styles.eduInst}>
                  {edu.institution} — {edu.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader id="certifications" />
          <View style={styles.apaColWrap}>
            <View style={styles.apaCol}>
              {apaLeft.map((cite) => (
                <Text key={cite.text} style={styles.apaCitation}>
                  {cite.text}
                </Text>
              ))}
            </View>
            <View style={styles.apaCol}>
              {apaRight.map((cite) => (
                <Text key={cite.text} style={styles.apaCitation}>
                  {cite.text}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader id="skills" />
          {cvData.skillGroups.map((group) => (
            <View key={group.title} style={styles.skillLine}>
              <Text>
                <Text style={styles.skillLabel}>{group.title}: </Text>
                <Text style={styles.skillItems}>{group.items.join(' · ')}</Text>
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader id="contact" />
          <View style={styles.contactStrip}>
            <Text style={styles.contactStripLine}>
              <Text style={styles.contactBold}>Disponibilidad: </Text>
              {cvData.availability}
            </Text>
            <Text style={styles.contactStripLine}>
              <Text style={styles.contactBold}>Contacto: </Text>
              {cvData.contact.email} · {cvData.contact.phone} · {cvData.contact.portfolio}
            </Text>
            <Text style={styles.footerNote}>{cvData.footerNote}</Text>
          </View>
        </View>

        <PageFooter />
      </Page>
    </Document>
  );
}
