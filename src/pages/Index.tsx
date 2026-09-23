import { ArrowRight, BookOpen, MapPin, Mountain, Sigma } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <main className="workspace-page page-wide">
        <div className="page-kicker">home.md</div>
        <div className="about-layout">
          <section>
            <h1 className="page-title">Hi, I’m Kashyap.</h1>
            <p className="page-intro">
              I’m an experienced maths tutor studying Mathematics at Imperial College London,{' '}
              <a
                className="inline-link"
                href="https://www.topuniversities.com/qs-top-uni-wur"
                target="_blank"
                rel="noopener noreferrer"
              >
                ranked second in the world
              </a>{' '}
              in the 2027 QS World University Rankings.
            </p>
            <p className="home-follow-up">
              Most of my time currently goes into premium GCSE and A-level tutoring. I give students the structure and individual support to practise properly and make their progress last.
            </p>
            <div className="action-row">
              <Link className="primary-action" to="/tutoring#enquire">
                Book a short call <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="secondary-action" to="/tutoring">Tutoring details</Link>
            </div>

            <section className="maths-note" aria-labelledby="maths-note-title">
              <Sigma size={21} aria-hidden="true" />
              <div>
                <p className="panel-label" id="maths-note-title">Why maths?</p>
                <p>Maths is something I genuinely enjoy. There’s a particular satisfaction in taking a difficult idea apart until the underlying logic becomes clear, and I love helping students reach that same point.</p>
              </div>
            </section>

            <div className="highlights-grid">
              <article className="workspace-panel">
                <BookOpen size={20} aria-hidden="true" />
                <h2>Premium maths tutoring</h2>
                <p>Focused GCSE and A-level support that turns careful practice into stronger exam performance.</p>
                <Link className="text-link" to="/tutoring">How I work <ArrowRight size={15} aria-hidden="true" /></Link>
              </article>
              <article className="workspace-panel">
                <Mountain size={20} aria-hidden="true" />
                <h2>Adventures</h2>
                <p>In 2025 I hiked 1,800km from John O’Groats to Land’s End. Before that, I cycled 1,200km to Munich for Save Soil.</p>
                <Link className="text-link" to="/hiking">Read the route <ArrowRight size={15} aria-hidden="true" /></Link>
              </article>
            </div>
          </section>

          <aside className="about-aside">
            <section className="workspace-panel compact-panel">
              <p className="panel-label">Currently</p>
              <p className="now-item"><MapPin size={16} aria-hidden="true" /> Studying Mathematics at Imperial College London</p>
              <p className="now-item"><BookOpen size={16} aria-hidden="true" /> Teaching GCSE and A-level maths</p>
            </section>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
