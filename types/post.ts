export interface User {
  user_id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  followers: number;
  following: number;
  about: string;
  web: string;
  created_at: string;
  updated_at: string;
}

export interface Like {
  like_id: number;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  comment_id: number;
  user_id: number;
  post_id: number;
  comment: string;
  created_at: string;
  updated_at: string;
  user?: User; 
}

export interface Post {
  post_id: number;
  user_id: number;
  text: string;
  image?: string;
  status: 'public' | 'private';
  created_at: string;
  updated_at: string;
  user: User;
  likes: Like[];
  comments: Comment[];
}
