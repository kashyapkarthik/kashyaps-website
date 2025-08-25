import React from 'react';
import Layout from '@/components/Layout';

const CV = () => {
  return (
    <Layout>
      <div className="p-6 mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Kashyap Karthik</h1>
          <div className="text-gray-400">
            <p>Bristol, United Kingdom</p>
            <p>07577063863 | kashyapkarthik2000@gmail.com</p>
          </div>
        </div>

        {/* Profile Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Profile</h2>
          <p className="mb-3">
            A hard-working student who doesn't waste your time by writing fluff here.
          </p>
          <p className="mb-3">
            My primary skills are learning fast and adapting to the changing world around me.
            Interested in solving hard problems in novel ways.
          </p>
        </section>

        {/* Employment History */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Employment History</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Mathematics Tutor</h3>
                <p className="text-sm text-gray-400">Self-employed — Bristol</p>
              </div>
              <p className="text-sm text-gray-400">Oct 2024 — Present</p>
            </div>
            <p className="mb-2">
              Teaching maths the way I wish I was taught. Approaching lessons as a friend rather than a teacher has made students learn better, lessons go faster, and their grades improve as a byproduct of enjoying doing maths.
            </p>
            <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-400">
              "Kashyap has a relaxed, peer to peer approach which has helped our son improve his confidence with the subject. Kashyap encourages our son with his strengths but also challenges him to go further. The lessons have translated into better results at school. We would definitely recommend Kashyap."
            </blockquote>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Founder</h3>
                <p className="text-sm text-gray-400">Lumina Maths</p>
              </div>
              <p className="text-sm text-gray-400">Mar 2025 — Present</p>
            </div>
            <p>
              Creating the resources I wish I had as a student and as a teacher. Leveraging my unique experiences - as a teenager and experienced maths tutor - with the latest AI technologies to create the ultimate revision resource. We provide the most helpful maths assistant, a massive database of specification-matched questions with accurate markschemes, and a no-nonsense user experience to help students master any topic.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Squash Coach</h3>
                <p className="text-sm text-gray-400">Redland Green Squash Club</p>
              </div>
              <p className="text-sm text-gray-400">Dec 2022 — Jan 2024</p>
            </div>
            <p>
              Delivered high-quality coaching to a group of 13-15 year old kids. Communicated effectively and built a rapport with each child.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Volunteer</h3>
                <p className="text-sm text-gray-400">Save Soil</p>
              </div>
              <p className="text-sm text-gray-400">Jun 2022 — Present</p>
            </div>
            <p className="mb-2">
              Helped organise events, fundraisers and raise awareness for the global soil crisis. Highlights:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cycled 1200km over 2.5 weeks to Munich. Raised £1500 and reached over 50k people. Was featured in a local newspaper: <a href="https://www.bristol247.com/climate/news-climate/continental-cycle-save-soil/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.bristol247.com/climate/news-climate/continental-cycle-save-soil/</a></li>
              <li>Helped organise a community soil fair, which got my community together and engaging with soil.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Education</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">BSc Mathematics</h3>
                <p className="text-sm text-gray-400">Imperial College London</p>
              </div>
              <p className="text-sm text-gray-400">Sep 2025 — Jul 2028</p>
            </div>
            <p>Starting my studies in September 2025</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">A-level</h3>
                <p className="text-sm text-gray-400">Bristol Grammar School</p>
              </div>
              <p className="text-sm text-gray-400">Sep 2022 — Jul 2024</p>
            </div>
            <p className="mb-2">A* - Mathematics, A* - Further Mathematics, A* - Physics, A - Computer Science</p>
            <p>Grade 2 in STEP 2, Merit in Advanced Extension Award and awarded the H.J Godwin Prize in mathematics. Headmaster's Scholar.</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">GCSE</h3>
                <p className="text-sm text-gray-400">Redland Green School</p>
              </div>
              <p className="text-sm text-gray-400">Oct 2019 — Jul 2022</p>
            </div>
            <p>Achieved 9, 9, 9, 9, 9, 9, 9, 9, 8 - Second highest in year.</p>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Languages</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>English (Native speaker)</li>
            <li>Tamil (Very good command)</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default CV;
