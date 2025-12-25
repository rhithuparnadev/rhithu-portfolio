
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { PERSONAL_INFO, PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about' | 'skills' | 'contact' | 'projects'>('home');
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`;

  // Handle back button/navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setView('about');
      } else if (hash === '#skills') {
        setView('skills');
      } else if (hash === '#contact') {
        setView('contact');
      } else if (hash === '#projects') {
        setView('projects');
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const HomeView = () => (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-none">
            {PERSONAL_INFO.name.split(' ').map((part, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-black block md:inline md:ml-4' : 'block md:inline'}>
                {part}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-3xl font-medium text-white/80 max-w-2xl leading-tight">
            I lowkey cook functional websites and automate the Roman Empire of workflows with n8n.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setView('about')}
              className="px-8 py-4 bg-white text-red-600 text-lg font-bold rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105"
            >
              The Backstory
            </button>
            <button 
              onClick={() => setView('skills')}
              className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-red-600 transition-all transform hover:scale-105"
            >
              Check My Flex
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section Summary (Teaser) */}
      <section id="projects-teaser" className="scroll-mt-24 py-24 px-6 md:px-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex justify-between items-end border-b-4 border-white pb-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter">The Lab</h2>
            <p className="hidden md:block text-right font-bold text-white/50">(Web & Automation fr fr)</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-black uppercase px-2 py-1 bg-white/10 rounded tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                  <button onClick={() => setView('projects')} className="inline-flex items-center space-x-2 text-white font-bold hover:translate-x-2 transition-transform">
                    <span>Peek This</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <button 
              onClick={() => setView('projects')}
              className="px-10 py-5 bg-black text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all"
            >
              See the Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section Summary */}
      <section id="skills" className="scroll-mt-24 py-24 px-6 md:px-24 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-red-600 mb-8">What I Do</h2>
            <div className="space-y-6">
              {SKILLS.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xl font-bold text-white uppercase">{skill.name}</span>
                    <span className="text-red-600 font-mono">{skill.level}% Mastery</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setView('skills')}
              className="mt-8 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-white hover:text-red-600 transition-all uppercase tracking-widest text-sm"
            >
              The Full Stack fr
            </button>
          </div>
          <div className="p-12 glass rounded-full aspect-square flex flex-col items-center justify-center text-center space-y-4 border-2 border-red-600">
             <div className="text-red-600 text-6xl font-black">n8n</div>
             <div className="text-2xl font-bold uppercase tracking-widest text-white">Automation Guru</div>
             <p className="text-white/50 text-sm max-w-xs">Connecting apps so I don't have to. It's giving brain cells.</p>
          </div>
        </div>
      </section>

      {/* Contact Section Summary */}
      <section id="contact-summary" className="scroll-mt-24 py-32 px-6 md:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">Tap <span className="text-black underline decoration-white decoration-8">In.</span></h2>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium text-white/80">
              Open for collabs, n8n talk, or just catching a vibe.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 pt-6">
            <button 
              onClick={() => setView('contact')}
              className="px-10 py-5 bg-white text-red-600 text-xl font-bold rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105"
            >
              Slide into the DMs
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const AboutView = () => (
    <div className="min-h-screen pt-32 px-6 md:px-24 bg-white text-black animate-message">
      <div className="max-w-4xl mx-auto space-y-12 pb-24">
        <button 
          onClick={() => setView('home')}
          className="group flex items-center space-x-2 text-red-600 font-bold uppercase tracking-widest hover:translate-x-[-10px] transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Bounce back home</span>
        </button>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
            Rhithuparnadev <span className="text-red-600 underline">V H</span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-red-600 uppercase">CSE Era | Web Dev | Automation Obsessed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-8">
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-black uppercase border-b-2 border-red-600 pb-2">My Lore</h2>
              <p className="text-xl leading-relaxed text-gray-700">
                Currently holding it down as a CSE student at **CUSAT**. I got into tech because I wanted to know how the internet works—it was giving main character energy and I wanted in.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                I found out that manual tasks are a major L, so I started using **n8n** to make everything go automatic. Now automation lives in my head rent-free.
              </p>
            </section>
          </div>
          <div className="space-y-8">
            <div className="aspect-square bg-red-600 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" alt="Work Setup" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsView = () => (
    <div className="min-h-screen pt-32 px-6 md:px-24 bg-white text-black animate-message">
      <div className="max-w-6xl mx-auto space-y-16 pb-24">
        <button 
          onClick={() => setView('home')}
          className="group flex items-center space-x-2 text-red-600 font-bold uppercase tracking-widest hover:translate-x-[-10px] transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </button>

        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">
            Technical <span className="text-red-600">Flex.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl">
            Everything I use to build, automate, and stay winning. No cap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <section className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tight text-red-600 flex items-center gap-4">
                <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded text-sm">01</span>
                Web Cooking
              </h2>
              <div className="grid gap-8">
                {SKILLS.filter(s => s.category === 'Frontend').map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-lg font-bold uppercase tracking-tighter group-hover:text-red-600 transition-colors">{skill.name}</span>
                      <span className="font-mono text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tight text-red-600 flex items-center gap-4">
                <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded text-sm">02</span>
                Automation Era
              </h2>
              <div className="grid gap-8">
                {SKILLS.filter(s => s.category === 'AI').map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-lg font-bold uppercase tracking-tighter group-hover:text-red-600 transition-colors">{skill.name}</span>
                      <span className="font-mono text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-black transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="p-10 bg-black text-white rounded-[3rem] space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-red-600 opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
               </div>
               <h3 className="text-3xl font-black uppercase italic leading-none">Stay <br/> Curious</h3>
               <p className="text-gray-400 text-lg">My stack is always evolving. As a student, I'm always breaking things and putting them back together better than before. Vibes only.</p>
               <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-widest uppercase">CUSAT</span>
                  <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-widest uppercase">N8N fr</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className="min-h-screen pt-32 px-6 md:px-24 bg-red-600 text-white animate-message">
      <div className="max-w-6xl mx-auto space-y-16 pb-24">
        <button 
          onClick={() => setView('home')}
          className="group flex items-center space-x-2 text-white font-bold uppercase tracking-widest hover:translate-x-[-10px] transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </button>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
            Selected <br/> <span className="text-black">Cooking.</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-white/80 max-w-2xl leading-tight">
            I'm currently locked in on building some new fire automations and web apps.
          </p>
        </div>

        <div className="grid gap-20 py-12">
           <div className="p-12 md:p-24 glass rounded-[4rem] text-center space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
              <div className="text-white/20 text-9xl md:text-[15rem] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none tracking-tighter">
                COOKING
              </div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">I'm Cooking fr</h2>
                <p className="text-xl md:text-2xl font-medium text-white/80 max-w-xl mx-auto">
                  Quality over quantity, no cap. New high-impact workflows are being brewed as we speak. 
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <span className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full">n8n Era</span>
                  <span className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full">Fire Apps</span>
                  <span className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full">AI Vibes</span>
                </div>
              </div>
           </div>
        </div>

        <div className="bg-black text-white p-12 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="space-y-2 text-center md:text-left">
             <h3 className="text-3xl font-black uppercase italic tracking-tighter text-red-600">Got a vision?</h3>
             <p className="text-white/60">Let's build something that actually slays.</p>
           </div>
           <button 
             onClick={() => setView('contact')}
             className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-red-600 transition-all transform hover:scale-105"
           >
             Get in the loop
           </button>
        </div>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="min-h-screen pt-32 px-6 md:px-24 bg-white text-black animate-message">
      <div className="max-w-6xl mx-auto space-y-16 pb-24">
        <button 
          onClick={() => setView('home')}
          className="group flex items-center space-x-2 text-red-600 font-bold uppercase tracking-widest hover:translate-x-[-10px] transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to base</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
                Slide <br/> <span className="text-red-600">Through.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-md font-medium">
                Want to build something fire or just want to talk tech? Slide through, fr.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400">Email Vibes</div>
                  <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-red-600 transition-colors break-all">{PERSONAL_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white group-hover:-rotate-12 transition-transform shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400">The Line</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xl md:text-2xl font-bold hover:text-red-600 transition-colors">{PERSONAL_INFO.phone}</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-red-200">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">The Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border-2 border-transparent focus:border-red-600 rounded-2xl px-6 py-4 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email fr</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white border-2 border-transparent focus:border-red-600 rounded-2xl px-6 py-4 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">The Move</label>
                <input type="text" placeholder="Collab Request" className="w-full bg-white border-2 border-transparent focus:border-red-600 rounded-2xl px-6 py-4 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message Vibes</label>
                <textarea rows={5} placeholder="What's the tea?" className="w-full bg-white border-2 border-transparent focus:border-red-600 rounded-2xl px-6 py-4 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-black transition-all transform hover:scale-[1.02] shadow-xl">
                Send it fr
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-red-600 text-white selection:bg-black selection:text-white">
      <Navbar setView={setView} />
      
      <main className="transition-opacity duration-500">
        {view === 'home' && <HomeView />}
        {view === 'about' && <AboutView />}
        {view === 'skills' && <SkillsView />}
        {view === 'projects' && <ProjectsView />}
        {view === 'contact' && <ContactView />}
      </main>

      <footer className="py-12 px-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm gap-8">
        <div className="text-center md:text-left space-y-2">
          <p className="font-bold text-white">&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}.</p>
          <p className="opacity-70">rhithuparnadev V B</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 uppercase font-black tracking-widest text-[10px]">
           <button onClick={() => setView('home')} className="hover:text-white transition-colors">Home</button>
           <button onClick={() => setView('about')} className="hover:text-white transition-colors">About</button>
           <button onClick={() => setView('skills')} className="hover:text-white transition-colors">Skills</button>
           <button onClick={() => setView('projects')} className="hover:text-white transition-colors">Projects</button>
           <button onClick={() => setView('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
