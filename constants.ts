import { LinkItem, FeatureItem } from './types';

export const NAV_LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Subscribe', href: '/dashboard/#/plan' },
  { title: 'Knowledge', href: '/dashboard/#/knowledge' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Global Network',
    description: 'Premium routes optimized for low latency. Connect to Tokyo, Hong Kong, Los Angeles, and more.',
    icon: 'Globe',
  },
  {
    title: '4K Streaming',
    description: 'Unlock global streaming content. Support for Netflix, Disney+, HBO, and YouTube Premium.',
    icon: 'PlayCircle',
  },
  {
    title: 'Privacy First',
    description: 'We value your privacy. No logs policy with industry-standard encryption protocols.',
    icon: 'Shield',
  },
  {
    title: 'Multi-Platform',
    description: 'One subscription for all your devices. Support for Windows, macOS, iOS, Android, and Linux.',
    icon: 'Smartphone',
  },
];

// Not used in this version but kept for type compatibility if needed
export const SEARCH_ENGINES = [
  { name: 'Google', url: 'https://www.google.com/search?q=' },
];

export const DEFAULT_LINKS: LinkItem[] = [];

export const SYSTEM_INSTRUCTION = `You are the Customer Support AI for "Yoimiya", a premium network acceleration service running on Xboard.
Your goal is to assist users with:
1. Registration and Login (direct them to /register or /login).
2. Explaining features (Global nodes, 4K streaming, Low latency gaming).
3. Client setup (Mention Clash, V2Ray, Shadowrocket support).
Be polite, professional, and helpful. Keep answers concise.`;