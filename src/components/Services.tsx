/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/config';
import { ArrowLeft, Check, Send } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#0A0F1D] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider mb-2">
            <span>خدمات قابل سفارش</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">توسعه سفارشی و تخصصی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            خدمات نرم‌افزاری و وب متناسب با نیاز کسب‌وکار شما
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            تعرفه و زمان‌بندی هر پروژه بر اساس اهداف و حجم کار به صورت جداگانه و شفاف برآورد می‌شود. با انتخاب هر خدمت، می‌توانید درخواست اولیه خود را ثبت فرمایید.
          </p>
        </div>

        {/* Services List / Asymmetric Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Title En */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/60">
                  <span className="text-xs font-mono font-bold text-[#E5A93C]">
                    {service.number}.
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dir-ltr">
                    {service.titleEn}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-[#E5A93C] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Service Action */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-[#E5A93C] hover:text-[#080C14] border border-slate-800 hover:border-[#E5A93C] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <Send className="w-3.5 h-3.5 text-[#E5A93C] group-hover/btn:text-[#080C14] transition-colors" />
                  <span>ثبت سفارش این خدمت</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
