import {
  airtable,
  angular,
  asanaIcon,
  aws,
  bitbucket,
  bullmq,
  chrome,
  claude,
  clickup,
  confluence,
  css,
  cursor,
  docker,
  expressjs,
  figmaIcon,
  git,
  github,
  githubIcon,
  gitlab,
  graphicDesignIcon,
  grpc,
  html,
  instagramIcon,
  jira,
  js,
  langchain,
  langgraph,
  linkedInIcon,
  linux,
  macos,
  mcp,
  mongodb,
  mui,
  nextjs,
  nginx,
  nodejs,
  notionIcon,
  openai,
  pinecone,
  pm2,
  postgresql,
  postico,
  postman,
  rabbitmq,
  rag,
  razorpay,
  react,
  redis,
  redux,
  rest,
  seoOptIcon,
  shadcn,
  slackIcon,
  socket,
  stripe,
  tailwind,
  trello,
  ts,
  vercel,
  vscode,
  webDesignIcon,
  webDevIcon,
} from "@/app/assets/assets";
import type {
  counterListsType,
  FAQ,
  linkedInPostTypes,
  myExperienceTypes,
  myServicesTypes,
  myStackTypes,
  socialListsTypes,
  testimonialsTypes,
} from "@/types";

export const personalQualities = [
  {
    id: 1,
    name: "Curious",
    description:
      "Always eager to learn new technologies and explore innovative solutions",
    icon: "🤔",
  },
  {
    id: 2,
    name: "Enthusiastic",
    description:
      "Passionate about coding and building amazing digital experiences",
    icon: "🚀",
  },
  {
    id: 3,
    name: "Problem Solver",
    description:
      "Love tackling complex challenges and finding elegant solutions",
    icon: "🧩",
  },
  {
    id: 5,
    name: "Detail-Oriented",
    description: "Committed to writing clean, maintainable, and efficient code",
    icon: "🔍",
  },
  {
    id: 6,
    name: "Collaborative",
    description: "Enjoy working with teams to create exceptional products",
    icon: "🤝",
  },
  {
    id: 7,
    name: "Adaptable",
    description:
      "Quick to learn and adapt to new technologies and methodologies",
    icon: "🌟",
  },
  {
    id: 8,
    name: "Goal-Driven",
    description: "Focused on delivering results and exceeding expectations",
    icon: "🎯",
  },
  {
    id: 9,
    name: "Innovative",
    description: "Always seeking new approaches and cutting-edge solutions",
    icon: "💡",
  },
  {
    id: 10,
    name: "Persistent",
    description: "Never giving up until the perfect solution is achieved",
    icon: "💪",
  },
  {
    id: 11,
    name: "Analytical",
    description: "Breaking down complex problems into manageable components",
    icon: "📊",
  },
  {
    id: 12,
    name: "Reliable",
    description: "Consistent delivery of high-quality work on time",
    icon: "⏰",
  },
  {
    id: 13,
    name: "Forward-Thinking",
    description: "Anticipating future trends and building scalable solutions",
    icon: "🔮",
  },
  {
    id: 14,
    name: "User-Focused",
    description: "Prioritizing user experience in every design decision",
    icon: "👥",
  },
  {
    id: 15,
    name: "Perfectionist",
    description: "Striving for excellence in every line of code",
    icon: "✨",
  },
  {
    id: 16,
    name: "Tech Enthusiast",
    description: "Passionate about emerging technologies and their potential",
    icon: "⚡",
  },
  {
    id: 4,
    name: "Creative",
    description: "Bringing innovative ideas to life through code and design",
    icon: "🎨",
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: "LinkedIn",
    icon: linkedInIcon,
    link: "https://www.linkedin.com/in/sahil-bhanvadiya/",
  },
  {
    id: 2,
    title: "Github",
    icon: githubIcon,
    link: "https://github.com/sahil-bhanvadiya",
  },
  {
    id: 3,
    title: "Instagram",
    icon: instagramIcon,
    link: "https://www.instagram.com/sahil_bhanvadiya/",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Year of Experience",
    value: 4,
    symbol: "+",
  },
  {
    id: 2,
    title: "Projects Worked",
    value: 25,
    symbol: "+",
  },
  {
    id: 3,
    title: "OS Contributions",
    value: 5,
    symbol: "+",
  },
  {
    id: 4,
    title: "Client Satisfaction",
    value: 100,
    symbol: "%",
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "Feb 2026 - Present",
    title: "Independent Contractor & Freelancer",
    company: "Self-Employed",
    description:
      "Delivering full-stack development, AI integration, and cloud solutions for clients worldwide. Building scalable web applications, healthcare platforms, and intelligent systems on a project basis.",
    link: "https://www.linkedin.com/in/sahil-bhanvadiya/",
    linkText: "linkedin.com/in/sahil-bhanvadiya",
  },
  {
    id: 2,
    year: "2022 - Feb 2026",
    title: "Senior Software Engineer",
    company: "Seaflux",
    description:
      "Led full-stack development projects, mentored junior developers, and collaborated with cross-functional teams to deliver high-quality software solutions.",
    link: "https://www.seaflux.tech/",
    linkText: "seaflux.tech",
  },
  {
    id: 3,
    year: "2021 - 2021",
    title: "Web Developer Intern",
    company: "CreArt",
    description:
      "Assisted in developing and maintaining company websites, collaborated with the design team to implement responsive designs, and optimized web performance for better user experience.",
    link: "https://www.creartsolutions.com/",
    linkText: "creartsolutions.com",
  },
  {
    id: 4,
    year: "2021 - 2021",
    title: "Summer Intern",
    company: "VNurture",
    description:
      "Contributed to front-end development tasks, participated in code reviews, and gained hands-on experience in web development technologies and best practices.",
    link: "https://vnurture.in/",
    linkText: "vnurture.in",
  },
];

export const myStack: myStackTypes[] = [
  {
    key: "Front-End",
    value: [
      { id: 1, title: "JavaScript", logo: js },
      { id: 2, title: "TypeScript", logo: ts },
      { id: 3, title: "React", logo: react },
      { id: 4, title: "Next.js", logo: nextjs },
      { id: 5, title: "Redux", logo: redux },
      { id: 6, title: "Angular", logo: angular },
      { id: 7, title: "TailwindCSS", logo: tailwind },
      { id: 8, title: "MUI", logo: mui },
      { id: 9, title: "ShadCN", logo: shadcn },
      { id: 10, title: "HTML", logo: html },
      { id: 11, title: "CSS", logo: css },
    ],
  },
  {
    key: "Back-End",
    value: [
      { id: 1, title: "Node.js", logo: nodejs },
      { id: 2, title: "Express.js", logo: expressjs },
      { id: 3, title: "Socket.io", logo: socket },
      { id: 4, title: "REST API", logo: rest },
      { id: 5, title: "Redis", logo: redis },
      { id: 6, title: "BullMQ", logo: bullmq },
      { id: 7, title: "RabbitMQ", logo: rabbitmq },
      { id: 8, title: "GRPC", logo: grpc },
      { id: 9, title: "PostgreSQL", logo: postgresql },
      { id: 10, title: "MongoDB", logo: mongodb },
      { id: 11, title: "Airtable", logo: airtable },
    ],
  },
  {
    key: "DevOps",
    value: [
      { id: 27, title: "AWS", logo: aws },
      { id: 28, title: "Vercel", logo: vercel },
      { id: 24, title: "Docker", logo: docker },
      { id: 25, title: "NginX", logo: nginx },
      { id: 26, title: "PM2", logo: pm2 },
    ],
  },
  {
    key: "Artificial Intelligence",
    value: [
      { id: 40, title: "Claude", logo: claude },
      { id: 39, title: "MCP", logo: mcp },
      { id: 41, title: "OpenAI", logo: openai },
      { id: 44, title: "Cursor", logo: cursor },
      { id: 45, title: "LangChain", logo: langchain },
      { id: 46, title: "LangGraph", logo: langgraph },
      { id: 47, title: "RAG", logo: rag },
      { id: 48, title: "Pinecone", logo: pinecone },
    ],
  },
  {
    key: "Payment Gateway",
    value: [
      { id: 48, title: "Stripe", logo: stripe },
      { id: 50, title: "Razorpay", logo: razorpay },
    ],
  },
  {
    key: "Version Control",
    value: [
      { id: 44, title: "Git", logo: git },
      { id: 45, title: "GitHub", logo: github },
      { id: 46, title: "GitLab", logo: gitlab },
      { id: 47, title: "Bitbucket", logo: bitbucket },
    ],
  },
  {
    key: "Operating System",
    value: [
      { id: 32, title: "Linux", logo: linux },
      { id: 33, title: "MacOS", logo: macos },
    ],
  },
  {
    key: "Productivity",
    value: [
      { id: 33, title: "Slack", logo: slackIcon },
      { id: 34, title: "Jira", logo: jira },
      { id: 35, title: "Trello", logo: trello },
      { id: 36, title: "Asana", logo: asanaIcon },
      { id: 37, title: "ClickUp", logo: clickup },
      { id: 38, title: "Confluence", logo: confluence },
      { id: 44, title: "Notion", logo: notionIcon },
    ],
  },
  {
    key: "Tools",
    value: [
      { id: 51, title: "VSCode", logo: vscode },
      { id: 52, title: "Chrome", logo: chrome },
      { id: 53, title: "Postman", logo: postman },
      { id: 54, title: "Postico", logo: postico },
      { id: 55, title: "Figma", logo: figmaIcon },
    ],
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    icon: webDesignIcon,
    link: "/services",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    icon: webDevIcon,
    link: "/services",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    icon: graphicDesignIcon,
    link: "/services",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    icon: seoOptIcon,
    link: "/services",
  },
];

export { myShowCases } from "./case-studies";

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: "Sibtain J.",
    description:
      "Impressive work by Sahil in building our MVP. He combined solid technical skills with a clear understanding of our business needs, ensuring a smooth and fast development process from concept to delivery.",
    location: "San Francisco, USA.",
  },
  {
    id: 2,
    name: "Divyam A.",
    description:
      "Excellent work! Sahil built my AI chatbot efficiently and delivered beyond expectations. Highly recommend for any AI or web development projects. The project was completed on time and within budget.",
    location: "Ahmedabad, India.",
  },
  {
    id: 3,
    name: "Happy P.",
    description:
      "Excellent DevOps work by Sahil. He configured AWS ECS deployments and implemented robust CI/CD pipelines for three separate repositories, ensuring smooth and automated deployments. Highly efficient and well-documented setup.",
    location: "Brampton, Canada.",
  },
  {
    id: 4,
    name: "Toru T.",
    description:
      "Sahil is exceptional at transforming vision into reality. He successfully converted our Figma designs into fully functional Next.js code. He's highly skilled, responsive, and cooperative, making him the ideal support for any project.",
    location: "Tokyo, Japan.",
  },
  {
    id: 5,
    name: "Sid S.",
    description:
      "Sahil did an outstanding job developing the backend for our social media platform. He built a robust architecture, implemented secure payment integration, and ensured the system performs smoothly under load. Excellent work!",
    location: "Dubai, UAE.",
  },
  {
    id: 6,
    name: "Saurabh B.",
    description:
      "Sahil is a great developer. He has a great attitude. He commits and sticks to the timeline. He is co-operative and goes the extra mile to make the product better. His role was very crucial in taking my product to the next level. I highly recommend anyone to work with him.",
    location: "Mumbai, India.",
  },
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer:
      "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer:
      "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you optimize my website?",
    answer:
      "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
  },
];

export const linkedInPosts: linkedInPostTypes[] = [
  {
    id: 1,
    embedId: "urn:li:share:7419451152368291844",
  },
  {
    id: 2,
    embedId: "urn:li:ugcPost:7419457465936732161",
  },
  {
    id: 3,
    embedId: "urn:li:share:7413133781160677376",
  },
  {
    id: 4,
    embedId: "urn:li:share:7408925884423991297",
  },
];
