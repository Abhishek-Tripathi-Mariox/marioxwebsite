import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: ['Testbook provides students with preparation material, mock tests and performance tracking.'],
    list: ['Courses', 'Questions', 'Mock tests', 'Assessments', 'Results', 'Rankings', 'Performance', 'Content management'],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'Exam platforms experience unpredictable traffic spikes, especially when thousands of students begin a test simultaneously.',
    ],
  },
  {
    title: 'Solution',
    paragraphs: ['Mariox focused on optimized APIs, database queries, caching and assessment workflows.'],
    list: [
      'High-concurrency handling',
      'API optimization',
      'Database optimization',
      'Caching',
      'Session management',
      'Result processing',
    ],
  },
  {
    title: 'QA',
    paragraphs: ['Testing included:'],
    list: [
      'Timed exams',
      'Scoring',
      'Question delivery',
      'Result generation',
      'Interrupted sessions',
      'Concurrent activity',
    ],
  },
  {
    title: 'Outcome',
    paragraphs: ['A platform designed around peak examination traffic rather than average daily usage.'],
  },
];

const TestbookCaseStudy = () => (
  <CaseStudyDetail
    slug="testbook"
    companyName="Testbook"
    tagline="— Exam Preparation Platform"
    metaTags={['India', 'EdTech', 'App + Web']}
    heroImage="/img/cs/testbook/testbook.png"
    galleryImages={[
      '/img/cs/testbook/testbook1.png',
      '/img/cs/testbook/testbook2.png',
      '/img/cs/testbook/testbook3.png',
    ]}
    sections={sections}
    seoTitle="Testbook Case Study | Mariox"
    seoDescription="How Mariox built Testbook's exam preparation platform to handle high-concurrency exam traffic with optimized APIs, caching and assessment workflows."
  />
);

export default TestbookCaseStudy;
