import { randomUUID } from "node:crypto";

// In-memory store. Survives Next.js HMR via globalThis but not server restarts.
// Swap for Supabase (or another persistent store) before going to production.

export type Question = {
  id: string;
  question: string;
  answer: string | null;
  createdAt: string;
  answeredAt: string | null;
};

const seed: Question[] = [];

declare global {
  // eslint-disable-next-line no-var
  var __faqStore: Question[] | undefined;
}

const store: Question[] =
  globalThis.__faqStore ?? (globalThis.__faqStore = [...seed]);

export function listAnswered(): Question[] {
  return store
    .filter((q) => q.answer !== null)
    .sort((a, b) => (b.answeredAt ?? "").localeCompare(a.answeredAt ?? ""));
}

export function addQuestion(text: string): Question {
  const q: Question = {
    id: randomUUID(),
    question: text,
    answer: null,
    createdAt: new Date().toISOString(),
    answeredAt: null,
  };
  store.unshift(q);
  return q;
}
