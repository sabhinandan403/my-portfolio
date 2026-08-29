export interface Project {
  id: string;
  title: string;
  category: 'Data Engineering' | 'Full Stack' | 'Gen AI & ML' | 'Cloud & Systems';
  tagline: string;
  description: string;
  architecture: string[];
  metrics: string[];
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  date: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  projectGroup: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  badgeColor: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Abhinandan Kumar",
    title: "Full Stack Data Engineer & AI Developer",
    location: "India",
    email: "abhinandankumar.dev@gmail.com", // updateable
    phone: "+91-9817750262",
    linkedin: "https://linkedin.com/in/abhinandankumar",
    github: "https://github.com/abhinandankumar",
    // Google Drive direct access URL or shareable link
    googleDriveResumeUrl: "https://drive.google.com/drive/folders/latest-resume?usp=sharing",
    summary: `Full Stack Data Engineer with 2+ years of experience architecting IoT data pipelines and scalable full-stack applications that convert high-velocity telemetry data into business-ready insights. Proven track record of building PySpark/Databricks pipelines handling 10,000+ daily events, migrating API layers to Kafka-backed caches (reducing response times from 7s to 40-50ms), and delivering custom React sensor aggregation heatmaps.`
  },
  
  metrics: [
    { label: "Daily Telemetry Events", value: "10,000+", subtext: "Automated Wi-Fi mesh uptime" },
    { label: "API Latency Reduction", value: "7s → 40ms", subtext: "In-memory & Kafka caching" },
    { label: "Facility Sites Monitored", value: "50+", subtext: "LoRa & Zigbee sensor SLAs" },
    { label: "System Uptime SLA", value: "~99%", subtext: "Real-time Power BI & alarms" }
  ],

  experiences: [
    {
      id: "vantiva",
      company: "Vantiva India",
      role: "Software Engineer | Data Engineer",
      period: "Jun 2024 – Present",
      location: "India",
      projectGroup: "Smart Spaces & HomeSight Care",
      summary: "Leading end-to-end data pipelines and low-latency API layers for IoT telemetry monitoring and smart home/elderly care ecosystems.",
      highlights: [
        "Built ETL pipelines using PySpark and Databricks to ingest and process 10,000+ daily telemetry data points from IoT devices, automatically calculating Wi-Fi mesh uptime and replacing manual router-by-router checks.",
        "Engineered an AWS Lambda-powered on-demand reporting system for Smart Spaces, enabling 50+ storage facility managers and engineering teams to generate 24-hour and custom telemetry reports for rapid site debugging.",
        "Diagnosed connectivity and missing packet anomalies across LoRa and Zigbee sensors and routers, successfully maintaining ~99% uptime SLA.",
        "Built executive and operational Power BI real-time dashboards for sales teams, senior leadership, and clients to monitor device health.",
        "Migrated core Node.js APIs to an asynchronous caching-based architecture backed by Kafka and in-memory indexes with automatic database fallback, slashing high-traffic response times from ~7 seconds to 40–50ms.",
        "Architected and enforced RBAC/ABAC permission models across all migrated user-module endpoints, securing personal data and hub configuration APIs.",
        "Engineered a custom React motion-activity heat map for HomeSight Care elderly monitoring, building a backend aggregation engine (count, sum, average, mode, median) over 15-minute sensor buckets.",
        "Delivered 10+ frontend features and resolved 30+ system bugs, significantly boosting platform stability and user retention."
      ],
      technologies: ["PySpark", "Databricks", "Node.js", "React", "Kafka", "AWS Lambda", "Power BI", "SQL", "Python", "LoRa/Zigbee"],
      badgeColor: "from-cyan-500 to-blue-600"
    },
    {
      id: "wowlabz",
      company: "Wow Labz",
      role: "Backend Engineer Intern",
      period: "Apr 2024 – Jun 2024",
      location: "India",
      projectGroup: "Cab Booking App & Video Processing Pipeline",
      summary: "Developed high-throughput backend services and distributed media processing pipelines.",
      highlights: [
        "Built a FastAPI reporting service used daily by administrators and 10–12 fleet drivers for real-time tracking of driver earnings, bookings, and performance metrics.",
        "Engineered a distributed 7-phase Kafka-driven video processing pipeline on AWS S3 to chunk video files and synchronously generate transcripts, subtitles, and multi-language dubbed audio."
      ],
      technologies: ["Python", "FastAPI", "MongoDB", "Apache Kafka", "AWS S3", "Distributed Pipelines"],
      badgeColor: "from-emerald-500 to-teal-600"
    },
    {
      id: "yamaha",
      company: "Yamaha Motor Solutions India",
      role: "Graduate Engineer Trainee | Full Stack Developer",
      period: "Jul 2023 – Apr 2024",
      location: "India",
      projectGroup: "Enterprise Peer Review System",
      summary: "Constructed enterprise-grade workflow tools and GraphQL query engines for distributed engineering divisions.",
      highlights: [
        "Developed a full-stack peer review application adopted across 30+ engineers and managers, eliminating manual spreadsheet reviews with automated status boards and RabbitMQ real-time notification streams.",
        "Designed and implemented GraphQL APIs with Hasura over PostgreSQL, writing complex SQL functions, cursors, and dynamic DML queries to power reactive frontend review forms."
      ],
      technologies: ["Node.js", "React", "GraphQL", "Hasura", "PostgreSQL", "RabbitMQ", "PL/SQL"],
      badgeColor: "from-indigo-500 to-purple-600"
    }
  ] as Experience[],

  projects: [
    {
      id: "telemetry-lakehouse",
      title: "IoT Telemetry Lakehouse & Live Pipeline",
      category: "Data Engineering",
      tagline: "High-throughput Medallion architecture for real-time Wi-Fi & sensor health",
      description: "A complete end-to-end data pipeline simulating the 10,000+ daily IoT telemetry processing engine. Ingests raw sensor streams through Kafka into Databricks Delta Lake, computing automated uptime SLAs and anomaly alerts with 99% uptime target.",
      architecture: ["IoT Gateway", "Kafka Ingestion", "PySpark Streaming", "Delta Lake (Bronze/Silver/Gold)", "Power BI API"],
      metrics: ["10k+ daily events", "<50ms processing lag", "99% SLA adherence"],
      technologies: ["PySpark", "Databricks", "Delta Lake", "Kafka", "Python", "AWS S3"],
      featured: true,
      githubUrl: "https://github.com/abhinandankumar",
      date: "2024"
    },
    {
      id: "ai-data-analyst-agent",
      title: "Autonomous Data Analyst AI Agent",
      category: "Gen AI & ML",
      tagline: "Self-correcting Text-to-SQL and data visualization agent with sandboxed execution",
      description: "An agentic system leveraging LLM tool-calling and code execution to translate natural language into optimized SQL queries, validate execution plans, auto-generate charts, and draft statistical executive summaries.",
      architecture: ["LangGraph / ReAct Loop", "BigQuery / PostgreSQL Tool", "Sandboxed Python REPL", "Structured JSON Guardrails"],
      metrics: ["94% SQL Accuracy", "Auto self-correction on syntax errors", "Zero SQL injection"],
      technologies: ["Python", "Gemini API", "LangGraph", "FastAPI", "PostgreSQL", "Pydantic"],
      featured: true,
      githubUrl: "https://github.com/abhinandankumar",
      date: "2024"
    },
    {
      id: "homesight-motion-engine",
      title: "Elderly Care Motion-Activity Aggregation Engine",
      category: "Full Stack",
      tagline: "15-minute dynamic time-bucket heatmap with multi-sensor aggregation",
      description: "Interactive visual analytics dashboard and backend aggregation engine that turns sparse binary motion and door/window sensor triggers into 15-minute continuous intensity scores (count, sum, avg, mode, median) with real-time alerts for elderly care.",
      architecture: ["Fast Node.js Aggregator", "In-Memory Sliding Window", "React 24h Heatmap Grid", "RBAC/ABAC Gatekeeper"],
      metrics: ["40ms cached lookups", "15-min granular time buckets", "Multi-sensor support"],
      technologies: ["React", "Node.js", "Tailwind CSS", "Redis / In-Memory", "Jest"],
      featured: true,
      githubUrl: "https://github.com/abhinandankumar",
      date: "2024"
    },
    {
      id: "video-multilingual-pipeline",
      title: "7-Phase Distributed Video Dubbing & Subtitle Pipeline",
      category: "Cloud & Systems",
      tagline: "Event-driven media chunking, transcription, and multi-language synthesis",
      description: "Distributed multimedia ingestion pipeline utilizing Kafka message brokers to break video files into parallel processing chunks, extract audio tracks, perform speech-to-text transcription, generate subtitles, and synthesize dubbed audio tracks.",
      architecture: ["Video Chunking Microservice", "Kafka Message Bus", "ASR & Neural TTS Workers", "AWS S3 Sync"],
      metrics: ["7 asynchronous phases", "Sub-minute chunk processing", "Multi-language sync"],
      technologies: ["Python", "Apache Kafka", "AWS S3", "FastAPI", "Docker"],
      featured: false,
      githubUrl: "https://github.com/abhinandankumar",
      date: "2024"
    },
    {
      id: "peer-review-graphql",
      title: "Automated Enterprise Peer Review Platform",
      category: "Full Stack",
      tagline: "Real-time review coordination with Hasura GraphQL & RabbitMQ",
      description: "Full-stack application replacing spreadsheet-based review workflows for 30+ engineers. Features dynamic form builders powered by Hasura GraphQL, custom PostgreSQL cursors, and instant reviewer push notifications via RabbitMQ.",
      architecture: ["React SPA", "Hasura GraphQL Engine", "PostgreSQL Functions & Triggers", "RabbitMQ Notification Broker"],
      metrics: ["Adopted by 30+ engineers", "100% automated status visibility", "Zero review drop-offs"],
      technologies: ["React", "Node.js", "Hasura GraphQL", "PostgreSQL", "RabbitMQ"],
      featured: false,
      githubUrl: "https://github.com/abhinandankumar",
      date: "2023 - 2024"
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Data Engineering & Streaming",
      icon: "Database",
      skills: [
        { name: "PySpark", level: 90, tags: ["Transformations", "DataFrames", "UDFs"] },
        { name: "Databricks & Delta Lake", level: 90, tags: ["Medallion Architecture", "Unity Catalog", "DLT"] },
        { name: "Apache Kafka", level: 85, tags: ["Message Queuing", "Partitions", "Event Streams"] },
        { name: "RabbitMQ", level: 80, tags: ["Pub/Sub", "Exchange Routing", "Async Workers"] },
        { name: "ETL / ELT Pipelines", level: 92, tags: ["Batch", "Streaming", "Data Cleaning"] },
        { name: "SQL & Query Tuning", level: 95, tags: ["Window Functions", "Partitioning", "Execution Plans"] }
      ]
    },
    {
      title: "AI & Gen AI Engineering",
      icon: "Sparkles",
      skills: [
        { name: "AI Agents & Tool Calling", level: 88, tags: ["ReAct Loops", "Multi-Agent Teams", "HITL"] },
        { name: "LLM APIs & Google GenAI", level: 85, tags: ["Structured Outputs", "Multimodal", "Gemini"] },
        { name: "Vector Search & RAG", level: 82, tags: ["Embeddings", "Semantic Retrieval", "Chroma"] },
        { name: "LangGraph / Frameworks", level: 80, tags: ["State Graphs", "Memory", "Observability"] },
        { name: "Prompt & Context Engineering", level: 90, tags: ["Few-Shot", "Chain-of-Thought", "Guardrails"] }
      ]
    },
    {
      title: "Backend & Low-Latency APIs",
      icon: "Server",
      skills: [
        { name: "Python", level: 92, tags: ["AsyncIO", "OOP", "Data Structures"] },
        { name: "FastAPI", level: 88, tags: ["REST", "Pydantic", "Swagger Docs"] },
        { name: "Node.js & Express.js", level: 85, tags: ["Event Loop", "Microservices", "JWT/Auth"] },
        { name: "In-Memory Caching (Redis/Memory)", level: 90, tags: ["Sub-50ms Response", "Cache Invalidation"] },
        { name: "GraphQL & Hasura", level: 82, tags: ["Subscriptions", "Mutations", "Resolvers"] },
        { name: "Security (RBAC / ABAC)", level: 85, tags: ["Role-Based Access", "Endpoint Auditing"] }
      ]
    },
    {
      title: "Frontend & Data Visualization",
      icon: "Layout",
      skills: [
        { name: "React (ES6+ / TS)", level: 88, tags: ["Hooks", "Context API", "Component Architecture"] },
        { name: "Interactive Visualizations", level: 86, tags: ["Custom Heatmaps", "Time-Series Grids"] },
        { name: "Tailwind CSS", level: 90, tags: ["Responsive", "Dark Mode", "Modern Glassmorphism"] },
        { name: "Power BI", level: 85, tags: ["DAX", "Executive Dashboards", "Live Datasets"] }
      ]
    },
    {
      title: "Databases & Cloud Platforms",
      icon: "Cloud",
      skills: [
        { name: "PostgreSQL & PL/SQL", level: 90, tags: ["Complex Queries", "Indexes", "Cursors"] },
        { name: "MongoDB", level: 80, tags: ["Aggregation Pipelines", "Documents"] },
        { name: "AWS (Lambda, S3)", level: 85, tags: ["Serverless", "Event Triggers", "Storage"] },
        { name: "Azure (CI/CD & DevOps)", level: 78, tags: ["Pipelines", "IaC (In-Progress)"] },
        { name: "Git & Developer Tools", level: 90, tags: ["Branching", "Code Review", "TOAD"] }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      name: "Databricks Certified Data Engineer Professional",
      issuer: "Databricks",
      date: "Accredited",
      badge: "https://images.credly.com/size/340x340/images/6b010f60-d8a6-4b8c-8f3e-8c887413693f/image.png",
      description: "Advanced proficiency in Spark streaming, Delta Lake optimizations, Medallion architectures, and production ETL pipelines."
    },
    {
      name: "Databricks Fundamentals Accreditation",
      issuer: "Databricks",
      date: "Accredited",
      description: "Core architecture of Lakehouse, Unity Catalog governance, and distributed computing principles."
    },
    {
      name: "McKinsey Forward Learning Program",
      issuer: "McKinsey & Company",
      date: "Completed",
      description: "Structured problem solving, data-driven leadership, agile communication, and strategic project management."
    }
  ],

  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Kurukshetra University",
    duration: "2019 – 2023",
    gpa: "8.02 / 10",
    highlights: ["Focus on Distributed Computing, Database Management Systems, and Object-Oriented Software Design."]
  },

  aiAssistantPrompts: [
    {
      question: "What is Abhinandan's experience with PySpark & Databricks?",
      answer: "At Vantiva India, Abhinandan built automated PySpark and Databricks ETL pipelines to ingest and process 10,000+ daily IoT telemetry data points, automatically calculating Wi-Fi mesh uptime and eliminating manual router checks. He also holds the official Databricks Data Engineering Professional accreditation."
    },
    {
      question: "How did he cut API response times from 7s to 40-50ms?",
      answer: "In the HomeSight Care project at Vantiva, Abhinandan decoupled heavy database reads by migrating core APIs to a Kafka-driven in-memory cache preloaded at server startup with instant index lookups and automatic DB fallbacks. This cut response latency by ~99% on high-traffic endpoints."
    },
    {
      question: "What did he build for the elderly care project (HomeSight Care)?",
      answer: "He created a custom React-based motion-activity heat map driven by a reusable backend aggregation engine that buckets sensor events into 15-minute intervals with intensity scoring (count, sum, average, mode, median) for motion and door/window sensors."
    },
    {
      question: "What is his background with Gen AI and AI Agents?",
      answer: "Abhinandan combines his strong data engineering background with modern Gen AI systems: building Autonomous Data Analyst agents with self-correcting Text-to-SQL loops, tool-calling with Gemini APIs, vector search RAG pipelines, and multi-agent coordination frameworks."
    }
  ]
};
