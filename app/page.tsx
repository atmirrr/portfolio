"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal } from "@/components/terminal";
import { ProjectCard } from "@/components/project-card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [firstLineComplete, setFirstLineComplete] = useState(false);

  const bioTexts = [
    "AMIR ATTARI | FULLSTACK PRODUCT DEV",
    "12+ years of experience shipping lovable products!",
    "Daily drivers: TypeScript, React, Next, Node.js, PostgreSQL, Docker",
    "DevOps: Yeah, I've got those skills when the job needs it 🙂",
    "I'm obsessed with building products - crafting UI/UX users love alongside creating reliable/scalable backends. I use AI like any other tool in my kit - not as a shortcut, but as a way to enhance my experience and skills.",
    "Ready to upgrade your tech game? Let's connect →",
  ];

  // After first line typing finishes
  const handleFirstLineComplete = () => {
    setFirstLineComplete(true);
  };

  const featuredProjects = [
    {
      id: "ai-live-chat",
      title: "AI Live Chat Widget",
      description:
        "Powered by self-hosted Deepseek V3, and accessed all the documents, external APIs and a full RAG solution to deliver the best response for the user who is looking for customer support",
      image: "/projects/ai-live-chat/detail.jpg",
      technologies: ["LLM", "AI", "Next", "Node"],
      link: "https://live-chat-ebon-zeta.vercel.app/",
    },
    {
      id: "dinner-meetup",
      title: "Dinner Meetup Experience",
      description:
        "From idea to production, branding, designing UI/UX and built on top of React and Supabase as the backend as the service, I built this app as a social experiment",
      image: "/projects/dinner-meetup/detail.jpg",
      technologies: ["React", "Supabase", "UI/UX"],
      link: "https://get-breakk.vercel.app",
    },
    {
      id: "solana-explorer",
      title: "Solana Block Explorer",
      description:
        "Built on top of web3.js library and uses various APIs for fetching transactions history and parsing, this wallet scanner uses Next.js as the frontend solution and other technologies for the backend",
      image: "/projects/solana-explorer/detail.jpg",
      technologies: ["Next.js", "Web3.js", "Solana"],
      link: "https://clari.fi",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Postgres",
    "Supabase",
    "DevOps",
    "Web Scraping",
    "Docker",
    "CI/CD",
    "Blockchain",
  ];

  return (
    <div className="space-y-16">
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <Terminal
            texts={bioTexts}
            typingSpeed={40}
            onComplete={handleFirstLineComplete}
            title="bio.sh"
            onlyAnimateFirstLine={true}
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          {/* <Link
            href="/projects"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            View all <ArrowRight size={16} />
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-xl text-primary font-bold">
          Ready to ship your next product?
        </p>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-14 py-6 text-xl font-bold rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow"
        >
          <a href="mailto:amir.aetari@gmail.com">Let's collaborate</a>
        </Button>
      </section>
    </div>
  );
}
