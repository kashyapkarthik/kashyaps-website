
import CodeLine from '@/components/CodeLine';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="p-2">
        <CodeLine number={1}>
          <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;
        </CodeLine>
        <CodeLine number={2}></CodeLine>
        <CodeLine number={3}>
          <span className="keyword">const</span> <span className="function">AboutMe</span> = () <span>=&gt;</span> {'{'}
        </CodeLine>
        <CodeLine number={4} indent={1}>
          <span className="keyword">return</span> (
        </CodeLine>
        <CodeLine number={5} indent={2}>
          {'<div>'}
        </CodeLine>
        <CodeLine number={6} indent={3}>
          {'<h1>'}
          Hello, I'm <span className="string">Kashyap Karthik</span>
          {'</h1>'}
        </CodeLine>
        <CodeLine number={7} indent={3}>
          {'<p>'}
          <span className="comment">{'// Your brief introduction goes here'}</span>
          {'</p>'}
        </CodeLine>
        <CodeLine number={8} indent={3}>
          {'<p>'}
          <span className="comment">{'// Your skills and interests go here'}</span>
          {'</p>'}
        </CodeLine>
        <CodeLine number={9} indent={3}>
          {'<p>'}
          <span className="comment">{'// Your background information goes here'}</span>
          {'</p>'}
        </CodeLine>
        <CodeLine number={10} indent={2}>
          {'</div>'}
        </CodeLine>
        <CodeLine number={11} indent={1}>
          );
        </CodeLine>
        <CodeLine number={12}>
          {'};'}
        </CodeLine>
        <CodeLine number={13}></CodeLine>
        <CodeLine number={14}>
          <span className="keyword">export</span> <span className="keyword">default</span> AboutMe;
        </CodeLine>
      </div>
    </Layout>
  );
};

export default Index;
