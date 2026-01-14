"use client";

import React, { useRef, useEffect, useState } from "react";
import { useChat } from "ai/react";
import { Icon } from "@iconify/react";
import { PropertyHomes } from "@/types/propertyHomes";
import { PropertyIntelligence } from "@/types/propertyIntelligence";

interface AgentChatbotProps {
  property: PropertyHomes;
  intelligence: PropertyIntelligence;
}

const AgentChatbot: React.FC<AgentChatbotProps> = ({
  property,
  intelligence,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build property context for the AI
  const propertyContext = `
## Basic Property Details:
- Name: ${property.name}
- Location: ${property.location}
- Price: $${property.rate}
- Bedrooms: ${property.beds}
- Bathrooms: ${property.baths}
- Area: ${property.area}m²

## Property Intelligence Data:
- Confidence Score: ${intelligence.confidenceScore}/100 (${intelligence.confidenceScore >= 80 ? "High" : intelligence.confidenceScore >= 60 ? "Medium" : "Low"} Confidence)
- Data Sources: ${intelligence.dataSources} verified sources
- Last Updated: ${intelligence.lastUpdated}
- Title Status: ${intelligence.titleStatus === "clear" ? "Clear" : intelligence.titleStatus === "pending" ? "Pending Review" : "Has Issues"}
- Market Trend: ${intelligence.marketTrend > 0 ? "+" : ""}${intelligence.marketTrend}% (${intelligence.marketTrend > 5 ? "Strong Growth" : intelligence.marketTrend > 0 ? "Healthy Growth" : intelligence.marketTrend < 0 ? "Declining" : "Stable"})

## Data Completeness by Category:
${intelligence.dataCategories
  .map(
    (cat) => `
### ${cat.name}: ${cat.percentage}%
Available: ${cat.items.filter((i) => i.available).map((i) => i.name).join(", ") || "None"}
Missing: ${cat.items.filter((i) => !i.available).map((i) => i.name).join(", ") || "None"}`
  )
  .join("\n")}

## Active Alerts (${intelligence.alerts.length}):
${
  intelligence.alerts.length > 0
    ? intelligence.alerts
        .map(
          (alert) =>
            `- [${alert.type.toUpperCase()}] ${alert.title}: ${alert.description}`
        )
        .join("\n")
    : "No active alerts"
}

## Property Features:
- Smart Home Integration
- Spacious Living Areas
- Energy Efficiency
- Natural Light
- Security Systems
- Outdoor Spaces
- Private Pool (in some units)
- Modern Keypad Entry
- Built in 2025 with sustainable features
`;

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      propertyContext,
    },
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: `Hi! 👋 I'm your AI property assistant for **${property.name}**. I have complete access to all property details, intelligence data, and market insights. How can I help you today?`,
      },
    ],
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickQuestions = [
    "What's the price?",
    "Any alerts I should know about?",
    "What's the market trend?",
    "Can you give me a summary?",
  ];

  const handleQuickQuestion = (question: string) => {
    const input = document.getElementById("chat-input") as HTMLInputElement;
    if (input) {
      // Create a native input event
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      nativeInputValueSetter?.call(input, question);
      
      const event = new Event("input", { bubbles: true });
      input.dispatchEvent(event);
      
      setTimeout(() => {
        const form = document.getElementById("chat-form") as HTMLFormElement;
        if (form) {
          form.requestSubmit();
        }
      }, 50);
    }
  };

  // Format message content (handle **bold** markdown)
  const formatContent = (content: string) => {
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-primary text-white px-5 py-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Icon icon="ph:chat-circle-dots-fill" width={24} height={24} />
        <span className="font-semibold hidden sm:block">Ask Agent</span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[420px] h-[600px] max-h-[calc(100vh-6rem)] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon icon="ph:robot-fill" width={24} height={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Property Assistant</h3>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                GPT-4o • {property.name}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Icon icon="ph:x-bold" width={18} height={18} className="text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-800">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-primary text-white rounded-br-md"
                    : "bg-white dark:bg-slate-700 text-dark dark:text-white rounded-bl-md shadow-sm"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {formatContent(message.content)}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 2 && !isLoading && (
          <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-dark/50 dark:text-white/50 mb-2">
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs px-3 py-1.5 bg-white dark:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-600 text-dark dark:text-white hover:border-primary hover:text-primary transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form
          id="chat-form"
          onSubmit={handleSubmit}
          className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-2">
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              name="message"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about this property..."
              className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-dark dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon icon="ph:paper-plane-tilt-fill" width={20} height={20} />
            </button>
          </div>
          <p className="text-xs text-center text-dark/30 dark:text-white/30 mt-2">
            Powered by GPT-4o • Property data updated {intelligence.lastUpdated}
          </p>
        </form>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AgentChatbot;
