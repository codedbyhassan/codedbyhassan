export const DATA = {
  name: 'Hassan Agyemang Boakye',
  role: 'Systems Administrator & Full-Stack Developer',
  location: 'Kumasi, Ghana',
  email: 'poundsghst@gmail.com',
  phone: '+233 (0) 2XX-XXX-XXX',
  bio: 'Building production systems for real organizations — from healthcare facilities to community platforms — with React, Supabase, and Node.js.',
  
  projects: [
    {
      title: 'Retailer POS',
      desc: 'Offline-first point of sale, inventory, and reporting system for small and medium retailers. Keeps selling even when the internet drops.',
      stack: 'React 19, Vite, Tailwind CSS, IndexedDB, Express, Supabase',
      source: 'https://github.com/codedbyhassan/Retailer-POS',
      demo: 'https://v0-retailer.vercel.app'
    },
    {
      title: 'Lumina School Management',
      desc: 'Local-first school management platform for Ghanaian schools with on-demand cloud sync and conflict detection.',
      stack: 'React, Dexie, Supabase, PostgreSQL',
      source: 'https://github.com/codedbyhassan/Lumina-School-Management',
      demo: ''
    },
    {
      title: 'Hospital POS — Patricia Appiahgyei Health Center',
      desc: 'Point-of-sale and inventory system for real clinic handling Cash/NHIS billing, pricing, and receipts.',
      stack: 'React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui',
      source: 'https://github.com/codedbyhassan/Hospital-POS-for-Pahc',
      demo: ''
    },
    {
      title: 'Ecommerce Platform',
      desc: 'Portfolio-quality storefront with editorial design, admin dashboard, and Paystack/MTN MoMo checkout.',
      stack: 'React 19, Vite, Tailwind CSS v4, Supabase, Drizzle ORM',
      source: 'https://github.com/codedbyhassan/e-commerce-app',
      demo: 'https://e-commerce-app-neon-seven.vercel.app'
    },
    {
      title: 'MKAASH Database',
      desc: 'Membership and organizational management platform built for Majlis Khuddam-ul-Ahmadiyya, Ashanti Region.',
      stack: 'React, TypeScript, Supabase',
      source: 'https://github.com/codedbyhassan/mkaashdatabase',
      demo: 'https://v0-mkaash.vercel.app'
    }
  ],
  
  experience: [
    {
      date: 'Jan 2026 – Present',
      title: 'Systems Administrator',
      org: 'Patricia Appiahgyei Health Center',
      details: [
        'Manage facility digital infrastructure and day-to-day operations',
        'Designed and built live cross-platform facility management system',
        'Deployed on Netlify with desktop and mobile packaging'
      ]
    },
    {
      date: 'Oct 2024 – Sept 2025',
      title: 'IT and Administrative Support Officer',
      org: 'Asokwa Municipal Health Directorate',
      details: [
        'Provided IT and administrative support across the directorate',
        'Supported digital record keeping and systems navigation',
        'National Service placement'
      ]
    }
  ],
  
  skills: [
    {
      category: 'Frontend',
      items: 'React 19, React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Electron, Capacitor'
    },
    {
      category: 'Backend & Database',
      items: 'Node.js, Express, PostgreSQL, Supabase, Drizzle ORM, IndexedDB, Dexie'
    },
    {
      category: 'Tools & Platforms',
      items: 'Git/GitHub, Netlify, Vercel, AWS basics, Azure basics, Paystack, MTN MoMo'
    },
    {
      category: 'Systems & Security',
      items: 'IT infrastructure, Systems administration, Security auditing, Technical documentation'
    }
  ],
  
  education: [
    {
      institution: 'Kwame Nkrumah University of Science and Technology (KNUST)',
      degree: 'B.Ed, Information Technology major'
    },
    {
      institution: 'NIIT Open Lab',
      degree: 'Diploma in Software Engineering (Completed June 2026)'
    }
  ],
  
  stats: [
    { label: 'Years Building', value: '3+' },
    { label: 'Projects Shipped', value: '5+' },
    { label: 'Organizations Served', value: '4+' }
  ]
}
