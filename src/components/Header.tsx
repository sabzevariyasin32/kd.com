/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Sliders, Github, Send } from 'lucide-react';
import { INITIAL_CONFIG } from '../data/config';

interface HeaderProps {
  onOpenOrderModal: () => void;
  onOpenAdminStudio: () => void;
  onOpenGuideModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenOrderModal,
  onOpenAdminStudio,
  onOpenGuideModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'خانه', href: '#hero' },
    { label: 'درباره من', href: '#about' },
    { label: 'مهارت‌ها', href: '#skills' },
    { label: 'پروژه‌ها', href: '#projects' },
    { label: 'خدمات', href: '#services' },
    { label: 'فرآیند همکاری', href: '#process' },
    { label: 'تماس', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Zone 1 (Brand) - Zone 2 (Nav links) - Zone 3 (Action) */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-inherit no-underline group whitespace-nowrap shrink-0"
          >
            {/* Geometric KD Logo Mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-[#E5A93C]/40 flex items-center justify-center shadow-inner group-hover:border-[#E5A93C] transition-colors">
              <span className="font-mono font-black text-lg tracking-tighter text-[#E5A93C]">
                KD
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-[#E5A93C] transition-colors">
                King Developer
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                توسعه‌دهنده وب و نرم‌افزار
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean Single-line Typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions & Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* GitHub Pages Guide Toggle */}
            <button
              onClick={onOpenGuideModal}
              title="راهنمای انتشار در GitHub Pages"
              className="px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>راهنمای گیت‌هاب</span>
            </button>

            {/* Admin Studio Local Tool */}
            <button
              onClick={onOpenAdminStudio}
              title="مدیریت محلی پروژه‌ها و اطلاعات"
              className="p-2 text-slate-400 hover:text-[#E5A93C] bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenOrderModal}
              className="px-4 py-2 text-xs font-semibold text-[#080C14] bg-[#E5A93C] hover:bg-[#F59E0B] rounded-lg transition-all shadow-md shadow-[#E5A93C]/20 hover:shadow-lg hover:shadow-[#E5A93C]/30 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>سفارش پروژه</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenOrderModal}
              className="px-3 py-1.5 text-xs font-semibold text-[#080C14] bg-[#E5A93C] rounded-lg whitespace-nowrap"
            >
              سفارش
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1D] border-b border-slate-800 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-[#E5A93C] text-sm font-medium py-1.5 transition-colors border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuideModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>آموزش انتشار در GitHub Pages</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminStudio();
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4 text-[#E5A93C]" />
              <span>استودیو مدیریت داده‌های محلی</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#080C14] bg-[#E5A93C] rounded-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>ثبت سفارش پروژه جدید</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
