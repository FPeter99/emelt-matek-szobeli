import React from 'react';
import { Bot } from 'lucide-react';

interface AskAiButtonProps {
  onClick: () => void;
  title?: string;
  className?: string;
}

/** Robot head in the top-right corner of a proof/solution box; opens ChatGPT explain flow. */
export const AskAiButton: React.FC<AskAiButtonProps> = ({
  onClick,
  title = 'AI magyarázat ChatGPT-ben',
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
      title={title}
      aria-label={title}
      className={`absolute top-2 right-2 z-10 inline-flex items-center justify-center w-8 h-8 rounded-lg border border-cyan-500/30 bg-zinc-950/90 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-colors shadow-sm ${className}`}
    >
      <Bot className="w-4 h-4" />
    </button>
  );
};
