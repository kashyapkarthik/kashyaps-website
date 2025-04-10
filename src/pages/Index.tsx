
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Hello, I'm Kashyap Karthik</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="mb-3">
            I'm a passionate software developer and educator with experience in building web applications
            and teaching programming concepts to students of all levels.
          </p>
          <p>
            I believe in creating clean, efficient code and helping others understand
            the beauty of programming through clear explanations and practical examples.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills & Interests</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Web Development (React, TypeScript, Node.js)</li>
            <li>Computer Science Education</li>
            <li>Algorithm Design & Problem Solving</li>
            <li>Technical Content Creation</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Background</h2>
          <p>
            With a background in computer science and education, I focus on bridging the gap
            between complex technical concepts and clear, accessible learning experiences.
            I regularly create content through my YouTube channel and provide personalized
            tutoring for students looking to improve their programming skills.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
