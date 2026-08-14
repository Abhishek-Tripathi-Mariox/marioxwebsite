import CaseStudyDetail from '@/components/CaseStudyDetail/CaseStudyDetail';

const sections = [
  {
    title: 'Product Overview',
    paragraphs: ['Cluey Learning connects students and tutors through online tutoring workflows.'],
    list: ['Student profiles', 'Tutor profiles', 'Tutor discovery', 'Availability', 'Booking', 'Sessions', 'Notifications', 'Reports'],
  },
  {
    title: 'Challenge',
    paragraphs: [
      'Scheduling is more complicated than a normal calendar because both students and tutors have availability constraints.',
    ],
  },
  {
    title: 'Mariox Solution',
    paragraphs: ['Availability, booking and session management were connected into a single workflow.'],
  },
  {
    title: 'App',
    paragraphs: ['Focused on the student’s tutoring journey.'],
  },
  {
    title: 'Web',
    paragraphs: ['Focused on tutor and operational management.'],
  },
  {
    title: 'Outcome',
    paragraphs: ['A connected tutoring platform where booking and availability remained synchronized.'],
  },
];

const ClueyLearningCaseStudy = () => (
  <CaseStudyDetail
    slug="clueylearning"
    companyName="Cluey Learning"
    tagline="— Online Tutoring Platform"
    metaTags={['Australia', 'EdTech', 'App + Web']}
    heroImage="/img/cs/clueylearning/clueylearning.png"
    galleryImages={[
      '/img/cs/clueylearning/clueylearning1.png',
      '/img/cs/clueylearning/clueylearning2.png',
      '/img/cs/clueylearning/clueylearning3.png',
    ]}
    sections={sections}
    seoTitle="Cluey Learning Case Study | Mariox"
    seoDescription="How Mariox built Cluey Learning's online tutoring platform, connecting availability, booking and session management into one workflow."
  />
);

export default ClueyLearningCaseStudy;
