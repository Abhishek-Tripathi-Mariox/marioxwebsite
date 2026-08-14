import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: ['Graphy connects educators and learners through an online course ecosystem.'],
    list: [
      'Course discovery',
      'Course management',
      'Video learning',
      'Assessments',
      'Progress',
      'Certificates',
      'Student management',
      'Creator management',
      'Reports',
    ],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'The platform was heavily dependent on digital content, particularly video and files. Handling large media directly through application servers can create unnecessary infrastructure pressure.',
    ],
  },
  {
    title: 'Mariox Solution',
    paragraphs: ['We separated application processing from media storage and delivery.'],
  },
  {
    title: 'Student App',
    list: ['Courses', 'Learning', 'Video', 'Progress', 'Assessments', 'Certificates', 'Notifications'],
  },
  {
    title: 'Creator/Admin Web',
    list: ['Course creation', 'Content management', 'Students', 'Reports', 'Assessments', 'Platform management'],
  },
  {
    title: 'Outcome',
    paragraphs: [
      'A scalable learning platform where educational content and application operations could grow independently.',
    ],
  },
];

const GraphyCaseStudy = () => (
  <CaseStudyDetail
    slug="graphy"
    companyName="Graphy"
    tagline="— Online Learning Platform"
    metaTags={['India', 'EdTech', 'App + Web']}
    heroImage="/img/cs/graphy/graphy.png"
    galleryImages={[
      '/img/cs/graphy/graphy1.png',
      '/img/cs/graphy/graphy2.png',
      '/img/cs/graphy/graphy3.png',
      '/img/cs/graphy/graphy4.png',
      '/img/cs/graphy/graphy5.png',
    ]}
    sections={sections}
    seoTitle="Graphy Case Study | Mariox"
    seoDescription="How Mariox built Graphy's online learning platform, separating media-heavy course delivery from application and creator/admin workflows."
  />
);

export default GraphyCaseStudy;
