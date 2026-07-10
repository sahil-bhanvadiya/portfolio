import type { CaseStudy, myShowCasesTypes } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "precision-medicine-health-navigation-platform",
    title:
      "AI-Powered Precision Medicine & Health Navigation Platform",
    description:
      "Designed FHIR R4-compliant data pipelines and a multi-agent LangGraph system to translate complex clinical records into plain-language, personalized treatment navigation for 500K+ medical records.",
    type: "Healthcare & AI",
    role: "Senior Full-Stack & AI Engineer",
    techStack: [
      "Node.js",
      "React",
      "Next.js",
      "FHIR R4",
      "LangChain",
      "LangGraph",
      "LLM Integration",
      "Vector Databases",
      "Advanced Batch Processing",
      "AWS",
    ],
    domain: "Health-Tech, Precision Oncology, Generative AI",
    overview:
      "When patients receive a complex, life-altering medical diagnosis, they are typically met with dense, jargon-heavy health records, standard-of-care options built on population averages, and fragmented clinical data. Navigating this ecosystem manually is overwhelming for patients and care partners alike. The client needed an enterprise-grade, secure, and highly intelligent platform capable of ingesting unstructured, multi-source medical data, translating complex molecular biology into plain language, and cross-referencing patient-specific biomarkers against global clinical trials and research.",
    challengePoints: [
      "Ingesting unstructured, multi-source medical data including raw clinical notes and external EHR exports.",
      "Translating complex molecular biology and clinical records into plain language patients can act on.",
      "Simultaneously cross-referencing patient-specific biomarkers against vast libraries of global clinical trials and research to surface personalized treatment options.",
    ],
    solutionSections: [
      {
        title: "High-Concurrency FHIR R4 Data Pipelines",
        content:
          "To handle highly sensitive and structurally inconsistent healthcare data, I architected a robust data ingestion engine compliant with FHIR R4 standards. Implemented a high-concurrency batch processing architecture designed to handle large-scale record migrations (500K+ records) without dropping packets or stalling workflows. Built cleaning and enrichment pipelines that ingest messy health data, normalize it into standardized schemas, and prepare it for low-latency downstream querying.",
      },
      {
        title: "Multi-Agent AI Workflows via LangGraph",
        content:
          "Generic, single-prompt AI models frequently hallucinate or fail to capture nuanced relationships between diverse medical documents. Built a stateful, multi-agent conversational system leveraging LangGraph and LangChain with specialized autonomous agents—one parses unstructured clinical notes for precise biomarkers, another extracts medical history, and a third synthesizes patient inquiries. This separation guarantees highly accurate, contextual, and hallucination-free outputs.",
      },
      {
        title: "Automated Clinical Trial & Biomarker Matching",
        content:
          "Engineered high-performance, asynchronous background jobs that continuously query vector databases housing the latest medical literature and active global clinical trials. The system automatically cross-references a patient's extracted biomarkers and clinical history against trial criteria, dynamically surfacing highly specialized therapeutic options that standard care pathways might overlook.",
      },
    ],
    results: [
      "Successfully deployed a system capable of smoothly processing and indexing 500,000+ medical records via concurrent batch architecture.",
      "Delivered an intuitive dashboard allowing patients and care partners to generate tailored, plain-language question lists to advocate for themselves during doctor visits.",
      "Ensured all data pipelines, cloud infrastructure (AWS), and real-time state synchronizations adhered strictly to healthcare security mandates.",
    ],
    takeaways:
      "This project highlighted the immense potential of moving past traditional RAG patterns into fully agentic workflows. By combining strict healthcare data compliance (FHIR R4) with state-managed AI orchestration (LangGraph), we proved that complex, sensitive data can be turned into safe, empathetic, and life-changing user clarity.",
  },
  {
    slug: "ai-powered-triage-wellness-platform",
    title:
      "AI Triage & Intake System for a Precision Wellness Platform",
    description:
      "Architected a secure full-stack wellness platform with a LangGraph-powered AI triage agent, RAG-backed health coaching, and real-time Socket.io handoffs between patients and human coaches.",
    type: "Healthcare & AI",
    role: "Full-Stack Developer & Project Manager",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "LLM Integration",
      "RAG",
      "AWS",
      "Socket.io",
    ],
    client: "Confidential Health-Tech Startup",
    domain: "Precision Wellness & Preventative Care",
    overview:
      "The client operates in the preventative healthcare and precision wellness space, empowering individuals through biomarker testing, personalized supplement plans, and human health coaching. I was tasked with architecting and developing a secure, full-stack application focused on streamlining patient intake and engineering an advanced AI-driven triage and coaching system that bridges automated insights and human medical professionals.",
    challengePoints: [
      "Building a secure environment capable of handling sensitive user health metrics and lifestyle data.",
      "Moving beyond basic chatbot functionality to create a stateful, context-aware AI agent for complex, multi-step triage conversations.",
      "Enabling real-time, seamless communication handoffs between the AI system, patients, and human coaching staff.",
    ],
    solutionSections: [
      {
        title: "Intelligent Patient Triage via LangGraph",
        content:
          "Instead of relying on rigid decision trees, I engineered a conversational AI agent using LangChain and LangGraph. LangGraph was crucial for managing complex, non-linear state flows during patient intake, allowing the AI to autonomously perform initial triage, gather lifestyle and symptom context, and answer health questions using RAG backed by scientific data.",
      },
      {
        title: "Dynamic Routing & Real-Time Collaboration",
        content:
          "The AI agent was designed to understand the limits of its medical scope. Using intelligent routing logic, the system dynamically escalates patients to the correct human health coach when necessary. Socket.io powers real-time websocket connections, allowing coaches to instantly review AI-gathered context and jump into live sessions.",
      },
      {
        title: "Secure Full-Stack Architecture",
        content:
          "Developed the frontend using React and Next.js for patients and administrative coaching staff. The Node.js and PostgreSQL backend on AWS ensured all data—from questionnaires to aggregated biomarker results—was stored and managed efficiently as the user base scaled.",
      },
    ],
    results: [
      "The AI-powered triage agent drastically reduced manual administrative workload for human coaches by gathering preliminary health context and filtering routine inquiries.",
      "Patients received immediate, context-aware responses and guidance, significantly improving onboarding and engagement with preventative health plans.",
      "LangGraph state management and robust AWS infrastructure provided a highly scalable foundation for AI-assisted, human-centric wellness coaching.",
    ],
  },
  {
    slug: "enterprise-emr-telehealth-platform",
    title: "Connected Enterprise EMR & Telehealth Platform",
    description:
      "Built a unified cloud healthcare platform linking EMR and CHR modules with real-time vitals monitoring, Socket.io messaging, and embedded telehealth for collaborative remote care.",
    type: "Healthcare",
    role: "Full-Stack Developer",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Socket.io",
    ],
    client: "Confidential Digital Health Provider",
    domain: "Collaborative Care & Remote Patient Monitoring",
    overview:
      'The client\'s mission was to establish a "One Patient, One Record, One Care Plan" approach by bridging isolated medical systems. They needed an enterprise-grade platform linking primary care providers, community organizations, and patients through a unified cloud ecosystem integrating EMR with Collaborative Health Records (CHR), telehealth, and real-time remote monitoring.',
    challengePoints: [
      "Breaking down data silos with secure, compliant interoperability between distinct EMR and CHR modules.",
      "Engineering low-latency infrastructure for real-time data sharing, live vitals tracking, and secure messaging across the Circle of Care.",
      "Integrating video-based telemedicine directly into the provider workflow alongside real-time patient data.",
      "Adhering strictly to healthcare data privacy and security standards for all cloud-based storage and transmission.",
    ],
    solutionSections: [
      {
        title: "Seamless EMR & CHR Interoperability",
        content:
          "Architected the Node.js/PostgreSQL backend to securely consolidate multiple patient data streams using industry-standard formatting (FHIR) to unify diverse health systems. Updates in the EMR instantly synchronized with the CHR, providing a single source of truth for medication lists, allergies, and lab reports.",
      },
      {
        title: "Real-Time Data Sharing & Remote Monitoring",
        content:
          "Implemented Socket.io for persistent WebSocket connections, instantly transmitting continuous patient vitals (blood pressure, glucose, oxygen saturation) from point-of-care mobile apps to physician dashboards without page refreshes.",
      },
      {
        title: "Integrated Telehealth Infrastructure",
        content:
          "Engineered embedded e-visits allowing healthcare professionals to conduct secure video consultations while simultaneously viewing the patient's real-time collaborative health record and vitals within the same interface.",
      },
      {
        title: "Enterprise-Grade Security Compliance",
        content:
          "The entire AWS-hosted solution was hardened for PHI compliance with data encryption at rest and in transit, validated by rigorous privacy and risk assessments.",
      },
    ],
    results: [
      "Unifying EMR and CHR with automated real-time syncing significantly reduced time care teams spent chasing medical histories.",
      "Real-time messaging and unified digital care plans facilitated timely communication between inter-professional teams, closing gaps in the care continuum.",
      "Telehealth and real-time vitals monitoring enabled high-quality, proactive community-based care for non-acute patients.",
    ],
  },
  {
    slug: "event-management-brand-engagement",
    title:
      "Multi-Platform Event Management & Brand Engagement Ecosystem",
    description:
      "Led end-to-end development of a multi-platform event ecosystem with tiered ticketing, staff mobile redemption tools, and multi-tenant brand engagement across web, admin, and mobile apps.",
    type: "Event Management",
    role: "Project Manager & Lead Full-Stack Developer",
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
    client: "Confidential",
    domain: "Live Events, Ticketing & Brand Engagement",
    overview:
      "The client required a comprehensive digital ecosystem to extend the fan experience and help rising brands manage events and exclusive perks. I led end-to-end development of a multi-platform solution—consumer web platform, administrative dashboard, and mobile applications—designed to streamline tiered ticketing, staff operations, and brand engagement.",
    challengePoints: [
      "Engineering a zero-latency, reliable mobile application for on-site staff to handle high-speed ticket scanning and perk redemptions.",
      "Building a multi-tenant backend supporting various brands with custom events, distinct ticketing tiers, and exclusive engagement perks.",
      "Ensuring the entire ecosystem remained perfectly synchronized across Web, Admin Panel, and Mobile Apps in real time.",
    ],
    solutionSections: [
      {
        title: "Multi-Platform Ecosystem Development",
        content:
          "Directed a unified architectural strategy powering three interconnected platforms. The consumer platform used Next.js for fast, SEO-friendly ticket pages. The React admin panel gave brands granular control over event creation, tiered ticketing logic, and real-time analytics.",
      },
      {
        title: "High-Speed Staff Redemption Application",
        content:
          "Engineered a dedicated staff-facing mobile app for rapid check-ins and perk distribution. Localized caching and optimized MongoDB queries enabled instant ticket validation and brand-specific redemptions, even in congested venue network environments.",
      },
      {
        title: "Brand Engagement & Tiered Access",
        content:
          "Developed complex relational logic in the Node.js backend for multi-brand architectures, supporting concurrent events and tiered access passes (VIP, General Admission, Backstage) with exclusive brand perks tied to specific ticket tiers via digital passes.",
      },
    ],
    results: [
      "The staff redemption tool drastically reduced check-in times and eliminated gate bottlenecks.",
      "Digital perk redemption gave brands a measurable, frictionless way to engage fans beyond the base ticket price.",
      "Flexible MongoDB schema and scalable AWS infrastructure empowered rapid onboarding of new brands and concurrent events.",
    ],
  },
  {
    slug: "crypto-mining-analytics-dashboard",
    title:
      "Real-Time Cryptocurrency Mining & Analytics Dashboard",
    description:
      "Built a high-frequency mining analytics dashboard with a Node.js data aggregation engine and optimized React/Redux frontend for zero-lag profitability tracking across live market feeds.",
    type: "Fintech & Analytics",
    role: "Full-Stack Developer",
    techStack: [
      "React",
      "Redux",
      "Next.js",
      "Node.js",
      "RESTful APIs",
      "Third-Party Data Feeds",
    ],
    client: "Confidential",
    domain: "FinTech, Cryptocurrency & Hardware Analytics",
    overview:
      "The client required a centralized platform empowering cryptocurrency miners with real-time insights into hardware performance, energy consumption, and market volatility. I developed a high-frequency analytics dashboard aggregating live data from multiple external sources for ASIC miner profitability optimization.",
    challengePoints: [
      "Aggregating disparate data streams from multiple third-party APIs into a single, unified backend.",
      "Preventing UI lag or browser crashing when handling thousands of rapid, low-latency state updates per minute.",
      "Cross-referencing live coin metrics against specific hardware configurations to output real-time profitability projections.",
    ],
    solutionSections: [
      {
        title: "High-Frequency Data Aggregation Engine",
        content:
          "Developed a scalable Node.js backend to consume, sanitize, and standardize asynchronous data feeds from various external REST APIs. This layer calculated complex profitability formulas (network difficulty, coin prices, kW/h power costs) before pushing optimized payloads to the client.",
      },
      {
        title: "Optimized Frontend Architecture & State Management",
        content:
          "Built the dashboard with Next.js for rapid initial loads and Redux for strict state management, ensuring deeply nested components received updates efficiently without unnecessary re-renders across the entire DOM tree.",
      },
      {
        title: "Low-Latency UI/UX Implementation",
        content:
          "Employed component memoization, virtualized lists for large data tables, and debouncing for user inputs to guarantee split-second access to critical investment data without UI stutter or lag.",
      },
    ],
    results: [
      "Delivered a one-stop resource allowing miners to instantly compare ASIC hardware performance against live market conditions.",
      "The optimized React/Redux architecture kept the dashboard responsive and stable during extreme market volatility.",
      "The flexible Node.js aggregation layer provided a future-proof foundation for additional data feeds and hardware metrics.",
    ],
  },
  {
    slug: "international-credential-evaluation",
    title:
      "Enterprise Suite for International Credential Evaluation",
    description:
      "Led architecture of three interconnected EdTech SaaS products—a global evaluation database, secure document sharing portal, and algorithmic GPA conversion engine serving 200+ countries.",
    type: "EdTech",
    role: "Lead Full-Stack Architect",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS"],
    client: "Confidential",
    domain: "EdTech & Credential Evaluation Services",
    overview:
      "The client, a long-standing authority in international education evaluation, needed to modernize their digital infrastructure for universities, licensing boards, and immigrant applicants. I led end-to-end architecture, development, deployment, and management of three interconnected enterprise products: a global educational database, a secure document sharing platform, and an algorithmic grade conversion tool.",
    challengePoints: [
      "Structuring and indexing massive amounts of localized educational data from hundreds of countries into a highly searchable format.",
      "Engineering a complex logic engine to accurately map disparate foreign grading scales and languages to standardized U.S. metrics.",
      "Building an impenetrable, compliant delivery system to prevent document fraud when transmitting official evaluation reports.",
    ],
    solutionSections: [
      {
        title: "Global Evaluation Database (The Navigator)",
        content:
          "Architected a comprehensive, searchable intelligence database covering education system structures, credential information, and grading scales from over 200 countries. Engineered a robust multi-tiered access control system managing permissions for Guest users, Free daily accounts, and multi-user Enterprise Annual Plans.",
      },
      {
        title: "Secure Document Sharing Portal",
        content:
          "Designed and deployed a highly secure digital vault for universities and licensing boards. Strict authentication and routing logic ensures applicants receive watermarked personal copies while unaltered, official reports are accessible exclusively via secure institutional login—eliminating manual verification and document fraud risk.",
      },
      {
        title: "International GPA Conversion Engine",
        content:
          "Engineered a dynamic computational tool bridging international and U.S. academic standards. The algorithmic backend integrates with grading scales from the global database to estimate U.S.-style GPAs, supporting foreign-language grade interpretation and country-specific conversion logic.",
      },
    ],
    results: [
      "Successfully transitioned the client from legacy manual processes into a modern SaaS ecosystem for evaluators and institutional partners.",
      "The secure document sharing portal drastically reduced processing times for university admissions and professional licensing boards.",
      "All three products share a unified, scalable foundation handling complex queries and secure document transmissions under heavy traffic.",
    ],
  },
  {
    slug: "construction-market-intelligence-ai",
    title:
      "AI-Powered Construction Market Intelligence & Sales Automation",
    description:
      "Engineered an AI-powered construction intelligence platform processing 12,500+ daily market updates across 180K+ projects with LangGraph agent orchestration and integrated sales automation.",
    type: "Enterprise SaaS & AI",
    role: "Senior Full-Stack & AI Engineer",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "LLM Integration",
      "AWS",
    ],
    client: "Confidential",
    domain: "Construction Market Intelligence",
    overview:
      "The client is a leading provider of construction market intelligence across the Middle East, Africa, and South Asia. They required a robust, AI-powered platform to track hundreds of thousands of live construction projects and automate the sales process for suppliers, contractors, and developers. I contributed to architecting the core intelligence layer and sales automation ecosystem.",
    challengePoints: [
      "Ingesting and verifying tens of thousands of daily updates across 180,000+ active projects without overwhelming the system.",
      "Engineering an AI orchestration layer that enriches data, prioritizes sales leads, and provides conversational intelligence regarding companies and projects.",
      "Building a real-time dashboard integrating project data into customized sales workflows including quotes, pipeline forecasting, and team coordination.",
    ],
    solutionSections: [
      {
        title: "Continuous Intelligence & Data Pipelines",
        content:
          "Architected a highly scalable Node.js and AWS data ingestion engine processing over 12,500 daily market updates. The system links projects, companies, and contacts into a unified intelligence graph with high-frequency updates instantly available across the platform.",
      },
      {
        title: "Agentic AI Orchestration & Market Analytics",
        content:
          "Utilized LangChain and LangGraph to develop a sophisticated conversational AI agent for construction intelligence. The multi-agent system continuously monitors market signals, auto-enriches new project data, and allows users to intuitively query complex stakeholder mappings and market forecasts.",
      },
      {
        title: "Integrated Sales Automation Ecosystem",
        content:
          "Developed a high-performance React and Next.js dashboard eliminating data entry bottlenecks by pre-integrating market intelligence into CRM workflows. Features included real-time predictive lead scoring, automated interaction reporting, and collaborative document management for complex project sales.",
      },
    ],
    results: [
      "The real-time intelligence layer enabled clients to identify critical project movements and bid opportunities months earlier than traditional methods.",
      "Embedding verified project data into the sales pipeline dramatically reduced manual data entry and improved cross-team pursuit coordination.",
      "Agentic workflows provided measurable operational advantages, reducing opportunity leakage and empowering executive teams with data-driven pipeline forecasts.",
    ],
  },
  {
    slug: "digital-real-estate-platform",
    title: "High-Performance Digital Real Estate Platform",
    description:
      "Developed a high-traffic real estate platform for a major regional brokerage with 15-minute listing sync, advanced property search, and a unified franchise ecosystem serving 1,500+ agents.",
    type: "Real Estate",
    role: "Full-Stack Developer",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    client: "Confidential",
    domain: "Real Estate Brokerage",
    overview:
      "The client is one of the largest independent real estate brokerages in their region, with over 1,500 agents and a long-standing market presence. They needed to modernize their digital presence to maintain their position as a leading local brokerage website attracting millions of annual visitors. I played a key role developing a high-performance platform for property searching, user engagement, and franchise agent support.",
    challengePoints: [
      "Aggregating and displaying regional property listings requiring updates every 15 minutes from local real estate boards.",
      "Providing a seamless search experience across a massive database using diverse filters including neighborhoods, school districts, and community features.",
      "Developing an integrated ecosystem serving homebuyers and supporting the technological needs of 35+ affiliate franchise offices.",
      "Optimizing the platform for SEO to maintain high visibility and drive consistent organic traffic.",
    ],
    solutionSections: [
      {
        title: "Real-Time Data Aggregation & Synchronization",
        content:
          "Engineered a robust backend system ingesting and normalizing massive data feeds from local real estate boards. The entire database of regional listings was synchronized every 15 minutes, guaranteeing users access to the most current market data.",
      },
      {
        title: "High-Performance Search & User Portals",
        content:
          "Developed a responsive Next.js frontend optimized for complex search queries with advanced filtering including GPS-based nearby searches, school districts, and square footage. Built a personalized buyer portal for saving favorites, personal notes, and automated daily email alerts for price changes and new listings.",
      },
      {
        title: "Unified Franchise Ecosystem",
        content:
          "Contributed to a unified platform architecture providing powerful SEO benefits across the network. The system supports single sign-on access, integrating a CRM product and customized virtual tours, reducing the technical burden on individual franchise partners.",
      },
    ],
    results: [
      "The optimized platform solidified the client's position as a leading local real estate website, handling millions of annual visitors without performance degradation.",
      "Intuitive search and personalized buyer dashboards significantly improved user engagement throughout the home-buying journey.",
      "The unified infrastructure provided 1,500+ agents with reliable, cutting-edge tools for lead generation and property marketing across the franchise network.",
    ],
  },
  {
    slug: "local-deals-marketplace-platform",
    title:
      "Building a Community-Centric Local Deals & Business Promotion Platform",
    description:
      "Built a dual-sided marketplace with frictionless mobile coupon browsing for shoppers and a streamlined vendor SaaS dashboard for local businesses to publish promotions without sign-up barriers.",
    type: "E-commerce & Local Advertising",
    role: "Full-Stack Developer",
    techStack: ["React Native", "Next.js", "Node.js", "MongoDB", "AWS"],
    client: "Confidential",
    domain: "E-commerce & Local Advertising",
    overview:
      "The client set out to bridge the gap between budget-conscious consumers and local businesses struggling with high advertising costs. The platform features a mobile application for shoppers to find local coupons without printing, and a vendor dashboard for businesses to list services and promotions for free.",
    challengePoints: [
      "Enabling shoppers to browse and claim mobile coupons effortlessly without creating user accounts or printing physical vouchers.",
      "Providing local businesses—a often non-technical audience—with a streamlined process to register, create web pages, and post live promotions in minutes.",
      "Supporting businesses of all sizes from local salons to national retail brands with flexible geographic and category filtering.",
    ],
    solutionSections: [
      {
        title: "Shopper-Centric Mobile Application",
        content:
          "Developed the consumer-facing mobile experience prioritizing speed and accessibility. Implemented a no sign-up required flow allowing shoppers to instantly browse local deals by category. The architecture supported digital coupon redemption, eliminating physical printing and streamlining in-store checkout.",
      },
      {
        title: "Streamlined Vendor Dashboard (SaaS)",
        content:
          "Engineered a secure, web-based vendor portal with a simplified onboarding flow enabling business owners to sign up, input details, and publish their first deal within minutes. Backend logic handles dynamic offer updates for real-time promotion adjustments to drive immediate foot traffic.",
      },
      {
        title: "Dynamic Data Architecture",
        content:
          "Structured the database to efficiently categorize and serve location-based offers, rapidly querying and displaying the most relevant nearby deals whether users search for auto services, boutiques, or online businesses.",
      },
    ],
    results: [
      "Launched a platform providing 100% free advertising for small businesses with an accessible digital storefront.",
      "The frictionless mobile coupon system connected shoppers with real local discounts, helping businesses drive repeat traffic and loyalty.",
      "Eliminating shopper sign-ups and simplifying vendor onboarding removed traditional barriers, accelerating adoption on both sides of the marketplace.",
    ],
  },
  {
    slug: "insurtech-commercial-quoting-platform",
    title:
      "B2B InsurTech Platform for Commercial Quoting & Broker Automation",
    description:
      "Engineered a B2B InsurTech SaaS platform replacing manual PDF workflows with dynamic smart applications, real-time multi-carrier quote aggregation, and automated coverage comparison for insurance brokers.",
    type: "InsurTech",
    role: "Senior Full-Stack Engineer",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "AWS",
    ],
    client: "Confidential",
    domain: "Commercial Insurance",
    overview:
      "The client is a pioneering InsurTech company modernizing the commercial insurance industry. They required a comprehensive, multi-market quoting and coverage comparison platform for insurance brokerages, replacing manual PDF-based workflows with dynamic smart applications, real-time quote aggregation, and automated coverage analysis.",
    challengePoints: [
      "Brokers struggled to gather exact industry-specific questions for varying business types, leading to incomplete submissions and increased E&O exposure.",
      "Integrating with multiple disparate insurance carrier APIs to fetch and standardize real-time quotes without system timeouts.",
      "Brokers spent hours manually cross-referencing complex insurance policies to find the best value for clients.",
    ],
    solutionSections: [
      {
        title: "Dynamic Smart Application Engine",
        content:
          "Engineered a stateful React and Next.js frontend that dynamically alters its question set based on the industry vertical being quoted. Implemented a secure client hand-off feature allowing brokers to generate encrypted links so insured business owners can fill out complex data directly, synchronizing back into the broker dashboard.",
      },
      {
        title: "Real-Time Quote Aggregation & API Integrations",
        content:
          "Developed a robust Node.js backend routing standardized smart application data to a panel of participating insurers simultaneously. The system aggregates diverse responses into a normalized schema, displaying comparative quotes in real time.",
      },
      {
        title: "Automated Cover Matching & Presentation Generator",
        content:
          "Engineered backend scoring logic that instantly analyzes multiple insurer quotes against client needs, scoring them on value and coverage depth. Built an automated presentation engine translating complex data sets into clean, customizable digital proposals brokers can present in minutes.",
      },
    ],
    results: [
      "Automating data collection and connecting directly with insurer APIs reduced average quoting time from several days to mere minutes.",
      "The dynamic question engine and automated coverage matching minimized professional liability risks for brokerages.",
      "Built-in guidance and intelligent workflows allowed novice brokers to navigate complex commercial risks with experienced underwriter confidence.",
    ],
  },
];

export const myShowCases: myShowCasesTypes[] = caseStudies.map(
  (study, index) => ({
    id: index + 1,
    slug: study.slug,
    title: study.title,
    description: study.description,
    type: study.type,
    role: study.role,
    techStack: study.techStack,
  }),
);
