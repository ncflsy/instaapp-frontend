import { Post, Comment } from '../types/post';

const API_URL = 'http://192.168.1.6:8000/api';

export async function getMyPosts(userId: string): Promise<Post[]> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found. Please log in.');
  }

  const res = await fetch(`${API_URL}/post/mypost/${userId}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || res.statusText || 'Gagal mengambil post saya');
  }
  const json = await res.json();
  return json.data;
}

