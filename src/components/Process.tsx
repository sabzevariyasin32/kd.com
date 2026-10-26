/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COLLABORATION_STEPS } from '../data/config';
import { Info, ArrowLeft } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider mb-2">
            <span>فرآیند همکاری</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">مراحل شفاف از ایده تا تحویل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            چهار مرحله ساده برای اجرای بی‌دردسر پروژه
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            روند همکاری به گونه‌ای تدوین شده است که در تمام مراحل از هزینه، زمان‌بندی و الزامات فنی اطمینان کامل حاصل شود.
          </p>
        </div>

        {/* 4 Steps Horizontal / Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {COLLABORATION_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D1526] border border-slate-800 flex flex-col justify-between relative group hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Step Number */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-lg text-[#E5A93C] mb-5 group-hover:border-[#E5A93C]/40 transition-colors">
                  {step.step}
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-white mb-2.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress indicator connector */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>مرحله {idx + 1} از ۴</span>
                {idx < 3 && <ArrowLeft className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />}
              </div>
            </div>
          ))}
        </div>

        {/* Important Disclaimer Notice as requested */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex items-start sm:items-center gap-3">
          <Info className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-slate-300 leading-normal">
            <strong className="text-white font-medium">توجه مهم:</strong> ثبت درخواست در این وب‌سایت به منزله پذیرش قطعی یا تعهد مالی برای طرفین نیست. پس از بررسی امکان‌سنجی اولیه، ارتباط جهت هماهنگی و گفتگوی مستقیم برقرار خواهد شد.
          </p>
        </div>

      </div>
    </section>
  );
};
