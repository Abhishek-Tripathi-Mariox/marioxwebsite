import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: [
      'Zeller is focused on business banking and payments, requiring a platform where companies can manage financial activity while giving employees and administrators controlled access.',
    ],
    list: [
      'Business accounts',
      'Transactions',
      'Payments',
      'Employees',
      'Permissions',
      'Reports',
      'Notifications',
      'Administration',
    ],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'The product needed to support everyday business activity while maintaining financial accuracy and controlled access.',
    ],
  },
  {
    title: 'Mariox Solution',
    paragraphs: [
      'We separated transactional operations from reporting and dashboard workloads so that reporting requirements would not unnecessarily affect core financial processing.',
    ],
  },
  {
    title: 'App',
    list: ['Account', 'Transactions', 'Payments', 'Notifications', 'Profile', 'Business activity'],
  },
  {
    title: 'Web',
    list: ['Business management', 'Employee management', 'Permissions', 'Reports', 'Transactions', 'Administration'],
  },
  {
    title: 'Security',
    list: [
      'Role-based access',
      'Secure APIs',
      'Authentication',
      'Permission validation',
      'Controlled financial operations',
    ],
  },
  {
    title: 'Outcome',
    paragraphs: [
      'A business-focused financial ecosystem combining everyday banking activity with deeper management and reporting capabilities.',
    ],
  },
];

const ZellerCaseStudy = () => (
  <CaseStudyDetail
    slug="myzeller"
    companyName="Zeller"
    tagline="— Business Banking & Payments"
    metaTags={['Australia', 'FinTech', 'App + Web']}
    heroImage="/img/cs/myzelller/myzeller.png"
    galleryImages={[
      '/img/cs/myzelller/myzeller1.png',
      '/img/cs/myzelller/myzeller2.png',
      '/img/cs/myzelller/myzeller3.png',
      '/img/cs/myzelller/myzeller4.png',
      '/img/cs/myzelller/myzeller5.png',
    ]}
    sections={sections}
    seoTitle="Zeller Case Study | Mariox"
    seoDescription="How Mariox built Zeller's business banking and payments platform with role-based access for employees, business owners and administrators."
  />
);

export default ZellerCaseStudy;
