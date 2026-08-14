import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Product Overview',
    paragraphs: ['Teachmint connects schools, teachers, students and parents through a common digital ecosystem.'],
    list: ['Attendance', 'Classes', 'Assignments', 'Communication', 'Student records', 'Notifications', 'Reports', 'School administration'],
  },
  {
    title: 'Challenge',
    paragraphs: ['Every user type requires different information and permissions.'],
  },
  {
    title: 'Solution',
    paragraphs: ['We designed the system around role-based workflows.'],
    list: ['Student', 'Parent', 'Teacher', 'School Administrator'],
  },
  {
    title: 'App',
    paragraphs: ['Focused on classroom and student activities.'],
  },
  {
    title: 'Web',
    paragraphs: ['Focused on school and administrative management.'],
  },
  {
    title: 'Security',
    paragraphs: [
      'Backend-level role validation ensured that users could only access their permitted information.',
    ],
  },
  {
    title: 'Outcome',
    paragraphs: ['A connected school management ecosystem rather than separate tools for each user group.'],
  },
];

const TeachmintCaseStudy = () => (
  <CaseStudyDetail
    slug="teachmint"
    companyName="Teachmint"
    tagline="— School & Classroom Management"
    metaTags={['India', 'EdTech', 'App + Web']}
    heroImage="/img/cs/teachmint/teachmint.png"
    galleryImages={[
      '/img/cs/teachmint/teachmint1.png',
      '/img/cs/teachmint/teachmint2.png',
      '/img/cs/teachmint/teachmint3.png',
      '/img/cs/teachmint/teachmint4.png',
      '/img/cs/teachmint/teachmint5.png',
    ]}
    sections={sections}
    seoTitle="Teachmint Case Study | Mariox"
    seoDescription="How Mariox built Teachmint's school and classroom management ecosystem with role-based workflows for students, parents, teachers and administrators."
  />
);

export default TeachmintCaseStudy;
