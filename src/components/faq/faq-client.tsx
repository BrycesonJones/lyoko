"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Send, MessageSquare } from "lucide-react";

type Question = {
  id: string;
  question: string;
  answer: string | null;
  createdAt: string;
  answeredAt: string | null;
};

type ListResponse = { questions: Question[] };

const MAX = 250;

export default function FaqClient() {
  const [tab, setTab] = useState<"pool" | "ask">("ask");
  const [question, setQuestion] = useState("");
  const [submittedAt, setSubmittedAt] = useState<number | null>(null);
  const qc = useQueryClient();

  const pool = useQuery<ListResponse>({
    queryKey: ["/api/faq/questions"],
  });

  const submit = useMutation({
    mutationFn: async (text: string) => {
      const res = await fetch("/api/faq/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });
      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(err.error ?? `Request failed: ${res.status}`);
      }
      return (await res.json()) as { question: Question };
    },
    onSuccess: () => {
      setQuestion("");
      setSubmittedAt(Date.now());
      qc.invalidateQueries({ queryKey: ["/api/faq/questions"] });
    },
  });

  const trimmed = question.trim();
  const canSubmit = trimmed.length > 0 && trimmed.length <= MAX && !submit.isPending;

  return (
    <div>
      {/* Tabs */}
      <div className="border border-gray-800 rounded-xl flex p-1 mb-8 bg-black/40">
        <button
          onClick={() => setTab("pool")}
          className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition ${
            tab === "pool" ? "bg-[#00FF00] text-black" : "text-white hover:bg-white/5"
          }`}
        >
          Question Pool
        </button>
        <button
          onClick={() => setTab("ask")}
          className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition ${
            tab === "ask" ? "bg-[#00FF00] text-black" : "text-white hover:bg-white/5"
          }`}
        >
          Ask A Question
        </button>
      </div>

      {tab === "ask" ? (
        <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-black/50 mb-8">
          <h2 className="text-2xl font-bold mb-2">Submit Your Question</h2>
          <p className="text-gray-400 mb-6">
            Our team will review your question and provide an answer. Similar questions may already have answers.
          </p>

          <div className="relative border border-gray-800 rounded-xl p-4 mb-6 focus-within:border-[#00FF00] transition">
            <textarea
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value.slice(0, MAX));
                if (submittedAt) setSubmittedAt(null);
              }}
              placeholder="What would you like to know about AI, automation, or using Lyoko?"
              rows={3}
              className="w-full bg-transparent resize-none focus:outline-none text-gray-200 placeholder:text-gray-500 pr-16"
              disabled={submit.isPending}
            />
            <span className="absolute bottom-3 right-4 text-xs text-gray-500">
              {trimmed.length}/{MAX}
            </span>
          </div>

          <button
            onClick={() => {
              if (canSubmit) submit.mutate(trimmed);
            }}
            disabled={!canSubmit}
            className="w-full bg-[#00FF00] text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#00DD00] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submit.isPending ? "Sending..." : "Ask"}
            <Send className="w-4 h-4" />
          </button>

          {submit.isError && (
            <p className="mt-3 text-sm text-red-400">{(submit.error as Error).message}</p>
          )}
          {submittedAt && !submit.isPending && !submit.isError && (
            <p className="mt-3 text-sm text-[#00FF00]">
              Thanks! Your question is in the queue.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-4 mb-8">
          {pool.isLoading ? (
            <p className="text-gray-400 text-center py-12">Loading…</p>
          ) : pool.data && pool.data.questions.length > 0 ? (
            pool.data.questions.map((q) => (
              <div key={q.id} className="border border-gray-800 rounded-2xl p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-2 text-white">{q.question}</h3>
                {q.answer && <p className="text-gray-300 leading-relaxed">{q.answer}</p>}
              </div>
            ))
          ) : (
            <div className="border border-gray-800 rounded-2xl p-12 bg-black/50 text-center">
              <p className="text-gray-400">No questions answered yet. Be the first to ask!</p>
            </div>
          )}
        </div>
      )}

      {/* About This Page */}
      <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-black/50">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-6 h-6 text-[#00FF00]" />
          <h2 className="text-2xl font-bold">About This Page</h2>
        </div>
        <ul className="space-y-2 text-gray-300">
          <li>• Questions are submitted anonymously – no login required.</li>
          <li>• Our team reviews all questions and posts answers to the most common inquiries.</li>
          <li>• Similar questions might be combined or filtered to avoid duplication.</li>
          <li>• This question pool grows over time to create a community-driven FAQ.</li>
        </ul>
      </div>
    </div>
  );
}
