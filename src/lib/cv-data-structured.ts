export const cvData = {
  name: 'Arpit Joshi',
  contact: {
    email: 'arpit.joshi.dev@example.com',
    linkedin: 'https://linkedin.com/in/arpitjoshi',
    github: 'https://github.com/arpitjoshi',
    location: 'Gurugram, IN'
  },
  otherDetails: [
    "Frontend Developer with nearly 4 years of experience building high-performance, scalable, and user-centric web applications using React.js and Next.js. Strong expertise in modern frontend architecture, performance optimization, and responsive UI development, with working knowledge of backend development using Node.js. Proven experience delivering production-grade applications used by 10,000+ active users.",
    "I'm a lifelong learner, always excited to pick up new technologies and tackle challenging problems. When I'm not coding, I enjoy exploring new hiking trails and contributing to open-source projects."
  ],
  education: [
    {
      degree: 'Master of Computer Application',
      institution: 'Monad University',
      dates: '2021 - 2023',
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Ludiana Group',
      dates: '2018 - 2021',
    },
  ],
  workExperience: [
    {
      title: 'Software Developer',
      company: "Master's Union.",
      location: 'Gurugram, IN',
      dates: 'Feb 2023 - Present',
      points: [
        'Designed and developed a full-stack SaaS LMS with Admin and Student portals, supporting course management, student tracking, and role-based access, serving 10,000+ active users.',
        'Built a scalable Next.js frontend using Server Actions and dynamic routing, and optimized the build pipeline with Webpack for efficient bundling and reduced asset sizes.',
        'Improved security and performance by implementing encrypted client-side data handling, HTTP-only cookies, optimized data structures, and virtualization with event delegation for large lists.',
        'Developed a responsive analytics dashboard using ApexCharts and Framer Motion with SCSS-based styled-components, enhancing UI consistency, performance, and maintainability.',
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: "Master's Union.",
      location: 'Gurugram, IN',
      dates: 'July 2022 - Feb 2023',
      points: [
        'Developed and maintained client-side applications using React, Redux, and TypeScript.',
        'Built RESTful APIs with Node.js and connected to PostgreSQL databases.',
        'Collaborated with UX/UI designers to create responsive and accessible user interfaces.',
        'Improved application performance by 20% by optimizing API calls and implementing code-splitting.',
      ]
    }
  ],
  skills: [
    'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS/Sass',
    'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Apex Charts',"Material UI",
    'Node.js', 'Express.js',
    'PostgreSQL', 'MySql', 'Redis',
    'Redux', 'Vercel',
  ]
};

export type CvData = typeof cvData;
