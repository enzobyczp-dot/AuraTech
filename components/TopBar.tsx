
import React from 'react';
import SessionInfo from './SessionInfo';
import ActivityTicker from './ActivityTicker';
import { Translation } from '../types';

interface TopBarProps {
    t: Translation;
}

const TopBar: React.FC<TopBarProps> = ({ t }) => {
    return (
        <div className="bg-slate-100 dark:bg-black/20 text-gray-600 dark:text-gray-400 animate-fadeInDown border-b border-black/5 dark:border-white/5">
            <div className="container mx-auto px-4 h-8 flex justify-between items-center">
                <SessionInfo t={t} />
                <div className="hidden md:flex">
                    <ActivityTicker t={t} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
