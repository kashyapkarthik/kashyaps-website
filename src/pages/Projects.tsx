import { ArrowUpRight, BookOpenCheck, Lightbulb } from 'lucide-react';
import Layout from '@/components/Layout';

const Projects = () => {
  return (
    <Layout>
      <main className="workspace-page page-wide">
        <div className="page-kicker">projects.ts</div>
        <div className="project-layout">
          <section>
            <h1 className="page-title">Things I’m building</h1>
            <p className="page-intro">
              I like building useful things from the perspective of the person who needed them a year ago.
            </p>

            <article className="workspace-panel project-feature">
              <div className="panel-heading">
                <div>
                  <p className="panel-label">In progress</p>
                  <h2>Lumina Maths</h2>
                </div>
                <Lightbulb size={20} aria-hidden="true" />
              </div>
              <p>
                A revision resource for GCSE and A-level maths, designed around the questions, explanations, and
                exam feedback I wish I had both as a student and as a tutor.
              </p>
              <ul className="feature-list">
                <li>Specification-matched practice and mark schemes</li>
                <li>Clear help for getting unstuck on a topic</li>
                <li>A focused experience that leaves room for the maths</li>
              </ul>
            </article>
          </section>

          <aside className="space-y-4">
            <section className="workspace-panel compact-panel">
              <BookOpenCheck size={20} aria-hidden="true" />
              <h2>Built from tutoring</h2>
              <p>
                The best ideas come from seeing where students lose confidence—and making the next step obvious.
              </p>
            </section>
            <a className="text-link" href="/tutoring">
              Looking for maths support? <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Projects;
