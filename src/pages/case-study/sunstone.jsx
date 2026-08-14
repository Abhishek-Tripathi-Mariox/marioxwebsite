import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: [
      'Sunstone required a broader digital ecosystem covering students, academics and institutional operations.',
    ],
    list: ['Student management', 'Academic information', 'Attendance', 'Communication', 'Notifications', 'Reports', 'Administration'],
  },
  {
    title: 'Challenge',
    paragraphs: ['Higher education involves multiple departments working with the same student information.'],
  },
  {
    title: 'Solution',
    paragraphs: ['We created shared data structures with role and department-specific access.'],
  },
  {
    title: 'Mobile',
    paragraphs: ['Focused on the student’s everyday academic experience.'],
  },
  {
    title: 'Web',
    paragraphs: ['Focused on institutional and administrative workflows.'],
  },
  {
    title: 'Outcome',
    paragraphs: ['A connected platform linking student-facing services with institutional operations.'],
  },
];

const SunstoneCaseStudy = () => (
  <CaseStudyDetail
    slug="sunstone"
    companyName="Sunstone"
    tagline="— Higher Education Platform"
    metaTags={['India', 'EdTech', 'App + Web']}
    heroImage="/img/cs/sunstone/sunstone.png"
    galleryImages={[
      '/img/cs/sunstone/sunstone1.png',
      '/img/cs/sunstone/sunstone2.png',
      '/img/cs/sunstone/sunstone3.png',
      '/img/cs/sunstone/sunstone4.png',
      '/img/cs/sunstone/sunstone5.png',
    ]}
    sections={sections}
    seoTitle="Sunstone Case Study | Mariox"
    seoDescription="How Mariox built Sunstone's higher education platform connecting student-facing services with institutional and departmental operations."
  />
);

export default SunstoneCaseStudy;
