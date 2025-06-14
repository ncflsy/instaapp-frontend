'use client';
import { useEffect, useState } from 'react';
import { Post } from '../types/post';
import { getMyPosts } from '@/services/profileService';
import { getLoggedInUserId } from '@/utils/authUtils';

export function useMyPosts() {
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = getLoggedInUserId();
    if (userId === null) {
      setError('User belum login');
      setLoading(false);
      return;
    }

    getMyPosts(userId.toString())
      .then(data => setMyPosts(data))
      .catch(err => {
        console.error('Error fetching my posts:', err);
        setError(err.message || 'Gagal mengambil post saya');
      })
      .finally(() => setLoading(false));
  }, []);

  return { myPosts, loading, error };
}
