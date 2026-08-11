import { ArrowRight, BookOpen, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <main className="workspace-page page-wide">
        <div className="page-kicker">about.md</div>
        <div className="about-layout">
          <section>
            <h1 className="page-title">Hello, I’m Kashyap.</h1>
            <p className="page-intro">
              I’m a maths student at Imperial College London. I enjoy difficult problems, helping people make sense of them, and taking on adventures with a slightly unreasonable number of kilometres involved.
            </p>
            <div className="action-row">
              <Link className="primary-action" to="/tutoring#enquire">
                Find out about tutoring <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="secondary-action" to="/hiking">See the adventures</Link>
            </div>

            <div className="highlights-grid">
              <article className="workspace-panel">
                <BookOpen size={20} aria-hidden="true" />
                <h2>Teaching maths</h2>
                <p>Over 150 hours of GCSE and A-level tutoring, with an emphasis on understanding rather than memorising.</p>
                <Link className="text-link" to="/tutoring">Tutoring details <ArrowRight size={15} aria-hidden="true" /></Link>
              </article>
              <article className="workspace-panel">
                <Sparkles size={20} aria-hidden="true" />
                <h2>Building Lumina Maths</h2>
                <p>A focused revision resource based on the help I wanted as both a student and tutor.</p>
                <Link className="text-link" to="/projects">Project notes <ArrowRight size={15} aria-hidden="true" /></Link>
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
