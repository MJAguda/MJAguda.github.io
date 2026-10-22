// Everything on the home page that isn't a project lives here.

export const profile = {
  name: 'Mark Jayson Aguda',
  role: 'Software Engineer',
  focus: 'AI Integrations · Laravel, Vue & React',
  pitch:
    'Software engineer with 4+ years building web, mobile and backend applications. I ship production APIs, admin tools and AI features like a conversational assistant on AWS Bedrock, from database design to the UI.',
  email: 'mark.jayson.aguda@gmail.com',
  resume: '/Mark-Jayson-Aguda-Resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/MJAguda' },
    { label: 'YouTube', href: 'https://www.youtube.com/@mjdminer4079' },
  ],
};

export const skills: Record<string, string[]> = {
  Backend: ['PHP', 'Laravel', 'Yii', 'Java', 'Spring Boot', 'Node.js', 'REST APIs'],
  Frontend: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
  Data: ['MySQL', 'Redis', 'Typesense'],
  'Cloud & DevOps': ['AWS (Elastic Beanstalk, S3, Bedrock)', 'Google Cloud Platform', 'Firebase', 'Docker', 'CircleCI', 'Git'],
  'Testing, Monitoring & Analytics': ['Pest', 'JUnit', 'Playwright', 'Sentry', 'PostHog'],
  AI: ['Claude Code', 'GitHub Copilot', 'AWS Bedrock', 'Agent workflows', 'Custom skills', 'MCP servers'],
  Mobile: ['Flutter (Dart)', 'Android (Java)', 'Jetpack Compose'],
};

// Shown under a skill group's label.
export const skillNotes: Record<string, string> = {
  AI: "L4 ★★ Power User on Full Scale's 5-level AI framework",
};

export const experience = [
  {
    company: 'Full Scale',
    title: 'Software Engineer',
    period: 'Oct 2023 – Present',
    summary:
      'Full-stack work on Laravel and Yii platforms with Vue.js and React frontends: REST APIs, an AI shopping assistant on AWS Bedrock, notification, analytics and marketing integrations, Docker overhauls, framework upgrades and CI pipelines.',
  },
  {
    company: 'Collabera Technologies',
    title: 'Java EE Application Developer',
    period: 'May 2023 – Sep 2023',
    summary:
      'Built backend services and REST APIs with Java and Spring Boot, using test-driven development with JUnit and Spring Security for authentication.',
  },
  {
    company: 'Flora National High School',
    title: 'Local School Board Teacher',
    period: 'Mar 2022 – May 2023',
    summary:
      'Taught Java and object-oriented programming, and mentored student teams building Android apps with QR code, GPS and attendance features.',
  },
];

export const education = [
  {
    degree: 'MS Information Technology',
    school: 'Cagayan State University',
    period: '2021 – 2024',
    note: "Dean's Lister · Outstanding Thesis",
  },
  {
    degree: 'BS Computer Engineering',
    school: 'Cagayan State University',
    period: '2015 – 2020',
  },
];
