import React, { useState, useEffect } from 'react';
import { ShieldIcon, TrendingDownIcon } from './Icons';
import { Translation } from '../types';

interface HeroProps {
  t: Translation;
}

const animatedDeals = [
  { name: 'Netflix Premium', oldPrice: 22.99 },
  { name: 'Spotify Family', oldPrice: 16.99 },
  { name: 'Midjourney Pro', oldPrice: 60.00 },
  { name: 'GitHub Copilot', oldPrice: 19.00 },
  { name: 'Adobe All Apps', oldPrice: 54.99 },
  { name: 'YouTube Premium', oldPrice: 13.99 },
];

const finalDeal = { name: 'Your Bundle', oldPrice: 188.95, newPrice: 29.99 };

const PromoLine: React.FC = () => {
  const [deal, setDeal] = useState(animatedDeals[0]);
  const [phase, setPhase] = useState('cycling'); // 'cycling', 'paused', 'finished'

  useEffect(() => {
    let cycleInterval: number | undefined;
    let phaseTimer: number;

    if (phase === 'cycling') {
      cycleInterval = window.setInterval(() => {
        const randomIndex = Math.floor(Math.random() * animatedDeals.length);
        setDeal(animatedDeals[randomIndex]);
      }, 120);

      phaseTimer = window.setTimeout(() => {
        setPhase('paused');
      }, 2500);
    } else if (phase === 'paused') {
      phaseTimer = window.setTimeout(() => {
        setPhase('finished');
      }, 500);
    } else if (phase === 'finished') {
      phaseTimer = window.setTimeout(() => {
        setPhase('cycling');
      }, 4000); // Loop back to cycling after 4 seconds
    }

    return () => {
      if (cycleInterval) clearInterval(cycleInterval);
      clearTimeout(phaseTimer);
    };
  }, [phase]);

  const CyclingContent: React.FC<{deal: {name: string, oldPrice: number}}> = React.memo(({deal}) => (
    <>
      {deal.name}{' '}
      <s className="text-red-500/80">${deal.oldPrice.toFixed(2)}</s>
    </>
  ));

  const renderContent = () => {
    switch (phase) {
      case 'cycling':
        return <span className="opacity-70"><CyclingContent deal={deal} /></span>;
      case 'paused':
        // Last deal from cycling phase is shown statically
        return <span><CyclingContent deal={deal} /></span>;
      case 'finished':
        return (
          <div className="flex items-center justify-center gap-2 sm:gap-3 animate-fadeIn">
            <span className="hidden sm:inline">
              All subscriptions{' '}
              <s className="text-red-500/80">${finalDeal.oldPrice.toFixed(2)}</s>
            </span>
             <span className="sm:hidden">
              <s className="text-red-500/80">Paying individually</s>
            </span>
            <div className="animate-icon-swoop-in">
                <TrendingDownIcon className="text-sky-400" size={24}/>
            </div>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              One bill: ${finalDeal.newPrice.toFixed(2)}
            </span>
          </div>
        );
      default:
        return <div className="h-full w-full"></div>;
    }
  };

  return (
    <div className="mb-4 h-10 flex justify-center items-center text-center p-2 font-mono text-sm md:text-base text-gray-400 dark:text-gray-300 bg-slate-200/50 dark:bg-black/30 rounded-lg backdrop-blur-sm border border-white/10 shadow-inner">
      <div className="transition-all duration-300">{renderContent()}</div>
    </div>
  );
};


const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToProducts = () => {
    // This targets the ValuePropositionBanner, which is right above the filters/products.
    const firstSection = document.querySelector('.container > .mb-12');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="container mx-auto px-4 flex items-center min-h-[50vh] py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left side: Text and CTA */}
        <div className="text-center animate-fadeInUp">
          <PromoLine />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 pb-2">
            {t.heroTitle}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
          <div className="mt-8">
             <button
              onClick={scrollToProducts}
              className="relative overflow-hidden px-8 py-3 text-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group bg-[length:200%_auto] animate-background-pan-button"
            >
              {t.heroCTA}
              <div className="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform -skew-x-45 group-hover:animate-shine"></div>
            </button>
          </div>
        </div>
        
        {/* Right side: Visual */}
        <div className="hidden md:flex justify-center items-center animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <div className="relative w-80 h-48 bg-gray-800 dark:bg-gray-900 rounded-xl p-4 flex flex-col justify-between text-left animate-breathingGlow overflow-hidden">
              <div className="flex justify-between items-start z-10">
                  <span className="text-gray-300 font-bold text-lg">{t.heroCardPass}</span>
                  <svg width="40" height="40" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                      <linearGradient id="hero-card-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      </defs>
                      <path fill="url(#hero-card-gradient)" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
                      <circle cx="100" cy="128" r="24" fill="#3f3f46"/>
                      <circle cx="156" cy="128" r="24" fill="#3f3f46" opacity="0.6"/>
                  </svg>
              </div>
              
              <div className="flex justify-between items-end z-10 text-white w-full">
                  {/* Left: Card details */}
                  <div className="opacity-0" style={{ animation: 'fadeInUp 0.5s ease-out 0.8s forwards' }}>
                      <p className="text-xs font-mono tracking-wider text-gray-400">**** **** **** 1234</p>
                      <p className="font-semibold text-sm">Jordan Pickford</p>
                  </div>

                  {/* Right: Price details */}
                  <div className="text-right">
                      <div 
                        className="opacity-0" 
                        style={{ animation: 'fadeInUp 0.5s ease-out 0.5s forwards'}}
                      >
                          <span className="text-sm text-gray-400">{t.heroCardTypicalCost}</span>
                          <div className="relative inline-block ml-2">
                              <span className="text-xl font-semibold text-red-400/80">
                                  $99.99
                              </span>
                              <div className="absolute top-1/2 -mt-px h-0.5 w-full bg-red-400 transform origin-left rounded-full"
                                  style={{ animation: 'price-hide-slash 0.3s ease-out 1s forwards' }}>
                              </div>
                          </div>
                      </div>
                      <div 
                        className="opacity-0 mt-1" 
                        style={{ animation: 'fadeInUp 0.5s ease-out 1.2s forwards'}}
                      >
                          <span className="text-sm text-sky-400">{t.heroCardYourPrice}</span>
                          <div className="flex justify-end items-center gap-2">
                              <ShieldIcon size={22} className="text-sky-400"/>
                              <span className="text-2xl font-bold">
                                  $29.99
                              </span>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;