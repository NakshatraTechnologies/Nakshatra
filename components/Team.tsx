
import React from 'react';
import { Linkedin, Award } from 'lucide-react';
import Reveal from './Reveal';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  const founders = TEAM_MEMBERS.filter(m => m.type === 'founder');
  const team = TEAM_MEMBERS.filter(m => m.type === 'team');

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase mb-3 block text-sm">Our People</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-4">Meet the Team</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">A small but mighty team of builders, dreamers, and problem-solvers.</p>
        </Reveal>

        {/* Founders */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
          {founders.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-500 group text-center min-w-[280px]">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold mb-4">
                  <Award size={12} />
                  Co-Founder
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap gap-6 justify-center">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group text-center min-w-[220px]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-xl font-bold group-hover:scale-105 transition-transform">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-1">{member.name}</h3>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
