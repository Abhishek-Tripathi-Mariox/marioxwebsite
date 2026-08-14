import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Product Overview',
    paragraphs: ['Seneca Learning focuses on digital learning and student engagement.'],
    list: ['Learning modules', 'Quizzes', 'Progress', 'Performance', 'Recommendations', 'Notifications', 'Content management'],
  },
  {
    title: 'Challenge',
    paragraphs: ['The product needed to understand more than whether a student simply opened a lesson.'],
  },
  {
    title: 'Solution',
    paragraphs: [
      'Learning activity and progress were connected to create a more continuous learning experience.',
    ],
  },
  {
    title: 'UX Focus',
    paragraphs: [
      'The interface was designed to encourage continued learning through visible progress, feedback and activity.',
    ],
  },
  {
    title: 'Outcome',
    paragraphs: ['A learning experience where content, activity and student progress worked together.'],
  },
];

const SenecaLearningCaseStudy = () => (
  <CaseStudyDetail
    slug="senecalearning"
    companyName="Seneca Learning"
    tagline="— Digital Learning Platform"
    metaTags={['UK', 'EdTech', 'App + Web']}
    heroImage="/img/cs/senecalearning/senecalearning.png"
    galleryImages={[
      '/img/cs/senecalearning/senecalearning1.png',
      '/img/cs/senecalearning/senecalearning2.png',
      '/img/cs/senecalearning/senecalearning3.png',
      '/img/cs/senecalearning/senecalearning4.png',
    ]}
    sections={sections}
    seoTitle="Seneca Learning Case Study | Mariox"
    seoDescription="How Mariox built Seneca Learning's digital learning platform, connecting activity and progress into a continuous learning experience."
  />
);

export default SenecaLearningCaseStudy;
