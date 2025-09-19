type Author = {
  name: string;
  image?: string;
  designation: string;
};

export type Blog = {
  id: number;
  slug: string;          // NEW: unique slug for each blog
  title: string;
  paragraphs: string[];  // NEW: multiple paragraphs
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  category?: string;     // optional category
  views?: number;        // optional
  comments?: number;     // optional
};
