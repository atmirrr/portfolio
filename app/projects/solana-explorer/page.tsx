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
        <h1 className="text-3xl font-bold">Solana Block Explorer</h1>
      </div>

      <div
        className="relative overflow-hidden rounded-lg max-w-3xl mx-auto"
        style={{ aspectRatio: "3/2" }}
      >
        <img
          src="/projects/solana-explorer/detail.jpg"
          alt="Solana Block Explorer Preview"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          {/* <Link
            href="https://github.com/yourusername/solana-explorer"
            target="_blank"
          >
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Source
            </Button>
          </Link> */}
          <Link href="https://clari.fi" target="_blank">
            <Button>
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>
            Built on top of web3.js library and uses various APIs for fetching
            transactions history and parsing, this wallet scanner uses Next.js
            as the frontend solution and other technologies for the backend
          </p>

          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Wallet address scanning</li>
            <li>Transaction tracking</li>
            <li>Token analysis</li>
            <li>Smart contract monitoring</li>
            <li>Real-time updates</li>
          </ul>

          <h2 className="text-2xl font-bold">Technology Stack</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Next.js frontend framework</li>
            <li>Web3.js integration</li>
            <li>Solana API integration</li>
            <li>Real-time data handling</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
