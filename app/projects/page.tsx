"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: "ai-live-chat",
      title: "AI Live Chat Widget",
      description:
        "Enterprise-grade chatbot powered by self-hosted Deepseek V3, featuring RAG implementation and seamless API integrations for enhanced response accuracy.",
      image: "/projects/ai-live-chat/detail.jpg",
      technologies: ["Next.js", "Node.js", "LLM", "RAG"],
      category: "ai",
      link: "/projects/ai-live-chat",
    },
    {
      id: "solana-explorer",
      title: "Solana Block Explorer",
      description:
        "Built on top of web3.js library and uses various APIs for fetching transactions history and parsing, this wallet scanner uses Next.js as the frontend solution",
      image: "/projects/solana-explorer/detail.jpg",
      technologies: ["Next.js", "Web3.js", "Solana"],
      category: "blockchain",
      link: "/projects/solana-explorer",
    },
    {
      id: "dinner-meetup",
      title: "Dinner Meetup Platform",
      description:
        "Full-stack social platform connecting people through dining experiences, featuring custom UI/UX design and real-time interactions.",
      image: "/projects/dinner-meetup/detail.jpg",
      technologies: ["React", "Supabase", "UI/UX"],
      category: "web",
      link: "/projects/dinner-meetup",
    },
    // {
    //   id: "blockchain-explorer",
    //   title: "Blockchain Explorer",
    //   description:
    //     "Tool for visualizing and exploring blockchain transactions and smart contracts.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["React", "Ethers.js", "GraphQL"],
    //   category: "blockchain",
    // },
    // {
    //   id: "data-visualization",
    //   title: "Data Visualization Platform",
    //   description:
    //     "Interactive platform for creating and sharing data visualizations and insights.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["D3.js", "React", "Node.js"],
    //   category: "data",
    // },
    // {
    //   id: "ar-navigation",
    //   title: "AR Navigation System",
    //   description:
    //     "Augmented reality navigation system for indoor and outdoor environments.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["Unity", "ARKit", "C#"],
    //   category: "ar",
    // },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "blockchain", name: "Blockchain" },
    { id: "data", name: "Data Visualization" },
    { id: "ar", name: "AR/VR" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Displaying projects
            directory. Select category to filter results.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
