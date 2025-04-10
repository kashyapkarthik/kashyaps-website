
import CodeLine from '@/components/CodeLine';
import Layout from '@/components/Layout';

const YouTube = () => {
  return (
    <Layout>
      <div className="p-2">
        <CodeLine number={1}>
          <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;
        </CodeLine>
        <CodeLine number={2}></CodeLine>
        <CodeLine number={3}>
          <span className="keyword">const</span> <span className="function">YouTube</span> = () <span>=&gt;</span> {'{'}
        </CodeLine>
        <CodeLine number={4} indent={1}>
          <span className="keyword">return</span> (
        </CodeLine>
        <CodeLine number={5} indent={2}>
          {'<div>'}
        </CodeLine>
        <CodeLine number={6} indent={3}>
          {'<h1>'}
          <span className="string">My YouTube Channel</span>
          {'</h1>'}
        </CodeLine>
        <CodeLine number={7} indent={3}>
          {'<p>'}
          <span className="comment">{'// Your channel description goes here'}</span>
          {'</p>'}
        </CodeLine>
        <CodeLine number={8} indent={3}>
          {'<div>'}
        </CodeLine>
        <CodeLine number={9} indent={4}>
          <span className="comment">{'// Embed your featured videos here'}</span>
        </CodeLine>
        <CodeLine number={10} indent={3}>
          {'</div>'}
        </CodeLine>
        <CodeLine number={11} indent={3}>
          {'<ul>'}
        </CodeLine>
        <CodeLine number={12} indent={4}>
          <span className="comment">{'// List of your video playlists or categories'}</span>
        </CodeLine>
        <CodeLine number={13} indent={3}>
          {'</ul>'}
        </CodeLine>
        <CodeLine number={14} indent={2}>
          {'</div>'}
        </CodeLine>
        <CodeLine number={15} indent={1}>
          );
        </CodeLine>
        <CodeLine number={16}>
          {'};'}
        </CodeLine>
        <CodeLine number={17}></CodeLine>
        <CodeLine number={18}>
          <span className="keyword">export</span> <span className="keyword">default</span> YouTube;
        </CodeLine>
      </div>
    </Layout>
  );
};

export default YouTube;
