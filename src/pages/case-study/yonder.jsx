import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: [
      'Yonder combines credit services with lifestyle benefits. Mariox worked across customer-facing financial workflows and supporting operational systems.',
    ],
    list: [
      'Customer onboarding',
      'Account',
      'Credit workflows',
      'Transactions',
      'Payments',
      'Lifestyle benefits',
      'Notifications',
      'Support',
      'Administration',
    ],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'Financial decision-making needed to remain controlled while the customer experience had to remain simple.',
    ],
  },
  {
    title: 'Mariox Approach',
    paragraphs: [
      'We separated financial business logic from the presentation layer so that changes to financial rules would not require rebuilding the complete customer application.',
    ],
  },
  {
    title: 'Security',
    list: ['Authentication', 'Authorization', 'API protection', 'Role-based access', 'Sensitive data handling'],
  },
  {
    title: 'Outcome',
    paragraphs: [
      'A consumer-friendly financial platform with a backend structure capable of supporting evolving financial and lifestyle services.',
    ],
  },
];

const YonderCaseStudy = () => (
  <CaseStudyDetail
    slug="yonder"
    companyName="Yonder"
    tagline="— Credit & Lifestyle Finance"
    metaTags={['UK', 'FinTech', 'App + Web']}
    heroImage="/img/cs/yonder/yonder.png"
    galleryImages={[
      '/img/cs/yonder/yonder1.png',
      '/img/cs/yonder/yonder2.png',
      '/img/cs/yonder/yonder3.png',
      '/img/cs/yonder/yonder4.png',
    ]}
    sections={sections}
    seoTitle="Yonder Case Study | Mariox"
    seoDescription="How Mariox built Yonder's credit and lifestyle finance platform, separating financial business logic from a simple consumer-facing experience."
  />
);

export default YonderCaseStudy;
