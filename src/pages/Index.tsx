
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
          <span className="keyword">const</span> <span className="function">AboutMe</span> = () <span>=></span> {'{'} 
        </CodeLine>
        <CodeLine number={4} indent={1}>
          <span className="keyword">return</span> (
        </CodeLine>
        <CodeLine number={5} indent={2}>
          <span className="constant">{'<div>'}</span>
        </CodeLine>
        <CodeLine number={6} indent={3}>
          <span className="constant">{'<h1>'}</span>
          Hello, I'm <span className="string">Kashyap Karthik</span>
          <span className="constant">{'</h1>'}</span>
        </CodeLine>
        <CodeLine number={7} indent={3}>
          <span className="constant">{'<p>'}</span>
          <span className="comment">{'// Your brief introduction goes here'}</span>
          <span className="constant">{'</p>'}</span>
        </CodeLine>
        <CodeLine number={8} indent={3}>
          <span className="constant">{'<p>'}</span>
          <span className="comment">{'// Your skills and interests go here'}</span>
          <span className="constant">{'</p>'}</span>
        </CodeLine>
        <CodeLine number={9} indent={3}>
          <span className="constant">{'<p>'}</span>
          <span className="comment">{'// Your background information goes here'}</span>
          <span className="constant">{'</p>'}</span>
        </CodeLine>
        <CodeLine number={10} indent={2}>
          <span className="constant">{'</div>'}</span>
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
