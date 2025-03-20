"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Globe } from "lucide-react";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <article className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/projects">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">AI Live Chat Widget</h1>
      </div>

      <div
        className="relative overflow-hidden rounded-lg max-w-3xl mx-auto"
        style={{ aspectRatio: "3/2" }}
      >
        <img
          src="/projects/ai-live-chat/detail.jpg"
          alt="AI Live Chat Widget Preview"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          {/* <Link
            href="https://github.com/yourusername/ai-live-chat"
            target="_blank"
          >
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Source
            </Button>
          </Link> */}
          <Link href="https://live-chat-ebon-zeta.vercel.app/" target="_blank">
            <Button>
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>
            Powered by self-hosted Deepseek V3, and accessed all the documents,
            external APIs and a full RAG solution to deliver the best response
            for the user who is looking for customer support
          </p>

          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Self-hosted Deepseek V3 LLM implementation</li>
            <li>RAG system for improved context understanding</li>
            <li>External API integrations</li>
            <li>Real-time chat capabilities</li>
            <li>Document processing and analysis</li>
          </ul>

          <h2 className="text-2xl font-bold">Technology Stack</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>LLM integration with Deepseek V3</li>
            <li>AI-powered response generation</li>
            <li>Next.js frontend framework</li>
            <li>Node.js backend services</li>
            <li>RAG implementation</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
