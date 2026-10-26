/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Github, Download, Eye, Plus, Sparkles } from 'lucide-react';
import { ProjectItem, ProjectCategory, CATEGORY_FILTERS } from '../data/projects';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  projects: ProjectItem[];
  onOpenAdminStudio: () => void;
  onOpenOrderModal: (defaultTopic?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onOpenAdminStudio,
  onOpenOrderModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Filter projects by active tab and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider mb-2">
              <span>پروژه‌ها و نمونه‌کارها</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">نمایش آثار اجرایی و ابزارها</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              آثار پیاده‌سازی‌شده در وب، اندروید و پایتون
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              نمونه‌کارهای واقعی به تفکیک حوزه. قابلیت توسعه، افزودن برنامه‌های جدید و ثبت اپلیکیشن‌های آینده کافه‌بازار نیز در این بخش فراهم است.
            </p>
          </div>

          {/* Quick action button for developer */}
          <button
            onClick={onOpenAdminStudio}
            className="self-start md:self-auto px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>مدیریت / افزودن پروژه جدید</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          
          {/* Category Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-900/80 rounded-xl border border-slate-800 scrollbar-none">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.key
                    ? 'bg-[#E5A93C] text-[#080C14] shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو بر اساس نام، فناوری، ابزار..."
              className="w-full pr-10 pl-4 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A93C] transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0D1526] border border-slate-800/90 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-black/60"
              >
                {/* Visual Thumbnail Frame */}
                <div>
                  <div className="aspect-[16/10] w-full bg-slate-950 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    
                    {/* View Details Hover Overlay Button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-xs"
                      aria-label="مشاهده جزئیات کامل پروژه"
                    >
                      <Eye className="w-4 h-4 text-[#E5A93C]" />
                      <span>مشاهده جزئیات کامل</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Unboxed Metadata Strip (Zero Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="text-[#E5A93C] font-medium">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      {project.releaseDate && (
                        <>
                          <span>{project.releaseDate}</span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      <span className="text-slate-400">{project.statusLabel}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProject(project)}
                      className="text-base font-bold text-white tracking-tight mb-2 hover:text-[#E5A93C] cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Unboxed with Typographic Slash Separators */}
                    <div className="text-[11px] text-slate-400 font-mono flex flex-wrap items-center gap-x-2 gap-y-1 pt-3 border-t border-slate-800/80">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-300">{tech}</span>
                          {idx < Math.min(project.technologies.length, 4) - 1 && (
                            <span className="text-slate-600 select-none">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-[#0A101D] border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-[#E5A93C] hover:text-[#F59E0B] font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>جزئیات</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                        title="مشاهده سورس گیت‌هاب"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.appDownloadUrl && (
                      <a
                        href={project.appDownloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[#38BDF8] hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                        title="دریافت اپلیکیشن در کافه‌بازار"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}

                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                        title="مشاهده پیش‌نمایش آنلاین"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="py-16 text-center rounded-2xl bg-[#0D1526] border border-slate-800 p-8 max-w-lg mx-auto">
            <p className="text-slate-300 text-sm mb-3">
              هیچ پروژه‌ای مطابق با فیلتر یا عبارت جستجوی وارد شده یافت نشد.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#080C14] bg-[#E5A93C] rounded-lg"
            >
              نمایش همه پروژه‌ها
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOrderSimilar={(title) => onOpenOrderModal(`سفارش پروژه‌ای مشابه: ${title}`)}
      />
    </section>
  );
};
