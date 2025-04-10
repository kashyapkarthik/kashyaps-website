
import CodeLine from '@/components/CodeLine';
import Layout from '@/components/Layout';

const CV = () => {
  return (
    <Layout>
      <div className="p-2">
        <CodeLine number={1}>
          <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;
        </CodeLine>
        <CodeLine number={2}>{''}</CodeLine>
        <CodeLine number={3}>
          <span className="keyword">const</span> <span className="function">CV</span> = () <span>=&gt;</span> {'{'}
        </CodeLine>
        <CodeLine number={4} indent={1}>
          <span className="keyword">return</span> (
        </CodeLine>
        <CodeLine number={5} indent={2}>
          <span className="string">Curriculum Vitae</span>
        </CodeLine>
        <CodeLine number={6} indent={2}>
          <span className="string">Education</span>
        </CodeLine>
        <CodeLine number={7} indent={3}>
          <span className="comment">// Your education details go here</span>
        </CodeLine>
        <CodeLine number={8} indent={2}>
          <span className="string">Experience</span>
        </CodeLine>
        <CodeLine number={9} indent={3}>
          <span className="comment">// Your work experience goes here</span>
        </CodeLine>
        <CodeLine number={10} indent={2}>
          <span className="string">Skills</span>
        </CodeLine>
        <CodeLine number={11} indent={3}>
          <span className="comment">// Your skills go here</span>
        </CodeLine>
        <CodeLine number={12} indent={1}>
          );
        </CodeLine>
        <CodeLine number={13}>
          {'};'}
        </CodeLine>
        <CodeLine number={14}>{''}</CodeLine>
        <CodeLine number={15}>
          <span className="keyword">export</span> <span className="keyword">default</span> CV;
        </CodeLine>
      </div>
    </Layout>
  );
};

export default CV;
