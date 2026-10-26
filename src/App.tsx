/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { OrderForm } from './components/OrderForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminStudioModal } from './components/AdminStudioModal';
import { GitHubPagesGuideModal } from './components/GitHubPagesGuideModal';
import { getStoredProjects, saveStoredProjects, resetStoredProjects, ProjectItem } from './data/projects';

export default function App() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isAdminStudioOpen, setIsAdminStudioOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Load projects from local storage on mount
  useEffect(() => {
    const initial = getStoredProjects();
    setProjects(initial);
  }, []);

  // Save projects to state and local storage
  const handleSaveProjects = (newProjects: ProjectItem[]) => {
    setProjects(newProjects);
    saveStoredProjects(newProjects);
  };

  // Reset projects to default
  const handleResetProjects = () => {
    if (confirm('آیا مایلید تمام پروژه‌ها به فهرست پیش‌فرض بازگردانی شوند؟')) {
      resetStoredProjects();
      setProjects(getStoredProjects());
    }
  };

  // Pre-select service and scroll down smoothly to the order form
  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const orderElement = document.getElementById('order-form');
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrderModal = (defaultTopic?: string) => {
    if (defaultTopic) {
      setPreselectedService(defaultTopic);
    }
    const orderElement = document.getElementById('order-form');
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans selection:bg-[#E5A93C]/30 selection:text-[#E5A93C]">
      {/* Top Navigation Bar */}
      <Header
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenAdminStudio={() => setIsAdminStudioOpen(true)}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects & Portfolio */}
        <Projects
          projects={projects}
          onOpenAdminStudio={() => setIsAdminStudioOpen(true)}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* Section 5: Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section 6: Process */}
        <Process />

        {/* Section 7: Order Form */}
        <OrderForm
          initialProjectType={preselectedService}
          onClearPreselection={() => setPreselectedService(undefined)}
        />

        {/* Section 8: Direct Contact Channels */}
        <Contact onOpenAdminStudio={() => setIsAdminStudioOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Developer Admin Studio Modal */}
      <AdminStudioModal
        isOpen={isAdminStudioOpen}
        onClose={() => setIsAdminStudioOpen(false)}
        projects={projects}
        onSaveProjects={handleSaveProjects}
        onResetProjects={handleResetProjects}
      />

      {/* GitHub Pages Deployment Guide Modal */}
      <GitHubPagesGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </div>
  );
}
