import {
  Certification,
  EducationEntry,
  ExperienceEntry,
  JourneyStage,
  Profile,
  ProjectEntry,
  Publication,
  SkillCategory,
  StoryBeat,
} from '../models/resume-data.model';

export const PROFILE: Profile = {
  name: 'Suhas S',
  roles: ['Full Stack Developer', 'Data & Analytics Enthusiast', 'Software Engineer'],
  tagline: 'Driven by Curiosity. Powered by Engineering.',
  mission:
    'Engineering modern full-stack experiences with Java, Spring Boot, and Angular — creating scalable backend systems, seamless user interfaces, and business-driven solutions that deliver real-world impact.',
  email: 'suhasgowda540@gmail.com',
  phone: '+91 88670 80164',
  location: 'Bangalore, India',
  github: 'https://github.com/suhas-s-SDE',
  linkedin: 'https://www.linkedin.com/in/suhas-s-software-engineer/',
  resumeUrl: 'assets/resume/Suhas_S_Resume.pdf',
  photoUrl: 'assets/images/suhas-photo.jpg',
};

export const STORY_BEATS: StoryBeat[] = [
  {
    icon: '',
    title: 'Academic Excellence',
    body: '96.64% in 10th grade, 96.34% in PU, and a 9.68 CGPA in Information Science Engineering — consistency isn\'t an accident, it\'s a habit I built early and never let go of.',
  },
  {
    icon: '',
    title: 'A Passion for Building',
    body: 'What started as curiosity about how software works turned into a habit of shipping — Java, Spring Boot, and Angular are now the tools I reach for to turn ideas into working products.',
  },
  {
    icon: '',
    title: 'The Analytics Journey',
    body: 'At Sequoia, I went from writing queries to owning an entire analytics platform — Snowflake data models, Airflow pipelines, and Superset dashboards that leadership actually relies on.',
  },
  {
    icon: '',
    title: 'Full Stack by Design',
    body: 'I care about the whole stack — REST APIs that make sense, Angular UIs that feel effortless, and databases that hold up under real usage. Product thinking, not just code.',
  },
  {
    icon: '',
    title: 'An AI Innovation Mindset',
    body: 'From an IEEE-published adaptive learning platform to AI-driven recommendation engines, I look for where machine learning can make a product genuinely smarter — not just smarter-sounding.',
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Sequoia',
    role: 'Full Stack Analyst Intern — People Analytics Team',
    duration: 'April 2025 – February 2026',
    isCurrent: false,
    summary:
      'Owned platform utilization, claims, and wellbeing analytics end-to-end across Snowflake, Airflow, and Superset — turning fragmented data into dashboards leadership actually trusts.',
    bullets: [
      'Led end-to-end ownership of platform utilization, claims, and wellbeing vendor analytics across Snowflake data models, Apache Airflow, and dashboard layers, ensuring data accuracy and actionable business insights.',
      'Implemented Row-Level Security (RLS) flags using Jinja templating for the ATS Manager dashboard in Apache Superset, enabling secure and scalable role-based data access.',
      'Designed and introduced an IS_EXECUTIVE flag to handle complex compensation job attributes, improving data clarity and supporting executive-level analytics.',
      'Designed and delivered an end-to-end wellbeing analytics dashboard for the Joshin vendor.',
      'Optimized the wellbeing analytics architecture by reducing datasets from 48 to 23, significantly improving dashboard performance, maintainability, and load efficiency.',
      'Built a Jinja-based proof-of-concept for inline metric standardization, aligning all charts to the latest month’s data — successfully deployed across three client vendors.',
      'Developed automated chart data validation and Airflow DAG monitoring extraction, improving data reliability and boosting visualization team productivity; presented at Sequoia Tech Pulse Friday.',
    ],
    impactMetrics: [
      { value: '48 → 23', label: 'datasets optimized' },
      { value: '3', label: 'vendors deployed to' },
      { value: '100%', label: 'RLS-secured dashboards' },
      { value: '1', label: 'Tech Pulse presentation' },
    ],
    tech: ['Snowflake', 'Apache Airflow', 'Apache Superset', 'Jinja', 'SQL'],
  },
  {
    company: 'Bounteous x Accolite',
    role: 'Java Full Stack Associate',
    duration: 'February 2026 – Present',
    isCurrent: true,
    summary:
      'Building dynamic, responsive interfaces in Angular backed by Java and Spring Boot — applying full-stack and OOP fundamentals in a real production environment.',
    bullets: [
      'Working on Java and Spring Boot for backend development and Angular for building dynamic, responsive user interfaces.',
      'Developing and integrating RESTful APIs with an Angular frontend, ensuring smooth client-server communication and data flow.',
      'Applying OOP principles and full-stack development practices to build scalable and maintainable applications in a real-world development setup.',
    ],
    impactMetrics: [
      { value: 'Java', label: 'backend' },
      { value: 'Spring Boot', label: 'framework' },
      { value: 'Angular', label: 'frontend' },
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'REST APIs'],
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    slug: 'db-monitor-agent',
    title: 'Java Agent-Based Database Monitoring System',
    subtitle: 'Zero-code-change runtime instrumentation for live DB observability',
    year: '2026',
    problem:
      'Teams need visibility into database latency, connection pool health, and slow queries — but instrumenting every application to emit that telemetry means invasive code changes across services.',
    solution:
      'A Java Agent built with Byte Buddy bytecode instrumentation that intercepts JDBC calls at runtime, capturing query execution time, active connections, and transaction metrics with zero changes to the target application.',
    architecture:
      'The agent attaches to the JVM and rewrites JDBC driver bytecode on the fly to hook query execution. Captured metrics are streamed to a Spring Boot backend over a REST API, aggregated, and visualized in a real-time Angular dashboard backed by PostgreSQL — supporting configurable alerting for high latency, error rates, and connection pool exhaustion across multiple JVM instances.',
    impact:
      'Gives teams live visibility into database health and slow queries across multiple JVM instances without touching a single line of the monitored application’s code.',
    keyFeatures: [
      'Byte Buddy bytecode instrumentation with zero target-code changes',
      'Real-time Angular dashboard for latency trends and slow queries',
      'Multi-JVM instance monitoring',
      'Configurable alerting for latency, errors, and connection exhaustion',
    ],
    tech: ['Java', 'Byte Buddy', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API'],
    githubOwner: 'suhas-s-SDE',
    githubRepo: 'Java_Agent_group_project',
    accent: 'indigo',
  },
  {
    slug: 'edutrack',
    title: 'EduTrack',
    subtitle: 'AI-Powered Adaptive Learning Platform — Published in IEEE Xplore',
    year: '2025',
    problem:
      'Generic e-learning platforms deliver the same content to every student, regardless of their pace, gaps, or learning style — hurting engagement and outcomes.',
    solution:
      'An adaptive learning platform built on MERN with a Python-based recommendation engine (SVD + TF-IDF) that personalizes learning paths and video recommendations for each student, backed by an AI chatbot for real-time support.',
    architecture:
      'A MERN stack application serves student and teacher dashboards for progress tracking, quiz management, and collaborative notes. A Python microservice runs a hybrid recommendation model combining SVD-based collaborative filtering with TF-IDF content similarity to recommend the next-best learning resource, with an integrated AI chatbot layered on top for interactivity.',
    impact:
      'Research on the platform’s adaptive model and hybrid recommendation system was published in IEEE Xplore, demonstrating measurable improvement in personalized education and student engagement.',
    keyFeatures: [
      'Hybrid SVD + TF-IDF recommendation engine',
      'Adaptive learning paths per student',
      'Student & teacher dashboards with quiz management',
      'AI chatbot for interactive academic support',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Python', 'SVD', 'TF-IDF'],
    githubOwner: 'suhass204',
    githubRepo: 'Edu_Track',
    accent: 'cyan',
  },
  {
    slug: 'smartspend-ai',
    title: 'SmartSpend AI',
    subtitle: 'Intelligent Family Expense Analysis & Recommendation System',
    year: '2025',
    problem:
      'Indian households juggle multiple family members’ finances across scattered bank emails, with no unified view of income, spending, or budget health.',
    solution:
      'A full-stack platform that automatically fetches and parses transaction emails from Gmail via the Google OAuth API, using regex-based extraction to categorize income and expenses for every family member in real time.',
    architecture:
      'A Spring Boot backend authenticates against Gmail via Google OAuth, pulls transaction emails, and applies regex-based parsing to extract structured transaction data into PostgreSQL. An AngularJS dashboard surfaces total credits, debits, and spending patterns, generating personalized budget suggestions tailored to common Indian household spending habits.',
    impact:
      'Turns scattered transactional emails into a single real-time household finance view with personalized, actionable budget suggestions.',
    keyFeatures: [
      'Gmail + Google OAuth integration for automatic transaction capture',
      'Regex-based transaction parsing and categorization',
      'Multi-user family expense tracking',
      'Personalized budget suggestions and balance insights',
    ],
    tech: ['Spring Boot', 'PostgreSQL', 'Gmail API', 'Google OAuth', 'AngularJS', 'Regex'],
    githubOwner: 'suhas-s-SDE',
    githubRepo: 'Expense_Tracker',
    accent: 'amber',
  },
  {
    slug: 'wellness-wizard',
    title: 'Wellness Wizard',
    subtitle: 'AI-driven fitness, diet, and workout recommendation platform',
    year: '2024',
    problem:
      'Generic fitness apps push one-size-fits-all diet and workout plans that don’t adapt to an individual’s goals, habits, or progress — leading to poor adherence.',
    solution:
      'An AI-driven platform delivering personalized diet and workout recommendations alongside an AI-powered chatbot for real-time support, deployed live on Render with gamified engagement mechanics to boost adherence.',
    architecture:
      'A full-stack web application serves personalized recommendation logic for diet and workouts based on user profile and goals, with a conversational AI chatbot layered in for support and a gamification layer to reward consistency.',
    impact:
      'Live, publicly deployed platform combining personalized recommendations with gamified engagement to improve real-world adherence to fitness plans.',
    keyFeatures: [
      'Personalized diet & workout recommendation engine',
      'AI-powered chatbot for user support',
      'Gamified engagement mechanics',
      'Live production deployment on Render',
    ],
    tech: ['AI Recommendation Engine', 'Chatbot', 'Full Stack Web'],
    githubOwner: 'suhass204',
    githubRepo: 'Wellness_Wizard',
    liveDemoUrl: 'https://wellness-wizard.onrender.com',
    accent: 'emerald',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'EduTrack: AI-Powered Adaptive Learning Platform',
    venue: 'IEEE Xplore',
    year: '2025',
    contribution:
      'Published research on EduTrack, detailing its AI-driven adaptive learning model and hybrid recommendation system combining collaborative filtering (SVD) with content-based filtering (TF-IDF).',
    outcomes: [
      'Improved student engagement through personalized learning paths',
      'Demonstrated measurable impact on learning outcomes',
      'Validated a hybrid recommendation approach for education technology',
    ],
    innovations: [
      'Hybrid SVD + TF-IDF recommendation architecture',
      'AI chatbot integration for real-time academic support',
      'Adaptive video and content recommendations per learner',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Java Masterclass',
    issuer: 'Udemy',
    description:
      'In-depth coverage of Java programming concepts, object-oriented principles, and real-world applications.',
    icon: '☕',
  },
  {
    title: '150+ Day LeetCode Streak',
    issuer: 'LeetCode',
    description: 'Sustained a 150+ day streak while solving 250+ problems — consistency over intensity.',
    icon: '🔥',
  },
  {
    title: 'UVCE CodeStorm IMPETUS 24.0',
    issuer: 'UVCE',
    description: 'Participated in a competitive coding event, sharpening problem-solving under time pressure.',
    icon: '⚡',
  },
  {
    title: 'CODE NEURAL — State Level Hackathon',
    issuer: 'ACS College of Engineering',
    description: 'Competed in a 24-hour hackathon, strengthening teamwork, problem-solving, and rapid prototyping.',
    icon: '🏆',
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    institution: 'Saint Thomas School, Bangalore',
    credential: '10th Grade — KSEEB',
    score: '96.64%',
    scoreValue: 96.64,
    year: '2020',
  },
  {
    institution: 'Whitefield Global PU College, Bangalore',
    credential: 'PUC — Karnataka State Board',
    score: '96.34%',
    scoreValue: 96.34,
    year: '2022',
  },
  {
    institution: 'New Horizon College of Engineering, Bangalore',
    credential: 'B.E. Information Science & Engineering',
    score: 'CGPA 9.68',
    scoreValue: 96.8,
    year: '2026',
  },
];

export const SKILLS: SkillCategory[] = [
  { name: 'Programming', icon: '⌨️', skills: ['Java', 'C', 'C++'] },
  { name: 'Frontend', icon: '🎨', skills: ['Angular', 'AngularJS'] },
  { name: 'Backend', icon: '⚙️', skills: ['Spring Boot', 'Node.js'] },
  {
    name: 'Data & Analytics',
    icon: '📈',
    skills: ['Snowflake', 'Apache Airflow', 'Apache Superset', 'Metabase'],
  },
  { name: 'Databases', icon: '🗄️', skills: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { name: 'Tools', icon: '🛠️', skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'] },
  {
    name: 'Concepts',
    icon: '🧠',
    skills: ['REST APIs', 'OOP', 'DBMS', 'Data Engineering', 'Project Management'],
  },
];

export const JOURNEY: JourneyStage[] = [
  {
    icon: '🎓',
    title: 'Academic Excellence',
    description: 'Consistent top-tier academic performance from school through a 9.68 CGPA in engineering.',
  },
  {
    icon: '🔬',
    title: 'AI Research',
    description: 'Published IEEE research on adaptive learning, exploring how ML can personalize education.',
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    description: 'Owned production analytics infrastructure at Sequoia — Snowflake, Airflow, Superset.',
  },
  {
    icon: '💻',
    title: 'Full Stack Development',
    description: 'Building production systems end-to-end with Java, Spring Boot, and Angular.',
  },
  {
    icon: '🚀',
    title: 'Future Software Engineer',
    description: 'Growing toward building intelligent, scalable systems that turn data into decisions.',
  },
];

export const RECRUITER_SUMMARY = [
  'CGPA 9.68 — B.E. Information Science & Engineering',
  'Full Stack Developer — Java, Spring Boot, Angular',
  'Data Analytics Experience — Snowflake, Apache Airflow, Apache Superset',
  'IEEE-Published AI Research — EduTrack Adaptive Learning Platform',
  '4 AI/Full-Stack Projects with real architecture and measurable impact',
  'Full Stack Analyst Intern at Sequoia (People Analytics)',
  'Java Full Stack Associate at Bounteous x Accolite',
];
