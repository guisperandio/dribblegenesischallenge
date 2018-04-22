export interface Shot {
  title: string;
  description: string;
  published_at: string;
  author: string;
  avatar: string;
  images: {
    normal: string,
    teaser: string
  };
  id: number;
}
