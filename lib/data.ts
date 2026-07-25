import type { WorkItem, Service, Stat, Testimonial, ProcessStep, Fact } from '@/types';

export const PORTFOLIO_DATA = {
  name: 'ONKAR',
  shortName: 'OMIE',
  tagline: 'Video Editor & Content Creator',
  headline: 'Let\'s create reels & videos people actually stop and watch.',
  subheadline: 'Helping brands and creators make content that captures attention, drives engagement, and delivers results.',
  email: 'rautonkar07@gmail.com',
  instagram: 'https://instagram.com/omie.e_',
  whatsapp: 'https://wa.me/918767053939',
  instagramHandle: '@omie.e_',
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: '1',
    title: 'Youth Festival – MGMU',
    category: 'reels',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=900&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isVideo: true,
  },
  {
    id: '2',
    title: 'Tech Channel Long-Form Edit',
    category: 'youtube',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=280&fit=crop',
  },
  {
    id: '3',
    title: 'Product Launch Ad',
    category: 'ads',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-aae19e938282?w=500&h=280&fit=crop',
  },
  {
    id: '4',
    title: 'Lifestyle Brand Story',
    category: 'brand',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=280&fit=crop',
  },
  {
    id: '5',
    title: 'Shri Krishna Janmashtami',
    category: 'reels',
    thumbnail: 'https://images.unsplash.com/photo-1478098711619-69891b0ec21a?w=500&h=900&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isVideo: true,
  },
  {
    id: '6',
    title: 'Sahyadri in Monsoon',
    category: 'reels',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=900&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isVideo: true,
  },
  {
    id: '7',
    title: 'Goa Vibes',
    category: 'reels',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=900&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isVideo: true,
  },
];

export const SERVICES: Service[] = [
  {
    icon: '🎬',
    title: 'Short Form Editing',
    description: 'High-energy reels and shorts built for maximum retention — hooks, cuts, and captions optimized for the algorithm.',
  },
  {
    icon: '📺',
    title: 'YouTube Editing',
    description: 'Long-form edits with tight pacing, dynamic b-roll, custom intros, and graphics that keep viewers watching till the end.',
  },
  {
    icon: '📱',
    title: 'Social Media Content',
    description: 'Platform-specific content packages for Instagram, TikTok, and YouTube Shorts that convert viewers into followers.',
  },
  {
    icon: '🏆',
    title: 'Brand Commercials',
    description: 'Cinematic ad creatives and product videos with premium color grading and motion design that elevate your brand.',
  },
  {
    icon: '🖼️',
    title: 'Thumbnail Design',
    description: 'Eye-catching, click-worthy thumbnails designed to boost CTR and make your content stand out in crowded feeds.',
  },
  {
    icon: '🧠',
    title: 'Content Strategy',
    description: 'Data-informed strategy sessions to identify what content formats, hooks, and styles will drive the most growth for your niche.',
  },
];

export const STATS: Stat[] = [
  {
    number: '5M+',
    label: 'Total Views Generated',
  },
  {
    number: '100+',
    label: 'Projects Delivered',
  },
  {
    number: '50+',
    label: 'Happy Clients',
  },
  {
    number: '48hr',
    label: 'Average Turnaround',
  },
  {
    number: '98%',
    label: 'Client Satisfaction Rate',
    big: true,
    description: 'Clients come back because the work speaks for itself. Repeat business and referrals are the foundation of REWIRED.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aryan Sharma',
    role: 'Founder, Lifestyle Brand',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan',
    quote: 'Onkar transformed our brand\'s Instagram presence completely. The reels he created for us hit 500K views in the first week. Absolute game changer for our growth.',
    rating: 5,
  },
  {
    name: 'Priya Kulkarni',
    role: 'YouTube Creator, 200K subscribers',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    quote: 'The YouTube edits are next level. Our watch time went up 40% after switching to Onkar. He understands pacing and storytelling at a level most editors don\'t.',
    rating: 5,
  },
  {
    name: 'Rahul Singh',
    role: 'Marketing Manager, D2C Brand',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    quote: 'We hired Onkar for our product launch campaign and the ad creative he delivered outperformed everything we had tested before. ROAS went through the roof.',
    rating: 5,
  },
  {
    name: 'Neha Patil',
    role: 'Instagram Content Creator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    quote: 'Fast, professional, and genuinely talented. Onkar delivered exactly what I envisioned — and then some. My audience noticed the quality upgrade immediately.',
    rating: 5,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a detailed brief — your vision, references, target audience, and platform goals. This is where we align on expectations and scope.',
  },
  {
    number: '02',
    title: 'Editing',
    description: 'I work on the footage — cutting, grading, sound designing, and motion graphics — with a focus on storytelling and viewer retention.',
  },
  {
    number: '03',
    title: 'Revisions',
    description: 'You receive the draft and share feedback. I make revisions until the video is exactly how you want it — your satisfaction is the standard.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Final file delivered in your preferred format and resolution, ready to upload. Fast turnaround, no compromises on quality.',
  },
];

export const ABOUT_FACTS: Fact[] = [
  {
    number: '5M+',
    label: 'Views Generated',
  },
  {
    number: '100+',
    label: 'Projects Done',
  },
  {
    number: '50+',
    label: 'Happy Clients',
  },
];

export const WORK_CATEGORIES = ['all', 'reels', 'youtube', 'ads', 'brand'] as const;
