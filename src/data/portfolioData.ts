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
    email: "sabhinandan403@gmail.com",
    phone: "+91-9817750262",
    linkedin: "https://linkedin.com/in/abhinandankumar",
    github: "https://github.com/sabhinandan403",
    googleDriveResumeUrl: "https://drive.google.com/drive/folders/latest-resume?usp=sharing",
    summary: `Full Stack Data Engineer with 2+ years of experience architecting IoT data pipelines and low-latency systems that convert raw telemetry into business-critical insights. Proven track record of designing Databricks Medallion Lakehouses ingesting from Cassandra DB for 10,000+ daily events, architecting Vertical Modular Monolith in-memory caches (slashing API response times from 7s to 40–50ms), and delivering timezone-normalized 15-minute sensor aggregation engines.`
  },
  
  metrics: [
    { label: "Daily Telemetry Events", value: "10,000+", subtext: "Cassandra → Databricks Lakehouse" },
    { label: "API Latency Reduction", value: "7s → 40ms", subtext: "In-memory Startup Caching" },
    { label: "Facility Sites Monitored", value: "50+", subtext: "Automated Wi-Fi & Sensor SLAs" },
    { label: "System Uptime SLA", value: "~99%", subtext: "Power BI & Lambda Reports" }
  ],

  experiences: [
    {
      id: "vantiva",
      company: "Vantiva India",
      role: "Software Engineer | Data Engineer",
      period: "Jun 2024 – Present",
      location: "India",
      projectGroup: "Smart Spaces & HomeSight Care",
      summary: "Architecting end-to-end Lakehouse data pipelines, low-latency in-memory API caching layers, and real-time IoT sensor aggregation engines.",
      highlights: [
        "Architected a Vertical Modular Monolithic backend to eliminate multi-API serial bottlenecks and heavy direct DB roundtrips, preloading high-frequency entities (Users, HC200 hub details, Accounts) into server RAM at boot.",
        "Slashed core dashboard and account API response latency from ~7 seconds down to 40–50ms (99% reduction), taking direct ownership of the Users and AppRegistry backend modules plus AppRegistry frontend interface.",
        "Engineered Databricks ETL pipelines using Medallion Architecture (Bronze → Silver → Gold) to ingest and clean 10,000+ daily IoT telemetry data points from Cassandra DB across 50+ facilities.",
        "Curated daily production Gold tables powering executive Power BI dashboards for Senior Architects, Sales leadership, and Enterprise Clients to monitor device connectivity and automated SLA uptime (~99%).",
        "Developed serverless on-demand reporting features using AWS Lambda, allowing engineering and operations teams to generate custom date-range Excel diagnostic reports.",
        "Built a generalized dynamic sensor aggregation backend engine for HomeSight Care, mathematically aggregating Cassandra sensor pulses (motion, door/window contacts) into 96 discrete 15-minute buckets per day.",
        "Engineered timezone-normalization logic to shift UTC sensor event timestamps to match the local physical timezone of the principal user's HC200 gateway.",
        "Delivered a responsive 24-hour visual motion-activity heatmap on React, enabling caregivers to track mobility trends and detect critical inactivity anomalies."
      ],
      technologies: ["PySpark", "Databricks", "Cassandra DB", "Node.js", "React", "AWS Lambda", "Power BI", "In-Memory Caching", "Modular Monolith", "TypeScript", "SQL"],
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
      title: "Cassandra IoT Telemetry & Databricks Medallion Lakehouse",
      category: "Data Engineering",
      tagline: "High-throughput Medallion architecture for real-time Wi-Fi & sensor health",
      description: "A production-grade lakehouse pipeline ingesting raw high-velocity Cassandra DB telemetry through PySpark on Databricks. Structured across Bronze, Silver, and Gold layers to publish daily uptime SLA tables powering Power BI dashboards and on-demand AWS Lambda Excel reports.",
      architecture: ["Cassandra DB Ingestion", "Databricks PySpark", "Medallion Delta Lake (Bronze/Silver/Gold)", "Power BI & AWS Lambda Reports"],
      metrics: ["10,000+ daily events", "99% SLA adherence", "50+ facility sites"],
      technologies: ["PySpark", "Databricks", "Cassandra DB", "Delta Lake", "AWS Lambda", "Power BI"],
      featured: true,
      githubUrl: "https://github.com/sabhinandan403",
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
      githubUrl: "https://github.com/sabhinandan403",
      date: "2024"
    },
    {
      id: "homesight-motion-engine",
      title: "Timezone-Aware Dynamic 15-Minute Sensor Aggregation Engine",
      category: "Full Stack",
      tagline: "15-minute dynamic time-bucket heatmap with multi-sensor aggregation",
      description: "A generalized backend aggregation engine and interactive React heatmap that ingests raw Cassandra sensor events (motion, door/window contacts), normalizes timestamps to the user's local HC200 timezone, and computes 96 discrete 15-minute intervals for elderly care monitoring.",
      architecture: ["Fast Node.js Aggregator", "HC200 Timezone Normalizer", "Dynamic Formula Dispatcher", "React 24h Heatmap Grid"],
      metrics: ["40ms cached lookups", "15-min granular time buckets", "Timezone normalized"],
      technologies: ["React", "Node.js", "Cassandra DB", "In-Memory Cache", "TypeScript"],
      featured: true,
      githubUrl: "https://github.com/sabhinandan403",
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
      githubUrl: "https://github.com/sabhinandan403",
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
      githubUrl: "https://github.com/sabhinandan403",
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
        { name: "Cassandra DB", level: 85, tags: ["IoT Telemetry", "Time-Series", "CQL"] },
        { name: "Apache Kafka", level: 85, tags: ["Message Queuing", "Partitions", "Event Streams"] },
        { name: "ETL / ELT Pipelines", level: 92, tags: ["Medallion Lakehouse", "Batch", "Data Cleaning"] },
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
        { name: "Vertical Modular Monolith", level: 90, tags: ["Domain Boundaries", "High Cohesion", "Clean Arch"] },
        { name: "In-Memory Startup Caching", level: 92, tags: ["Sub-50ms Response", "RAM Preload", "Zero-Lag"] },
        { name: "Python", level: 92, tags: ["AsyncIO", "OOP", "Data Structures"] },
        { name: "FastAPI", level: 88, tags: ["REST", "Pydantic", "Swagger Docs"] },
        { name: "Node.js & Express.js", level: 85, tags: ["Event Loop", "Microservices", "JWT/Auth"] },
        { name: "GraphQL & Hasura", level: 82, tags: ["Subscriptions", "Mutations", "Resolvers"] }
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
        { name: "Cassandra DB", level: 85, tags: ["Wide-Column", "Time-Series Storage"] },
        { name: "AWS (Lambda, S3)", level: 85, tags: ["Serverless Reports", "Event Triggers"] },
        { name: "MongoDB", level: 80, tags: ["Aggregation Pipelines", "Documents"] },
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
  }
};
