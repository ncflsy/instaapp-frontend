import { createPost, updatePost, deletePost, createLike } from '../services/postService';
import { useRouter } from 'next/navigation';
import { Post } from '../types/post';

export function usePostActions() {
  const router = useRouter();

  const handleCreate = async (data: Partial<Post>) => {
    await createPost(data);
    router.push('/posts');
  };

  const handleLike = async (postId: number, userId: number) => {
    try {
      await createLike(postId, { user_id: userId });
      // Optional: refresh halaman atau update state
      console.log('Like successful');
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleUpdate = async (id: number, data: Partial<Post>) => {
    await createLike(id, data);
    router.refresh();
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    router.refresh();
  };

  return { handleCreate, handleUpdate, handleDelete, handleLike };
}
