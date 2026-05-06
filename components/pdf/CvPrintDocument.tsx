import {
  Document,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { certifications, education, experiences, highlights, projects, skillGroups } from '@/components/portfolio/data';
import { cvData } from '@/lib/cv-data';

const palette = {
  navy: '#060816',
  navy2: '#0f172a',
  indigo: '#4f46e5',
  violet: '#7c3aed',
  cyan: '#06b6d4',
  green: '#16a34a',
  text: '#172033',
  muted: '#64748b',
  soft: '#f4f7fb',
  panel: '#ffffff',
  line: '#dbe3ef',
  paleCyan: '#e6f8fb',
  paleIndigo: '#eef2ff',
  white: '#ffffff',
};

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontFamily: 'Helvetica',
    fontSize: 8.6,
    lineHeight: 1.36,
    color: palette.text,
    backgroundColor: palette.soft,
  },
  cover: {
    backgroundColor: palette.navy,
    color: palette.white,
    padding: 0,
  },
  coverInner: {
    padding: 32,
  },
  coverTop: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    marginBottom: 26,
  },
  logoStrip: {
    alignSelf: 'flex-start',
    width: 112,
    padding: 5,
    borderRadius: 14,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    marginBottom: 12,
  },
  logo: {
    width: 102,
    height: 28,
    objectFit: 'contain',
  },
  photoRing: {
    width: 108,
    height: 108,
    borderRadius: 26,
    padding: 4,
    backgroundColor: palette.cyan,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 22,
    objectFit: 'cover',
  },
  coverCopy: {
    flex: 1,
  },
  eyebrow: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 9,
    borderRadius: 999,
    backgroundColor: 'rgba(6, 182, 212, 0.18)',
    color: '#a5f3fc',
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 9,
  },
  name: {
    fontSize: 32,
    lineHeight: 0.96,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -1.1,
    marginBottom: 8,
  },
  roles: {
    fontSize: 10.2,
    color: '#c4b5fd',
    lineHeight: 1.35,
  },
  contactLine: {
    color: '#dbeafe',
    fontSize: 8.2,
    marginTop: 8,
  },
  coverLinks: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  coverLink: {
    color: '#a5f3fc',
    textDecoration: 'none',
    fontSize: 7.8,
    fontFamily: 'Helvetica-Bold',
  },
  heroStatement: {
    marginTop: 8,
    padding: 18,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
  },
  heroStatementText: {
    color: '#eef2ff',
    fontSize: 11,
    lineHeight: 1.45,
  },
  statGrid: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },
  statCard: {
    flex: 1,
    padding: 13,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  statValue: {
    color: palette.white,
    fontSize: 21,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.8,
  },
  statLabel: {
    color: '#bfdbfe',
    marginTop: 3,
    fontSize: 7.2,
  },
  coverHighlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
    marginTop: 18,
  },
  coverHighlight: {
    width: '48.5%',
    padding: 12,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  coverHighlightTitle: {
    color: '#a5f3fc',
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  coverHighlightText: {
    color: '#cbd5e1',
    fontSize: 7.7,
    lineHeight: 1.38,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: palette.line,
    marginBottom: 16,
  },
  topName: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: palette.navy2,
  },
  topHint: {
    marginTop: 2,
    color: palette.muted,
    fontSize: 7.6,
  },
  topRight: {
    color: palette.indigo,
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
  },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 9,
  },
  sectionNum: {
    color: palette.cyan,
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.8,
  },
  sectionTitle: {
    color: palette.navy2,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.3,
  },
  sectionRule: {
    flex: 1,
    height: 1,
    backgroundColor: palette.line,
  },
  twoCol: {
    flexDirection: 'row',
    gap: 12,
  },
  col: {
    flex: 1,
  },
  card: {
    backgroundColor: palette.panel,
    borderWidth: 1,
    borderColor: palette.line,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  cardAccent: {
    borderLeftWidth: 4,
    borderLeftColor: palette.cyan,
  },
  cardTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: palette.navy2,
    marginBottom: 5,
  },
  cardMeta: {
    fontSize: 7.3,
    color: palette.indigo,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 5,
  },
  paragraph: {
    color: palette.text,
    fontSize: 8.35,
    lineHeight: 1.45,
  },
  muted: {
    color: palette.muted,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bulletDot: {
    width: 11,
    color: palette.cyan,
    fontFamily: 'Helvetica-Bold',
  },
  bulletText: {
    flex: 1,
    color: palette.text,
    fontSize: 8.05,
    lineHeight: 1.35,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 8,
  },
  tag: {
    paddingVertical: 2.5,
    paddingHorizontal: 6,
    borderRadius: 999,
    backgroundColor: palette.paleIndigo,
    color: palette.indigo,
    fontSize: 6.7,
    fontFamily: 'Helvetica-Bold',
  },
  educationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  educationCard: {
    width: '48.8%',
    minHeight: 78,
    backgroundColor: palette.panel,
    borderWidth: 1,
    borderColor: palette.line,
    borderRadius: 12,
    padding: 10,
    borderLeftWidth: 4,
    borderLeftColor: palette.indigo,
  },
  certProof: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 10,
  },
  proofCard: {
    flex: 1,
    padding: 11,
    borderRadius: 12,
    backgroundColor: palette.paleCyan,
    borderWidth: 1,
    borderColor: '#bae6fd',
  },
  proofValue: {
    color: palette.navy2,
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
  },
  proofLabel: {
    color: palette.muted,
    marginTop: 3,
    fontSize: 7,
  },
  certGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  certCard: {
    width: '32%',
    minHeight: 95,
    padding: 8,
    borderRadius: 10,
    backgroundColor: palette.panel,
    borderWidth: 1,
    borderColor: palette.line,
  },
  certArea: {
    color: palette.cyan,
    fontSize: 6.4,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  certTitle: {
    color: palette.navy2,
    fontSize: 7.7,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.2,
    marginBottom: 3,
  },
  certIssuer: {
    color: palette.muted,
    fontSize: 6.7,
    marginBottom: 4,
  },
  certMeta: {
    color: palette.indigo,
    fontSize: 6.3,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  certText: {
    color: palette.muted,
    fontSize: 6.45,
    lineHeight: 1.28,
  },
  certSerial: {
    color: palette.cyan,
    fontSize: 5.8,
    marginTop: 4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillCard: {
    width: '48.5%',
    padding: 10,
    borderRadius: 12,
    backgroundColor: palette.panel,
    borderWidth: 1,
    borderColor: palette.line,
    marginBottom: 2,
  },
  skillTitle: {
    color: palette.navy2,
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  skillDesc: {
    color: palette.muted,
    fontSize: 6.9,
    lineHeight: 1.35,
    marginBottom: 7,
  },
  skillLine: {
    marginBottom: 4,
  },
  skillName: {
    color: palette.text,
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
  },
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectCard: {
    width: '48.5%',
    padding: 10,
    borderRadius: 12,
    backgroundColor: palette.panel,
    borderWidth: 1,
    borderColor: palette.line,
  },
  footer: {
    position: 'absolute',
    left: 28,
    right: 28,
    bottom: 14,
    paddingTop: 7,
    borderTopWidth: 1,
    borderTopColor: palette.line,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: palette.muted,
    fontSize: 6.7,
  },
});

function Header({ eyebrow }: { eyebrow: string }) {
  return (
    <View style={styles.topBar} fixed>
      <View>
        <Text style={styles.topName}>{cvData.name}</Text>
        <Text style={styles.topHint}>{cvData.roles}</Text>
      </View>
      <Text style={styles.topRight}>{eyebrow}</Text>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text>Portfolio: {cvData.contact.portfolio}</Text>
      <Text render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} />
    </View>
  );
}

function Section({ num, title }: { num: string; title: string }) {
  return (
    <View style={styles.sectionHead} wrap={false}>
      <Text style={styles.sectionNum}>{num}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionRule} />
    </View>
  );
}

export function CvPrintDocument({ baseUrl }: { baseUrl: string }) {
  const origin = baseUrl.replace(/\/$/, '');
  const photoSrc = `${origin}${cvData.photoPath}`;
  const logoSrc = `${origin}/logo.jpg`;
  const profileText = cvData.summary.join(' ');

  return (
    <Document
      title={`CV — ${cvData.name}`}
      author={cvData.name}
      subject="Curriculum vitae — Senior Fullstack Developer"
    >
      <Page size="A4" style={[styles.page, styles.cover]}>
        <View style={styles.coverInner}>
          <View style={styles.coverTop}>
            <View style={styles.photoRing}>
              <Image src={photoSrc} style={styles.photo} />
            </View>
            <View style={styles.coverCopy}>
              <View style={styles.logoStrip}>
                <Image src={logoSrc} style={styles.logo} />
              </View>
              <Text style={styles.eyebrow}>Senior Fullstack · 18+ años · 50+ proyectos</Text>
              <Text style={styles.name}>{cvData.name}</Text>
              <Text style={styles.roles}>{cvData.roles}</Text>
              <Text style={styles.contactLine}>
                {cvData.contact.email} · {cvData.contact.phone} · {cvData.contact.location}
              </Text>
              <View style={styles.coverLinks}>
                <Link src={cvData.contact.portfolio} style={styles.coverLink}>Portfolio</Link>
                <Link src={cvData.contact.linkedin} style={styles.coverLink}>LinkedIn</Link>
                <Link src={cvData.contact.github} style={styles.coverLink}>GitHub</Link>
              </View>
            </View>
          </View>

          <View style={styles.heroStatement}>
            <Text style={styles.heroStatementText}>{profileText}</Text>
          </View>

          <View style={styles.statGrid}>
            {cvData.stats.map((stat) => (
              <View key={stat.label} style={styles.statCard}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{certifications.length}</Text>
              <Text style={styles.statLabel}>certificaciones recientes</Text>
            </View>
          </View>

          <View style={styles.coverHighlightGrid}>
            {highlights.map((highlight) => (
              <View key={highlight.title} style={styles.coverHighlight}>
                <Text style={styles.coverHighlightTitle}>{highlight.title}</Text>
                <Text style={styles.coverHighlightText}>{highlight.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <Header eyebrow="Experiencia profesional" />
        <Section num="01" title="EXPERIENCIA LABORAL" />
        {experiences.map((experience) => (
          <View key={`${experience.organization}-${experience.role}`} style={[styles.card, styles.cardAccent]}>
            <Text style={styles.cardMeta}>{experience.period} · {experience.organization}</Text>
            <Text style={styles.cardTitle}>{experience.role}</Text>
            <Text style={[styles.paragraph, styles.muted]}>{experience.summary}</Text>
            <View style={{ marginTop: 7 }}>
              {experience.impact.map((item) => (
                <View key={item} style={styles.bullet}>
                  <Text style={styles.bulletDot}>›</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={styles.tagRow}>
              {experience.tags.map((tag) => (
                <Text key={tag} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
        ))}
        <Footer />
      </Page>

      <Page size="A4" style={styles.page}>
        <Header eyebrow="Educación y certificaciones" />
        <Section num="02" title="EDUCACIÓN FORMAL" />
        <View style={styles.educationGrid}>
          {education.map((item) => (
            <View key={`${item.period}-${item.title}`} style={styles.educationCard}>
              <Text style={styles.cardMeta}>{item.period}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.paragraph}>{item.institution}</Text>
              <Text style={[styles.paragraph, styles.muted]}>{item.status}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 12 }}>
          <Section num="03" title="CERTIFICACIONES QUE RESPALDAN SKILLS" />
        </View>
        <View style={styles.certProof}>
          <View style={styles.proofCard}>
            <Text style={styles.proofValue}>{certifications.length}</Text>
            <Text style={styles.proofLabel}>certificaciones entre 2025 y 2026</Text>
          </View>
          <View style={styles.proofCard}>
            <Text style={styles.proofValue}>12</Text>
            <Text style={styles.proofLabel}>certificados PDF disponibles en portfolio</Text>
          </View>
          <View style={styles.proofCard}>
            <Text style={styles.proofValue}>IA · SEO · Datos</Text>
            <Text style={styles.proofLabel}>formación aplicada a tecnología y negocio</Text>
          </View>
        </View>
        <View style={styles.certGrid}>
          {certifications.map((certification) => (
            <View key={`${certification.year}-${certification.title}`} style={styles.certCard}>
              <Text style={styles.certArea}>{certification.area}</Text>
              <Text style={styles.certTitle}>{certification.title}</Text>
              <Text style={styles.certIssuer}>{certification.issuer}</Text>
              <Text style={styles.certMeta}>
                {certification.completedAt}
                {certification.hours ? ` · ${certification.hours}` : ''}
              </Text>
              <Text style={styles.certText}>{certification.focus}</Text>
              {certification.serial ? (
                <Text style={styles.certSerial}>{certification.serial}</Text>
              ) : null}
            </View>
          ))}
        </View>
        <Footer />
      </Page>

      <Page size="A4" style={styles.page}>
        <Header eyebrow="Stack, proyectos y contacto" />
        <Section num="04" title="STACK TÉCNICO" />
        <View style={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <View key={group.title} style={styles.skillCard}>
              <Text style={styles.skillTitle}>{group.title}</Text>
              <Text style={styles.skillDesc}>{group.description}</Text>
              {group.skills.map((skill) => (
                <View key={skill.name} style={styles.skillLine}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={{ marginTop: 14 }}>
          <Section num="05" title="PROYECTOS DESTACADOS" />
        </View>
        <View style={styles.projectGrid}>
          {projects.slice(0, 4).map((project) => (
            <View key={project.id} style={styles.projectCard}>
              <Text style={styles.cardMeta}>{project.category}</Text>
              <Text style={styles.cardTitle}>{project.title}</Text>
              <Text style={[styles.paragraph, styles.muted]}>{project.challenge}</Text>
              <View style={styles.tagRow}>
                {project.stack.slice(0, 4).map((tag) => (
                  <Text key={tag} style={styles.tag}>{tag}</Text>
                ))}
              </View>
              <Link src={project.href} style={[styles.coverLink, { color: palette.indigo, marginTop: 7 }]}>
                Ver proyecto
              </Link>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 14 }}>
          <Section num="06" title="CONTACTO" />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Disponible para proyectos freelance, web, e-commerce, optimización y sistemas.</Text>
          <Text style={styles.paragraph}>
            {cvData.contact.email} · {cvData.contact.phone} · {cvData.contact.location}
          </Text>
          <Text style={[styles.paragraph, styles.muted]}>
            Portfolio: {cvData.contact.portfolio} · GitHub: {cvData.contact.github}
          </Text>
        </View>
        <Footer />
      </Page>
    </Document>
  );
}
