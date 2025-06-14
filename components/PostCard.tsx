'use client';
import { usePostActions } from "@/hooks/usePostAction";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getLoggedInUserId } from "@/utils/authUtils";
import { Comment } from "@/types/post";

interface PostCardProps {
    index: number;
    postId: number;
    name: string;
    about: string;
    text: string;
    countlike: number;
    isLikedByMe: boolean;
    comments: Comment[];
    image?: string;
}

export default function CardPost({ index, postId, name, about, text, countlike, isLikedByMe, comments, image }: PostCardProps) {
    const { handleLike, handleComment } = usePostActions();
    const [liked, setLiked] = useState(isLikedByMe);
    const [currentLikeCount, setCurrentLikeCount] = useState(countlike);
    const [newComment, setNewComment] = useState<string>('');
    const [currentComments, setCurrentComments] = useState<Comment[]>(comments);

    const BASE_BACKEND_URL = 'http://192.168.1.6:8000'; // Sesuaikan dengan APP_URL Laravel Anda

    const onLike = async () => {
        const userId = getLoggedInUserId();
        console.log("User ID from global function:", userId);

        if (userId === null) {
            alert("Anda harus login untuk melakukan aksi ini.");
            return;
        }

        const newLikedState = !liked;
        const newLikeCount = newLikedState ? currentLikeCount + 1 : currentLikeCount - 1;
        setLiked(newLikedState);
        setCurrentLikeCount(newLikeCount);

        try {
            const response = await handleLike(postId, userId);
            console.log("Like API response:", response);
        } catch (error) {
            console.error("Error during like/unlike API call:", error);
            setLiked(liked);
            setCurrentLikeCount(currentLikeCount);
            alert("Gagal melakukan aksi like/unlike. Silakan coba lagi.");
        }
    };

    const onCommentSubmit = async () => {
        const userId = getLoggedInUserId();
        if (userId === null) {
            alert("Anda harus login untuk memberi komentar.");
            return;
        }
        if (newComment.trim() === '') {
            alert("Komentar tidak boleh kosong.");
            return;
        }

        const commentData = {
            user_id: userId,
            comment: newComment.trim(),
        };

        const tempComment: Comment = {
            comment_id: Date.now(),
            user_id: userId,
            post_id: postId,
            comment: newComment.trim(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            user: { user_id: userId, name: 'Anda', email: '', email_verified_at: null, followers: 0, following: 0, about: '', web: '', created_at: '', updated_at: '' }
        };
        setCurrentComments(prev => [...prev, tempComment]);
        setNewComment('');

        try {
            const response = await handleComment(postId, commentData);
            console.log("Comment API response:", response);
        } catch (error) {
            console.error("Error submitting comment:", error);
            setCurrentComments(prev => prev.filter(c => c.comment_id !== tempComment.comment_id));
            alert("Gagal menambahkan komentar. Silakan coba lagi.");
        }
    };

    return (
        <div key={index} className="card flex flex-col items-center w-full border border-gray-100/30 rounded-lg">
            <div className="flex justify-between w-full items-center px-4 bg-gray-100/10 py-3 rounded-t-lg">
                <div className="flex items-center w-full gap-3">
                    <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#846EFE] to-red-800 rounded-[14px] flex justify-center items-center">
                        <div className="w-[38px] h-[38px] bg-gray-200 rounded-[11px]"></div>
                    </div>
                    <div className="flex flex-col gap-0">
                        <p className="font-bold text-md flex items-center gap-2">{name} <i className="ri-checkbox-blank-circle-fill text-[8px]"></i><span className="font-thin text-[12px] ms-[1px]">13 minutes ago</span></p>
                        <p className="font-thin text-[12px] ms-[1px]">{about}</p>
                    </div>
                </div>
                <div>
                    <i className="ri-more-line text-2xl"></i>
                </div>
            </div>
            {image ? (
                <div className="flex w-full h-[400px] justify-center items-center bg-gray-400">
                    <Image 
                        src={image.startsWith('http') || image.startsWith('https') ? image : `${BASE_BACKEND_URL}/storage/${image}`}
                        width={380} 
                        height={400} 
                        alt="post" 
                    />
                </div>
            ) : (
                <div className="flex w-full h-[100px] justify-center items-center bg-gray-200/10 text-gray-400">Tidak ada gambar</div>
            )}
            <div className="px-4 pt-4 w-full text-start">
                <p className="text-sm">{text}</p>
            </div>
            <div className="flex items-center justify-start w-full gap-4 px-4 pt-3">
                <div 
                     onClick={onLike}
                     className="flex items-center gap-1">
                      <i className={`ri-heart-fill text-2xl transition duration-300 ${liked ? 'text-red-600' : ''}`} ></i>
                    <p>{currentLikeCount}</p>
                </div>
                <div className="flex items-center gap-1">
                    <i className="ri-chat-2-line text-2xl"></i>
                    <p>{currentComments.length}</p>
                </div>
                <div className="flex items-center gap-1">
                    <i className="ri-bookmark-fill text-2xl"></i>
                    <p>2</p>
                </div>
                <div className="flex items-center gap-1">
                    <i className="ri-share-line text-2xl"></i>
                    <p>0</p>
                </div>
            </div>
            <div className="px-4 pt-1 pb-4">
                <p className="text-[13px] text-gray-500">View all {currentComments.length} comments</p>
            </div>
            <div className="w-full px-4 mb-2">
                {currentComments.map((commentItem) => (
                    <div key={commentItem.comment_id} className="text-sm mb-1">
                        <span className="font-bold mr-1">{commentItem.user?.name || `User ${commentItem.user_id}`}:</span>
                        <span>{commentItem.comment}</span>
                    </div>
                ))}
            </div>
            <div className="w-full flex gap-2 px-4 pb-4">
                <input
                    type="text"
                    placeholder="Tambahkan komentar..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded-lg text-white outline-none"
                />
                <button 
                    onClick={onCommentSubmit}
                    className="bg-red-900 px-4 py-2 rounded-lg text-white font-semibold"
                >
                    Kirim
                </button>
            </div>
        </div>
    );
}
