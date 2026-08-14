import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Project Overview',
    paragraphs: [
      'The product required an international financial ecosystem capable of supporting business payments, multiple currencies and market-specific requirements. Mariox focused on creating a modular structure that could support expansion.',
    ],
    list: [
      'Business accounts',
      'Payments',
      'Transactions',
      'Currency workflows',
      'User management',
      'Reports',
      'Notifications',
      'Integrations',
    ],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'Different markets can have different financial and operational requirements. Building every market independently creates long-term maintenance problems.',
    ],
  },
  {
    title: 'Mariox Approach',
    paragraphs: [
      'We designed the major business workflows as configurable components around a common backend foundation.',
    ],
    list: [
      'Modular architecture',
      'API abstraction',
      'Configurable workflows',
      'Centralized business logic',
      'External service isolation',
      'Scalable infrastructure',
    ],
  },
  {
    title: 'App & Web',
    paragraphs: [
      'The application focused on everyday business activity while the web platform provided deeper financial and administrative controls.',
    ],
  },
  {
    title: 'Outcome',
    paragraphs: [
      'A platform architecture capable of supporting additional financial services and markets without rebuilding the entire system.',
    ],
  },
];

const AirwallexCaseStudy = () => (
  <CaseStudyDetail
    slug="airwallex"
    companyName="Airwallex"
    tagline="— Global Business Payments"
    metaTags={['Australia / Global', 'FinTech', 'App + Web']}
    heroImage="/img/cs/airwallex/AirWallex.png"
    galleryImages={[
      '/img/cs/airwallex/AirWallex1.png',
      '/img/cs/airwallex/AirWallex2.png',
      '/img/cs/airwallex/AirWallex3.png',
      '/img/cs/airwallex/AirWallex4.png',
      '/img/cs/airwallex/AirWallex5.png',
    ]}
    sections={sections}
    seoTitle="Airwallex Case Study | Mariox"
    seoDescription="How Mariox designed a modular global business payments architecture for Airwallex across app, web and backend, built to scale across markets."
  />
);

export default AirwallexCaseStudy;
