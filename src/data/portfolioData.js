export const DATA = {
  name: 'Hassan Agyemang Boakye',
  role: 'Systems Administrator | Full-Stack Developer | IT Support Specialist',
  location: 'Kumasi, Ashanti Region, Ghana',
  email: 'poundsghst@gmail.com',
  phone: '+233 25 691 8104',
  github: 'github.com/codedbyhassan',
  linkedin: 'linkedin.com/in/hassan-agyemang-boakye',
  bio: 'Systems Administrator and Full-Stack Developer with hands-on experience building and deploying production applications across web, desktop, and Android platforms. Currently managing IT infrastructure and a custom-built facility management system at a healthcare center, developed using React, Vite, Tailwind CSS, and Supabase. Proven record of supporting 60+ staff across multi-department environments, training over 50 healthcare professionals in IT fundamentals, and leading digital transformation initiatives.',
  
  projects: [
    {
      title: 'Hospital POS — Patricia Appiahgyei Health Center',
      desc: 'Point-of-sale and inventory system built and deployed for a real clinic — handles Cash/NHIS billing, service and drug pricing, receipt history, and backup/restore workflows. Cross-platform via web, Android (Capacitor), and desktop (Electron).',
      stack: 'React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Supabase, Electron, Capacitor + Android Studio',
      source: 'https://github.com/codedbyhassan/Hospital-POS-for-Pahc',
      demo: ''
    },
    {
      title: 'Retailer POS',
      desc: 'Offline-first point of sale, inventory, and reporting system for small and medium retailers — local-first with IndexedDB, syncing to an Express/Supabase backend when available. Security audit completed and being hardened for production.',
      stack: 'React 19, Vite, Tailwind CSS, IndexedDB, Node.js/Express, Supabase',
      source: 'https://github.com/codedbyhassan/Retailer-POS',
      demo: 'https://v0-retailer.vercel.app'
    },
    {
      title: 'Ecommerce Platform',
      desc: 'Portfolio-quality storefront with a Nike/Aimé Leon Dore–grade editorial design, a full admin dashboard, and Paystack/MTN MoMo checkout.',
      stack: 'React 19, Vite, Tailwind CSS v4, Supabase, Drizzle ORM',
      source: 'https://github.com/codedbyhassan/e-commerce-app',
      demo: 'https://e-commerce-app-neon-seven.vercel.app'
    },
    {
      title: 'Lumina School Management',
      desc: 'Local-first school management platform for Ghanaian schools with on-demand cloud sync, conflict detection, and server-enforced license management — built for patchy connectivity, works fully offline.',
      stack: 'React, Dexie (IndexedDB), Supabase, PostgreSQL, Edge Functions',
      source: '#',
      demo: ''
    },
    {
      title: 'MKAASH Database',
      desc: 'Membership and organizational management platform built for Majlis Khuddam-ul-Ahmadiyya, Ashanti Region — a unified system for managing members and tracking organizational activity.',
      stack: 'React, TypeScript, Supabase',
      source: 'https://github.com/codedbyhassan/mkaashdatabase',
      demo: 'https://v0-mkaash.vercel.app'
    }
  ],
  
  experience: [
    {
      date: 'Jan 2026 – Present',
      title: 'Systems Administrator',
      org: 'Patricia Appiahgyei Health Center, Kumasi',
      details: [
        'Manage and maintain all IT infrastructure at the facility, including workstations, network equipment, and peripheral devices serving clinical and administrative staff',
        'Designed and built a Hospital POS and facility management system covering patient records, Cash/NHIS billing, service and drug pricing, inventory, receipt history, and backup/restore workflows — deployed on web, Android (Capacitor), and desktop (Electron)',
        'Configured and manage the Supabase database schema, user authentication, role-based access control, and API integrations for the management system',
        'Oversee Windows OS installation, activation, patching, and security updates across all workstations; enforce maintenance schedules to minimize downtime',
        'Provide IT support and helpdesk services for all staff; conduct onboarding and training sessions on software tools and system usage'
      ]
    },
    {
      date: 'Oct 2024 – Sept 2025',
      title: 'IT & Administrative Support Officer',
      org: 'Asokwa Municipal Health Directorate, Kumasi',
      details: [
        'Served as the primary IT support contact for 60+ staff across all departments, providing comprehensive helpdesk assistance and technical solutions for diverse organizational needs',
        'Delivered all-round IT support covering hardware troubleshooting, software installation, network diagnostics, and system optimization across multiple departments',
        'Performed Windows OS installation, activation, configuration, and updates on workstations; managed system patches and security updates to maintain operational integrity',
        'Installed, configured, and activated software applications tailored to various departmental requirements',
        'Diagnosed and repaired computers, laptops, and mobile devices at hardware, software, and OS levels, ensuring minimal operational downtime',
        'Trained over 50 nurses in basic IT operations, computer fundamentals, and digital literacy skills',
        'Delivered comprehensive MS Office Suite training to student nurses on attachment in September 2024 and September 2025'
      ]
    },
    {
      date: 'Aug 2024',
      title: 'Technical Assistant Intern',
      org: 'Goodisper Limited (Engineering Firm), Kumasi',
      details: [
        'Gained practical experience in HVAC systems installation and maintenance, including air conditioning unit diagnostics, repairs, and troubleshooting',
        'Participated in cold room installation projects, learning refrigeration systems and temperature control mechanisms',
        'Developed working knowledge of electrical systems and technical equipment maintenance'
      ]
    },
    {
      date: '2024',
      title: 'Student Teacher (Practicum)',
      org: 'Bomso M/A Junior High School, Kumasi',
      details: [
        'Taught IT and Science subjects to JHS students as part of the B.Ed practicum requirement',
        'Developed and delivered curriculum-aligned lesson plans integrating technology into classroom instruction',
        'Assessed student performance and provided structured feedback to support learning outcomes'
      ]
    }
  ],
  
  skills: [
    {
      category: 'Languages & Frameworks',
      items: 'JavaScript, TypeScript, React, Vite, HTML, CSS, Tailwind CSS, Go, Java, PHP'
    },
    {
      category: 'Backend & Database',
      items: 'Node.js/Express, Supabase, PostgreSQL, REST APIs, Drizzle ORM, Authentication & Role-Based Access Control'
    },
    {
      category: 'Payments & Integrations',
      items: 'Paystack, MTN MoMo'
    },
    {
      category: 'Deployment & Hosting',
      items: 'Netlify, Vercel, Electron (Desktop), Capacitor + Android Studio (Android APK), AWS/Azure fundamentals'
    },
    {
      category: 'Tooling & Runtime',
      items: 'Node.js, npm, Git, GitHub, IndexedDB/Dexie'
    },
    {
      category: 'Systems & Infrastructure',
      items: 'Windows OS Installation & Activation, System Administration, Network Troubleshooting, Security Auditing, Hardware Repair & Diagnostics, Device Maintenance'
    },
    {
      category: 'Productivity & Support',
      items: 'Microsoft Office Suite (Advanced), Helpdesk Operations, User Training & IT Support, Technical Documentation, Multi-Departmental Support'
    }
  ],
  
  education: [
    {
      institution: 'NIIT Open Lab',
      degree: 'Diploma in Software Engineering',
      year: 'Completed June 2026',
      details: 'Completed a hands-on software development program covering full-stack web development, database management, and application deployment. Built projects using HTML, CSS, JavaScript, and React; learned version control with Git and GitHub.'
    },
    {
      institution: 'Kwame Nkrumah University of Science and Technology (KNUST), Kumasi',
      degree: 'B.Ed, Junior High School Education — Major: Information Technology',
      year: '2024',
      details: 'Relevant coursework: Programming Fundamentals, Database Systems, Computer Networks, IT in Education, Systems Analysis.'
    },
    {
      institution: 'T.I. Ahmadiyya Senior High School',
      degree: 'West African Senior School Certificate Examination (WASSCE)',
      year: '2020',
      details: ''
    }
  ],
  
  references: [
    {
      name: 'Dr. Samuel Antwi',
      title: 'Senior Lecturer, KNUST',
      phone: '+1 (701) 200-8096'
    },
    {
      name: 'Faustina Osei Mensah',
      title: 'District Director, Asokwa Municipal Health Directorate',
      phone: '0244 223 109'
    },
    {
      name: 'Abraham Owusu Afram',
      title: 'Physician Assistant, Patricia Appiahgyei Health Center',
      phone: '0201 351 335'
    }
  ],
  
  stats: [
    { label: 'Staff Supported', value: '60+' },
    { label: 'Professionals Trained', value: '50+' },
    { label: 'Featured Projects', value: '5' },
    { label: 'Years in IT Support', value: '2+' }
  ]
}
