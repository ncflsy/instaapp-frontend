import { useEffect, useState } from 'react';
import { getPostById } from '../services/postService';
import { Post } from '../types/post';

export function usePost(id: number) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPostById(id)
      .then(setPost)
      .catch(() => setError('Failed to fetch post'))
      .finally(() => setLoading(false));
  }, [id]);

  return { post, loading, error };
}