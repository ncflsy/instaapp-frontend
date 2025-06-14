import { Post, Comment } from '../types/post';

const API_URL = 'http://192.168.1.6:8000/api';

export const createPost = async (data: { user_id: number, text: string, image?: File, status?: string }) => {
  console.log('createPost received data:', data); // Debug log

  if (!data.user_id) {
    throw new Error('User ID is required');
  }

  const formData = new FormData();
  formData.append('user_id', data.user_id.toString());
  formData.append('text', data.text);
  formData.append('status', data.status || 'public'); 
  
  if (data.image) {
    formData.append('image', data.image);
  }

  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }

  console.log('Sending request with FormData:', Object.fromEntries(formData.entries())); // Debug log

  const response = await fetch(`${API_URL}/post`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('API Error Response:', errorData); // Debug log
    throw new Error(errorData.message || 'Failed to create post');
  }

  return response.json();
};

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/post`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const result = await response.json();
  return result.data; // Mengambil array posts dari properti 'data'
}

export async function updatePost(id: number, data: Partial<Post>) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`${API_URL}/post/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Failed to update post');
  }
  return response.json();
}

export async function deletePost(id: number) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`${API_URL}/post/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
  return response.json();
}

export async function createLike(postId: number, data: { user_id: number }) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }
  const response = await fetch(`${API_URL}/like/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Failed to like post');
  }
  return response.json();
}

export async function createComment(postId: number, data: { user_id: number, comment: string }) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }
  const response = await fetch(`${API_URL}/comment/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Failed to add comment');
  }
  return response.json();
}
