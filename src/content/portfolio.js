export const site = {
  name: "Shounak Paul",
  title: "Generative AI Engineer",
  role: "Gen AI Engineer",
  company: "Chat360",
  location: "Kolkata, India",
  email: "paul.shounak@outlook.com",
  phone: "+91 9330461388",
  phoneHref: "+919330461388",
  intro:
    "I'm Shounak Paul, a Generative AI Engineer based in Kolkata. I work on voice agents, retrieval systems, and the backend services around them.",
  currentNote: "Currently a Gen AI Engineer at Chat360.",
  pageDescription:
    "Shounak Paul is a Generative AI Engineer in Kolkata working on voice agents, retrieval systems, and backend services. Currently at Chat360.",
  links: {
    github: "https://github.com/shounakpaul",
    linkedin: "https://www.linkedin.com/in/paulshounak",
    resume: "/resume.pdf",
    resumeDownloadName: "Shounak-Paul-Resume-2026.pdf",
  },
  photo: {
    src: "/images/shounak-paul-1080.webp",
    srcSet:
      "/images/shounak-paul-640.webp 640w, /images/shounak-paul-800.webp 800w, /images/shounak-paul-1080.webp 1080w",
    alt: "Portrait of Shounak Paul",
  },
};

export const navigation = [
  { id: "work", label: "Work", href: "#work" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "toolkit", label: "Toolkit", href: "#toolkit" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "DocInsight",
    description:
      "A document question-answering app using local language models, LangChain, and ChromaDB.",
    stack: ["React", "Flask", "LangChain", "ChromaDB", "Ollama"],
    href: "https://github.com/shounakpaul/DocInsight",
  },
  {
    title: "DCGAN Cat Image Generation",
    description:
      "A PyTorch DCGAN trained on the Cat Dataset to generate cat images.",
    stack: ["Python", "PyTorch"],
    href: "https://github.com/shounakpaul/gan-cat-image-generation",
  },
  {
    title: "Siamese Face Verification",
    description:
      "A face verification model built with a Siamese network and trained on the LFW dataset.",
    stack: ["Python", "TensorFlow", "Keras"],
    href: "https://github.com/shounakpaul/siamese-face-recognition",
  },
];

export const experience = [
  {
    id: "chat360",
    company: "Chat360",
    role: "Gen AI Engineer",
    period: "Feb 2026 — Present",
    location: "Pune, Maharashtra",
    current: true,
    highlights: [
      "Work on production Voice AI backends for LLM-driven conversational agents, alongside client, product, and platform teams.",
      "Built MCP-based workflows that connect 20+ external APIs across client deployments.",
      "Benchmarked STT/TTS providers for Indian-language and code-mixed telephony audio. Prompt and evaluation work reduced agent error rates by 25%.",
      "Added DTMF and voicemail handling, reducing wasted outbound call minutes by 75%, and use Grafana and Loki to monitor latency, tool calls, and call outcomes.",
    ],
  },
  {
    id: "vdoit",
    company: "VDOIT Technologies",
    role: "IT Associate (Backend and AI/ML Developer)",
    period: "Jan 2025 — Feb 2026",
    location: "Gurgaon, Haryana",
    current: false,
    highlights: [
      "Worked on a production agentic RAG education chatbot with voice chat, using LangChain tools, Qdrant retrieval, and tenant-uploaded documents. Used across 20+ institutions.",
      "Built a Stripe subscription system on AWS Lambda with three pricing tiers, coupons, and webhook handling.",
      "Moved legacy services from Python/DynamoDB to Node.js/MongoDB, improving response times by up to 80%, and containerised a document-generation service on AWS ECR.",
      "Set up EC2 environments and GitHub Actions deployments, and standardised Lambda templates that reduced provisioning time by 95%.",
    ],
  },
];

export const leadership = {
  organization: "TEDxNIITUniversity",
  role: "Technical Core",
  period: "2022 — 2023",
  description:
    "Worked on the event website and a QR-based ticketing system for more than 100 attendees.",
};

export const skillGroups = [
  {
    label: "Generative AI & LLMs",
    items: [
      "LLM API integration",
      "Agentic AI",
      "Tool calling (MCP)",
      "Agentic RAG",
      "Prompt engineering",
      "LangChain",
      "LLM evaluation",
      "Voice agents",
      "STT/TTS (Azure, Sarvam AI, ElevenLabs)",
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      "Python",
      "Node.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Webhooks",
      "SQL",
      "Unit testing",
    ],
  },
  {
    label: "Databases & vector search",
    items: ["Qdrant", "MongoDB", "PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    label: "AWS & serverless",
    items: [
      "Lambda",
      "API Gateway",
      "EventBridge",
      "ECR",
      "EC2",
      "S3",
      "DynamoDB",
      "IAM",
      "Step Functions",
    ],
  },
  {
    label: "DevOps & tooling",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Azure"],
  },
];

export const education = {
  institution: "NIIT University",
  qualification: "B.Tech, Computer Science Engineering",
  period: "2021 — 2025",
  location: "Neemrana, Rajasthan",
};

export const certifications = [
  {
    title: "Python for Machine Learning & Data Science Masterclass",
    issuer: "Udemy",
    year: "2024",
    href: "https://www.udemy.com/certificate/UC-45c490c5-4957-49fa-b6b9-63427b247d26/",
  },
  {
    title: "React — The Complete Guide (incl. Next.js, Redux)",
    issuer: "Udemy",
    year: "2023",
    href: "https://www.udemy.com/certificate/UC-9fa9cbef-2bc6-4ebe-a766-93f275e3ac2d/",
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
    href: "https://www.udemy.com/certificate/UC-e822b285-2d67-4383-ab51-a7a1e9ff44e1/",
  },
];
