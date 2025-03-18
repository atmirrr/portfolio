"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = [
    {
      id: "neural-network",
      title: "Neural Network Visualizer",
      description: "Interactive visualization of neural networks with real-time data processing and node connections.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "D3.js", "TensorFlow.js"],
    },
    {
      id: "crypto-dashboard",
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with customizable widgets and alerts.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "WebSockets", "Chart.js"],
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      description: "Conversational AI assistant with natural language processing and machine learning capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "NLP", "TensorFlow"],
    },
  ]

  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Postgres", "Supabase", "DevOps"]

  return (
    <div className="space-y-16">
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="terminal-title">bio.sh</div>
            </div>
            <div className="terminal-content space-y-4">
              <Terminal text="AMIR ATTARI | FULLSTACK DEV" typingSpeed={40} onComplete={() => setIntroComplete(true)} />

              {introComplete && (
                <>
                  <p>12+ years immersed in the code matrix</p>
                  <p>Daily drivers: TypeScript, React, Node.js, PostgreSQL</p>
                  <p>DevOps: Yeah, I've got those skills when the job needs it :)</p>

                  <div className="mt-6 space-y-4">
                    <p>
                      I love building digital worlds - crafting UIs users love and creating reliable backends. I
                      seamlessly switch between designing interfaces and architecting systems.
                    </p>

                    <p>
                      I use AI like any other tool in my kit - not as a shortcut, but as a way to enhance my experience
                      and skills.
                    </p>

                    <p>
                      Ready to upgrade your tech game?{" "}
                      <a
                        href="mailto:amir.aetari@gmail.com"
                        className="text-primary hover:underline glitch"
                        data-text="Let's connect -&gt;"
                      >
                        Let's connect -&gt;
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
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
        <p className="text-xl text-primary font-bold">Ready to bring your digital vision to life?</p>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-bold rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow"
        >
          <a href="mailto:amir.aetari@gmail.com">Let's collaborate</a>
        </Button>
      </section>
    </div>
  )
}

