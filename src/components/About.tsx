/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, CheckCircle2, Shield, Cpu, ExternalLink } from 'lucide-react';
import { INITIAL_CONFIG } from '../data/config';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0A0F1D] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider mb-2">
            <span>درباره من</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">معرفی و اصول کاری</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            تمرکز بر توسعه تمیز، حل مسائل واقعی و خلق محصولات کاربردی
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Editorial Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              من با نام مستعار <strong className="text-white font-semibold">King Developer (KD)</strong> در فضای توسعه نرم‌افزار و طراحی وب فعالیت می‌کنم. هدف اصلی من در این مسیر، تبدیل نیازها و ایده‌های ذهنی به ابزارهای نرم‌افزاری پایدار، کارآمد و سریع است.
            </p>

            <p>
              تمرکز فعالیت‌های من در چند حوزه کلیدی خلاصه می‌شود: طراحی رابط‌های کاربری مدرن با استانداردهای وب، شخصی‌سازی و راه‌اندازی وب‌سایت‌های وردپرسی با ابزارهای محبوب نظیر المنتور و ووکامرس، و برنامه‌نویسی اسکریپت‌ها و ابزارهای خودکارسازی با پایتون برای صرفه‌جویی در زمان و حل چالش‌های روزمره.
            </p>

            <p className="text-slate-400">
              باور من بر این است که یک وب‌سایت یا ابزار نرم‌افزاری موفق، نیازی به وابستگی‌های سنگین، کدهای سردرگم یا ظاهرسازی‌های کاذب ندارد؛ ساختار شفاف، لود سریع، امنیت و عملکرد درست در موبایل و دسکتاپ اولویت‌های بنیادین هر پروژه هستند.
            </p>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C]" />
                  <span>کدنویسی استاندارد و تمیز</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  استفاده از ساختارهای استاندارد به منظور امکان توسعه راحت در آینده بدون دوباره‌کاری.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1.5">
                  <Shield className="w-4 h-4 text-[#00D2FF]" />
                  <span>شفافیت و امنیت اطلاعات</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  حفظ محرمانگی اطلاعات پروژه‌ها و عدم افشای توکن‌ها یا داده‌های خصوصی کارفرمایان.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Identity Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center">
                    <User className="w-6 h-6 text-[#E5A93C]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {INITIAL_CONFIG.name}
                    </h3>
                    <div className="text-xs text-slate-400 font-mono">
                      {INITIAL_CONFIG.brandName} Brand Identity
                    </div>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 dir-ltr">
                  Est. 2026
                </span>
              </div>

              {/* Identity Specifications List - Zero Pill unboxed text */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">حوزه فعالیت:</span>
                  <span className="text-white font-medium">{INITIAL_CONFIG.role}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">زبان‌ها و استک اصلی:</span>
                  <span className="text-white font-mono">HTML, CSS, JS, Python, TS</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">سیستم مدیریت محتوا:</span>
                  <span className="text-white">WordPress & Elementor</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">میزبانی اولیه:</span>
                  <span className="text-slate-300">GitHub Pages (بدون سرور پولی)</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">وضعیت پذیرش پروژه:</span>
                  <span className="text-[#E5A93C] font-medium">پذیرش بررسی و سفارش</span>
                </div>
              </div>

              {/* Quick links to profiles */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={INITIAL_CONFIG.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-200 text-xs font-medium flex items-center justify-between transition-colors"
                >
                  <span className="font-mono">GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {INITIAL_CONFIG.bazaarUrl && (
                  <a
                    href={INITIAL_CONFIG.bazaarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-200 text-xs font-medium flex items-center justify-between transition-colors"
                  >
                    <span>صفحه در کافه‌بازار (اپلیکیشن‌ها)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
