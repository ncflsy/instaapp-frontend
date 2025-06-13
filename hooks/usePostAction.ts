import { createPost, updatePost, deletePost } from '../services/postService';
import { useRouter } from 'next/navigation';
import { Post } from '../types/post';

export function usePostActions() {
  const router = useRouter();

  const handleCreate = async (data: Partial<Post>) => {
    await createPost(data);
    router.push('/posts');
  };

  const handleUpdate = async (id: number, data: Partial<Post>) => {
    await updatePost(id, data);
    router.push('/posts');
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    router.refresh();
  };

  return { handleCreate, handleUpdate, handleDelete };
}
