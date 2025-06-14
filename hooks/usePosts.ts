'use client';
import { useEffect, useState } from 'react';
import { getPosts } from '../services/postService';
import { Post } from '../types/post';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError('Failed to fetch posts'))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
