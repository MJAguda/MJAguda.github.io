// Everything on the home page that isn't a project lives here.

export const profile = {
  name: 'Mark Jayson Aguda',
  role: 'AI-Augmented Software Engineer',
  pitch:
    'Software engineer with 4+ years building web, mobile and backend applications. I ship production APIs, admin tools and AI features like a conversational assistant on AWS Bedrock, from database design to the UI.',
  email: 'mark.jayson.aguda@gmail.com',
  resume: '/Mark-Jayson-Aguda-Resume.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mark-jayson-a-a0b9b5148/', mark: 'in' },
    { label: 'GitHub', href: 'https://github.com/MJAguda' },
    { label: 'YouTube', href: 'https://www.youtube.com/@mjdminer4079' },
  ],
};

export const about = [
  "I'm a software engineer at Full Scale, where I build the Laravel API behind SKIN, a UK beauty price comparison app, and led its AI shopping assistant on AWS Bedrock from backend design to the mobile UI. Before SKIN, I built dealer, reporting and classifieds tools for an automotive client, and Java and Spring Boot services at Collabera.",
  "I took a less direct route into software. After a BS in Computer Engineering, I taught Java and Android development to senior high school students, then earned an MS in IT with a thesis that won Outstanding Thesis and was published. Teaching still shapes how I work: I created a 14-part GitHub Copilot workshop, and I use AI coding agents every day.",
];

export const skills: Record<string, string[]> = {
  Backend: ['PHP', 'Laravel', 'Yii', 'Java', 'Spring Boot', 'Node.js', 'REST APIs'],
  Frontend: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
  Data: ['MySQL', 'Redis', 'Typesense'],
  'Cloud & DevOps': ['AWS (Elastic Beanstalk, S3, Bedrock)', 'Google Cloud Platform', 'Firebase', 'Docker', 'CircleCI', 'Git'],
  'Testing, Monitoring & Analytics': ['Pest', 'JUnit', 'Playwright', 'Sentry', 'PostHog'],
  AI: [
    'Claude Code', 'GitHub Copilot', 'AWS Bedrock', 'MCP servers', 'Custom skills',
    'Multi-agent orchestration', 'Autonomous agent workflows', 'Custom AI integrations & APIs',
    'Workflow automation', 'Dev-environment integration', 'Mentoring teams on AI tools',
  ],
  Mobile: ['Flutter (Dart)', 'Android (Java)', 'Jetpack Compose'],
};

export const experience = [
  {
    company: 'Full Scale',
    url: 'https://fullscale.io',
    title: 'Software Developer II',
    period: 'Oct 2023 – Present',
    tech: ['Laravel', 'PHP', 'Yii', 'Vue.js', 'React', 'MySQL', 'Typesense', 'AWS Bedrock', 'Docker'],
    summary:
      'Full-stack work on Laravel and Yii platforms with Vue.js and React frontends: REST APIs, an AI shopping assistant on AWS Bedrock, notification, analytics and marketing integrations, Docker overhauls, framework upgrades and CI pipelines.',
  },
  {
    company: 'Collabera Technologies',
    url: 'https://collabera.com',
    title: 'Java EE Application Developer',
    period: 'May 2023 – Sep 2023',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JUnit', 'Node.js'],
    summary:
      'Built backend services and REST APIs with Java and Spring Boot, using test-driven development with JUnit and Spring Security for authentication.',
  },
  {
    company: 'Flora National High School',
    title: 'Local School Board Teacher',
    period: 'Mar 2022 – May 2023',
    tech: ['Java', 'Android', 'Agile'],
    summary:
      'Taught Java and object-oriented programming, and mentored student teams building Android apps with QR code, GPS and attendance features.',
  },
];

export const teaching = [
  {
    title: 'GitHub Copilot Workshop',
    detail: 'A 14-part video series I created and taught on AI-assisted development.',
    period: 'Video series',
    link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/@mjdminer4079' },
  },
  {
    title: 'Campus Connect: published research',
    detail: "My master's thesis on QR code, biometric and GPS attendance tracking, awarded Outstanding Thesis.",
    period: 'MS IT thesis',
    link: { label: 'Read the paper', href: 'https://doi.org/10.56648/aide-irj.v9i1.127' },
  },
  {
    title: 'Java programming teacher, Flora National High School',
    detail: 'Taught Java and object-oriented programming to senior high school students. Outstanding Proficient Teacher, 2022.',
    period: '2022 – 2023',
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
