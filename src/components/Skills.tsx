/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SKILLS_DATA } from '../data/config';
import { Code, Layout, Terminal, Shield, Wrench, Search, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Code className="w-5 h-5 text-[#E5A93C]" />;
      case 'wordpress':
        return <Layout className="w-5 h-5 text-[#38BDF8]" />;
      case 'python':
        return <Terminal className="w-5 h-5 text-[#E5A93C]" />;
      case 'security-optimization':
        return <Shield className="w-5 h-5 text-[#38BDF8]" />;
      case 'software-dev':
        return <Layers className="w-5 h-5 text-[#E5A93C]" />;
      case 'seo-technical':
        return <Search className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Wrench className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider mb-2">
            <span>مهارت‌ها و فناوری‌ها</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">تسلط فنی و ابزارها</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            مجموعه مهارت‌های متمرکز بر تولید نرم‌افزار و وب
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            تنها تخصص‌ها و ابزارهایی معرفی شده‌اند که در پروژه‌ها به صورت عملی پیاده‌سازی و تست شده‌اند، بدون درصدهای غیرواقعی یا القاب اغراق‌آمیز.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-[#0D1526] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-[#E5A93C]/40 transition-colors">
                    {getSkillIcon(skill.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dir-ltr">
                    {skill.titleEn}
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#E5A93C] transition-colors">
                  {skill.title}
                </h3>
                <div className="text-xs text-slate-400 mb-3 font-medium">
                  {skill.scope}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Technologies unboxed list (zero pill discipline with typographic dots) */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-500 mb-1.5 font-mono">ابزارها و فناوری‌ها:</div>
                <div className="text-xs text-slate-300 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
                  {skill.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="hover:text-white transition-colors">{tech}</span>
                      {idx < skill.technologies.length - 1 && (
                        <span className="text-slate-600 select-none" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
