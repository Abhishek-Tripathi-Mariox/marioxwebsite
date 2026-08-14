const AboutContent = ({ content, pageName }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-3xl">About {pageName}</h1>
      <div className="mt-20" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AboutContent;
