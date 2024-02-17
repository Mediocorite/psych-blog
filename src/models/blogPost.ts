export interface BlogPost {
  postTitle: string;
  postDate: {
    seconds: number;
    nanoseconds: number;
  };
  blogText: string;
  bannerLink: string;
  category: string;
}
