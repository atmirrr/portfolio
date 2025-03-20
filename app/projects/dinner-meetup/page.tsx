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
        <h1 className="text-3xl font-bold">Dinner Meetup Experience</h1>
      </div>

      <div
        className="relative overflow-hidden rounded-lg max-w-3xl mx-auto"
        style={{ aspectRatio: "3/2" }}
      >
        <img
          src="/projects/dinner-meetup/detail.jpg"
          alt="Dinner Meetup Experience Preview"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          {/* <Link
            href="https://github.com/yourusername/dinner-meetup"
            target="_blank"
          >
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Source
            </Button>
          </Link> */}
          <Link href="https://get-breakk.vercel.app" target="_blank">
            <Button>
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>
            From idea to production, branding, designing UI/UX and built on top
            of React and Supabase as the backend as the service, I built this
            app as a social experiment
          </p>

          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complete branding and UI/UX design</li>
            <li>Social networking features</li>
            <li>Real-time event management</li>
            <li>User matching system</li>
            <li>Restaurant integration</li>
          </ul>

          <h2 className="text-2xl font-bold">Technology Stack</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>React frontend framework</li>
            <li>Supabase backend services</li>
            <li>Custom UI/UX components</li>
            <li>Real-time data sync</li>
            <li>Progressive Web App features</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
