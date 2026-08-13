import { NextResponse } from "next/server";
import { about, certifications, education, experience, profile, projects, techStack } from "@/data/content";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const portfolioContext = JSON.stringify({
  profile,
  about,
  experience,
  projects,
  education,
  certifications,
  techStack,
});

const systemInstruction = `You are Dhvani Dave's portfolio assistant. Answer only questions about Dhvani's portfolio, resume, background, education, experience, projects, skills, certificates, availability, or how to contact her.

Use only the verified portfolio context below. Never invent facts, metrics, links, roles, dates, project details, or contact information. If the answer is not in the context, say: "I don't have that information in Dhvani's portfolio yet." Keep replies friendly, direct, and under 110 words. Do not claim to be Dhvani; refer to her in the third person.

Use plain text only: no Markdown, no asterisks, and no headings. You may use the • character for concise lists.

VERIFIED PORTFOLIO CONTEXT:
${portfolioContext}`;

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const message = value as Record<string, unknown>;
  return (message.role === "user" || message.role === "model") && typeof message.text === "string";
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Chat is not configured yet." }, { status: 503 });
  }

  try {
    const body = await request.json() as { messages?: unknown };
    const messages: ChatMessage[] = Array.isArray(body.messages) ? body.messages.filter(isChatMessage).slice(-8) : [];

    if (!messages.length || !messages.some((message) => message.role === "user")) {
      return NextResponse.json({ error: "Please ask a portfolio-related question." }, { status: 400 });
    }

    const contents = messages.map((message) => ({
      role: message.role,
      parts: [{ text: message.text.slice(0, 900) }],
    }));

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents,
          generationConfig: { maxOutputTokens: 700, temperature: 0.25, thinkingConfig: { thinkingLevel: "low" } },
        }),
      },
    );

    if (!response.ok) {
      console.error("Gemini request failed", response.status);
      return NextResponse.json({ error: "The assistant is temporarily unavailable. Please try again." }, { status: 502 });
    }

    const data = await response.json();
    const answer = data.candidates?.[0]?.content?.parts?.map((part: { text?: string }) => part.text ?? "").join("").trim();

    const cleanAnswer = answer?.replace(/\*\*/g, "").trim();
    return NextResponse.json({ answer: cleanAnswer || "I don't have that information in Dhvani's portfolio yet." });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
