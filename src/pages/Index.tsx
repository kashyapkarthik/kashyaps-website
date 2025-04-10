
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <Layout>
      <div className="p-6 h-full flex flex-col">
        <h1 className="text-3xl font-bold mb-8 text-center">Hello, I'm Kashyap Karthik</h1>
        
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          <div className="md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p>
              I'm a passionate software developer and educator with experience in building web applications
              and teaching programming concepts to students of all levels.
            </p>
            <p>
              I believe in creating clean, efficient code and helping others understand
              the beauty of programming through clear explanations and practical examples.
            </p>
          </div>
          
          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-full bg-border/50" />
          </div>
          
          <div className="md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">Skills & Interests</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Web Development (React, TypeScript, Node.js)</li>
              <li>Computer Science Education</li>
              <li>Algorithm Design & Problem Solving</li>
              <li>Technical Content Creation</li>
              <li>Open Source Contribution</li>
              <li>Full-Stack Development</li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-full bg-border/50" />
          </div>
          
          <div className="md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">Background</h2>
            <p>
              With a background in computer science and education, I focus on bridging the gap
              between complex technical concepts and clear, accessible learning experiences.
            </p>
            <p>
              I regularly create content through my YouTube channel and provide personalized
              tutoring for students looking to improve their programming skills.
            </p>
            <p>
              My professional journey has given me experience across various domains including
              web development, education technology, and technical communication.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
