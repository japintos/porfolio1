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

/** Paleta sobria azul / gris / blanco */
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
  certifications: { label: 'Certificaciones y formación continua', icon: 'C' },
  skills: { label: 'Competencias técnicas', icon: 'S' },
  contact: { label: 'Contacto', icon: '@' },
} as const;

const styles = StyleSheet.create({
  page: {
    paddingTop: 24,
    paddingBottom: 40,
    paddingHorizontal: 32,
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    lineHeight: 1.4,
    color: theme.text,
    backgroundColor: theme.white,
  },
  headerBand: {
    marginHorizontal: -32,
    marginTop: -24,
    paddingHorizontal: 32,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: theme.navy,
    flexDirection: 'row',
    gap: 16,
    marginBottom: 14,
  },
  photoWrap: {
    width: 68,
    height: 68,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: theme.blueSoft,
  },
  photo: {
    width: 68,
    height: 68,
    objectFit: 'cover',
  },
  headerContent: {
    flex: 1,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: theme.white,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  headline: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: theme.blueSoft,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 8.5,
    color: '#cbd5e1',
    marginBottom: 8,
  },
  contactLine: {
    fontSize: 7.8,
    color: '#e2e8f0',
    marginBottom: 2,
  },
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  link: {
    fontSize: 7.5,
    color: '#93c5fd',
    textDecoration: 'none',
    fontFamily: 'Helvetica-Bold',
  },
  logo: {
    width: 80,
    height: 22,
    objectFit: 'contain',
  },
  metaStrip: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: theme.panel,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.line,
  },
  metaPill: {
    fontSize: 7.6,
    color: theme.text,
  },
  metaBold: {
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
  },
  section: {
    marginBottom: 11,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 7,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: theme.line,
  },
  sectionIcon: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: theme.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIconText: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: theme.white,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  panel: {
    padding: 10,
    backgroundColor: theme.panel,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.line,
  },
  paragraph: {
    fontSize: 8.4,
    lineHeight: 1.45,
    color: theme.text,
    marginBottom: 4,
  },
  strengthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  strengthCard: {
    width: '48.5%',
    padding: 8,
    backgroundColor: theme.panel,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: theme.blue,
  },
  strengthTitle: {
    fontSize: 7.8,
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
    marginBottom: 2,
  },
  strengthText: {
    fontSize: 7.4,
    color: theme.muted,
    lineHeight: 1.35,
  },
  jobCard: {
    marginBottom: 8,
    padding: 9,
    backgroundColor: theme.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.line,
    borderLeftWidth: 3,
    borderLeftColor: theme.blue,
  },
  jobHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 3,
  },
  jobTitle: {
    flex: 1,
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: theme.ink,
  },
  jobPeriod: {
    fontSize: 7.4,
    fontFamily: 'Helvetica-Bold',
    color: theme.blue,
  },
  jobContext: {
    fontSize: 7.3,
    color: theme.muted,
    marginBottom: 5,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2.5,
  },
  bulletDot: {
    width: 10,
    fontSize: 8,
    color: theme.blue,
    fontFamily: 'Helvetica-Bold',
  },
  bulletText: {
    flex: 1,
    fontSize: 7.9,
    lineHeight: 1.38,
    color: theme.text,
  },
  eduCard: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 6,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: theme.line,
  },
  eduPeriod: {
    width: 62,
    fontSize: 7.3,
    fontFamily: 'Helvetica-Bold',
    color: theme.blue,
  },
  eduTitle: {
    fontSize: 8.2,
    fontFamily: 'Helvetica-Bold',
    color: theme.ink,
  },
  eduInst: {
    fontSize: 7.4,
    color: theme.text,
  },
  eduStatus: {
    fontSize: 7.1,
    color: theme.muted,
  },
  apaCitation: {
    fontSize: 7.2,
    lineHeight: 1.38,
    color: theme.text,
    marginBottom: 3,
    paddingLeft: 14,
    textIndent: -14,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillCard: {
    width: '48.5%',
    padding: 8,
    backgroundColor: theme.panel,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.line,
  },
  skillTitle: {
    fontSize: 7.8,
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
    marginBottom: 3,
  },
  skillItems: {
    fontSize: 7.3,
    color: theme.text,
    lineHeight: 1.35,
  },
  contactPanel: {
    padding: 10,
    backgroundColor: theme.navy,
    borderRadius: 8,
  },
  contactText: {
    fontSize: 7.8,
    color: '#e2e8f0',
    marginBottom: 3,
  },
  contactBold: {
    fontFamily: 'Helvetica-Bold',
    color: theme.white,
  },
  footerNote: {
    fontSize: 6.8,
    color: '#94a3b8',
    marginTop: 5,
    fontStyle: 'italic',
  },
  pageFooter: {
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: theme.line,
    fontSize: 6.5,
    color: theme.muted,
  },
  page2Header: {
    position: 'absolute',
    top: 16,
    left: 32,
    right: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: theme.line,
  },
  page2Name: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: theme.navy,
  },
  page2Hint: {
    fontSize: 7,
    color: theme.muted,
  },
  page2Body: {
    marginTop: 26,
  },
});

function SectionHeader({ id }: { id: keyof typeof SECTIONS }) {
  const section = SECTIONS[id];
  return (
    <View style={styles.sectionHeader} wrap={false}>
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
      <Text render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} />
    </View>
  );
}

function Header({ photoSrc, logoSrc }: { photoSrc: string; logoSrc: string }) {
  return (
    <View style={styles.headerBand}>
      <View style={styles.photoWrap}>
        <Image src={photoSrc} style={styles.photo} />
      </View>
      <View style={styles.headerContent}>
        <View style={styles.headerTop}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{cvData.name}</Text>
            <Text style={styles.headline}>{cvData.headline}</Text>
            <Text style={styles.subtitle}>{cvData.subtitle}</Text>
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

function MetaStrip() {
  return (
    <View style={styles.metaStrip}>
      <Text style={styles.metaPill}>
        <Text style={styles.metaBold}>Experiencia: </Text>
        {cvData.yearsExperience} años en desarrollo web, arquitectura y liderazgo técnico
      </Text>
      <Text style={styles.metaPill}>
        <Text style={styles.metaBold}>Idiomas: </Text>
        {cvData.languages.map((l) => `${l.label} (${l.level})`).join(' · ')}
      </Text>
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
      {/* Página 1: Perfil → Fortalezas → Experiencia */}
      <Page size="A4" style={styles.page}>
        <Header photoSrc={photoSrc} logoSrc={logoSrc} />
        <MetaStrip />

        <View style={styles.section}>
          <SectionHeader id="profile" />
          <View style={styles.panel}>
            {cvData.profile.map((p) => (
              <Text key={p.slice(0, 20)} style={styles.paragraph}>
                {p}
              </Text>
            ))}
          </View>
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
            <View key={`${job.organization}-${job.role}`} style={styles.jobCard} wrap={false}>
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

        <PageFooter />
      </Page>

      {/* Página 2: Formación → Certificaciones → Competencias → Contacto */}
      <Page size="A4" style={styles.page}>
        <View style={styles.page2Header} fixed>
          <Text style={styles.page2Name}>{cvData.name}</Text>
          <Text style={styles.page2Hint}>Formación · Certificaciones · Competencias · Contacto</Text>
        </View>

        <View style={styles.page2Body}>
          <View style={styles.section}>
            <SectionHeader id="education" />
            <View style={styles.panel}>
              {cvData.education.map((edu, index) => (
                <View
                  key={`${edu.period}-${edu.title}`}
                  style={[
                    styles.eduCard,
                    index === cvData.education.length - 1
                      ? { borderBottomWidth: 0, paddingBottom: 0, marginBottom: 0 }
                      : {},
                  ]}
                >
                  <Text style={styles.eduPeriod}>{edu.period}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.eduTitle}>{edu.title}</Text>
                    <Text style={styles.eduInst}>{edu.institution}</Text>
                    <Text style={styles.eduStatus}>{edu.status}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionHeader id="certifications" />
            <View style={styles.panel}>
              {cvData.apaCertifications.map((cite) => (
                <Text key={cite.text} style={styles.apaCitation}>
                  {cite.text}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionHeader id="skills" />
            <View style={styles.skillsGrid}>
              {cvData.skillGroups.map((group) => (
                <View key={group.title} style={styles.skillCard}>
                  <Text style={styles.skillTitle}>{group.title}</Text>
                  <Text style={styles.skillItems}>{group.items.join(' · ')}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionHeader id="contact" />
            <View style={styles.contactPanel}>
              <Text style={styles.contactText}>
                <Text style={styles.contactBold}>Disponibilidad: </Text>
                {cvData.availability}
              </Text>
              <Text style={styles.contactText}>
                <Text style={styles.contactBold}>Email: </Text>
                {cvData.contact.email}
              </Text>
              <Text style={styles.contactText}>
                <Text style={styles.contactBold}>Teléfono: </Text>
                {cvData.contact.phone}
              </Text>
              <Text style={styles.contactText}>
                <Text style={styles.contactBold}>Ubicación: </Text>
                {cvData.contact.location}
              </Text>
              <Text style={styles.contactText}>
                <Text style={styles.contactBold}>Portfolio: </Text>
                {cvData.contact.portfolio}
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
