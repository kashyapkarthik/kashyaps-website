import { ArrowRight, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <main className="workspace-page page-wide">
        <div className="page-kicker">home.md</div>
        <div className="about-layout">
          <section>
            <h1 className="page-title">Maths tutoring, built around practice.</h1>
            <p className="page-intro">
              I’m Kashyap, a Mathematics student at Imperial College London. I tutor GCSE and A-level maths with a simple goal: understand a topic properly, then do enough practice that it holds up in an exam.
            </p>
            <div className="action-row">
              <Link className="primary-action" to="/tutoring#enquire">
                Book an onboarding call <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="secondary-action" to="/tutoring">How tutoring works</Link>
            </div>

            <div className="highlights-grid highlights-grid-single">
              <article className="workspace-panel tutoring-highlight">
                <BookOpen size={20} aria-hidden="true" />
                <h2>More than the hour in the lesson</h2>
                <p>Every student gets a clear revision structure, carefully chosen homework, marking and feedback, regular revisiting of older topics, and support with questions and past papers between lessons.</p>
                <Link className="text-link" to="/tutoring#fees">What is included <ArrowRight size={15} aria-hidden="true" /></Link>
              </article>
            </div>
          </section>

          <aside className="about-aside">
            <section className="workspace-panel compact-panel">
              <p className="panel-label">Currently</p>
              <p className="now-item"><MapPin size={16} aria-hidden="true" /> Studying Mathematics at Imperial College London</p>
              <p className="now-item"><BookOpen size={16} aria-hidden="true" /> Taking on GCSE and A-level maths students</p>
            </section>
            <section className="workspace-panel compact-panel">
              <p className="panel-label">Selected adventures</p>
              <p><strong>2025</strong> — Hiked 1,800km from John O’Groats to Land’s End.</p>
              <p><strong>2024</strong> — Cycled 1,200km to Munich for Save Soil.</p>
              <Link className="text-link" to="/hiking">Read the route <ArrowRight size={15} aria-hidden="true" /></Link>
            </section>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
