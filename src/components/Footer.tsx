/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { INITIAL_CONFIG } from '../data/config';
import { ArrowUp, Github, Send, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080F] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Slogan (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-[#E5A93C]/40 flex items-center justify-center">
                <span className="font-mono font-bold text-base text-[#E5A93C]">KD</span>
              </div>
              <span className="font-bold text-base text-white">King Developer</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              برند شخصی و پرتفولیو رسمی توسعه‌دهنده نرم‌افزار و وب. ارائه خدمات طراحی سایت، پروژه‌های پایتون و سیستم‌های وردپرس با رویکرد سرعت، سادگی و امنیت.
            </p>

            <div className="font-mono text-[11px] text-[#E5A93C] dir-ltr text-right">
              &quot;{INITIAL_CONFIG.sloganEn}&quot;
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-semibold text-xs mb-2">بخش‌های وب‌سایت</div>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#E5A93C] transition-colors">صفحه اصلی</a></li>
              <li><a href="#about" className="hover:text-[#E5A93C] transition-colors">درباره من</a></li>
              <li><a href="#skills" className="hover:text-[#E5A93C] transition-colors">مهارت‌ها و استک فنی</a></li>
              <li><a href="#projects" className="hover:text-[#E5A93C] transition-colors">پروژه‌ها و نمونه‌کارها</a></li>
              <li><a href="#services" className="hover:text-[#E5A93C] transition-colors">خدمات قابل سفارش</a></li>
              <li><a href="#order-form" className="hover:text-[#E5A93C] transition-colors">فرم ثبت سفارش</a></li>
            </ul>
          </div>

          {/* Contact & Social (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-semibold text-xs mb-2">راه‌های ارتباطی مستقیم</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a href={INITIAL_CONFIG.telegramUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  تلگرام: @{INITIAL_CONFIG.telegramUsername}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5A93C]" />
                <a href={`mailto:${INITIAL_CONFIG.email}`} className="hover:text-white transition-colors">
                  ایمیل: {INITIAL_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <a href={INITIAL_CONFIG.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  گیت‌هاب: github.com/kingdeveloper
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            تمام حقوق محفوظ است © ۲۰۲۶ · طراحی و توسعه توسط{' '}
            <strong className="text-slate-300 font-semibold">King Developer (KD)</strong>.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-500">Hosted on GitHub Pages</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors flex items-center gap-1"
              title="بازگشت به ابتدای صفحه"
            >
              <span>بالا</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
