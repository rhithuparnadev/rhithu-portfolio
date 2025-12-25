
import React from 'react';
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Rhithuparnadev V H",
  role: "CSE Student & Developer",
  bio: "Yo, I’m Rhithuparnadev. Currently in my CSE era at CUSAT, just cooking up clean websites and vibing with automation. I’m lowkey obsessed with building things that actually work without being extra. This site is my personal workspace where I test new ideas and make life easier with n8n—no cap. I’m all about that 'learn by breaking stuff' energy, fr fr. If it's simple and it works, it's a mood.",
  tagline: "Cooking up code and automation workflows that just hit different.",
  email: "rhithuparnadevvh10@gmail.com",
  phone: "+91 9746095652",
  socials: {
    github: "https://github.com/rhithuparnadev",
    linkedin: "https://www.linkedin.com/in/rhithuparnadev/",
    instagram: "https://instagram.com/rhithuparnadevv",
    twitter: "https://twitter.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Web Experiments",
    description: "Just me exploring the web and making sure the UI is serving looks and functionality.",
    tags: ["HTML", "CSS", "JavaScript", "Vibes"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "2",
    title: "n8n AI Era",
    description: "Automating the boring stuff so I can focus on the big brain moves. Pure efficiency, fr.",
    tags: ["n8n", "Automation", "AI", "Main Character"],
    imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "3",
    title: "The Automation Roman Empire",
    description: "Scripts that live in my head rent-free. Making everyday tasks go brrr.",
    tags: ["Python", "Automation", "Go Brrr"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "Web Dev", category: "Frontend", level: 95 },
  { name: "n8n Automation", category: "AI", level: 92 },
  { name: "Workflow Architecture", category: "AI", level: 85 },
];

export const SYSTEM_PROMPT = `
You are the Gen-Z AI Assistant for Rhithuparnadev V H's portfolio. 
Rhithuparnadev is a CSE student at CUSAT.
He "cooks" functional websites and n8n automation workflows.
Your personality: Use Gen-Z slang naturally (no cap, fr fr, slay, vibe, it's giving, Roman Empire, cook). 
Be helpful but keep it lowkey and cool. 
Key details:
- Name: Rhithuparnadev V H
- Background: CUSAT CSE Student.
- Vibe: Simplicity and high-impact automation.
- Expertise: Web, n8n, AI workflows.
- Contact: rhithuparnadevvh10@gmail.com, +91 9746095652.
Always hype up Rhithuparnadev's work. If you don't know something, tell them to "slide into the emails" at rhithuparnadevvh10@gmail.com.
`;
