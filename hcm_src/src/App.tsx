import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useOutletContext } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroBento from './components/IntroBento';
import BioLegacy from './components/BioLegacy';
import TimelineSection from './components/TimelineSection';
import YouthJourneyPage from './pages/YouthJourneyPage';
import QuizPage from './pages/QuizPage';
import ArchivePage from './pages/ArchivePage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tuoi-tre-va-hanh-trinh" element={<YouthJourneyPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="kho-tu-lieu" element={<ArchivePage />} />
          {/* Các route cho P3-P7 có thể được thêm vào đây trong tương lai */}
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = () => {
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans antialiased selection:bg-rose-100 selection:text-primary-red">
      <Navbar onOpenVirtualTour={() => setIsVirtualTourOpen(true)} />
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const HomePage = () => {
  return (
    <>
        {/* Cinematic Hero visual stage */}
        <Hero 
          onScrollToTimeline={() => document.getElementById('timelines-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          onScrollToBento={() => document.getElementById('project-intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        />

        {/* Project Intro: Bento display grid */}
        <IntroBento />

        {/* History values Infographics layout details */}
        <BioLegacy />

        {/* Cột Mốc Vàng historic timeline horizontal layout */}
        <TimelineSection />

    </>
  );
};
