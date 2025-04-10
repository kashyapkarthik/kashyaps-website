import CodeLine from '@/components/CodeLine';
import Layout from '@/components/Layout';

const Advice = () => {
  return (
    <Layout>
      <div className="p-2">
        <CodeLine number={1}>
          <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;
        </CodeLine>
        <CodeLine number={2}>{''}</CodeLine>
        <CodeLine number={3}>
          <span className="keyword">const</span> <span className="function">Advice</span> = () <span>=&gt;</span> {'{'}
        </CodeLine>
        <CodeLine number={4} indent={1}>
          <span className="keyword">return</span> (
        </CodeLine>
        <CodeLine number={5} indent={2}>
          <span className="string">Professional Advice</span>
        </CodeLine>
        <CodeLine number={6} indent={3}>
          <span className="comment">// Your advice introduction goes here</span>
        </CodeLine>
        <CodeLine number={7} indent={2}>
          <span className="string">Career Development</span>
        </CodeLine>
        <CodeLine number={8} indent={3}>
          <span className="comment">// Your career advice goes here</span>
        </CodeLine>
        <CodeLine number={9} indent={2}>
          <span className="string">Professional Growth</span>
        </CodeLine>
        <CodeLine number={10} indent={3}>
          <span className="comment">// Your professional growth tips go here</span>
        </CodeLine>
        <CodeLine number={11} indent={2}>
          <span className="string">Resources</span>
        </CodeLine>
        <CodeLine number={12} indent={3}>
          <span className="comment">// Recommended resources go here</span>
        </CodeLine>
        <CodeLine number={13} indent={1}>
          );
        </CodeLine>
        <CodeLine number={14}>
          {'};'}
        </CodeLine>
        <CodeLine number={15}>{''}</CodeLine>
        <CodeLine number={16}>
          <span className="keyword">export</span> <span className="keyword">default</span> Advice;
        </CodeLine>
      </div>
    </Layout>
  );
};

export default Advice;
