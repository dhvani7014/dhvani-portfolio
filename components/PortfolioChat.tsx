"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

type Message = {
  role: "user" | "model";
  text: string;
};

const starters = ["What projects has Dhvani built?", "What is her experience at CloudRock?", "What roles is she looking for?"];

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function ask(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || isLoading) return;

    const nextMessages: Message[] = [...messages, { role: "user", text: cleanQuestion }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();
      setMessages((current) => [...current, { role: "model", text: data.answer ?? data.error ?? "Please try again." }]);
    } catch {
      setMessages((current) => [...current, { role: "model", text: "I’m having trouble connecting right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <div className="portfolio-chat">
      {isOpen && <section className="chat-window" aria-label="Ask about Dhvani's portfolio">
        <header className="chat-header"><div><span className="chat-status" /><p>Ask my portfolio</p><small>Powered by Gemini</small></div><button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant"><X size={17} /></button></header>
        <div className="chat-content">
          {!messages.length ? <div className="chat-welcome"><Sparkles size={17} /><p>Ask about Dhvani’s experience, projects, skills, or availability.</p><div>{starters.map((question) => <button type="button" key={question} onClick={() => void ask(question)}>{question}</button>)}</div></div> : messages.map((message, index) => <p className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>{message.text}</p>)}
          {isLoading && <p className="chat-message model chat-thinking"><i /><i /><i /></p>}
        </div>
        <form className="chat-form" onSubmit={submit}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question…" maxLength={900} aria-label="Ask a portfolio question" /><button type="submit" disabled={!input.trim() || isLoading} aria-label="Send question"><Send size={16} /></button></form>
      </section>}
      <button className="chat-trigger" type="button" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen} aria-label="Ask about Dhvani's portfolio"><MessageCircle size={21} /><span>Ask my portfolio</span></button>
    </div>
  );
}
