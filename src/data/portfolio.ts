export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  role: string;
  achievements: string[];
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Cloud';
}

export interface CommitMilestone {
  sha: string;
  message: string;
  date: string;
  author: string;
  type: 'feature' | 'refactor' | 'deploy' | 'fix' | 'init';
  details?: string[];
}

export interface CareerNode {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  commits: CommitMilestone[];
  branch: 'main' | 'dev-backend' | 'dev-frontend' | 'feature-cloud';
}

export interface EducationNode {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
  images: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Languages' | 'Frontend' | 'Backend' | 'DevOps & Cloud' | 'Databases';
}

export interface PersonalInfo {
  name: string;
  title: string;
  subTitle: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  terminalWelcome: string;
}

export const personalInfo: PersonalInfo = {
  name: "Ishan Nikeshala Nawarathna",
  title: "Software Engineer",
  subTitle: "Building Scalable Distributed Systems & Exquisite Web Experiences",
  location: "Colombo, Sri Lanka",
  email: "ishannikeshala1999@gmail.com", // Placeholder to be edited by user
  github: "https://github.com/IshanNikeshalaNawarathna",
  linkedin: "https://www.linkedin.com/in/ishan-nikeshala-nawarathna-390a0b249/",
  bio: "Highly analytical and detail-oriented Software Engineer specializing in developing high-throughput backend services, elegant and responsive frontends, and cloud architectures. Passionate about writing clean, modular, and maintainable code that scales.",
  terminalWelcome: "Welcome to Ishan's Interactive Shell v1.0.0. Type 'help' to see available commands or 'gui' to return to visual mode."
};

export const skills: Skill[] = [
  // Languages
  { name: "Java", level: 90, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "TypeScript", level: 90, category: "Languages" },
  { name: "JavaScript", level: 95, category: "Languages" },
  { name: "SQL", level: 88, category: "Languages" },

  // Frontend
  { name: "Next.js", level: 92, category: "Frontend" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Redux Toolkit", level: 88, category: "Frontend" },
  { name: "HTML5/CSS3", level: 95, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express", level: 90, category: "Backend" },
  { name: "Spring Boot", level: 80, category: "Backend" },

  // Databases
  { name: "MySQL", level: 80, category: "Databases" },
  { name: "PostgreSQL", level: 88, category: "Databases" },
  { name: "MongoDB", level: 85, category: "Databases" },

  // DevOps & Cloud
  { name: "Docker", level: 85, category: "DevOps & Cloud" },
  { name: "Kubernetes", level: 70, category: "DevOps & Cloud" },
  { name: "AWS (S3, EC2, Lambda)", level: 80, category: "DevOps & Cloud" },
  { name: "CI/CD (GitHub Actions)", level: 85, category: "DevOps & Cloud" },
  { name: "Terraform", level: 75, category: "DevOps & Cloud" }
];

export const experience: CareerNode[] = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "Apex Global Finance Solutions",
    location: "Colombo, Sri Lanka",
    period: "2024 - Present",
    description: "Lead developer for core payment gateway and real-time transaction reporting systems.",
    branch: "main",
    commits: [
      {
        sha: "ae83c92",
        message: "feat: Refactor payment processor to support parallel execution",
        date: "2025-11-10",
        author: "Ishan Nikeshala",
        type: "feature",
        details: [
          "Optimized high-throughput queues boosting transaction speed by 35%.",
          "Implemented robust event-driven error handling with Dead Letter Queues (DLQ)."
        ]
      },
      {
        sha: "d5c21f9",
        message: "refactor: Migrate legacy dashboard endpoints to Next.js App Router API handlers",
        date: "2025-06-15",
        author: "Ishan Nikeshala",
        type: "refactor",
        details: [
          "Replaced REST endpoints with server-side rendered routes, saving 400ms on initial page loads.",
          "Enhanced security by adding JWT parsing in Edge Middleware."
        ]
      },
      {
        sha: "f10ba88",
        message: "deploy: Migrate infrastructure to multi-region AWS setup via Terraform",
        date: "2024-12-01",
        author: "Ishan Nikeshala",
        type: "deploy",
        details: [
          "Decreased system latency for overseas clients by 120ms.",
          "Configured secure VPC configurations and automated rollback scripts."
        ]
      }
    ]
  },
  {
    id: "exp-2",
    role: "Associate Software Engineer",
    company: "InnovateTech Labs",
    location: "Colombo, Sri Lanka",
    period: "2022 - 2024",
    description: "Built scalable SaaS applications, e-commerce engines, and internal telemetry systems.",
    branch: "dev-backend",
    commits: [
      {
        sha: "b45c290",
        message: "feat: Implement full-text search with Redis OM and PostgreSQL index optimizations",
        date: "2023-10-04",
        author: "Ishan Nikeshala",
        type: "feature",
        details: [
          "Optimized database index query execution plans, reducing query time from 1.2s to 45ms.",
          "Configured Redis cache invalidation hooks on entity modification."
        ]
      },
      {
        sha: "902c3ef",
        message: "fix: Resolve critical concurrency leak in websocket message broker",
        date: "2023-04-18",
        author: "Ishan Nikeshala",
        type: "fix",
        details: [
          "Analyzed trace logs and fixed connection pool exhaustion.",
          "Implemented backoff policies and client-side heartbeat syncs."
        ]
      }
    ]
  },
  {
    id: "exp-3",
    role: "Intern Software Engineer",
    company: "Creative software co.",
    location: "Kandy, Sri Lanka",
    period: "2022 (6 Months)",
    description: "Assisted in writing microservices in Spring Boot and building UI layouts using React.",
    branch: "dev-frontend",
    commits: [
      {
        sha: "a102bc4",
        message: "init: Bootstrapped responsive client dashboard using React and Tailwind CSS",
        date: "2022-03-10",
        author: "Ishan Nikeshala",
        type: "init",
        details: [
          "Established reusable component library and dark mode support.",
          "Collaborated with UI/UX designers to implement pixel-perfect user interfaces."
        ]
      }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: " Project Management (SAAS) - Present Group Project",
    description: "A project management system for teams and individuals to manage their tasks, projects, and deadlines.",
    longDescription: "Projekto is designed to handle thousands of concurrent client connections with ultra-low latency. Built from scratch with custom TCP protocols, partition replication, and write-ahead logs, it enables seamless service-to-service communication.",
    tags: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "GitHub Actions", "Hibernate", "AWS"],
    github: "https://github.com/404-FoundUs/Projekto.git",
    role: "Backend Engineer",
    achievements: [
      "Implemented a distributed task management system using Spring Boot.",
      "Integrated with GitHub to fetch repositories and branches.",
      "Created a web-based dashboard using Angular.",
      "Utilized Docker and AWS for deployment and scalability.",
      "Enhanced system security by implementing JWT authentication and authorization.",
      "Optimized database queries and implemented caching mechanisms to improve performance.",
      "Collaborated with the frontend team to integrate the backend with the frontend."
    ],
    category: "Backend"
  },
  {
    id: "proj-2",
    title: "EV Charge System - Present",
    description: "A scalable, microservice-based EV charging network platform providing real-time telemetry, location tracking, and session management.",
    longDescription: "An enterprise-grade EV charging network system designed around a microservices architecture. It handles real-time telemetry from charging stations, tracks power delivery, manages reservations, and integrates Google Maps to locate nearby chargers. The platform utilizes Spring Boot for decoupled services, Apache Kafka for event-driven message dispatching, and Next.js for a responsive user dashboard.",
    tags: ["Spring Boot", "Next.js", "Tailwind CSS", "MySQL", "Kafka", "AWS", "JWT", "Security", "Docker", "Hibernate", "Google Map"],
    github: "https://github.com/IshanNikeshalaNawarathna/EV-ChargeHub",
    // demo: "https://vortex-demo.example.com",
    role: "Full Stack Engineer",
    achievements: [
      "Architected and deployed a highly scalable microservice system utilizing Spring Boot and Docker.",
      "Integrated Apache Kafka for asynchronous communication and real-time status updates from charging points.",
      "Developed an interactive dashboard in Next.js using Google Maps API for real-time station location tracking.",
      "Established robust authentication and microservice-to-microservice authorization using JWT and Spring Security."
    ],
    category: "Full-Stack"
  },
  {
    id: "proj-3",
    title: "Evenro - Event Ticket Booking App",
    description: "A native Android application that enables users to browse local events, select seats, and purchase tickets in real time.",
    longDescription: "Evenro is a native Android application built using Java and integrated with Firebase. It provides an intuitive platform for discovering live events, booking tickets, and managing digital entry passes. Real-time updates on ticket availability are synced via Firebase Firestore, while push notifications keep users informed about venue changes and entry times.",
    tags: ["Java", "Firebase", "Android", "Google Map"],
    github: "https://github.com/IshanNikeshalaNawarathna/Evenro",
    role: "Mobile App Developer",
    achievements: [
      "Developed a native Android interface in Java, focusing on user experience, smooth transitions, and optimized layouts.",
      "Integrated Firebase Authentication for secure sign-in and Cloud Firestore for real-time ticket availability updates.",
      "Implemented Firebase Cloud Messaging (FCM) to deliver push notifications for booking confirmations and event reminders.",
      "Designed local ticket storage with offline QR code generation for quick entry verification at event venues."
    ],
    category: "Frontend"
  },
  {
    id: "proj-4",
    title: "CloudScale Infra Operator",
    description: "A custom Kubernetes controller that auto-scales compute nodes based on predictive request traffic using ML models.",
    longDescription: "CloudScale listens to Kubernetes API metrics and applies linear regression models to predict incoming spikes. It prepares node autoscaling dynamically.",
    tags: ["Go", "Kubernetes Operator", "Python", "TensorFlow Lite", "AWS EKS", "Terraform"],
    github: "https://github.com/ishannikeshala/cloudscale-operator",
    role: "DevOps & Cloud Engineer",
    achievements: [
      "Reduced cloud host provisioning costs by 22% on average.",
      "Preemptively scaled pods 3 minutes ahead of spike cycles, eliminating rate-limiting on sudden spikes.",
      "Wrote complete custom CRD specifications for seamless cluster configuration."
    ],
    category: "Cloud"
  }
];

export const education: EducationNode[] = [
  {
    id: "edu-1",
    degree: "B.Eng. (Hons) in Software Engineering",
    institution: "IIC University of Technology, Cambodia — in collaboration with Java Institute for Advanced Technology, Sri Lanka",
    period: "2023 - 2026",
    description: "Specialized in Distributed Software Architectures, Advanced Database Systems, and Event-Driven Paradigms. Graduated with First Class Honours.",
    achievements: [
      "Graduated with First Class Honours",
      "Dean's List for Academic Excellence (2023, 2024, 2025, 2026)",
      "Nominee for the Best Software Engineering Capstone Project"
    ],
    images: ["/images/graduation-1.jpg", "/images/graduation-2.jpg", "/images/graduation-3.jpg", "/images/graduation-4.jpg", "/images/graduation-5.jpg", "/images/graduation-6.jpg", "/images/graduation-7.jpg", "/images/graduation-8.jpg"]
  }
];
