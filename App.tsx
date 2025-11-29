import React, { useState } from 'react';
import { IconZap, IconGlobe, IconCode, IconArrowRight, IconMenu, IconClose } from './components/Icons';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505] border-b border-[#333]">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FE4E1D]"></div>
          <span className="text-2xl font-extrabold tracking-tighter text-white">VOLT</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Product', 'Solutions', 'Pricing', 'Docs'].map((item) => (
            <a key={item} href="#" className="text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-[#FE4E1D] transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-[#FE4E1D] hover:bg-white text-black px-6 py-2 text-sm font-extrabold uppercase tracking-tight transition-colors border border-transparent hover:border-[#FE4E1D]">
            Log In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-[#FE4E1D]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#050505] border-b border-[#333] p-4 flex flex-col gap-4">
          {['Product', 'Solutions', 'Pricing', 'Docs'].map((item) => (
            <a key={item} href="#" className="text-lg font-bold uppercase tracking-wide text-white hover:text-[#FE4E1D]">
              {item}
            </a>
          ))}
          <button className="bg-[#FE4E1D] w-full py-3 text-black font-extrabold uppercase tracking-tight">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FE4E1D] text-[#050505] border-b border-black overflow-hidden">
      {/* CSS Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block border border-black px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest bg-black text-[#FE4E1D]">
            v2.0 Now Live
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.05em] leading-[0.9] uppercase mb-10">
            Revenue Data.<br />
            <span className="text-white selection:bg-black selection:text-[#FE4E1D]">Real Time.</span>
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl font-medium leading-relaxed mb-10 text-black/80">
            The infrastructure for the internet's economy. 
            Instant reconciliation, multi-currency payouts, and programmable money.
          </p>
          
          <button className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 md:px-10 md:py-5 text-lg font-extrabold uppercase tracking-tight hover:bg-white hover:text-black transition-all duration-200">
            Start Dashboard
            <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const logos = [
    "ACME CORP", "KINETIC", "NEXUS", "VERTEX", "HORIZON", 
    "ACME CORP", "KINETIC", "NEXUS", "VERTEX", "HORIZON"
  ];

  return (
    <div className="bg-black border-b border-[#333] overflow-hidden py-8">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex gap-16 md:gap-32 items-center min-w-full pl-16 md:pl-32">
          {logos.map((logo, index) => (
            <span key={index} className="text-2xl md:text-3xl font-extrabold text-white/40 uppercase tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="group border border-[#333] bg-black p-8 md:p-12 hover:border-[#FE4E1D] transition-colors duration-300 flex flex-col h-full min-h-[300px]">
    <div className="mb-auto">
      <div className="w-12 h-12 bg-[#111] border border-[#333] flex items-center justify-center text-[#FE4E1D] mb-6 group-hover:bg-[#FE4E1D] group-hover:text-black transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4 group-hover:text-[#FE4E1D] transition-colors">
        {title}
      </h3>
    </div>
    <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
      {desc}
    </p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-black py-24 border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <FeatureCard 
            title="Instant Reconciliation"
            desc="Automated ledger updates in milliseconds. Say goodbye to month-end chaos and hello to real-time financial clarity."
            icon={<IconZap className="w-6 h-6" />}
          />
          <FeatureCard 
            title="Global Currency"
            desc="Issue virtual accounts in 35+ currencies. Exchange, hold, and payout globally with zero hidden fees."
            icon={<IconGlobe className="w-6 h-6" />}
          />
          <FeatureCard 
            title="API Access"
            desc="Developer-first design. Webhooks, granular permissions, and an SDK that integrates in minutes, not weeks."
            icon={<IconCode className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section className="bg-[#FE4E1D] py-32 border-b border-black flex flex-col justify-center items-center text-center px-4">
      <div className="relative">
        <h2 className="text-[15vw] md:text-[12vw] leading-none font-extrabold tracking-[-0.06em] text-black mb-0">
          $4.2B
        </h2>
        <div className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 bg-black text-[#FE4E1D] px-6 py-2 text-sm md:text-xl font-bold uppercase tracking-widest whitespace-nowrap">
          Processed to Date
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-[#FE4E1D]"></div>
              <span className="text-xl font-extrabold tracking-tighter">VOLT</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Volt Financial Inc.<br />
              All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#FE4E1D] text-sm font-bold uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4">
              {['Overview', 'Features', 'Integrations', 'Security'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#FE4E1D] font-medium transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FE4E1D] text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#FE4E1D] font-medium transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-[#FE4E1D] text-sm font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#FE4E1D] font-medium transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-[#333] text-center md:text-left">
           <h3 className="text-[10vw] md:text-[8vw] leading-none font-extrabold tracking-tighter text-[#111] select-none hover:text-[#222] transition-colors">
            POWER UP.
           </h3>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Features />
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default App;