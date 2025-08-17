export interface Post {
  id: string;
  user: {
    name: string;
    profile: string;   
    title: string;   
  };
  content: string;
  image?: string;     
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
  isRepost: boolean;  
  isMine: boolean; 
}


export type PostType = Partial<Post>;