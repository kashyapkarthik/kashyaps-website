
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <Layout>
      <div className="p-6 h-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Hello, I'm Kashyap Karthik</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          <Card className="bg-secondary/50 border-border">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="mb-3">
                I'm a passionate software developer and educator with experience in building web applications
                and teaching programming concepts to students of all levels.
              </p>
              <p>
                I believe in creating clean, efficient code and helping others understand
                the beauty of programming through clear explanations and practical examples.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/50 border-border">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Skills & Interests</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Web Development (React, TypeScript, Node.js)</li>
                <li>Computer Science Education</li>
                <li>Algorithm Design & Problem Solving</li>
                <li>Technical Content Creation</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/50 border-border">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Background</h2>
              <p>
                With a background in computer science and education, I focus on bridging the gap
                between complex technical concepts and clear, accessible learning experiences.
                I regularly create content through my YouTube channel and provide personalized
                tutoring for students looking to improve their programming skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
