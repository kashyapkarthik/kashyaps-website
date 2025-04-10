
import React from 'react';
import Layout from '@/components/Layout';

const YouTube = () => {
  return (
    <Layout>
      <div className="p-6 mx-0">
        <h1 className="text-2xl font-bold mb-4">My YouTube Channel</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Channel Description</h2>
          <p className="mb-3">
            Welcome to my YouTube channel where I share programming tutorials, computer science concepts,
            and coding tips for students and developers at all skill levels.
          </p>
          <p>
            My goal is to break down complex technical concepts into clear, easy-to-understand
            explanations that help you improve your programming skills.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Understanding React Hooks</h3>
              <p className="text-sm text-gray-600 mb-2">Learn how hooks revolutionize state management in React</p>
              <div className="bg-gray-200 h-40 flex items-center justify-center">Video Thumbnail</div>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Data Structures for Beginners</h3>
              <p className="text-sm text-gray-600 mb-2">Master the fundamentals of arrays, linked lists, and more</p>
              <div className="bg-gray-200 h-40 flex items-center justify-center">Video Thumbnail</div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Playlists</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Web Development Fundamentals</li>
            <li>Data Structures & Algorithms</li>
            <li>Coding Interview Preparation</li>
            <li>React & TypeScript Tutorials</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default YouTube;
