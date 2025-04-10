
import React from 'react';
import Layout from '@/components/Layout';

const Tutoring = () => {
  return (
    <Layout>
      <div className="p-6 mx-0 max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Tutoring Services</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="mb-3">
            I offer personalized tutoring services for students at all levels who want to improve
            their programming skills or need help with specific computer science concepts.
          </p>
          <p>
            With my experience in both industry and education, I can provide practical insights
            and clear explanations to help you overcome challenges and achieve your learning goals.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Subjects</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Web Development (HTML, CSS, JavaScript, React)</li>
            <li>Programming Fundamentals (Python, Java)</li>
            <li>Data Structures & Algorithms</li>
            <li>Database Design & SQL</li>
            <li>Computer Science Theory</li>
            <li>Interview Preparation</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Rates</h2>
          <div className="border rounded p-4 mb-4">
            <h3 className="font-medium mb-1">One-on-One Sessions</h3>
            <p>$60 per hour</p>
          </div>
          <div className="border rounded p-4 mb-4">
            <h3 className="font-medium mb-1">Group Sessions (2-4 students)</h3>
            <p>$40 per hour per student</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-medium mb-1">Package Deals</h3>
            <p>10% discount when booking 5 or more sessions</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="mb-3">
            To request tutoring services or discuss your specific needs, please reach out via:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email: tutor@kashyapkarthik.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Contact form on this website</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Tutoring;
