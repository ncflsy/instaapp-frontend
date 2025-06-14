import { createPost, updatePost, deletePost, createLike, createComment } from '../services/postService';
import { useRouter } from 'next/navigation';
import { Post } from '../types/post';
import { useState } from 'react';

export function usePostActions() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCreate = async (data: { user_id: number, text: string, image?: File, status?: string }) => {
    console.log('handleCreate received data:', data); // Debug log

    if (!data || typeof data.user_id === 'undefined') {
      throw new Error('User ID is required');
    }

    setLoading(true);
    setError(null);
    try {
      const postData = {
        user_id: Number(data.user_id),
        text: data.text,
        image: data.image,
        status: data.status
      };
      
      console.log('Sending to createPost:', postData); // Debug log
      const response = await createPost(postData);
      console.log('Post created successfully:', response);
      router.refresh(); // Mengganti router.push('/posts') dengan router.refresh()
      return response;
    } catch (err: any) {
      console.error('Error creating post:', err);
      setError(err.message || 'Posting gagal');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId: number, userId: number) => {
    try {
      await createLike(postId, { user_id: userId });
      console.log('Like successful');
    } catch (error) {
      console.error('Error liking post:', error);
      throw error;
    }
  };

  const handleComment = async (postId: number, data: { user_id: number, comment: string }) => {
    try {
      const response = await createComment(postId, data);
      console.log('Comment successful:', response);
      return response;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error; 
    }
  };

  const handleUpdate = async (id: number, data: Partial<Post>) => {
    await updatePost(id, data);
    router.refresh();
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    router.refresh();
  };

  return { handleCreate, loading, error, handleLike, handleComment, handleUpdate, handleDelete }
}
