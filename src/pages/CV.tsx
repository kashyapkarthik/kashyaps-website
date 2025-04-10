
import React from 'react';
import Layout from '@/components/Layout';

const CV = () => {
  return (
    <Layout>
      <div className="p-6 mx-0 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Curriculum Vitae</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <div className="mb-4">
            <h3 className="font-medium">Master of Computer Science</h3>
            <p className="text-sm text-gray-600">Stanford University, 2018-2020</p>
            <p>Specialized in Machine Learning and Artificial Intelligence</p>
          </div>
          <div>
            <h3 className="font-medium">Bachelor of Engineering in Computer Science</h3>
            <p className="text-sm text-gray-600">MIT, 2014-2018</p>
            <p>Graduated with honors, GPA 3.9/4.0</p>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="font-medium">Senior Software Engineer</h3>
            <p className="text-sm text-gray-600">Google, 2020-Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Leading development of key features for Google Cloud Platform</li>
              <li>Mentoring junior engineers and conducting technical interviews</li>
              <li>Implementing scalable solutions using React and TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Software Developer</h3>
            <p className="text-sm text-gray-600">Microsoft, 2018-2020</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Contributed to Azure DevOps services development</li>
              <li>Improved CI/CD pipeline performance by 30%</li>
              <li>Collaborated with cross-functional teams to deliver features</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-1">Programming Languages</h3>
              <p>JavaScript, TypeScript, Python, Java, C++</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Frameworks & Libraries</h3>
              <p>React, Node.js, Express, TensorFlow</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Tools & Platforms</h3>
              <p>Git, Docker, AWS, Google Cloud</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Soft Skills</h3>
              <p>Leadership, Communication, Problem-solving</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CV;
