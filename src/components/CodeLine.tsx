
import React from 'react';

interface CodeLineProps {
  number: number;
  indent?: number;
  children: React.ReactNode;
}

const CodeLine: React.FC<CodeLineProps> = ({ number, indent = 0, children }) => {
  return (
    <div className="editor-line">
      {/* Line numbers div is kept but hidden with CSS */}
      <div className="line-numbers hidden">{number}</div>
      <div className="editor-content" style={{ paddingLeft: `${indent * 2}ch` }}>
        {children}
      </div>
    </div>
  );
};

export default CodeLine;
