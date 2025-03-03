export interface SanityBlock {
  _type: string;
  style?: string;
  children?: { text: string }[];
}

export interface PostType {
  title: string;
  author: string;
  publishedAt: string;
  image: string;
  slug: {
    current: string;
    _type: string;
  };
  body: SanityBlock[];
  category: string;
}

export interface CarouselType {
  title: string;
  imageUrl: string;
  subTitles: string[];
}

export interface HeroSection {
  title: string;
  subHeading: string;
  paragraph: string;
}
export interface HeroSection {
  title: string;
  subHeading: string;
  paragraph: string;
}

export interface ArticleList {
  categoryId: string;
  title: string;
  date: string;
  author: string;
  description: string;
  imageUrl: string;
}
export interface Category {
  title: string;
  _id: string;
}

export interface SpotLightItem {
  subTitles: string[];
  title: string;
  imageUrl: string;
}
export interface ListItem {
  description: string[];
  title: string;
  imageUrl: string;
}
export interface PopularSectionType {
  title: string;
  spotLightPopular: SpotLightItem;
  listItems: ListItem[];
}

export interface HomePageType {
  carousel: CarouselType[];
  hero: HeroSection;
  articleList: ArticleList[];
  categories: Category[];
  popularSection: PopularSectionType;
}
