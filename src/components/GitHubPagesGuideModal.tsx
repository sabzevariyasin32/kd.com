/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Github, Terminal, Copy, Check, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface GitHubPagesGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesGuideModal: React.FC<GitHubPagesGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = async (code: string, stepIndex: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedStep(stepIndex);
      setTimeout(() => setCopiedStep(null), 2500);
    } catch {
      //
    }
  };

  const steps = [
    {
      title: '۱. اجرای محلی پروژه روی کامپیوتر شخصی',
      desc: 'برای تست و مشاهده سایت روی سیستم خود، کافیست ترمینال را در پوشه پروژه باز کرده و دستورات زیر را وارد کنید:',
      commands: `npm install\nnpm run dev`,
      note: 'پس از اجرا، آدرس http://localhost:3000 یا 5173 را در مرورگر باز کنید.'
    },
    {
      title: '۲. ساخت مخزن جدید در گیت‌هاب (GitHub Repository)',
      desc: 'وارد سایت github.com شوید و با کلیک روی New Repository یک مخزن جدید بسازید.',
      commands: `# اگر می‌خواهید آدرس سایت username.github.io باشد:
# نام ریپازیتوری را دقیقاً username.github.io بگذارید.
# اگر نام دیگری بگذارید، آدرس سایت username.github.io/repo-name خواهد بود.`,
      note: 'ریپازیتوری را روی Public (عمومی) تنظیم کنید.'
    },
    {
      title: '۳. ارسال فایل‌های پروژه به گیت‌هاب با دستورات Git',
      desc: 'در ترمینال سیستم خود، دستورات زیر را به ترتیب اجرا نمایید تا فایل‌ها به مخزن متصل شوند:',
      commands: `git init\ngit add .\ngit commit -m "Initial commit for KD King Developer website"\ngit branch -M main\ngit remote add origin https://github.com/USERNAME/REPO_NAME.git\ngit push -u origin main`,
      note: 'به جای USERNAME و REPO_NAME اطلاعات حساب کاربری خود در گیت‌هاب را قرار دهید.'
    },
    {
      title: '۴. ساخت خروجی نهایی استاتیک (Build)',
      desc: 'برای تبدیل کدهای پروژه به فایل‌های کامپایل‌شده استاتیک HTML/CSS/JS دستور زیر را بزنید:',
      commands: `npm run build`,
      note: 'این دستور پوشه‌ای به نام "dist" با تمامی فایل‌های استاتیک سبک تولید می‌کند.'
    },
    {
      title: '۵. فعال‌سازی رایگان GitHub Pages در تنظیمات مخزن',
      desc: 'در صفحه مخزن خود در سایت GitHub به مسیر زیر بروید:',
      commands: `Settings -> Pages -> Build and deployment -> Source: Deploy from a branch\nBranch: gh-pages یا main -> Save`,
      note: 'همچنین می‌توانید از اکشن خودکار GitHub Actions برای انتشار با یک کلیک استفاده کنید.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0D1526] border border-slate-700 shadow-2xl text-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A101D] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
              <Github className="w-5 h-5 text-[#E5A93C]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                راهنمای مرحله‌به‌مرحله استقرار روی GitHub Pages
              </h3>
              <p className="text-[11px] text-slate-400">
                انتشار کاملاً رایگان بدون نیاز به هاست پولی، دیتابیس یا سرور اختصاصی
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

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs text-slate-300">
          
          <div className="p-3.5 rounded-xl bg-[#080C14] border border-[#E5A93C]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#E5A93C]" />
              <span className="font-semibold text-white">آدرس نهایی سایت شما:</span>
              <span className="font-mono text-slate-400 dir-ltr">https://username.github.io</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">هاستینگ رایگان و دائمی</span>
          </div>

          <div className="space-y-6">
            {steps.map((st, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#090E1A] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">
                    {st.title}
                  </h4>
                  <button
                    onClick={() => copyCode(st.commands, idx)}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1"
                    title="کپی دستورات"
                  >
                    {copiedStep === idx ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span className="text-[10px]">{copiedStep === idx ? 'کپی شد' : 'کپی'}</span>
                  </button>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {st.desc}
                </p>

                <div className="p-3 rounded-lg bg-slate-950 font-mono text-[11px] text-[#38BDF8] dir-ltr text-left overflow-x-auto">
                  <pre>{st.commands}</pre>
                </div>

                {st.note && (
                  <div className="text-[11px] text-slate-500 italic">
                    💡 نکته: {st.note}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#0A101D] border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            طراحی شده با استانداردهای وب سازگار با گیت‌هاب پیجز
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#080C14] bg-[#E5A93C] rounded-lg"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
};
