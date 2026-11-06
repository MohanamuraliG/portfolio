export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: "Enterprise" | "AI & Real-Time" | "Web Performance";
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    availability: string;
    yearsOfExperience: string;
  };
  stats: { label: string; value: string; change: string }[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  awards: { title: string; organization: string; description: string; badge: string; year: string }[];
  education: {
    degree: string;
    institution: string;
    score: string;
    period: string;
    highlights: string[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mohanamurali G",
    role: "Full Stack Developer",
    tagline: "Engineering scalable healthcare web applications, real-time streaming pipelines, and high-performance cloud architectures.",
    bio: "Results-driven Full Stack Developer with over 1 year of production experience engineering scalable healthcare web applications. Proficient in crafting intuitive user interfaces using React, Next.js, and TypeScript, backed by robust microservices built on Java, Spring Boot, REST APIs, and MongoDB. Specialized in real-time streaming architectures (SSE), state-management modernization, and enterprise RBAC security.",
    email: "mohanamurali37@gmail.com",
    phone: "+91 9345998771",
    location: "Salem, Tamil Nadu, India",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    availability: "Available for Full-time Roles & Innovations",
    yearsOfExperience: "1+ Year Production",
  },

  stats: [
    { label: "Production Experience", value: "1+ Yrs", change: "Healthcare Tech" },
    { label: "Page Load Reduction", value: "40%", change: "Lazy loading & code-splitting" },
    { label: "Server Overhead Cut", value: "35%", change: "SSE Streaming vs Polling" },
    { label: "Sprint Delivery Velocity", value: "+20%", change: "Reusable React systems" },
  ],

  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React.js", level: 95, iconName: "Code2" },
        { name: "Next.js (App Router)", level: 90, iconName: "Layers" },
        { name: "TypeScript", level: 90, iconName: "FileCode" },
        { name: "JavaScript (ES6+)", level: 95, iconName: "Cpu" },
        { name: "Redux Toolkit", level: 90, iconName: "Share2" },
        { name: "Tailwind CSS", level: 95, iconName: "Palette" },
        { name: "Ant Design & MUI", level: 85, iconName: "Layout" },
        { name: "HTML5 & CSS3", level: 95, iconName: "Globe" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Java (11/17)", level: 90, iconName: "Terminal" },
        { name: "Spring Boot", level: 90, iconName: "Server" },
        { name: "RESTful APIs", level: 95, iconName: "Network" },
        { name: "Microservices", level: 85, iconName: "Boxes" },
        { name: "Spring Security & RBAC", level: 85, iconName: "ShieldCheck" },
        { name: "Server-Sent Events (SSE)", level: 90, iconName: "Radio" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85, iconName: "Database" },
        { name: "MongoDB", level: 90, iconName: "Database" },
        { name: "MySQL", level: 85, iconName: "Database" },
        { name: "Redis Caching", level: 80, iconName: "Zap" },
        { name: "Azure Blob Storage", level: 85, iconName: "Cloud" },
      ],
    },
    {
      title: "DevOps, Tools & Quality",
      skills: [
        { name: "Git & GitHub Actions", level: 90, iconName: "GitBranch" },
        { name: "Docker", level: 80, iconName: "Box" },
        { name: "Apache Kafka", level: 75, iconName: "Activity" },
        { name: "Postman API Testing", level: 90, iconName: "CheckCircle" },
        { name: "Jest & JUnit", level: 85, iconName: "TestTube" },
        { name: "Microsoft Authentication", level: 85, iconName: "Key" },
      ],
    },
  ],

  experiences: [
    {
      id: "encipher-health",
      role: "Full Stack Developer",
      company: "Encipher Health Inc",
      location: "Salem, Tamil Nadu, India",
      period: "Apr 2025 – Present",
      type: "Full-Time",
      description: "Spearheading development of enterprise healthcare clinical suites, high-throughput microservices, and modern clinical dashboards with real-time streaming capabilities.",
      achievements: [
        "Architected and deployed secure REST APIs using Java and Spring Boot for clinical dashboards, decreasing data retrieval latency across multiple frontend modules.",
        "Engineered a Server-Sent Events (SSE) data pipeline to stream real-time clinical updates and file processing states, replacing polling mechanisms and reducing server overhead by 35%.",
        "Optimized Next.js application performance with strategic code-splitting and dynamic lazy loading, cutting initial page load times by 40% and boosting Time-to-Interactive (TTI).",
        "Programmed granular Role-Based Access Controls (RBAC) across UI views, dynamically rendering interactive analytics dashboards (Ant Design & ECharts) for compliance and risk tracking.",
        "Spearheaded legacy state migration to Redux Toolkit, standardizing global data flow and reusable component modularity across the core clinical suite.",
        "Collaborated in Agile Scrum sprints alongside UI/UX designers and backend leads to rapidly iterate on clinical workflows and deliver production releases on schedule.",
      ],
      skills: ["Next.js", "React", "TypeScript", "Java", "Spring Boot", "SSE", "Redux Toolkit", "MongoDB", "Azure Blob", "ECharts"],
    },
    {
      id: "mindbridges",
      role: "Frontend Developer Intern",
      company: "MindBridges",
      location: "India",
      period: "Feb 2025 – Mar 2025",
      type: "Internship",
      description: "Contributed to design system standardization and cross-platform UI engineering for web applications.",
      achievements: [
        "Developed a centralized library of reusable React components, establishing consistent UI standards and accelerating sprint feature delivery velocity by 20%.",
        "Optimized multi-device UI responsiveness across varied screen resolutions, resolving layout bugs and enhancing cross-browser compatibility.",
      ],
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI", "Cross-Browser Testing"],
    },
  ],

  projects: [
    {
      id: "cogent-ai",
      title: "CogentAI – Medical Coding Automation Platform",
      subtitle: "Enterprise Clinical AI & Real-Time Processing Suite",
      description:
        "An enterprise AI platform automating clinical document review workflows. Combines real-time document streaming, integrated PDF viewing, and multi-tenant compliance analytics.",
      highlights: [
        "Engineered clinical document review workflows with integrated PDF.js viewer and live Server-Sent Events (SSE) progress streams.",
        "Built interactive analytics dashboards with ECharts to display risk scores and compliance metrics across multi-tenant user roles.",
        "Configured secure cloud file management using Azure Blob Storage and secured tenant authorization using Microsoft Authentication.",
      ],
      technologies: ["Next.js", "React", "Redux Toolkit", "Java", "Spring Boot", "MongoDB", "Redis", "Azure Blob Storage", "PDF.js", "SSE", "ECharts"],
      category: "AI & Real-Time",
      metrics: "Reduced document processing turnaround & overhead by 35%",
    },
    {
      id: "medical-coding-review",
      title: "Medical Coding Review Platform",
      subtitle: "Auditing & High-Throughput Clinical Workflows",
      description:
        "Role-based clinical workflow software built for enterprise healthcare audits, productivity monitoring, and high-volume clinical record queries.",
      highlights: [
        "Built role-based clinical workflow software featuring audit tracking, productivity analytics, and Spring Boot backend services.",
        "Implemented RESTful endpoints and optimized database queries in MongoDB to accelerate audit trail record lookups.",
        "Integrated robust data sanitization and clinical document state tracking.",
      ],
      technologies: ["Next.js", "Redux", "Java", "Spring Boot", "MongoDB", "Azure Blob Storage", "REST APIs"],
      category: "Enterprise",
      metrics: "Accelerated audit trail record lookups & clinical data integrity",
    },
    {
      id: "encipher-health-web",
      title: "Encipher Health Corporate Website",
      subtitle: "Ultra-Fast Public Corporate Presence",
      description:
        "Official public web platform for Encipher Health Inc, designed for optimal SEO, responsive engagement, and high Lighthouse performance scores.",
      highlights: [
        "Engineered the company's official public website in Next.js with modern component architecture.",
        "Implemented interactive showcase carousels and smooth micro-animations using Swiper.js and AOS.",
        "Optimized critical CSS delivery using Critters, achieving superior initial paint and Core Web Vitals.",
      ],
      technologies: ["React", "Next.js", "Swiper.js", "AOS", "Critters", "Tailwind CSS"],
      category: "Web Performance",
      metrics: "Top-tier Core Web Vitals & optimized critical CSS",
    },
  ],

  awards: [
    {
      title: "Impactful Youngster Award (2025)",
      organization: "Encipher Health Inc",
      description: "Conferred for outstanding engineering performance, exemplary technical execution, and high product ownership across mission-critical clinical applications.",
      badge: "Excellence in Engineering",
      year: "2025",
    },
  ],

  education: {
    degree: "B.E. in Computer Science and Engineering",
    institution: "K.S.R. College of Engineering",
    score: "CGPA: 7.6 / 10",
    period: "2021 – 2025",
    highlights: ["Strong foundation in Data Structures, Algorithms, Software Engineering, Database Management Systems, and Object-Oriented System Design."],
  },
};
