/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import imgWeb from '../assets/images/project_web_platform_1792949024122.jpg';
import React, { useState } from 'react';
import { X, Plus, Trash2, Edit3, Copy, Check, RotateCcw, ShieldAlert, Sparkles, Layers, Database } from 'lucide-react';
import { ProjectItem, ProjectCategory, CATEGORY_FILTERS } from '../data/projects';

interface AdminStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
  onSaveProjects: (newProjects: ProjectItem[]) => void;
  onResetProjects: () => void;
}

export const AdminStudioModal: React.FC<AdminStudioModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSaveProjects,
  onResetProjects,
}) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'add' | 'export' | 'roadmap'>('projects');
  const [copiedJson, setCopiedJson] = useState(false);

  // New Project Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('websites');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('HTML5, CSS3, JavaScript');
  const [status, setStatus] = useState<'published' | 'in_development' | 'experimental'>('published');
  const [releaseDate, setReleaseDate] = useState('۱۴۰۳');
  const [demoUrl, setDemoUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [appDownloadUrl, setAppDownloadUrl] = useState('');
  const [image, setImage] = useState(imgWeb);

  // Edit Project Mode
  const [editingId, setEditingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCreateOrUpdateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('لطفاً عنوان و توضیحات پروژه را تکمیل فرمایید.');
      return;
    }

    const categoryMap: Record<ProjectCategory, string> = {
      websites: 'وب‌سایت‌ها',
      android: 'اپلیکیشن‌های اندروید',
      python: 'پروژه‌های Python',
      tools: 'ابزارهای نرم‌افزاری',
      experimental: 'پروژه‌های آزمایشی',
    };

    const statusMap = {
      published: 'منتشر شده',
      in_development: 'در حال توسعه',
      experimental: 'آزمایشی',
    };

    const techArray = technologies.split(',').map((t) => t.trim()).filter(Boolean);

    if (editingId) {
      // Update existing
      const updated = projects.map((p) => {
        if (p.id === editingId) {
          return {
            ...p,
            title,
            category,
            categoryLabel: categoryMap[category],
            description,
            fullOverview: description,
            technologies: techArray,
            status,
            statusLabel: statusMap[status],
            releaseDate,
            demoUrl: demoUrl.trim() || undefined,
            githubUrl: githubUrl.trim() || undefined,
            appDownloadUrl: appDownloadUrl.trim() || undefined,
            image,
          };
        }
        return p;
      });
      onSaveProjects(updated);
      setEditingId(null);
    } else {
      // Create new
      const newProj: ProjectItem = {
        id: `project-${Date.now()}`,
        title,
        titleEn: title,
        category,
        categoryLabel: categoryMap[category],
        description,
        fullOverview: description,
        technologies: techArray,
        status,
        statusLabel: statusMap[status],
        releaseDate,
        demoUrl: demoUrl.trim() || undefined,
        githubUrl: githubUrl.trim() || undefined,
        appDownloadUrl: appDownloadUrl.trim() || undefined,
        image,
      };
      onSaveProjects([newProj, ...projects]);
    }

    // Reset Form
    setTitle('');
    setDescription('');
    setTechnologies('HTML5, CSS3, JavaScript');
    setActiveTab('projects');
  };

  const handleStartEdit = (proj: ProjectItem) => {
    setEditingId(proj.id);
    setTitle(proj.title);
    setCategory(proj.category);
    setDescription(proj.description);
    setTechnologies(proj.technologies.join(', '));
    setStatus(proj.status);
    setReleaseDate(proj.releaseDate || '۱۴۰۳');
    setDemoUrl(proj.demoUrl || '');
    setGithubUrl(proj.githubUrl || '');
    setAppDownloadUrl(proj.appDownloadUrl || '');
    setImage(proj.image);
    setActiveTab('add');
  };

  const handleDelete = (id: string) => {
    if (confirm('آیا از حذف این پروژه اطمینان دارید؟')) {
      const remaining = projects.filter((p) => p.id !== id);
      onSaveProjects(remaining);
    }
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(projects, null, 2));
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 3000);
    } catch {
      //
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0D1526] border border-slate-700 shadow-2xl text-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A101D] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center text-[#E5A93C]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                استودیو مدیریت محلی · KD Admin Studio
              </h3>
              <p className="text-[11px] text-slate-400">
                ویرایش و افزودن پروژه‌ها و خروجی مستقیم برای GitHub Pages
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 bg-[#0A101D] border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => {
              setEditingId(null);
              setActiveTab('projects');
            }}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-[#E5A93C] text-[#E5A93C]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            پروژه‌ها ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('add')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'add'
                ? 'border-[#E5A93C] text-[#E5A93C]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {editingId ? 'ویرایش پروژه انتخابی' : '+ افزودن پروژه جدید'}
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'export'
                ? 'border-[#E5A93C] text-[#E5A93C]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            خروجی JSON برای GitHub
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'roadmap'
                ? 'border-[#E5A93C] text-[#E5A93C]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            نقشه راه پنل واقعی و دیتابیس
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Transparency Warning Notice as required by user prompt */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
            <ShieldAlert className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-white">شفافیت ذخیره‌سازی داده‌ها:</strong>
              <p className="text-[11px] text-slate-400 leading-normal">
                تغییرات اعمال‌شده در این ابزار در <code className="text-[#38BDF8]">LocalStorage</code> مرورگر شما ذخیره می‌شوند. برای دائمی کردن این تغییرات در نسخه عمومی GitHub Pages، کافیست از تب «خروجی JSON» کد را کپی کرده و در فایل <code className="text-[#E5A93C]">projects.ts</code> پروژه قرار دهید. هیچ رمز عبور ساختگی یا نمایشی به عنوان امنیت غیرواقعی ارائه نشده است.
              </p>
            </div>
          </div>

          {/* TAB 1: Projects List */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>فهرست تمام پروژه‌های بارگذاری‌شده</span>
                <button
                  onClick={onResetProjects}
                  className="text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>بازنشانی به پروژه‌های اولیه</span>
                </button>
              </div>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-[#090E1A] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-950 overflow-hidden shrink-0 border border-slate-800">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-xs text-[#E5A93C] font-mono">
                          {proj.categoryLabel} · {proj.statusLabel}
                        </div>
                        <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {proj.technologies.slice(0, 3).join(' / ')}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        onClick={() => handleStartEdit(proj)}
                        className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                        title="ویرایش"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        className="p-2 text-red-400 hover:text-red-300 bg-red-950/40 rounded-lg transition-colors"
                        title="حذف"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Add / Edit Form */}
          {activeTab === 'add' && (
            <form onSubmit={handleCreateOrUpdateProject} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">نام پروژه *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="مثال: بات پایش قیمت پایتون"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">دسته‌بندی *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none"
                  >
                    <option value="websites">وب‌سایت‌ها</option>
                    <option value="android">اپلیکیشن‌های اندروید (بازار)</option>
                    <option value="python">پروژه‌های Python</option>
                    <option value="tools">ابزارهای نرم‌افزاری</option>
                    <option value="experimental">پروژه‌های آزمایشی</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-medium">توضیحات و اهداف پروژه *</label>
                <textarea
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="توضیح کوتاه و فنی در مورد حل مسئله و قابلیت‌ها..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">فناوری‌ها (با کاما جدا کنید)</label>
                  <input
                    type="text"
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    placeholder="Python, SQLite, Telegram API"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">وضعیت پروژه</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none"
                  >
                    <option value="published">منتشر شده</option>
                    <option value="in_development">در حال توسعه</option>
                    <option value="experimental">آزمایشی</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">تاریخ یا سال انتشار</label>
                  <input
                    type="text"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    placeholder="۱۴۰۳ / ۲۰۲۶"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">لینک گیت‌هاب (اختیاری)</label>
                  <input
                    type="text"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none dir-ltr text-right font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">لینک دانلود بازار / APK (اختیاری)</label>
                  <input
                    type="text"
                    value={appDownloadUrl}
                    onChange={(e) => setAppDownloadUrl(e.target.value)}
                    placeholder="https://cafebazaar.ir/app/..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none dir-ltr text-right font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">لینک مشاهده آنلاین (اختیاری)</label>
                  <input
                    type="text"
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-[#E5A93C] focus:outline-none dir-ltr text-right font-mono"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setActiveTab('projects');
                  }}
                  className="px-4 py-2 text-slate-400 hover:text-white rounded-xl"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-[#080C14] bg-[#E5A93C] hover:bg-[#F59E0B] rounded-xl flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>{editingId ? 'ذخیره تغییرات' : 'افزودن به پروژه‌ها'}</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: Export JSON for Git */}
          {activeTab === 'export' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <p className="text-slate-300">
                  این کد JSON شامل تمامی پروژه‌های فعلی و جدید شما است. برای دائمی کردن آن در مخزن گیت‌هاب:
                </p>
                <button
                  onClick={handleCopyJson}
                  className="px-4 py-2 text-xs font-semibold text-[#080C14] bg-[#E5A93C] rounded-xl flex items-center gap-1.5"
                >
                  {copiedJson ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedJson ? 'کپی شد!' : 'کپی کامل کد JSON'}</span>
                </button>
              </div>

              <ol className="list-decimal list-inside space-y-1 text-slate-400 bg-slate-900 p-4 rounded-xl border border-slate-800">
                <li>روی دکمه «کپی کامل کد JSON» در بالا کلیک کنید.</li>
                <li>فایل <code className="text-[#E5A93C]">src/data/projects.ts</code> را باز کنید.</li>
                <li>محتوای متغیر <code className="text-[#38BDF8]">INITIAL_PROJECTS</code> را با این مقدار جایگزین کنید.</li>
                <li>تغییرات را با <code className="text-slate-200">git commit</code> و <code className="text-slate-200">git push</code> در گیت‌هاب آپلود کنید.</li>
              </ol>

              <div className="max-h-60 overflow-y-auto rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-[11px] text-slate-300 dir-ltr text-left">
                <pre>{JSON.stringify(projects, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* TAB 4: Future Real Backend Roadmap */}
          {activeTab === 'roadmap' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                <Database className="w-5 h-5 text-[#38BDF8]" />
                <span>نقشه راه بخش B: پنل مدیریت واقعی در آینده با پلن‌های رایگان</span>
              </div>

              <p>
                همان‌طور که در معماری اولیه در نظر گرفتیم، وب‌سایت در حال حاضر کاملاً استاتیک و بدون هزینه روی <strong>GitHub Pages</strong> میزبانی می‌شود. برای اضافه کردن پنل مدیریت واقعی در آینده، گزینه‌های زیر بدون هزینه پیشنهاد می‌شوند:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>۱. پایگاه داده Supabase (PostgreSQL)</span>
                    <span className="text-[10px] text-emerald-400 font-mono">پلن رایگان</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    ارائه دیتابیس پستگرس با سیستم احراز هویت توکن‌محور (JWT)، کنترل دسترسی RLS برای ایمن نگه داشتن سفارش‌ها و API بلادرنگ.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>۲. فایربیس (Firebase / Firestore)</span>
                    <span className="text-[10px] text-emerald-400 font-mono">پلن رایگان</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    ذخیره‌سازی اسناد سفارش‌ها، امکان ورود ایمیل/رمزعبور ادمین با قوانین امنیتی بدون نیاز به سرور Node.js مستقل.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400">
                <strong>اصل امنیتی مهم:</strong> در زمان اتصال به بک‌اند واقعی، داده‌های خصوصی مشتریان هرگز در ریپازیتوری عمومی گیت‌هاب ذخیره نخواهند شد و کلیدهای دسترسی حساس از طریق متغیرهای محرمانه مدیریت خواهند گردید.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
