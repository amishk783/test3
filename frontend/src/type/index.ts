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
