
import type { Service } from './types';

export const SERVICES: Service[] = [
  // AI & Productivity
  {
    id: 1,
    name: 'ChatGPT Plus',
    category: 'AI/Productivity',
    description: 'Advanced AI assistant for creative and technical tasks.',
    fullDescription: 'Get priority access to new features, faster response times, and the power of GPT-4. Ideal for developers, writers, and researchers.',
    imageUrl: 'https://picsum.photos/seed/chatgpt/600/600',
    tiers: [
      { name: 'Plus', price: 20.00, features: ['Access to GPT-4', 'Faster response times', 'Priority access to new features', 'Advanced data analysis'] },
    ],
  },
  {
    id: 2,
    name: 'Midjourney',
    category: 'Creative Tools',
    description: 'Generate stunning images from text prompts.',
    fullDescription: 'A powerful AI image generator for artists, designers, and creators. Create unique visuals for any project with simple text commands.',
    imageUrl: 'https://picsum.photos/seed/midjourney/600/600',
    tiers: [
      { name: 'Basic Plan', price: 10.00, features: ['~200 generations/month', 'General commercial terms', 'Access to member gallery'] },
      { name: 'Standard Plan', price: 30.00, features: ['Unlimited Relax generations', '15 Fast hours/month', 'Stealth Mode option'] },
      { name: 'Pro Plan', price: 60.00, features: ['Unlimited Relax generations', '30 Fast hours/month', 'Stealth Mode included'] },
    ],
  },
  {
    id: 3,
    name: 'Notion AI',
    category: 'AI/Productivity',
    description: 'Your connected workspace with integrated AI.',
    fullDescription: 'Organize your life and work. Notion AI helps you write faster, brainstorm ideas, and summarize long documents directly in your workspace.',
    imageUrl: 'https://picsum.photos/seed/notion/600/600',
    tiers: [
      { name: 'AI Add-on', price: 10.00, features: ['Add to any paid plan', 'Unlimited AI responses', 'Summarize, rewrite, and brainstorm'] },
    ],
  },
  {
    id: 4,
    name: 'GitHub Copilot',
    category: 'Developer Tools',
    description: 'Your AI pair programmer.',
    fullDescription: 'Get code suggestions, complete functions, and write tests faster. Copilot helps you stay in the flow and spend less time on boilerplate code.',
    imageUrl: 'https://picsum.photos/seed/copilot/600/600',
    tiers: [
      { name: 'Individual', price: 10.00, features: ['IDE integration', 'Code completions', 'Chat in IDE'] },
      { name: 'Business', price: 19.00, features: ['All Individual features', 'Organization-wide policy management', 'Code referencing'] },
    ],
  },
  {
    id: 5,
    name: 'Grammarly',
    category: 'AI/Productivity',
    description: 'Write with confidence and clarity.',
    fullDescription: 'Go beyond basic grammar and spelling checks. Grammarly helps with tone, clarity, and conciseness to make your writing impactful.',
    imageUrl: 'https://picsum.photos/seed/grammarly/600/600',
    tiers: [
      { name: 'Premium', price: 12.00, features: ['Clarity-focused rewrites', 'Tone adjustments', 'Plagiarism detection'] },
      { name: 'Business', price: 15.00, features: ['All Premium features', 'Style guide', 'Team analytics'] },
    ],
  },
  
  // Video Streaming
  {
    id: 6,
    name: 'Netflix',
    category: 'Video Streaming',
    description: 'Unlimited movies, TV shows, and more.',
    fullDescription: 'Watch a massive library of content, from blockbuster movies and acclaimed TV series to award-winning originals.',
    imageUrl: 'https://picsum.photos/seed/netflix/600/600',
    tiers: [
      { name: 'Standard with Ads', price: 6.99, features: ['1080p (Full HD)', 'Watch on 2 supported devices at a time', 'Some ads'] },
      { name: 'Standard', price: 15.49, features: ['1080p (Full HD)', 'Ad-free', 'Download on 2 devices'] },
      { name: 'Premium', price: 22.99, features: ['4K (Ultra HD) + HDR', 'Spatial audio', 'Download on 6 devices'] },
    ],
  },
  {
    id: 7,
    name: 'Disney+',
    category: 'Video Streaming',
    description: 'The streaming home of Disney, Pixar, Marvel, Star Wars.',
    fullDescription: 'Enjoy the latest releases, classic films, and exclusive original content from the greatest storytellers in the world.',
    imageUrl: 'https://picsum.photos/seed/disneyplus/600/600',
    tiers: [
      { name: 'Basic (With Ads)', price: 7.99, features: ['Includes ads', 'Full content library'] },
      { name: 'Premium (No Ads)', price: 13.99, features: ['Ad-free experience', 'Downloads for offline viewing', '4K UHD and HDR'] },
    ],
  },
  {
    id: 8,
    name: 'Hulu',
    category: 'Video Streaming',
    description: 'Stream TV shows and movies On-Demand.',
    fullDescription: 'Get exclusive series, hit movies, and current episodes from popular TV shows. Add Live TV to watch your favorite sports and news.',
    imageUrl: 'https://picsum.photos/seed/hulu/600/600',
    tiers: [
      { name: 'With Ads', price: 7.99, features: ['Access to streaming library with ads'] },
      { name: 'No Ads', price: 17.99, features: ['Ad-free streaming library', 'Download & watch'] },
    ],
  },
  {
    id: 9,
    name: 'Max (HBO)',
    category: 'Video Streaming',
    description: 'The one to watch for iconic series, movies, and originals.',
    fullDescription: 'Stream all of HBO together with a collection of classic TV, blockbuster movies, and new Max Originals.',
    imageUrl: 'https://picsum.photos/seed/max/600/600',
    tiers: [
      { name: 'With Ads', price: 9.99, features: ['Watch with limited ads', '2 concurrent streams', 'Full HD'] },
      { name: 'Ad-Free', price: 15.99, features: ['No ads', '30 downloads', 'Full HD'] },
      { name: 'Ultimate Ad-Free', price: 19.99, features: ['No ads', '100 downloads', '4K UHD, Dolby Atmos'] },
    ],
  },
  {
    id: 10,
    name: 'YouTube Premium',
    category: 'Video Streaming',
    description: 'Ad-free YouTube and YouTube Music.',
    fullDescription: 'Enjoy your favorite videos and music without interruptions. Download content for offline viewing and play in the background on mobile.',
    imageUrl: 'https://picsum.photos/seed/youtube/600/600',
    tiers: [
      { name: 'Individual', price: 13.99, features: ['Ad-free videos', 'Background play', 'YouTube Music Premium'] },
      { name: 'Family', price: 22.99, features: ['Up to 5 members', 'All Individual features'] },
    ],
  },

  // Music Streaming
  {
    id: 11,
    name: 'Spotify',
    category: 'Music Streaming',
    description: 'Music for everyone.',
    fullDescription: 'Listen to millions of songs and podcasts. Discover new music, create your own playlists, and enjoy ad-free listening.',
    imageUrl: 'https://picsum.photos/seed/spotify/600/600',
    tiers: [
      { name: 'Premium Individual', price: 10.99, features: ['Ad-free music', 'Download to listen offline', 'On-demand playback'] },
      { name: 'Premium Duo', price: 14.99, features: ['2 Premium accounts', 'Duo Mix playlist'] },
      { name: 'Premium Family', price: 16.99, features: ['6 Premium accounts', 'Block explicit music', 'Spotify Kids'] },
    ],
  },
  {
    id: 12,
    name: 'Apple Music',
    category: 'Music Streaming',
    description: 'Over 100 million songs and 30,000 playlists.',
    fullDescription: 'Experience Spatial Audio with Dolby Atmos, listen in lossless audio, and sing along with Apple Music Sing.',
    imageUrl: 'https://picsum.photos/seed/applemusic/600/600',
    tiers: [
      { name: 'Individual', price: 10.99, features: ['Lossless audio', 'Spatial Audio', 'Ad-free listening'] },
      { name: 'Family', price: 16.99, features: ['Up to 6 people', 'Personal library for each member', 'Unlimited access'] },
    ],
  },
  
  // Creative Tools
  {
    id: 13,
    name: 'Adobe Creative Cloud',
    category: 'Creative Tools',
    description: 'The ultimate toolkit for creativity.',
    fullDescription: 'Get 20+ creative apps, including Photoshop, Illustrator, Premiere Pro, and Acrobat Pro. Create, collaborate, and be inspired.',
    imageUrl: 'https://picsum.photos/seed/adobe/600/600',
    tiers: [
      { name: 'Photography (1TB)', price: 19.99, features: ['Photoshop', 'Lightroom', '1TB cloud storage'] },
      { name: 'All Apps', price: 54.99, features: ['20+ creative apps', '100GB cloud storage', 'Adobe Fonts'] },
    ],
  },
  {
    id: 14,
    name: 'Canva Pro',
    category: 'Creative Tools',
    description: 'Design anything, effortlessly.',
    fullDescription: 'Create professional designs with ease. Access premium templates, millions of photos, and powerful tools like Brand Kit and Background Remover.',
    imageUrl: 'https://picsum.photos/seed/canva/600/600',
    tiers: [
      { name: 'Pro', price: 12.99, features: ['100+ million stock photos', 'Brand Kit', 'Magic Resize'] },
      { name: 'Teams', price: 14.99, features: ['All Pro features', 'Real-time collaboration', 'Team reports'] },
    ],
  },
  {
    id: 15,
    name: 'Figma',
    category: 'Creative Tools',
    description: 'The collaborative interface design tool.',
    fullDescription: 'Design, prototype, and collaborate all in one place. Build better products as a team, from initial ideas to final handoff.',
    imageUrl: 'https://picsum.photos/seed/figma/600/600',
    tiers: [
      { name: 'Professional', price: 12.00, features: ['Unlimited files', 'Version history', 'Shared libraries'] },
      { name: 'Organization', price: 45.00, features: ['Design system analytics', 'Centralized file management', 'Private plugins'] },
    ],
  },

  // Gaming
  {
    id: 16,
    name: 'Xbox Game Pass Ultimate',
    category: 'Gaming',
    description: 'Hundreds of high-quality games.',
    fullDescription: 'Get access to a huge library of games on console, PC, and cloud. Includes all the benefits of Xbox Live Gold and EA Play.',
    imageUrl: 'https://picsum.photos/seed/gamepass/600/600',
    tiers: [
      { name: 'Ultimate', price: 16.99, features: ['Console, PC, and Cloud gaming', 'New games on day one', 'Includes EA Play'] },
    ],
  },
  {
    id: 17,
    name: 'PlayStation Plus',
    category: 'Gaming',
    description: 'Enhance your PlayStation experience.',
    fullDescription: 'Enjoy online multiplayer, monthly games, exclusive discounts, and access to a massive catalog of PS4 and PS5 games.',
    imageUrl: 'https://picsum.photos/seed/psplus/600/600',
    tiers: [
      { name: 'Essential', price: 9.99, features: ['Online multiplayer', 'Monthly games', 'Exclusive discounts'] },
      { name: 'Extra', price: 14.99, features: ['All Essential benefits', 'Game Catalog'] },
      { name: 'Premium', price: 17.99, features: ['All Extra benefits', 'Classics Catalog', 'Cloud Streaming'] },
    ],
  },
  
  // Cloud Storage
  {
    id: 18,
    name: 'Dropbox',
    category: 'Cloud Storage',
    description: 'Securely store and share your files.',
    fullDescription: 'Keep all your files safe, organized, and accessible from any device. Collaborate with team members and back up important documents.',
    imageUrl: 'https://picsum.photos/seed/dropbox/600/600',
    tiers: [
      { name: 'Plus', price: 9.99, features: ['2 TB (2,000 GB) storage', 'File recovery', 'Password protection'] },
      { name: 'Professional', price: 16.58, features: ['3 TB (3,000 GB) storage', 'Advanced sharing controls', 'Watermarking'] },
    ],
  },
  {
    id: 19,
    name: 'Google One',
    category: 'Cloud Storage',
    description: 'More storage for everything Google.',
    fullDescription: 'Upgrade your storage across Google Drive, Gmail, and Google Photos. Share your plan with your family and get extra member benefits.',
    imageUrl: 'https://picsum.photos/seed/googleone/600/600',
    tiers: [
      { name: 'Basic (100 GB)', price: 1.99, features: ['100 GB storage', 'Access to Google experts', 'Share with up to 5 others'] },
      { name: 'Standard (200 GB)', price: 2.99, features: ['200 GB storage', '3% back in Google Store'] },
      { name: 'Premium (2 TB)', price: 9.99, features: ['2 TB storage', 'Google One VPN', '10% back in Google Store'] },
    ],
  },
  {
    id: 20,
    name: 'iCloud+',
    category: 'Cloud Storage',
    description: 'The best place for all your photos, files, and more.',
    fullDescription: 'iCloud+ gives you more storage for your data, plus premium features like Private Relay, Hide My Email, and HomeKit Secure Video support.',
    imageUrl: 'https://picsum.photos/seed/icloud/600/600',
    tiers: [
      { name: '50 GB', price: 0.99, features: ['50 GB storage', 'Private Relay', 'Hide My Email'] },
      { name: '200 GB', price: 2.99, features: ['200 GB storage', 'Share with family'] },
      { name: '2 TB', price: 9.99, features: ['2 TB storage', 'HomeKit Secure Video'] },
    ],
  },
].concat(
  ...Array.from({ length: 6 }, (_, i) => [ // Generate 30 more items, 5 per original category
    // AI/Productivity
    {
      id: 21 + i * 5, name: `Productivity Tool ${i+1}`, category: 'AI/Productivity', description: 'Enhance your workflow.',
      fullDescription: `This is a detailed description for Productivity Tool ${i+1}.`, imageUrl: `https://picsum.photos/seed/prod${i}/600/600`,
      tiers: [
        { name: 'Basic', price: 5.99 + i, features: ['Core feature A', 'Core feature B'] },
        { name: 'Pro', price: 12.99 + i*2, features: ['All Basic', 'Advanced feature C', 'Priority support'] }
      ]
    },
    // Video Streaming
    {
      id: 22 + i * 5, name: `Streaming Service ${i+1}`, category: 'Video Streaming', description: 'Your next favorite show awaits.',
      fullDescription: `This is a detailed description for Streaming Service ${i+1}.`, imageUrl: `https://picsum.photos/seed/stream${i}/600/600`,
      tiers: [
        { name: 'Standard', price: 8.99 + i, features: ['HD Streaming', '2 screens'] },
        { name: 'Premium', price: 15.99 + i*2, features: ['4K UHD Streaming', '4 screens', 'Offline downloads'] }
      ]
    },
    // Creative Tools
    {
      id: 23 + i * 5, name: `Creative Suite ${i+1}`, category: 'Creative Tools', description: 'Unleash your creativity.',
      fullDescription: `This is a detailed description for Creative Suite ${i+1}.`, imageUrl: `https://picsum.photos/seed/creative${i}/600/600`,
      tiers: [
        { name: 'Hobbyist', price: 9.99 + i, features: ['Basic tools', '10 projects'] },
        { name: 'Professional', price: 24.99 + i*2, features: ['All tools', 'Unlimited projects', 'Cloud sync'] }
      ]
    },
    // Gaming
    {
      id: 24 + i * 5, name: `Gaming Hub ${i+1}`, category: 'Gaming', description: 'The ultimate gaming library.',
      fullDescription: `This is a detailed description for Gaming Hub ${i+1}.`, imageUrl: `https://picsum.photos/seed/gaming${i}/600/600`,
      tiers: [
        { name: 'Core', price: 7.99 + i, features: ['Access to 50+ games', 'Online play'] },
        { name: 'Ultimate', price: 14.99 + i*2, features: ['Access to 200+ games', 'Cloud gaming', 'Exclusive content'] }
      ]
    },
    // Cloud Storage
    {
      id: 25 + i * 5, name: `Cloud Drive ${i+1}`, category: 'Cloud Storage', description: 'Your files, safe and sound.',
      fullDescription: `This is a detailed description for Cloud Drive ${i+1}.`, imageUrl: `https://picsum.photos/seed/cloud${i}/600/600`,
      tiers: [
        { name: 'Personal (500GB)', price: 4.99 + i, features: ['500 GB storage', 'File sharing'] },
        { name: 'Family (2TB)', price: 9.99 + i*2, features: ['2 TB storage', 'Share with family', 'Advanced security'] }
      ]
    },
  ])
);
