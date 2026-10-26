/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Send, Phone, Github, ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';
import { INITIAL_CONFIG } from '../data/config';

interface ContactProps {
  onOpenAdminStudio: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenAdminStudio }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider mb-2">
            <span>تماس و راه‌های ارتباطی</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">گفتگوی مستقیم با توسعه‌دهنده</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            پل‌های ارتباطی مستقیم و رسمی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            برای استعلام، طرح سوالات فنی یا هماهنگی پروژه‌ها می‌توانید از طریق یکی از کانال‌های زیر اقدام نمایید. تمامی اطلاعات از طریق فایل تنظیمات (`config.ts`) یا ابزار مدیریت محلی قابل تغییر هستند.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Telegram Card */}
          <div className="p-6 rounded-2xl bg-[#0D1526] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#38BDF8] mb-5 group-hover:border-[#38BDF8]/40 transition-colors">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">تلگرام</h3>
              <div className="text-xs text-slate-400 mb-4">سریع‌ترین راه دریافت پاسخ و مشاوره</div>
              <div className="font-mono text-xs text-slate-300 dir-ltr text-right mb-4">
                @{INITIAL_CONFIG.telegramUsername}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={INITIAL_CONFIG.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-[#38BDF8] hover:text-[#080C14] rounded-lg transition-colors text-center"
              >
                ارسال پیام
              </a>
              <button
                onClick={() => copyToClipboard(`@${INITIAL_CONFIG.telegramUsername}`, 'telegram')}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                title="کپی آیدی تلگرام"
              >
                {copiedItem === 'telegram' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#0D1526] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#E5A93C] mb-5 group-hover:border-[#E5A93C]/40 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">پست الکترونیک</h3>
              <div className="text-xs text-slate-400 mb-4">مکاتبات رسمی و ارسال بریف پروژه</div>
              <div className="font-mono text-xs text-slate-300 dir-ltr text-right mb-4 truncate" title={INITIAL_CONFIG.email}>
                {INITIAL_CONFIG.email}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`mailto:${INITIAL_CONFIG.email}`}
                className="flex-1 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-[#E5A93C] hover:text-[#080C14] rounded-lg transition-colors text-center"
              >
                ارسال ایمیل
              </a>
              <button
                onClick={() => copyToClipboard(INITIAL_CONFIG.email, 'email')}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                title="کپی ایمیل"
              >
                {copiedItem === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-[#0D1526] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 mb-5 group-hover:border-slate-600 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">گیت‌هاب (GitHub)</h3>
              <div className="text-xs text-slate-400 mb-4">مخازن کد، پروژه‌های متن‌باز و اسکریپت‌ها</div>
              <div className="font-mono text-xs text-slate-300 dir-ltr text-right mb-4">
                github.com/kingdeveloper
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={INITIAL_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>مشاهده پروفایل</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-[#0D1526] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#38BDF8] mb-5 group-hover:border-[#38BDF8]/40 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">شماره تماس</h3>
              <div className="text-xs text-slate-400 mb-4">هماهنگی تلفنی و پیامکی (قابل شخصی‌سازی)</div>
              <div className="font-mono text-xs text-slate-300 dir-ltr text-right mb-4">
                {INITIAL_CONFIG.phone}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`tel:${INITIAL_CONFIG.phone.replace(/\s+/g, '')}`}
                className="flex-1 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors text-center"
              >
                تماس
              </a>
              <button
                onClick={() => copyToClipboard(INITIAL_CONFIG.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                title="کپی شماره تلفن"
              >
                {copiedItem === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
