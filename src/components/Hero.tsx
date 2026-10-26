/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, Send, Code2, Terminal, Sparkles, ShieldCheck, Globe } from 'lucide-react';
import { INITIAL_CONFIG } from '../data/config';
import heroImg from '../assets/images/hero_kd_monogram_1792949022401.jpg';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 -right-40 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 -left-40 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Grid: Typography Column + High-Fidelity KD Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typography Column (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-right">
            
            {/* Brand Kicker - Clean unboxed text with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-[#E5A93C] font-semibold tracking-wider uppercase font-mono">
                KD BRAND
              </span>
              <span aria-hidden="true">·</span>
              <span>هویت رسمی توسعه‌دهنده نرم‌افزار</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">King Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] text-balance">
              خلق تجربه‌های دیجیتال پایدار و{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#E5A93C] via-[#F59E0B] to-[#FFE082]">
                کاربردی
              </span>
            </h1>

            {/* English Tagline Sub-heading */}
            <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wide dir-ltr text-right">
              &quot;Building Digital Experiences That Matter.&quot;
            </p>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              توسعه‌دهنده متمرکز بر طراحی وب‌سایت‌های حرفه‌ای، پیاده‌سازی و شخصی‌سازی وردپرس و المنتور، برنامه‌نویسی اسکریپت‌های کاربردی پایتون و ساخت ابزارهای نرم‌افزاری مستقل.
            </p>

            {/* Slogan highlight banner */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">شعار برند KD</div>
                  <div className="text-sm font-semibold text-white">
                    {INITIAL_CONFIG.slogan}
                  </div>
                </div>
              </div>
              <span className="hidden sm:inline font-mono text-xs text-slate-500 dir-ltr">
                {INITIAL_CONFIG.sloganEn}
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-[#080C14] bg-[#E5A93C] hover:bg-[#F59E0B] rounded-xl transition-all shadow-lg shadow-[#E5A93C]/20 hover:shadow-[#E5A93C]/30 flex items-center gap-2 group"
              >
                <span>مشاهده پروژه‌ها و نمونه‌کارها</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenOrderModal}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-[#E5A93C]" />
                <span>سفارش پروژه جدید</span>
              </button>
            </div>

            {/* Direct Quick Channels */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span>ارتباط سریع:</span>
              <a
                href={INITIAL_CONFIG.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-[#00D2FF] transition-colors flex items-center gap-1"
              >
                <span>تلگرام</span>
                <span className="font-mono text-slate-500">@{INITIAL_CONFIG.telegramUsername}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={INITIAL_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>

          </div>

          {/* Media / Visual Anchor Column (5 Cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#E5A93C]/20 via-transparent to-[#00D2FF]/20 rounded-3xl blur-md" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#0D1322] border border-slate-800 overflow-hidden shadow-2xl">
                
                {/* 3D KD Monogram Visual */}
                <div className="aspect-square w-full relative bg-[#080C14] overflow-hidden flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={heroImg}
                      alt="نشان سه‌بعدی رسمی برند KD - King Developer"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Stylized CSS fallback for zero broken images */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0D1526] to-[#080C14] p-8 text-center">
                      <div className="w-24 h-24 rounded-2xl bg-[#080C14] border border-[#E5A93C] flex items-center justify-center mb-4 shadow-lg shadow-[#E5A93C]/20">
                        <span className="font-mono font-black text-4xl text-[#E5A93C]">KD</span>
                      </div>
                      <div className="text-lg font-bold text-white">King Developer</div>
                      <div className="text-xs text-slate-400 mt-1">Turning Ideas Into Digital Reality</div>
                    </div>
                  )}

                  {/* Visual Floating Tech Badge (Non-obstructive) */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#080C14]/90 backdrop-blur-md border border-slate-800 text-right dir-ltr">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                      <span className="text-[#E5A93C]">KD.core.manifest</span>
                      <span>status: active</span>
                    </div>
                    <code className="text-xs text-slate-300 font-mono block">
                      &gt; execute(vision=&quot;reality&quot;)
                    </code>
                  </div>
                </div>

                {/* Sub-card brand specs */}
                <div className="p-4 bg-[#0A101D] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#E5A93C]" />
                    <span>توسعه ایمن و ماژولار</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-slate-400">
                    <Globe className="w-3.5 h-3.5" />
                    <span>GitHub Pages Ready</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Capability Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs text-slate-500 font-mono">CORE 01</div>
            <div className="text-sm font-semibold text-white">توسعه وب مدرن</div>
            <div className="text-xs text-slate-400">HTML5 · CSS3 · TypeScript · React</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-slate-500 font-mono">CORE 02</div>
            <div className="text-sm font-semibold text-white">توسعه و بهینه‌سازی وردپرس</div>
            <div className="text-xs text-slate-400">Elementor · WooCommerce · عیب‌یابی</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-slate-500 font-mono">CORE 03</div>
            <div className="text-sm font-semibold text-white">برنامه‌نویسی پایتون</div>
            <div className="text-xs text-slate-400">اتوماسیون · اسکریپتینگ · وب‌اسکرپینگ</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-slate-500 font-mono">CORE 04</div>
            <div className="text-sm font-semibold text-white">معماری نرم‌افزار و ابزارها</div>
            <div className="text-xs text-slate-400">بدون وابستگی اضافه · لود سریع</div>
          </div>
        </div>

      </div>
    </section>
  );
};
