// Single source of truth for portfolio content.
// Every fact here is drawn directly from Dhvani's resume — nothing invented.

export const profile = {
  name: "Dhvani Dave",
  role: "Cloud Software Engineer",
  focus: "SWE · AI/ML · Data/ML Engineering",
  tagline:
    "Computer Science graduate student who builds and ships full-stack and backend systems in Go, TypeScript, and React — from a concurrent CLI tool to distributed, AI-powered platforms.",
  location: "New York, USA",
  status: "Open to opportunities in tech · MS CS @ UB",
  email: "dhvanidave7014@gmail.com",
  phone: "+1 716-553-7650",
  linkedin: "https://linkedin.com/in/dhvanidave7014",
  github: "https://github.com/dhvani7014",
  resumeUrl: "/Dhvani_Dave_Resume.pdf",
};

export const stats = [
  { value: "3.9", label: "GPA / 4.0" },
  { value: "2", label: "Yrs exp." },
  { value: "Dec '26", label: "MS CS" },
];

export const about = {
  heading: "About",
  accent: "Me",
  paragraphs: [
    "I’m a software engineer who enjoys building things, solving problems and exploring what’s possible with technology. I’m currently pursuing my Master’s at the University at Buffalo, where I’ve been exploring AI, new technologies, and ideas that spark my curiosity.",
    "I’ve always had a **“give me anything, I’ll figure it out”** kind of mindset. For me, not knowing something has never been a reason to stop. I usually take it as a reason to learn, explore and see if I can figure it out. That attitude has helped me far beyond software. It’s shaped how I approach challenges in life in general. I’ve learned that most problems become a lot less intimidating when you’re willing to spend the time to really understand them.",
    "Before my Master’s, I worked as a **Cloud Software Engineer at CloudRock**, where I had the opportunity to work on real world software and learn what it takes to turn ideas into something people can actually use. It taught me how to work with **complex systems**, understand what users actually need, solve problems that don’t always have straightforward answers and build software that is **reliable beyond just the development environment**.",
    "I’m curious by nature and love experimenting with new ideas, technologies and projects. I also genuinely enjoy meeting new people, hearing different perspectives and **learning from the best**. There’s usually something worth learning in every experience if you take the time to notice it.",
    "I’m here to **build, learn, experiment** and hopefully create a few things worth talking about along the way.",
  ],
};

export const experience = [
  {
    role: "Cloud Software Engineer",
    company: "CloudRock",
    location: "Mumbai, India",
    period: "Jul 2023 – Apr 2025",
    bullets: [
      "Built **Workday Studio XML/XSLT transformation pipelines** and custom EIB templates for **10K+ records per run**, supporting Workday HCM data flows across **15+ countries**.",
      "Extended integration workflows with **AWS EC2, S3, and Lambda**, adding validation and routing before HR and Finance systems consumed downstream data.",
      "Developed **business-rule validations** and Python reconciliation scripts for bulk loads, reducing data errors by **30%** and improving integration processing efficiency.",
      "Partnered with **HR, Finance, IT, backend engineering, and QA** to translate operational requirements into reliable, scalable technical solutions.",
      "Led **unit, integration, smoke, UAT, and regression testing** across sandbox and production, debugging API and integration issues throughout delivery.",
      "Supported post-launch operations through **Jira**, triaging production issues and helping keep integrations stable after release.",
      "Earned **Rockstar of the Month** for ownership and project delivery; also mentored new hires and supported onboarding.",
    ],
    tags: ["Workday HCM", "7+ Countries", "10K+ Employees", "Jira Support", "QA & UAT"],
  },
  {
    role: "Software Engineer Intern",
    company: "Vansh Consulting Inc.",
    location: "Mumbai, India",
    period: "Aug 2022 – May 2023",
    bullets: [
      "Developed an internal client-operations portal with **Python (Django)**, React, and TypeScript, replacing spreadsheet-based tracking for supplier and purchase-order records.",
      "Built **REST APIs** and scheduled sync jobs to bring ERP and CRM order data into PostgreSQL, then optimized indexes and joins to reduce the nightly run from **~45 to ~15 minutes**.",
      "Containerized the application with **Docker** and created a GitHub Actions pipeline for build, test, and deployment, backed by **~60 unit and integration tests**.",
      "Prototyped a Python ticket-triage service using **spaCy and scikit-learn** that classified incoming requests into **6 categories at ~85% accuracy**, reducing manual helpdesk sorting.",
    ],
    tags: ["Python", "Django", "React", "PostgreSQL", "Docker", "GitHub Actions"],
  },
];

export const projects = [
  {
    title: "Concurrent Link Checker",
    subtitle: "Go Crawler & Link Validator",
    period: "Jul 2026 – Aug 2026",
    description: "",
    tags: ["Go", "Goroutines", "GitHub Actions", "CI/CD"],
    highlights: ["Built a **concurrent web crawler and link validator in Go**, using a goroutine worker pool pattern to crawl webpages, extract links, and validate them in parallel for fast, scalable checks.", "Shipped with **both CLI and web interfaces**, backed by unit tests and a **GitHub Actions CI/CD pipeline** for automated testing on every change.", "Handled **HTTP edge cases gracefully**, including timeouts, redirects, and broken/dead links, ensuring robust validation results across real-world websites with unpredictable link structures.", "**Deployed live on Render**, delivering a fully functional, publicly accessible tool end to end."],
    link: "https://concurrent-link-checker.onrender.com",
    featured: true,
  },
  {
    title: "CiteMind",
    subtitle: "Citation Grounded Research Paper Assistant",
    period: "Jun 2026 – Jul 2026",
    description: "",
    tags: ["Python", "FastAPI", "RAG", "ChromaDB", "Sentence Transformers", "Vector Search", "Next.js", "Docker", "REST APIs"],
    highlights: ["Built a **FastAPI based RAG pipeline** for processing research papers, including PDF extraction, text chunking, embedding generation, retrieval, and grounded answer generation.", "Implemented **semantic search with Sentence Transformers and ChromaDB** to retrieve relevant document chunks using vector similarity search.", "Developed **citation grounded responses** with source metadata and document references to improve answer traceability and reduce hallucinations.", "Containerized the application with **Docker** and built REST APIs for document ingestion, retrieval, and question answering."],
    link: null,
    featured: true,
  },
  {
    title: "SentinelAI",
    subtitle: "AI-Powered Fraud Investigation System",
    period: "Apr 2026 – May 2026",
    description:
      "A distributed fraud investigation platform that combines agent orchestration, relational data, graph analysis, and a Next.js investigation interface.",
    tags: ["FastAPI", "Next.js", "GraphQL", "PostgreSQL", "Neo4j"],
    highlights: ["Architected a 6 agent FastAPI backend for distributed task orchestration, transaction analysis, graph traversal, and risk scoring.", "Integrated PostgreSQL + Neo4j to support relational queries and graph based analysis of transaction relationships.", "Developed GraphQL APIs to aggregate agent outputs and serve investigation data to a Next.js frontend.", "Implemented automated fraud scoring and graph relationship detection across connected accounts and transactions.", "Conducted end to end integration testing across agents, databases, APIs, and frontend workflows."],
    link: null,
    featured: true,
  },
  {
    title: "CodeSense",
    subtitle: "Agentic AI Developer Copilot",
    period: "Jan 2026 – Mar 2026",
    description:
      "Designed, coded, and deployed a full-stack agentic debugging assistant (FastAPI backend, React frontend) that retrieves code context, detects bugs, and generates validated patches across the full development lifecycle. Fine-tuned Qwen3-8B with QDoRA on 5,400 samples, improving SWE-bench Token F1 from 0.075 to 0.257 and reducing hallucinations by 93%.",
    tags: ["Python", "FastAPI", "React", "LangGraph", "FAISS", "Tree-sitter", "Qwen3 8B"],
    highlights: ["Built a full stack AI coding assistant with FastAPI and React for code analysis, debugging, contextual retrieval, and automated fix generation.", "Designed a LangGraph agent workflow to orchestrate code retrieval, analysis, debugging, and patch generation.", "Fine tuned Qwen3 8B with QDoRA on 5,400 coding samples, improving SWE bench Token F1 from 0.075 to 0.257.", "Integrated FAISS and Tree sitter for semantic code retrieval and AST based code analysis, improving contextual accuracy of generated fixes."],
    link: null,
    featured: true,
  },
  {
    title: "QuestionAI",
    subtitle: "NLP Question Generation",
    period: "Jan 2023 – May 2023",
    description: "",
    tags: ["Python", "NLP", "POS Tagging", "Entity Extraction", "Dependency Parsing"],
    highlights: ["Engineered a **Python NLP pipeline** for automated MCQ generation, transforming unstructured text into structured question and answer data.", "Implemented **dependency parsing, POS tagging, and entity extraction** to identify semantic relationships and generate question candidates.", "Developed algorithms for **question transformation and distractor generation**, producing relevant answer choices from extracted text features.", "Built an end to end **text processing and assessment generation workflow** to automate question creation from educational content."],
    link: null,
    featured: true,
  },
  {
    title: "Job Portal",
    subtitle: "APPLICATION TRACKING SYSTEM",
    period: "Aug 2022 – Dec 2022",
    description: "",
    tags: ["Java", "Spring Boot", "SQL", "Backend Services", "Database Design"],
    highlights: ["Developed a job application platform using **Java and Spring Boot**, enabling users to create profiles, apply for jobs, and track application status.", "Designed and implemented **backend services** for managing users, job postings, and application workflows.", "Integrated **SQL** for storing and managing user, job, and application data.", "Built the application end to end across the **backend and database layers**, from system design through implementation."],
    link: null,
    featured: true,
  },
];

export const certifications = [
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    period: "Aug 2026",
    description:
      "Learned core cybersecurity concepts including security principles, threat awareness, risk management, and common security controls.",
  },
  {
    title: "Build RAG Applications: Get Started",
    issuer: "IBM",
    period: "Aug 2026",
    description:
      "Learned to build RAG applications using document retrieval, embeddings, vector databases, and LLMs to generate context-aware responses.",
  },
  {
    title: "Introduction to Model Context Protocol (MCP)",
    issuer: "Anthropic",
    period: "Aug 2026",
    description:
      "Learned how to build MCP servers and clients, connect AI models to external tools and data, and structure tool interactions using the Model Context Protocol.",
  },
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    period: "Jul 2026",
    description:
      "Hands-on training building AI-powered applications, handling API requests, structured outputs, and prompt workflows.",
  },
];

export const education = [
  {
    school: "University at Buffalo, SUNY",
    degree: "M.S. Computer Science",
    gpa: "3.9/4.0",
    period: "Aug 2025 – Dec 2026",
    location: "Buffalo, NY",
    focus: "Artificial Intelligence, Machine Learning, Deep Learning, Algorithms & Data Structures",
    coursework: [
      { term: "Fall 25", courses: ["Algorithms Analysis and Design", "Introduction to Machine Learning", "Computer Security", "Data Intensive Computing"] },
      { term: "Spring 26", courses: ["Deep Learning", "Operating System", "Data Models and Query Language", "Technological Entrepreneurship"] },
      { term: "Fall 26", courses: ["Computer Vision (Capstone Project)"] },
    ],
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Computer Engineering",
    gpa: "3.6/4.0",
    period: "Aug 2019 – Jun 2023",
    location: "Mumbai, India",
    capstone: "QuestionAI",
    courseworkList: ["Data Structures", "Algorithms", "C/C++", "Artificial Intelligence", "Data Science", "NLP", "Python", "Discrete Mathematics", "Probability", "IoT", "Blockchain", "Cloud Computing", "Java", "AWS", "Big Data"],
    activities: "Organized various college events and was a member of the Codex community.",
  },
];

export const techStack = {
  Languages: ["Go", "Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "Scala"],
  "Backend & APIs": [
    "FastAPI",
    "Node.js",
    "REST APIs",
    "GraphQL",
    "API Integration",
    "Authentication",
    "Microservices",
    "Concurrent Programming",
  ],
  "Frontend & Full-Stack": ["React.js", "React Native", "Next.js", "HTML/CSS", "Responsive UI", "Streamlit"],
  "Databases & Cloud": ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "Snowflake", "AWS (EC2, S3, Lambda)"],
  "Developer Tools": ["Git", "GitHub Actions", "CI/CD", "Docker", "Kubernetes", "Postman", "Linux"],
  "AI/ML & Data": [
    "LLM Fine-Tuning",
    "Instruction Tuning",
    "Quantization",
    "Semantic Search",
    "Intent Classification",
    "Entity Extraction",
    "NLP",
    "RAG",
    "LangGraph",
    "Prompt Engineering",
    "Hugging Face",
    "PyTorch",
    "TensorFlow",
    "Machine Learning",
    "Deep Learning",
    "NumPy",
    "Pandas",
  ],
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
