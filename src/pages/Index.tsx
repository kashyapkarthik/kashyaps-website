
import CodeLine from '@/components/CodeLine';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="p-2">
        <CodeLine number={1}>
          <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;
        </CodeLine>
        <CodeLine number={2}>{''}</CodeLine>
        <CodeLine number={3}>
          <span className="keyword">const</span> <span className="function">AboutMe</span> = () <span>=&gt;</span> {'{'}
        </CodeLine>
        <CodeLine number={4} indent={1}>
          <span className="keyword">return</span> (
        </CodeLine>
        <CodeLine number={5} indent={2}>
          <span className="string">Hello, I'm Kashyap Karthik</span>
        </CodeLine>
        <CodeLine number={6} indent={2}>
          <span className="comment">// Brief introduction</span>
        </CodeLine>
        <CodeLine number={7} indent={2}>
          <span className="comment">// Skills and interests</span>
        </CodeLine>
        <CodeLine number={8} indent={2}>
          <span className="comment">// Background information</span>
        </CodeLine>
        <CodeLine number={9} indent={1}>
          );
        </CodeLine>
        <CodeLine number={10}>
          {'};'}
        </CodeLine>
        <CodeLine number={11}>{''}</CodeLine>
        <CodeLine number={12}>
          <span className="keyword">export</span> <span className="keyword">default</span> AboutMe;
        </CodeLine>
      </div>
    </Layout>
  );
};

export default Index;
