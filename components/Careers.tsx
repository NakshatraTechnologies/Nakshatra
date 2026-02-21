
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Heart, Code2, Users, Zap, Globe, Mail, ChevronRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const PERKS = [
  { icon: Rocket, title: 'Startup Culture', desc: 'Work at the cutting edge with a small, agile team where your contributions truly matter.' },
  { icon: Code2, title: 'Learn & Grow', desc: 'Work on diverse projects across multiple tech stacks — from MERN to AI/ML and beyond.' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible working hours and a supportive environment that values your well-being.' },
  { icon: Users, title: 'Collaborative Team', desc: 'A tight-knit team of 5 builders who support each other and grow together.' },
  { icon: Zap, title: 'Real Impact', desc: 'Your code goes live. Build products used by real businesses and real people.' },
  { icon: Globe, title: 'Remote Friendly', desc: 'Work from our Pune office or remotely — we value output over presence.' },
];

const Careers: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-[#020617] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-black"></div>
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} />
              Join Our Journey
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 font-display leading-tight tracking-tight">
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400">Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              We're a young startup based in Pune, looking for passionate builders who love writing clean code and solving real problems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-purple-600 font-bold tracking-widest uppercase mb-3 block text-sm">Why Nakshatra?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-4">Why You'll Love Working Here</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERKS.map((perk, index) => (
              <Reveal key={perk.title} delay={index * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-slate-50 border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <perk.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{perk.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions / CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Interested in Joining?</h2>
            <p className="text-purple-100 text-lg mb-4 font-light max-w-2xl mx-auto">
              We're always looking for talented developers, designers, and problem-solvers. Send us your resume and let's talk!
            </p>
            <p className="text-white/80 text-sm mb-10">
              📍 Based in Pimpri Chinchwad, Hinjewadi, Pune, Maharashtra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:nakshatratechnologies0425@gmail.com?subject=Career Inquiry - Nakshatra Technologies"
                className="bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
              >
                <Mail size={20} />
                Send Your Resume
              </a>
              <Link 
                to="/contact"
                className="bg-white/10 border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                Contact Us <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Careers;
