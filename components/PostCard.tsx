'use client';
import { usePostActions } from "@/hooks/usePostAction";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getLoggedInUserId } from "@/utils/authUtils";

interface PostCardProps {
    index: number;
    postId: number;
    name: string;
    about: string;
    text: string;
    countlike: number;
    isLikedByMe: boolean;
}

export default function CardPost({ index, postId, name, about, text, countlike, isLikedByMe }: PostCardProps) {
    const { handleLike } = usePostActions();
    const [liked, setLiked] = useState(isLikedByMe);
    const [currentLikeCount, setCurrentLikeCount] = useState(countlike);

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
            <div className="flex w-full h-[400px] justify-center items-center bg-gray-400">
                <Image src={`https://picsum.photos/seed/${index + 1}/580/625`} width={380} height={400} alt="post"></Image>
            </div>
            <div className="px-4 pt-4 w-full text-start">
                <p className="text-sm">{text}</p>
            </div>
            <div className="flex items-center justify-start w-full gap-4 px-4 pt-3">
                <div 
                     onClick={onLike}
                     className="flex items-center gap-1">
                      <i className={`ri-heart-fill text-2xl transition duration-300 ${
                            liked ? 'text-red-600' : ''
                        }`}
                    ></i>
                    <p>{currentLikeCount}</p>
                </div>
                <div className="flex items-center gap-1">
                    <i className="ri-chat-2-line text-2xl"></i>
                    <p>31</p>
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
                <p className="text-[13px] text-gray-500">View all 42 comments</p>
            </div>
        </div>
    );
}
