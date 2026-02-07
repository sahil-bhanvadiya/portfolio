export interface socialListsTypes {
  id: number;
  title: string;
  icon: string;
  link: string;
}

export interface counterListsType {
  id: number;
  title: string;
  value: number;
  symbol: string;
}

export interface myExperienceTypes {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  link: string;
  linkText: string;
}

export interface myStackTypes {
  key: string;
  value: {
    id: number;
    title: string;
    logo: string;
  }[];
}

export interface myServicesTypes {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}
export interface myShowCasesTypes {
  id: number;
  title: string;
  description: string;
  link: string;
  type: string;
  role: string;
  techStack: string[];
}

export interface testimonialsTypes {
  id: number;
  name: string;
  description: string;
  location: string;
}

export type FAQ = {
  question: string;
  answer: string;
};

export interface linkedInPostTypes {
  id: number;
  embedId: string; // LinkedIn embed ID (e.g., "urn:li:ugcPost:7419457465936732161")
}
