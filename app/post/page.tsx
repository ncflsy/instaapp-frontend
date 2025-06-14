'use client'
import { usePostActions } from "@/hooks/usePostAction";
import HeaderPage from "../../components/HeaderPage";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { getLoggedInUserId } from "@/utils/authUtils";

export default function PostPage() {
    const { handleCreate, loading, error } = usePostActions();
    const [text, setText] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [currentUserId, setCurrentUserId] = useState<number | null>(null);
    const [status, setStatus] = useState<'public' | 'private'>('public');

    useEffect(() => {
        const id = getLoggedInUserId();
        setCurrentUserId(id);
    }, []);

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) setImageFile(e.target.files[0]);
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (currentUserId === null) {
            console.error('Error: User ID is not available. Please log in.');
            return;
        }

        if (!text.trim() && !imageFile) {
            console.error('Error: Post must have text or an image.');
            return;
        }

        try {
            const postData = {
                user_id: currentUserId,
                text: text.trim(),
                status: status,
                ...(imageFile && { image: imageFile })
            };
            
            console.log('Submitting post data from page.tsx:', postData);
            await handleCreate(postData);
            setText('');
            setImageFile(null);
        } catch (err) {
            console.error('Failed to create post in page.tsx:', err);
        }
    };

    return (
        <section className="px-4 pt-4 pb-[100px]">
            <HeaderPage title='Post' href="/explore" action={false}></HeaderPage>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full border border-gray-100/30 rounded-lg border-dashed mt-4 p-4 flex flex-col gap-4 justify-center items-center">
                        <label className="border-dashed border-gray-100/30 px-4 rounded-lg flex justify-center items-center cursor-pointer">
                            {imageFile ? (
                                <img src={URL.createObjectURL(imageFile)} className="max-h-60" alt="preview" />
                            ) : (
                                <i className="ri-upload-line text-2xl bg-gray-800/50 rounded-full p-4"></i>
                            )}
                            <input type="file" accept="image/*" className="hidden" onChange={onImageChange} />
                        </label>
                        <div className="flex flex-col items-center">
                            <p className="text-md">Upload Photo</p>
                            <p className="text-sm text-gray-400">(Max file size 2 mb)</p>
                        </div>
                    </div>
                    <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        name="" id="" cols={20} rows={10} placeholder="Write a caption..." className="w-full border border-gray-100/30 p-4 rounded-lg"></textarea>
                    <select
                        value={status}
                        onChange={e => setStatus(e.target.value as 'public' | 'private')}
                        className="w-full py-3 border rounded-lg border-gray-100/30 ps-4 text-gray-400"
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-red-900 py-3 rounded-lg text-white disabled:opacity-50"
                    >
                        {loading ? 'Posting...' : 'Posting'}
                        <i className="ri-arrow-right-line ms-2"></i>
                    </button>
                </div>
            </form>
        </section>
    );
}