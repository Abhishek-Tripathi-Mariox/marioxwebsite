import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: [
      'Soldo focuses on corporate spending and employee expense control. Mariox worked across employee-facing applications and the business administration platform.',
    ],
    list: ['Employees', 'Cards', 'Spending', 'Transactions', 'Policies', 'Approvals', 'Reports', 'Administration'],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'Every company can have different spending rules. The system therefore needed flexibility rather than fixed rules.',
    ],
  },
  {
    title: 'Solution',
    paragraphs: ['We introduced configurable spending policies that could be managed through the platform.'],
    list: ['Spending limits', 'Categories', 'Employee permissions', 'Approval workflows', 'Department controls'],
  },
  {
    title: 'Mobile',
    paragraphs: ['Employees could access relevant card and spending information from the application.'],
  },
  {
    title: 'Web',
    paragraphs: ['Finance and management teams could manage employees, policies, transactions and reports.'],
  },
  {
    title: 'Outcome',
    paragraphs: [
      'A flexible corporate spending platform where financial policies could evolve without requiring constant application redevelopment.',
    ],
  },
];

const SoldoCaseStudy = () => (
  <CaseStudyDetail
    slug="soldo"
    companyName="Soldo"
    tagline="— Corporate Spending Platform"
    metaTags={['UK', 'FinTech', 'App + Web']}
    heroImage="/img/cs/soldo/soldo.png"
    galleryImages={[
      '/img/cs/soldo/soldo1.png',
      '/img/cs/soldo/soldo2.png',
      '/img/cs/soldo/soldo4.png',
    ]}
    sections={sections}
    seoTitle="Soldo Case Study | Mariox"
    seoDescription="How Mariox built Soldo's corporate spending platform with configurable spending policies across employee app and business admin web."
  />
);

export default SoldoCaseStudy;
