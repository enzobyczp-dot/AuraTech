
import React from 'react';
import { DollarSignIcon, SlidersIcon, PackageIcon } from './Icons';
import { Translation } from '../types';

interface ValuePropositionBannerProps {
  t: Translation;
}

const ValuePropositionBanner: React.FC<ValuePropositionBannerProps> = ({ t }) => {
  const features = [
    {
      Icon: DollarSignIcon,
      title: t.vpCostTitle,
      description: t.vpCostDesc,
    },
    {
      Icon: SlidersIcon,
      title: t.vpConvenienceTitle,
      description: t.vpConvenienceDesc,
    },
    {
      Icon: PackageIcon,
      title: t.vpVarietyTitle,
      description: t.vpVarietyDesc,
    },
  ];

  return (
    <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {features.map(({ Icon, title, description }) => (
            <div key={title} className="group p-4 rounded-xl transition-all transform hover:scale-105 duration-300 hover:bg-sky-100/50 dark:hover:bg-sky-900/20 hover:shadow-xl hover:shadow-sky-500/10">
              <div className="flex justify-center items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionBanner;
