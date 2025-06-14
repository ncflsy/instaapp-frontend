import { createPost, updatePost, deletePost, createLike, createComment } from '../services/postService';
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
      throw error; // Re-throw error agar bisa ditangkap di PostCard
    }
  };

  const handleComment = async (postId: number, data: { user_id: number, comment: string }) => {
    try {
      const response = await createComment(postId, data);
      console.log('Comment successful:', response);
      return response; // Kembalikan respons jika perlu
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error; // Re-throw error agar bisa ditangkap di PostCard
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

  return { handleCreate, handleUpdate, handleDelete, handleLike, handleComment };
}
