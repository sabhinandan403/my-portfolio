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
    title: "Full Stack Data Engineer & AI Agent Enthusiast",
    location: "India",
    email: "sabhinandan403@gmail.com",
    phone: "+91-9817750262",
    linkedin: "https://www.linkedin.com/in/abhinandankumar/",
    github: "https://github.com/abhinandankumar",
    googleDriveResumeUrl: "./Abhinandan_Kumar_Resume.pdf",
    summary: `Data Engineer with 3 years of experience across SQL, ETL/ELT pipelines, cloud data platforms and data-driven applications. Hands-on with Snowflake and dbt for staged-to-mart transformations, incremental processing and analytical data modeling, and with PySpark/Databricks for IoT telemetry pipelines. Strong SQL foundation across Snowflake, SQL Server and PostgreSQL, with experience supporting production data workflows, performance investigation, reporting and application integration.`
  },
  
  metrics: [
    { label: "Daily Telemetry Events", value: "10,000+", subtext: "PySpark & Databricks" },
    { label: "API Latency Reduction", value: "7s → 40ms", subtext: "In-Memory Caching & Kafka" },
    { label: "Facility Sites Monitored", value: "50+", subtext: "LoRa & Zigbee Device SLAs" },
    { label: "System Uptime SLA", value: "~99%", subtext: "Power BI & AWS Lambda Reports" }
  ],

  experiences: [
    {
      id: "vantiva",
      company: "Vantiva India",
      role: "Software Engineer | Data Engineer",
      period: "Jun 2024 – Present",
      location: "India",
      projectGroup: "Smart Spaces & HomeSight Care",
      summary: "Architecting Snowflake/dbt analytical pipelines, Databricks IoT telemetry ingestion, and low-latency API caching layers.",
      highlights: [
        "Built Snowflake ELT ingestion using stages, COPY INTO, Streams, and Tasks, enabling scheduled incremental loads from raw/staging tables to curated analytical datasets.",
        "Developed dbt SQL models across staging, intermediate and mart layers, using incremental materializations and surrogate-key joins to implement reusable transformations for downstream analytics.",
        "Developed analytical data models by defining source granularity and business keys, creating organized datasets to help the business easily track key performance metrics and analyze operations.",
        "Debugged failed Snowflake loads and scheduled Tasks through load, task and query history; investigated schema and file-format errors, validated reruns, and used query profiles and warehouse metrics to tune recurring workloads.",
        "Developed SQL Server stored procedures, triggers and views, and complex T-SQL for multi-table joins, CTE-based transformations and reporting workflows, while supporting historical-data archival and retention.",
        "Built ETL pipelines using PySpark and Databricks to process 10,000+ daily telemetry data points from IoT devices, automatically calculating Wi-Fi mesh uptime, replacing a manual, router-by-router process.",
        "Built an AWS Lambda-powered, on-demand reporting feature for the Smart Spaces web app, letting storage site managers generate Excel reports (last 24 hours or custom date range) across 50+ facility sites.",
        "Used telemetry reports to debug connectivity and communication issues between LoRa and Zigbee-enabled sensors and routers, successfully maintaining ~99% uptime SLA.",
        "Built real-time analytics dashboards in Power BI for sales teams, senior leadership, and clients to monitor device performance and usage statistics.",
        "Migrated core HomeSight Care APIs from direct database reads to a Kafka-backed in-memory caching layer with indexed lookups and database fallback, reducing high-traffic response times from ~7 seconds to 40–50 ms.",
        "Integrated RBAC/ABAC permission models into the migrated API layer, covering all user-module endpoints to enforce consistent, role-based access control across the user base.",
        "Resolved 30+ bugs and delivered 10+ frontend features, improving application stability and user experience."
      ],
      technologies: ["Snowflake", "dbt", "SQL Server", "PySpark", "Databricks", "AWS Lambda", "Power BI", "Node.js", "Kafka", "In-memory Caching", "RBAC/ABAC", "React"],
      badgeColor: "from-cyan-500 to-blue-600"
    },
    {
      id: "wowlabz",
      company: "Wow Labz",
      role: "Backend Engineer Intern",
      period: "Apr 2024 – Jun 2024",
      location: "India",
      projectGroup: "Cab Booking App & Video Processing Pipeline",
      summary: "Developed high-throughput reporting services and distributed media processing pipelines.",
      highlights: [
        "Built a FastAPI-based reporting service used daily by admins and 10-12 drivers to track driver performance, revenue, and bookings - giving admins fleet-wide visibility and drivers self-service income tracking.",
        "Used Kafka-based messaging to move video data through a 7-phase pipeline - chunking video and generating transcripts, subtitles, and dubbed audio across multiple languages."
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
        "Built a full-stack peer review application adopted by a 30-engineer team (later split into sub-teams), replacing manual review tracking with automated status visibility for engineers and managers, integrated RabbitMQ for real-time reviewer notifications.",
        "Developed GraphQL APIs using the Hasura GraphQL engine on PostgreSQL, authoring complex SQL functions, cursors, and dynamic DML queries to fetch and populate information on frontend forms."
      ],
      technologies: ["Node.js", "React", "GraphQL", "Hasura", "PostgreSQL", "RabbitMQ", "PL/SQL"],
      badgeColor: "from-indigo-500 to-purple-600"
    }
  ] as Experience[],

  projects: [
    {
      id: "snowflake-dbt-analytics",
      title: "Snowflake & dbt Staged-to-Mart Analytics Lakehouse",
      category: "Data Engineering",
      tagline: "End-to-end ELT with incremental processing, surrogate-key modeling & Streams/Tasks",
      description: "A production-grade analytical data platform built on Snowflake and dbt. Ingests raw multi-source data through external stages and COPY INTO, running automated Streams & Tasks for incremental transformation into staging, intermediate, and dimensional business mart layers.",
      architecture: ["Snowflake Stages & COPY INTO", "Streams & Scheduled Tasks", "dbt Core (Staging/Intermediate/Mart)", "Dimensional Star Schema", "Query Profile Optimization"],
      metrics: ["100% automated incremental loads", "Sub-minute warehouse execution", "Zero-downtime mart refreshes"],
      technologies: ["Snowflake", "dbt", "Snowflake SQL", "Tasks & Streams", "Python", "Dimensional Modeling"],
      featured: true,
      date: "2024"
    },
    {
      id: "telemetry-lakehouse",
      title: "IoT Telemetry Lakehouse & Automated SLA Pipeline",
      category: "Data Engineering",
      tagline: "High-throughput PySpark & Databricks pipeline with AWS Lambda & Power BI",
      description: "Automated telemetry processing engine handling 10,000+ daily IoT telemetry data points. Computes router and Wi-Fi mesh uptime, detects connectivity anomalies across LoRa and Zigbee sensors, and powers on-demand Excel reports via AWS Lambda and live Power BI dashboards.",
      architecture: ["IoT Gateway & Mesh Routers", "Databricks PySpark Streaming", "Delta Lake (Bronze/Silver/Gold)", "AWS Lambda On-Demand Engine", "Power BI Dashboards"],
      metrics: ["10,000+ daily events", "99% SLA adherence", "50+ facility sites monitored"],
      technologies: ["PySpark", "Databricks", "Delta Lake", "AWS Lambda", "AWS S3", "Power BI"],
      featured: true,
      date: "2024"
    },
    {
      id: "ai-data-analyst-agent",
      title: "Autonomous Data Analyst AI Agent",
      category: "Gen AI & ML",
      tagline: "Self-correcting Text-to-SQL and analytical report generation with sandboxed execution",
      description: "An agentic system leveraging LLM tool-calling and code execution to translate natural language into optimized SQL queries, validate execution plans across Snowflake and PostgreSQL, auto-generate charts, and draft statistical executive summaries.",
      architecture: ["LangGraph / ReAct Loop", "Snowflake & PostgreSQL Tool", "Sandboxed Python REPL", "Structured JSON Guardrails"],
      metrics: ["94% SQL Accuracy", "Auto self-correction on syntax errors", "Zero SQL injection"],
      technologies: ["Python", "Gemini API", "LangGraph", "FastAPI", "Snowflake", "PostgreSQL"],
      featured: true,
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
      date: "2023 - 2024"
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Data Platforms & Databases",
      icon: "Database",
      skills: [
        { name: "Snowflake", level: 95, tags: ["Virtual Warehouses", "Stages", "COPY INTO", "Streams & Tasks"] },
        { name: "MS SQL Server", level: 90, tags: ["T-SQL", "Stored Procedures", "Triggers", "Views", "CTEs"] },
        { name: "PostgreSQL", level: 90, tags: ["Complex Queries", "Indexes", "PL/pgSQL", "Cursors"] },
        { name: "Databricks & Delta Lake", level: 90, tags: ["PySpark", "Unity Catalog", "Lakehouse"] }
      ]
    },
    {
      title: "Snowflake & Advanced SQL",
      icon: "Layers",
      skills: [
        { name: "Snowflake SQL & Architecture", level: 95, tags: ["Query Profiling", "Virtual Warehouses", "MERGE Patterns"] },
        { name: "T-SQL & Stored Procedures", level: 92, tags: ["Window Functions", "Multi-table Joins", "Archival & Retention"] },
        { name: "Database Views & Functions", level: 90, tags: ["CTE-based Transforms", "Performance Tuning"] }
      ]
    },
    {
      title: "Data Engineering & Modeling",
      icon: "Cpu",
      skills: [
        { name: "dbt (data build tool)", level: 95, tags: ["Staging", "Intermediate", "Mart Layers", "Surrogate Keys"] },
        { name: "ETL / ELT Pipelines", level: 95, tags: ["Incremental Processing", "Scheduled Tasks", "Data Quality"] },
        { name: "Dimensional Modeling", level: 92, tags: ["Fact & Dimension Tables", "Star Schema", "Business Keys"] },
        { name: "PySpark", level: 90, tags: ["Telemetry Ingestion", "DataFrames", "Spark Tuning"] }
      ]
    },
    {
      title: "Programming, Cloud & Messaging",
      icon: "Server",
      skills: [
        { name: "Python", level: 92, tags: ["FastAPI", "Data Pipelines", "OOP", "AsyncIO"] },
        { name: "SQL (ANSI, T-SQL, Snowflake)", level: 95, tags: ["Advanced Joins", "Partitioning", "Execution Plans"] },
        { name: "AWS (S3 & Lambda)", level: 88, tags: ["Serverless Reporting", "Event Triggers", "Cloud Storage"] },
        { name: "Apache Kafka & RabbitMQ", level: 85, tags: ["Message Queues", "Streaming", "In-Memory Caching"] },
        { name: "Node.js & FastAPI", level: 88, tags: ["Low-Latency APIs", "RBAC/ABAC", "REST"] }
      ]
    },
    {
      title: "Analytics, Dev Tools & DevOps",
      icon: "BarChart3",
      skills: [
        { name: "Power BI", level: 88, tags: ["Real-time Dashboards", "DAX", "Executive Metrics"] },
        { name: "Git & Azure DevOps", level: 90, tags: ["Version Control", "CI/CD", "Branching"] },
        { name: "Databricks Unity Catalog", level: 85, tags: ["Governance", "Lineage", "Access Control"] },
        { name: "Snowsight, TOAD & SQL Developer", level: 90, tags: ["Query Profiling", "Worksheets", "Schema Debugging"] }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      name: "Databricks Data Engineering Professional & Databricks Fundamentals Accreditation",
      issuer: "Databricks",
      date: "Accredited",
      badge: "https://images.credly.com/size/340x340/images/6b010f60-d8a6-4b8c-8f3e-8c887413693f/image.png",
      description: "Advanced proficiency in Spark streaming, Delta Lake optimizations, Lakehouse architectures, and production ETL pipelines."
    },
    {
      name: "McKinsey Forward Learning Program",
      issuer: "McKinsey & Company",
      date: "Completed",
      description: "Problem Solving, Leadership & Communication - Structured data-driven strategy and execution."
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
