export type ChatGptExplainKind = 'proof' | 'practice';

export interface ChatGptExplainPayload {
  kind: ChatGptExplainKind;
  /** Short heading shown near the top of the prompt */
  title: string;
  /** Optional surrounding context (tétel / tétel címe) */
  context?: string;
  /** Full problem or proof text (plain / LaTeX ok) */
  content: string;
}

const MAX_URL_CHARS = 7000;

function buildPrompt({ kind, title, context, content }: ChatGptExplainPayload): string {
  const what = kind === 'proof' ? 'bizonyítást' : 'feladatot és a megoldását';
  return [
    `Magyarázd el részletesen, lépésről lépésre, emelt szintű középiskolás matek szinten a következő ${what}.`,
    '',
    context ? `Kontextus: ${context}` : null,
    title,
    '',
    content.trim(),
    '',
    'Kérlek:',
    '- magyarázd el a fogalmakat és a jelöléseket;',
    '- indokold minden lépést világosan;',
    '- emeld ki a tipikus hibákat és vizsgáztatói csapdákat;',
    '- a választ magyarul add.',
  ]
    .filter((line): line is string => line !== null)
    .join('\n');
}

/** Opens ChatGPT with a prefilled explain-prompt; also copies the full prompt to the clipboard. */
export function openChatGptExplain(payload: ChatGptExplainPayload): void {
  const prompt = buildPrompt(payload);

  try {
    void navigator.clipboard?.writeText(prompt);
  } catch {
    // Clipboard may be blocked; URL prefill is still attempted.
  }

  const encoded = encodeURIComponent(prompt);
  const url =
    encoded.length <= MAX_URL_CHARS
      ? `https://chatgpt.com/?q=${encoded}`
      : `https://chatgpt.com/?q=${encodeURIComponent(
          `${prompt.slice(0, 3500)}\n\n[A teljes szöveg a vágólapra került — illeszd be ide, ha a prompt rövidült.]`
        )}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}
