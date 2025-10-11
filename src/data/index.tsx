import { Mail, User, Zap } from "lucide-react";
import {
  angular,
  asanaIcon,
  client_1,
  client_2,
  client_3,
  client_4,
  css,
  discord,
  dribble,
  dribbleIcon,
  facebook,
  figmaIcon,
  githubIcon,
  graphicDesignIcon,
  html,
  instagramIcon,
  js,
  linkedInIcon,
  mui,
  nextjs,
  notionIcon,
  pinterest,
  project_1,
  project_2,
  project_3,
  project_4,
  react,
  redux,
  seoOptIcon,
  shadcn,
  slackIcon,
  snapchat,
  spotify,
  tailwind,
  ts,
  webDesignIcon,
  webDevIcon,
  XLogo,
} from "@/app/assets/assets";
import type {
  counterListsType,
  FAQ,
  FollowerData,
  myExperienceTypes,
  myServicesPlansTypes,
  myServicesTypes,
  myShowCasesTypes,
  myStackTypes,
  pagesListsType,
  socialBrandsTypes,
  socialListsTypes,
  testimonialsTypes,
} from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: "Instagram",
    icon: instagramIcon,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    title: "Github",
    icon: githubIcon,
    link: "https://www.github.com/psparwez",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: linkedInIcon,
    link: "https://www.twitter.com/psparwez",
  },
];

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com",
  },
  {
    id: 2,
    name: "Dribbble",
    icon: dribble,
    link: "https://dribbble.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "SnapChat",
    icon: snapchat,
    link: "https://snapchat.com",
  },
  {
    id: 6,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
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
    value: 50,
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
    year: "2022 - Present",
    title: "Senior Software Engineer",
    company: "Seaflux",
    description:
      "Leading full-stack development projects, mentoring junior developers, and collaborating with cross-functional teams to deliver high-quality software solutions.",
    link: "seaflux.tech",
  },
  {
    id: 2,
    year: "2021 - 2021",
    title: "Web Developer Intern",
    company: "CreArt® Solutions Pvt Ltd",
    description:
      "Assisted in developing and maintaining company websites, collaborated with the design team to implement responsive designs, and optimized web performance for better user experience.",
    link: "creartsolutions.com",
  },
  {
    id: 3,
    year: "2021 - 2021",
    title: "Summer Intern",
    company: "VNurture",
    description:
      "Contributed to front-end development tasks, participated in code reviews, and gained hands-on experience in web development technologies and best practices.",
    link: "vnurture.in",
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
      { id: 1, title: "Node.js", logo: figmaIcon },
      { id: 2, title: "Express.js", logo: figmaIcon },
      { id: 3, title: "Socket.io", logo: figmaIcon },
      { id: 4, title: "REST API", logo: figmaIcon },
      { id: 5, title: "Redis", logo: figmaIcon },
      { id: 6, title: "BullMQ", logo: figmaIcon },
      { id: 7, title: "RabbitMQ", logo: figmaIcon },
      { id: 8, title: "GRPC", logo: figmaIcon },
      { id: 9, title: "PostgreSQL", logo: figmaIcon },
      { id: 10, title: "MongoDB", logo: figmaIcon },
      { id: 11, title: "Airtable", logo: figmaIcon },
    ],
  },
  {
    key: "DevOps",
    value: [
      { id: 24, title: "Docker", logo: figmaIcon },
      { id: 25, title: "NginX", logo: figmaIcon },
      { id: 26, title: "PM2", logo: figmaIcon },
      { id: 27, title: "AWS", logo: figmaIcon },
    ],
  },
  {
    key: "Tools",
    value: [
      { id: 28, title: "Vite", logo: figmaIcon },
      { id: 29, title: "ESLint", logo: figmaIcon },
      { id: 30, title: "Prettier", logo: figmaIcon },
      { id: 31, title: "Biome", logo: figmaIcon },
      { id: 32, title: "JSON", logo: figmaIcon },
    ],
  },
  {
    key: "Productivity",
    value: [
      { id: 33, title: "Slack", logo: figmaIcon },
      { id: 34, title: "Jira", logo: figmaIcon },
      { id: 35, title: "Trello", logo: figmaIcon },
      { id: 36, title: "Asana", logo: figmaIcon },
      { id: 37, title: "ClickUp", logo: figmaIcon },
      { id: 38, title: "Confluence", logo: figmaIcon },
    ],
  },
  {
    key: "Ai & Automation",
    value: [
      { id: 39, title: "MCP", logo: figmaIcon },
      { id: 40, title: "Claude", logo: figmaIcon },
      { id: 41, title: "ChatGPT", logo: figmaIcon },
      { id: 42, title: "Copilot", logo: figmaIcon },
      { id: 43, title: "ElevenLab", logo: figmaIcon },
      { id: 44, title: "Zapier", logo: figmaIcon },
    ],
  },
  {
    key: "Version Control",
    value: [
      { id: 45, title: "GitHub", logo: figmaIcon },
      { id: 46, title: "GitLab", logo: figmaIcon },
      { id: 47, title: "Bitbucket", logo: figmaIcon },
    ],
  },
  {
    key: "Payment Gateway",
    value: [
      { id: 48, title: "Stripe", logo: figmaIcon },
      { id: 49, title: "PayPal", logo: figmaIcon },
      { id: 50, title: "Razorpay", logo: figmaIcon },
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

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: "Devcraft",
    description:
      "Showcasing expertise, passion, and innovation in the realm of development.",
    link: "vortex.com",
    type: "Portfolio",
    theme: "Dark",
    pages: 4,
    image: project_1,
  },
  {
    id: 2,
    title: "Zenith Gym",
    description:
      "Empowering fitness enthusiasts with an immersive online experience.",
    link: "zenith.com",
    type: "Fitness",
    theme: "Light",
    pages: 5,
    image: project_2,
  },
  {
    id: 3,
    title: "Novus Agency",
    description:
      "Transforming ideas into digital realities with creativity and expertise.",
    link: "novus.com",
    type: "Business",
    theme: "Dark",
    pages: 6,
    image: project_3,
  },
  {
    id: 4,
    title: "Apex Agency",
    description:
      "Setting the pinnacle of digital excellence with cutting-edge solutions and creativity.",
    link: "apex.com",
    type: "Business",
    theme: "Light",
    pages: 6,
    image: project_4,
  },
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    description:
      "I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...",
    location: "New York City, USA.",
    avatar: client_1,
  },
  {
    id: 2,
    name: "John Anderson",
    description:
      "Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.",
    location: "Sydney, Australia.",
    avatar: client_2,
  },
  {
    id: 3,
    name: "Mark Davis",
    description:
      "Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.",
    location: "London, UK.",
    avatar: client_3,
  },
  {
    id: 4,
    name: "Laura Adams",
    description:
      "Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.",
    location: "Madrid, Spain.",
    avatar: client_4,
  },
];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: "Web Design",
    price: "$50",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    completedWorks: "25+",
    experience: "5+",
    totalHoursWorked: "500 hours",
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: "Web Dev",
    price: "$60",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    completedWorks: "30+",
    experience: "6+",
    totalHoursWorked: "420 hours",
    icon: webDevIcon,
  },
  {
    id: 3,
    service: "Graphic Design",
    price: "$40",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    completedWorks: "40+",
    experience: "8+",
    totalHoursWorked: "328 hours",
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: "SEO",
    price: "$70",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    completedWorks: "20+",
    experience: "4+",
    totalHoursWorked: "223 hours",
    icon: seoOptIcon,
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

export const followerData: FollowerData[] = [
  {
    platform: "twitter",
    followers: "12.6K",
    url: "https://twitter.com/",
    icon: XLogo,
  },
  {
    platform: "Instagram",
    followers: "8.3K",
    url: "https://www.instagram.com/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "2.5K",
    url: "https://www.linkedin.com/",
    icon: linkedInIcon,
  },
  {
    platform: "Dribbble",
    followers: "3.2K",
    url: "https://dribbble.com/",
    icon: dribbleIcon,
  },
];
