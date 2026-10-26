/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ExternalLink, Github, Download, Send, Calendar, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOrderSimilar: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOrderSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D1526] border border-slate-700 shadow-2xl text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0A101D]/95 backdrop-blur border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-[#E5A93C]">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="بستن پنجره"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Main Visual */}
          <div className="aspect-video w-full rounded-xl bg-slate-900 border border-slate-800 overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // fallback styled container
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Unboxed Metadata Strip */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 pb-3 border-b border-slate-800">
            <span>دسته‌بندی: <strong className="text-slate-200">{project.categoryLabel}</strong></span>
            <span aria-hidden="true">·</span>
            {project.releaseDate && (
              <>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>تاریخ: {project.releaseDate}</span>
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>وضعیت: <strong className="text-slate-200">{project.statusLabel}</strong></span>
            </span>
          </div>

          {/* Project Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">توضیحات و اهداف پروژه</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Tech Stack Unboxed Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase">فناوری‌های به‌کار رفته</h4>
            <div className="text-xs text-slate-200 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-[#38BDF8]">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600 select-none">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-[#080C14] bg-[#E5A93C] hover:bg-[#F59E0B] rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>مشاهده آنلاین</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>سورس گیت‌هاب</span>
                </a>
              )}

              {project.appDownloadUrl && (
                <a
                  href={project.appDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>دریافت اپلیکیشن در کافه‌بازار</span>
                </a>
              )}
            </div>

            {/* Direct Order Similar CTA */}
            <button
              onClick={() => {
                onOrderSimilar(project.title);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>سفارش پروژه مشابه این</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
