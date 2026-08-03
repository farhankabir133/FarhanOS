import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const isLight = false;

const proseClasses = `prose prose-invert max-w-none text-[13px] leading-relaxed ${isLight ? 'prose-slate' : 'prose-zinc'}`;

const components = {
  h1: ({ children }: any) => <h1 className="text-lg font-bold text-white mb-2">{children}</h1>,
  h2: ({ children }: any) => <h2 className="text-base font-bold text-white mb-1.5">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-sm font-semibold text-zinc-200 mb-1">{children}</h3>,
  p: ({ children }: any) => <p className="text-zinc-300 mb-2 leading-relaxed">{children}</p>,
  ul: ({ children }: any) => <ul className="list-disc list-inside text-zinc-300 mb-2 space-y-1">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal list-inside text-zinc-300 mb-2 space-y-1">{children}</ol>,
  li: ({ children }: any) => <li className="text-zinc-300">{children}</li>,
  blockquote: ({ children }: any) => <blockquote className="border-l-2 border-indigo-500/50 pl-3 text-zinc-400 italic mb-2">{children}</blockquote>,
  code: ({ inline, children }: any) => inline
    ? <code className="bg-zinc-900 text-indigo-300 px-1 py-0.5 rounded text-xs font-mono">{children}</code>
    : <code className="block bg-zinc-900 text-zinc-300 p-3 rounded-lg text-xs font-mono overflow-x-auto mb-2">{children}</code>,
  pre: ({ children }: any) => <pre className="mb-2">{children}</pre>,
  table: ({ children }: any) => <div className="overflow-x-auto mb-2"><table className="min-w-full text-xs border border-zinc-800 rounded-lg overflow-hidden">{children}</table></div>,
  thead: ({ children }: any) => <thead className="bg-zinc-900/80 text-zinc-300">{children}</thead>,
  tbody: ({ children }: any) => <tbody className="divide-y divide-zinc-800">{children}</tbody>,
  tr: ({ children }: any) => <tr>{children}</tr>,
  td: ({ children }: any) => <td className="px-3 py-2 text-zinc-300">{children}</td>,
  th: ({ children }: any) => <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">{children}</th>,
  hr: () => <hr className="border-zinc-800 my-3" />,
  a: ({ href, children }: any) => <a href={href} className="text-indigo-400 hover:text-indigo-300 underline" target="_blank" rel="noreferrer">{children}</a>,
  strong: ({ children }: any) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }: any) => <em className="text-zinc-400 italic">{children}</em>,
};

export default function MarkdownRenderer({ content, className = '' }: { content: string; className?: string }) {
  return (
    <div className={`${proseClasses} ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
