
import React from 'react';
import Layout from '@/components/Layout';

const Advice = () => {
  return (
    <Layout>
      <div className="p-6 mx-0 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Professional Advice</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="mb-3">
            Based on my experience in the tech industry and education, I offer guidance
            to help you navigate your career in software development and computer science.
          </p>
          <p>
            Whether you're just starting out or looking to advance in your current role,
            the advice here can help you make informed decisions about your professional path.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Career Development</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-1">For Beginners</h3>
            <p>
              Focus on building a strong foundation in programming fundamentals before
              specializing. Create small projects that demonstrate your skills and understanding.
              Consider contributing to open-source projects to gain real-world experience.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-1">For Experienced Professionals</h3>
            <p>
              Stay updated with emerging technologies while deepening expertise in your
              specialization. Build your personal brand through speaking, writing, or
              mentoring. Consider leadership roles or specialized technical paths based on your strengths.
            </p>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Professional Growth</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Continuous Learning:</strong> Dedicate time each week to learning new technologies or improving existing skills.
            </li>
            <li>
              <strong>Networking:</strong> Build meaningful professional relationships through meetups, conferences, and online communities.
            </li>
            <li>
              <strong>Portfolio Development:</strong> Regularly update your projects to showcase your latest skills and accomplishments.
            </li>
            <li>
              <strong>Work-Life Balance:</strong> Maintain sustainable work habits to prevent burnout and maintain long-term productivity.
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-1">Books</h3>
              <ul className="list-disc pl-5">
                <li>Clean Code by Robert C. Martin</li>
                <li>The Pragmatic Programmer by David Thomas</li>
                <li>Cracking the Coding Interview by Gayle L. McDowell</li>
              </ul>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-1">Online Platforms</h3>
              <ul className="list-disc pl-5">
                <li>LeetCode for algorithm practice</li>
                <li>Coursera and Udemy for structured courses</li>
                <li>GitHub for project collaboration</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Advice;
