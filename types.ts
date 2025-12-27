
export type Locale = 'vi' | 'en';

export interface Localized<T> {
  vi: T;
  en: T;
}

export type Category = 'Java' | 'JavaScript' | 'Software Design';

export interface BlogPost {
  id: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  date: string;
  category: Category;
  content: Localized<string>;
  image: string;
  readTime: Localized<string>;
}

export interface Certification {
  id: string;
  title: Localized<string>;
  issuer: string;
  date: string;
  image: string;
  reflection?: Localized<string>;
}

export interface SkillGroup {
  title: Localized<string>;
  items: string[];
}

export interface Profile {
  name: string;
  role: Localized<string>;
  bio: Localized<string>;
  goal: Localized<string>;
  avatar: string;
  skillGroups: SkillGroup[];
  links: {
    github: string;
    facebook: string;
    email: string;
    phone: string;
    address: string;
  };
}
