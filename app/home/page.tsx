'use client'; 
import { usePosts } from "@/hooks/usePosts";
import PostCard from "../../components/PostCard";
import Image from "next/image";
import { getLoggedInUserId } from "@/utils/authUtils";

export default function HomePage() {
    const { posts, loading, error } = usePosts();
    const userId = getLoggedInUserId();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section id="home" className="flex flex-col gap-3 px-2">
            {/* Header */}
            <div className="flex justify-between px-4 py-3 border-b-[1px] border-gray-100/30">
                <h1 className="text-xl font-semibold">InstaApp</h1>
                <div className="flex gap-2">
                    <div><i className="ri-notification-3-line text-2xl"></i></div>
                    <div className="relative">
                        <i className="ri-chat-3-line text-2xl"></i>
                        <div className="absolute top-[-2px] right-[-8px] w-5 h-5 flex justify-center items-center bg-red-800 rounded-lg text-[10px]">1</div>
                    </div>
                </div>
            </div>
            {/* story */}
            <div className="flex justify-start px-4 py-3 gap-3 overflow-x-scroll border border-gray-700 rounded-lg">
                <div className="flex flex-col gap-2 relative">
                    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#846EFE] to-red-800 rounded-[13px] flex justify-center items-center">
                        <div className="w-[53px] h-[53px] bg-gray-200 rounded-[10px]"></div>
                    </div>
                    <div className="absolute bottom-[-5px] right-[-5px] w-6 h-6 bg-gradient-to-r bg-white text-black rounded-[13px] flex justify-center items-center">
                        <i className="ri-add-line font-semibold text-gray-700"></i>
                    </div>
                </div>
                <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#846EFE] to-red-800 rounded-[13px] flex justify-center items-center">
                    <div className="w-[53px] h-[53px] bg-gray-200 rounded-[10px]"></div>
                </div>
                <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#846EFE] to-red-800 rounded-[13px] flex justify-center items-center">
                    <div className="w-[53px] h-[53px] bg-gray-200 rounded-[10px]"></div>
                </div>
                <div className="w-[60px] h-[60px] bg-gray-700 rounded-[13px] flex justify-center items-center">
                    <div className="w-[53px] h-[53px] bg-gray-200 rounded-[10px]"></div>
                </div>
                <div className="w-[60px] h-[60px] bg-gray-700 rounded-[13px] flex justify-center items-center">
                    <div className="w-[53px] h-[53px] bg-gray-200 rounded-[10px]"></div>
                </div>
            </div>
            {/* post */}
            <div className="flex flex-col gap-4">
                {posts.map(post => {
                    const isLikedByMe = userId ? post.likes.some(like => like.user_id === userId) : false;
                    return (
                        <PostCard 
                            key={post.post_id} 
                            index={post.post_id} 
                            postId={post.post_id}
                            name={post.user.name}
                            about={post.user.about}
                            text={post.text}
                            countlike={post.likes.length}
                            isLikedByMe={isLikedByMe}
                        />
                    )
                })}
            </div>
        </section>
    )
}
