import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Product Overview',
    paragraphs: [
      'Learnosity focuses on digital assessment, requiring reliable question management, assessment delivery and scoring.',
    ],
    list: ['Question management', 'Assessment creation', 'Test delivery', 'Scoring', 'Results', 'Reporting'],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'Assessment systems require extremely high accuracy because incorrect scoring can directly affect the validity of a test.',
    ],
  },
  {
    title: 'Solution',
    paragraphs: ['We separated question content, assessment configuration and scoring logic.'],
  },
  {
    title: 'QA',
    paragraphs: ['Major testing areas:'],
    list: ['Question behavior', 'Assessment logic', 'Scoring', 'Result generation', 'Edge cases', 'Regression'],
  },
  {
    title: 'Outcome',
    paragraphs: ['A maintainable assessment platform designed around reliability and accuracy.'],
  },
];

const LearnosityCaseStudy = () => (
  <CaseStudyDetail
    slug="learnosity"
    companyName="Learnosity"
    tagline="— Digital Assessment Platform"
    metaTags={['Australia', 'EdTech', 'Web']}
    heroImage="/img/cs/learnosity/learnosity.png"
    galleryImages={[
      '/img/cs/learnosity/learnosity1.png',
      '/img/cs/learnosity/learnosity2.png',
      '/img/cs/learnosity/learnosity3.png',
      '/img/cs/learnosity/learnosity4.png',
    ]}
    sections={sections}
    seoTitle="Learnosity Case Study | Mariox"
    seoDescription="How Mariox built Learnosity's digital assessment platform, separating question content, configuration and scoring logic for reliability and accuracy."
  />
);

export default LearnosityCaseStudy;
