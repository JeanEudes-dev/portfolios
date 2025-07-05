
export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'BrollyHub',
    description: 'An AI-powered expert marketplace with features like embedded file shelf, smart offer routing, AI chat, and video calls.',
    tags: ['React', 'Django', 'AI', 'GCP'],
    liveUrl: 'https://www.brollyhub.com/',
    githubUrl: '', // Private Repo
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=BrollyHub', // Placeholder
  },
  {
    id: 2,
    name: 'Aveem University System',
    description: 'A cloud-hosted academic platform for managing finances, grades, student roles, and notifications for over 2,000 users.',
    tags: ['React', 'Django', 'AWS', 'PostgreSQL'],
    liveUrl: 'https://sys.aveemuni.com/',
    githubUrl: '', // Private Repo
    image: 'https://placehold.co/600x400/155E75/FFFFFF?text=Aveem', // Placeholder
  },
  {
    id: 3,
    name: 'Bookify',
    description: 'A book search and recommendation engine with a React and Django backend, improving user retention by 25%.',
    tags: ['React', 'Django', 'Recommendation Engine'],
    liveUrl: 'https://jeaneudes-dev.github.io/Bookify/',
    githubUrl: 'https://github.com/JeanEudes-dev/Bookify',
    image: 'https://placehold.co/600x400/065F46/FFFFFF?text=Bookify', // Placeholder
  },
  {
    id: 4,
    name: 'SentiFeel',
    description: 'An AI sentiment classifier with a React frontend that achieves 90% accuracy on over 5,000 inputs.',
    tags: ['React', 'AI', 'GPT-4'],
    liveUrl: 'https://jeaneudes-dev.github.io/sentifeel/',
    githubUrl: 'https://github.com/JeanEudes-dev/SentiFeel',
    image: 'https://placehold.co/600x400/7C2D12/FFFFFF?text=SentiFeel', // Placeholder
  },
  {
    id: 5,
    name: 'Readme Converter',
    description: 'A full-stack SPA for markdown conversion with real-time preview and PDF export.',
    tags: ['React', 'Markdown', 'PDF'],
    liveUrl: 'https://jeaneudes-dev.github.io/readme-converter/',
    githubUrl: 'https://github.com/JeanEudes-dev/readme-converter',
    image: 'https://placehold.co/600x400/4A044E/FFFFFF?text=Readme+Converter', // Placeholder
  },
];
