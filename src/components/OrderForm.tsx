/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Send, Mail, Copy, Check, ShieldCheck, AlertCircle } from 'lucide-react';
import { INITIAL_CONFIG, SERVICES_DATA } from '../data/config';

interface OrderFormProps {
  initialProjectType?: string;
  onClearPreselection?: () => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  initialProjectType,
  onClearPreselection,
}) => {
  const [clientName, setClientName] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [projectType, setProjectType] = useState(initialProjectType || 'طراحی و توسعه وب‌سایت مدرن');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (initialProjectType) {
      setProjectType(initialProjectType);
    }
  }, [initialProjectType]);

  const generateFormattedMessage = () => {
    return `سلام، درخواست سفارش پروژه برای KD (King Developer):
- نام / کسب‌وکار: ${clientName.trim() || 'ذکر نشده'}
- راه ارتباطی: ${contactMethod.trim() || 'ذکر نشده'}
- نوع پروژه: ${projectType}
- بودجه تقریبی: ${budget.trim() || 'بررسی و توافق دوطرفه'}
- زمان‌بندی مدنظر: ${deadline.trim() || 'انعطاف‌پذیر'}
- توضیحات پروژه:
${description.trim() || 'توضیحات تکمیلی در گفتگو ارائه می‌شود.'}
`;
  };

  const validate = () => {
    if (!clientName.trim()) {
      setValidationError('لطفاً نام یا نام شرکت خود را وارد کنید.');
      return false;
    }
    if (!contactMethod.trim()) {
      setValidationError('لطفاً یک راه ارتباطی (آیدی تلگرام، شماره تماس یا ایمیل) وارد کنید.');
      return false;
    }
    if (!description.trim() || description.trim().length < 10) {
      setValidationError('لطفاً حداقل یک توضیح کوتاه (بیشتر از ۱۰ کاراکتر) درباره هدف پروژه بنویسید.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleSendTelegram = () => {
    if (!validate()) return;
    const msg = generateFormattedMessage();
    const telegramUrl = `https://t.me/${INITIAL_CONFIG.telegramUsername}?text=${encodeURIComponent(msg)}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    if (!validate()) return;
    const msg = generateFormattedMessage();
    const subject = encodeURIComponent(`سفارش پروژه جدید: ${projectType} - ${clientName}`);
    const mailtoUrl = `mailto:${INITIAL_CONFIG.email}?subject=${subject}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = async () => {
    if (!validate()) return;
    const msg = generateFormattedMessage();
    try {
      await navigator.clipboard.writeText(msg);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="order-form" className="py-24 bg-[#0A0F1D] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider mb-2">
            <span>سفارش پروژه</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">شروع همکاری</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            فرم ثبت درخواست اولیه پروژه
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            اطلاعات مورد نیاز پروژه خود را وارد نمایید. متن سفارش آماده شده و می‌توانید آن را مستقیماً از طریق تلگرام یا ایمیل به صورت امن ارسال فرمایید.
          </p>
        </div>

        {/* Main Card Form */}
        <div className="rounded-2xl bg-[#0F172A] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          
          {validationError && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          <div className="space-y-6">
            
            {/* Row 1: Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  نام و نام خانوادگی / نام کسب‌وکار <span className="text-[#E5A93C]">*</span>
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="مثال: علی رضایی یا شرکت آروین"
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A93C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  راه ارتباطی (آیدی تلگرام، شماره یا ایمیل) <span className="text-[#E5A93C]">*</span>
                </label>
                <input
                  type="text"
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  placeholder="مثال: @username یا 09123456789"
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A93C] transition-colors dir-ltr text-right"
                />
              </div>
            </div>

            {/* Row 2: Project Type */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-medium text-slate-300">
                  نوع پروژه و خدمت مدنظر <span className="text-[#E5A93C]">*</span>
                </label>
                {initialProjectType && (
                  <button
                    onClick={onClearPreselection}
                    className="text-[11px] text-[#E5A93C] hover:underline"
                  >
                    تغییر انتخاب
                  </button>
                )}
              </div>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#E5A93C] transition-colors"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                    {srv.title}
                  </option>
                ))}
                <option value="توسعه اپلیکیشن اندروید (کافه‌بازار/گوگل‌پلی)" className="bg-slate-900 text-white">
                  توسعه اپلیکیشن اندروید (کافه‌بازار / گوگل‌پلی)
                </option>
                <option value="سایر پروژه‌های نرم‌افزاری و سفارشی" className="bg-slate-900 text-white">
                  سایر پروژه‌های نرم‌افزاری و سفارشی
                </option>
              </select>
            </div>

            {/* Row 3: Description */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                توضیحات و اهداف پروژه <span className="text-[#E5A93C]">*</span>
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="خلاصه‌ای از آنچه نیاز دارید: اهداف وب‌سایت یا اپلیکیشن، ویژگی‌های کلیدی مدنظر، نمونه‌های مشابه و هر نکته مهم دیگر..."
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A93C] transition-colors leading-relaxed"
              />
            </div>

            {/* Row 4: Optional Budget & Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  بودجه تقریبی مدنظر (اختیاری)
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="مثال: توافقی یا برآورد توسعه‌دهنده"
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A93C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  زمان‌بندی مورد انتظار (اختیاری)
                </label>
                <input
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="مثال: طی ۲ هفته آینده یا فوری"
                  className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A93C] transition-colors"
                />
              </div>
            </div>

            {/* Dispatch Buttons Strip */}
            <div className="pt-6 border-t border-slate-800/80 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Telegram Direct Send */}
                <button
                  type="button"
                  onClick={handleSendTelegram}
                  className="py-3 px-4 text-xs font-semibold text-[#080C14] bg-[#E5A93C] hover:bg-[#F59E0B] rounded-xl transition-all shadow-md shadow-[#E5A93C]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>ارسال مستقیم در تلگرام</span>
                </button>

                {/* Email Direct Send */}
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="py-3 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#38BDF8]" />
                  <span>ارسال از طریق ایمیل</span>
                </button>

                {/* Copy Formatted Message */}
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="py-3 px-4 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">کپی شد!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>کپی متن درخواست</span>
                    </>
                  )}
                </button>

              </div>

              {/* Data Transparency Guarantee */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>
                  <strong>تضمین شفافیت حریم خصوصی:</strong> این وب‌سایت کاملاً استاتیک است؛ هیچ داده‌ای در دیتابیس ناشناس ذخیره نمی‌شود و اطلاعات شما تنها مستقیماً از طریق تلگرام یا کلاینت ایمیل به دست توسعه‌دهنده می‌رسد.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
