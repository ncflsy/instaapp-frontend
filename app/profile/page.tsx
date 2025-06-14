'use client';
import Loading from "@/components/Loading";
import { useMyPosts } from "@/hooks/useMyPosts";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getLoggedInUserId } from "@/utils/authUtils";
import { Post } from "@/types/post";

const BASE_BACKEND_URL = 'http://192.168.1.6:8000';

export default function ProfilePage() {
    const { myPosts, loading, error } = useMyPosts();
    const [activeTab, setActiveTab] = useState<'home' | 'private' | 'save'>('home');
    const userId = getLoggedInUserId();

    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;

    const renderPostGridItem = (post: Post) => {
        const imageUrl = post.image ? 
            (post.image.startsWith('http') || post.image.startsWith('https') ? post.image : `${BASE_BACKEND_URL}/storage/${post.image}`) 
            : null;
        
        return (
            <Link
                key={post.post_id}
                href={`/profile/${post.post_id}`}
                className="w-full aspect-square bg-gray-700 rounded-lg overflow-hidden relative"
            >
                {imageUrl ? (
                    <Image 
                        src={imageUrl} 
                        layout="fill" 
                        objectFit="cover" 
                        alt="Post Image"
                        className="rounded-lg"
                    />
                ) : (
                    <div className="flex justify-center items-center w-full h-full text-gray-400 text-xs">No Image</div>
                )}
            </Link>
        );
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="w-full h-[90px] bg-gray-600"></div>
            <div className="flex">
                <div className="w-[100px] h-[100px] bg-gray-600 rounded-full mt-[-40px] ms-4 border-3"></div>
                <div className="flex-1 flex justify-between px-4">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">42</p>
                        <p className="font-thin text-sm text-gray-500">Posts</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">1.2K</p>
                        <p className="font-thin text-sm text-gray-500">Followers</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">567</p>
                        <p className="font-thin text-sm text-gray-500">Following</p>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <p className="font-bold text-xl">Nico Keren</p>
                <p className="font-thin text-sm text-gray-500">Software Engineer</p>
                <p className="font-thin text-sm text-blue-500 mt-[-2px]">nicoflassy.copoit-dev.com</p>

                <div className="flex gap-2 w-full text-sm">
                    <button className="flex-1 px-4 py-2 bg-red-900 rounded-lg">Edit Profile</button>
                    <button className="flex-1 px-4 py-2 bg-gray-800 rounded-lg">Share Profile</button>
                </div>
                <div className="w-full h-px bg-gray-600 my-4"></div>
                <div className="flex justify-center my-2">
                    <button onClick={() => setActiveTab('home')} id="tab-home" className={`flex-1 flex justify-center ${activeTab === 'home' ? 'bg-gray-800 rounded-lg' : ''}`}><i className="ri-layout-grid-2-line text-[22px] text-gray-300"></i></button>
                    <button onClick={() => setActiveTab('private')} id="tab-private" className={`flex-1 flex justify-center ${activeTab === 'private' ? 'bg-gray-800 rounded-lg' : ''}`}><i className="ri-lock-2-fill text-[22px] text-gray-300"></i></button>
                    <button onClick={() => setActiveTab('save')} id="tab-save" className={`flex-1 flex justify-center ${activeTab === 'save' ? 'bg-gray-800 rounded-lg' : ''}`}><i className="ri-bookmark-fill text-[22px] text-gray-300"></i></button>
                </div>
                {activeTab === 'home' && (
                    <div id="tab-home" className="w-full grid grid-cols-3 gap-2 py-3">
                        {myPosts.filter(post => post.status === 'public').map(myPost => (
                            renderPostGridItem(myPost)
                        ))}
                    </div>
                )}
                {activeTab === 'private' && (
                    <div id="tab-private" className="w-full grid grid-cols-3 gap-2 py-3">
                        {myPosts.filter(post => post.status === 'private').map(myPost => (
                            renderPostGridItem(myPost)
                        ))}
                    </div>
                )}
                {activeTab === 'save' && (
                    <div id="tab-save" className="w-full grid grid-cols-3 gap-2 py-3">
                        <Link href="/profile/1" className="w-full aspect-square bg-gray-300 rounded-sm"></Link>
                        <div className="w-full aspect-square bg-gray-500 rounded-sm"></div>
                        <div className="w-full aspect-square bg-gray-500 rounded-sm"></div>
                        <div className="w-full aspect-square bg-gray-500 rounded-sm"></div>
                    </div>
                )}
            </div>
        </div>
    );
}