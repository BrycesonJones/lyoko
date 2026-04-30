import { NextRequest, NextResponse } from "next/server";
import { addQuestion, listAnswered } from "@/lib/faq-store";

const MAX_LENGTH = 250;

export async function GET() {
  return NextResponse.json({ questions: listAnswered() });
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const text = (body as { question?: unknown })?.question;
  if (typeof text !== "string") {
    return NextResponse.json({ error: "Question is required" }, { status: 400 });
  }

  const trimmed = text.trim();
  if (trimmed.length === 0) {
    return NextResponse.json({ error: "Question cannot be empty" }, { status: 400 });
  }
  if (trimmed.length > MAX_LENGTH) {
    return NextResponse.json(
      { error: `Question must be ${MAX_LENGTH} characters or fewer` },
      { status: 400 },
    );
  }

  const created = addQuestion(trimmed);
  return NextResponse.json({ question: created }, { status: 201 });
}
