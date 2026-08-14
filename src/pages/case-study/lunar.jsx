import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: [
      'Lunar required a modern banking ecosystem covering customer banking experiences and operational management.',
    ],
    list: [
      'Digital onboarding',
      'Accounts',
      'Transactions',
      'Payments',
      'Notifications',
      'Customer management',
      'Reports',
      'Administration',
    ],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'The product needed to feel simple while maintaining strict control over sensitive financial operations.',
    ],
  },
  {
    title: 'Mariox Solution',
    paragraphs: ['Security and permissions were incorporated into the core architecture.'],
    list: [
      'Authentication',
      'Authorization',
      'Session management',
      'Role-based access',
      'Transaction controls',
      'Activity tracking',
      'Secure APIs',
    ],
  },
  {
    title: 'QA',
    paragraphs: [
      'Testing covered authentication, permissions, financial workflows, failure scenarios and administrative access.',
    ],
  },
  {
    title: 'Outcome',
    paragraphs: ['A clean digital banking experience supported by a controlled operational backend.'],
  },
];

const LunarCaseStudy = () => (
  <CaseStudyDetail
    slug="lunar"
    companyName="Lunar"
    tagline="— Digital Banking Platform"
    metaTags={['Denmark', 'Digital Banking', 'App + Web']}
    heroImage="/img/cs/lunar/lunar.png"
    galleryImages={[
      '/img/cs/lunar/luner1.png',
      '/img/cs/lunar/luner2.png',
      '/img/cs/lunar/luner3.png',
    ]}
    sections={sections}
    seoTitle="Lunar Case Study | Mariox"
    seoDescription="How Mariox built Lunar's digital banking platform with security and permissions incorporated into the core architecture."
  />
);

export default LunarCaseStudy;
