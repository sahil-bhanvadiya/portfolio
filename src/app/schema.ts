export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sahil Bhanvadiya",
  url: "https://sahilbhanvadiya.com",
  image: "https://sahilbhanvadiya.com/profile.png",
  sameAs: [
    "https://github.com/sahil-bhanvadiya",
    "https://www.linkedin.com/in/sahil-bhanvadiya",
    "https://x.com/sahil_bhanvadia",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Independent Contractor",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, AI Integration, and Cloud technologies. Building scalable web applications with extensive experience. Expert in modern web technologies, artificial intelligence, and cloud infrastructure.",
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "TailwindCSS",
    "Web Development",
    "Full Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Integration",
    "Cloud Computing",
    "AWS",
    "Cloud Architecture",
    "DevOps",
    "Docker",
    "AI/ML Development",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sahil Bhanvadiya Portfolio",
  url: "https://sahilbhanvadiya.com",
  description:
    "Portfolio website of Sahil Bhanvadiya, a full stack developer, problem solver, and tech enthusiast.",
  author: {
    "@type": "Person",
    name: "Sahil Bhanvadiya",
  },
  inLanguage: "en-US",
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2022-01-01T00:00:00+00:00",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@type": "Person",
    name: "Sahil Bhanvadiya",
    alternateName: "Sahil",
    description:
      "Full Stack Developer with expertise in building scalable web applications, AI integration, and cloud technologies",
    image: "https://sahilbhanvadiya.com/profile.png",
  },
};

// FAQ Schema for Rich Snippets
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you work with clients remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it typically take to complete a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate third-party tools into my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer website maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
      },
    },
  ],
};

// Testimonials/Reviews Schema for Rich Snippets
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sahil Bhanvadiya",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sibtain J.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Impressive work by Sahil in building our MVP. He combined solid technical skills with a clear understanding of our business needs, ensuring a smooth and fast development process from concept to delivery.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressCountry: "USA",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Divyam A.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Excellent work! Sahil built my AI chatbot efficiently and delivered beyond expectations. Highly recommend for any AI or web development projects. The project was completed on time and within budget.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressCountry: "India",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Happy P.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Excellent DevOps work by Sahil. He configured AWS ECS deployments and implemented robust CI/CD pipelines for three separate repositories, ensuring smooth and automated deployments. Highly efficient and well-documented setup.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brampton",
        addressCountry: "Canada",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Toru T.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Sahil is exceptional at transforming vision into reality. He successfully converted our Figma designs into fully functional Next.js code. He's highly skilled, responsive, and cooperative, making him the ideal support for any project.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressCountry: "Japan",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sid S.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Sahil did an outstanding job developing the backend for our social media platform. He built a robust architecture, implemented secure payment integration, and ensured the system performs smoothly under load. Excellent work!",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Saurabh B.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Sahil is a great developer. He has a great attitude. He commits and sticks to the timeline. He is co-operative and goes the extra mile to make the product better. His role was very crucial in taking my product to the next level. I highly recommend anyone to work with him.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "India",
      },
    },
  ],
};
