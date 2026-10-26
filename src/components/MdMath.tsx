import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

interface MdMathProps {
  children: string;
  className?: string;
  /** Render markdown paragraphs as inline spans (for list items / one-liners). */
  inline?: boolean;
}

const katexOpts = { output: 'html' as const, throwOnError: false };

/** Markdown + KaTeX for any prose that may contain $...$ / $$...$$. */
export const MdMath: React.FC<MdMathProps> = ({ children, className = '', inline = false }) => {
  if (!children) return null;

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[[rehypeKatex, katexOpts]]}
        components={inline ? { p: ({ children: c }) => <span>{c}</span> } : undefined}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
