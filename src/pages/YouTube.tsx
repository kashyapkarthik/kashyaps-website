
import React from 'react';
import CodeLine from '@/components/CodeLine';
import Layout from '@/components/Layout';

const YouTube = () => {
  return (
    <Layout>
      <div className="p-2">
        <CodeLine number={1}>
          import React from 'react';
        </CodeLine>
        <CodeLine number={2}>
          {/* Empty line */}
        </CodeLine>
        <CodeLine number={3}>
          const YouTube = () ={">"} {'{'}
        </CodeLine>
        <CodeLine number={4} indent={1}>
          return (
        </CodeLine>
        <CodeLine number={5} indent={2}>
          My YouTube Channel
        </CodeLine>
        <CodeLine number={6} indent={2}>
          // Your channel description goes here
        </CodeLine>
        <CodeLine number={7} indent={2}>
          {"<div>"}
        </CodeLine>
        <CodeLine number={8} indent={3}>
          // Embed your featured videos here
        </CodeLine>
        <CodeLine number={9} indent={2}>
          {"</div>"}
        </CodeLine>
        <CodeLine number={10} indent={2}>
          {"<ul>"}
        </CodeLine>
        <CodeLine number={11} indent={3}>
          // List of your video playlists or categories
        </CodeLine>
        <CodeLine number={12} indent={2}>
          {"</ul>"}
        </CodeLine>
        <CodeLine number={13}>
          {/* Closing return parenthesis */}
          {`);`}
        </CodeLine>
        <CodeLine number={14}>
          {'};'}
        </CodeLine>
        <CodeLine number={15}>
          {/* Empty line */}
        </CodeLine>
        <CodeLine number={16}>
          export default YouTube;
        </CodeLine>
      </div>
    </Layout>
  );
};

export default YouTube;
