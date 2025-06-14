import { Post, Comment } from '../types/post';

const API_URL = 'http://192.168.1.6:8000/api';

export async function getMyPosts(userId: string): Promise<Post[]> {
  const res = await fetch(`${API_URL}/post/mypost/${userId}`);
  if (!res.ok) throw new Error(res.statusText);
  const json = await res.json();
  return json.data;
}

