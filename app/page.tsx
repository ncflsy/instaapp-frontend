export default function first() {
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
                <div className="card flex flex-col items-center w-full border border-gray-100/30 rounded-lg">
                    <div className="flex justify-between w-full items-center px-4 bg-gray-100/10 py-3 rounded-t-lg">
                        <div className="flex items-center w-full gap-3">
                            <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#846EFE] to-red-800 rounded-[14px] flex justify-center items-center">
                                <div className="w-[38px] h-[38px] bg-gray-200 rounded-[11px]"></div>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="font-bold text-md flex items-center gap-2">Nico Keren <i className="ri-checkbox-blank-circle-fill text-[8px]"></i><span className="font-thin text-[12px] ms-[1px]">13 minutes ago</span></p>
                                <p className="font-thin text-[12px] ms-[1px]">Software Engineer</p>
                            </div>
                        </div>
                        <div>
                            <i className="ri-more-line text-2xl"></i>
                        </div>
                    </div>
                    <div className="flex w-full h-[400px] justify-center items-center bg-gray-400">
                        <p className="text-black">Image</p>
                    </div>
                    <div className="flex items-center justify-start w-full gap-4 px-4 pt-3">
                        <div className="flex items-center gap-1">
                            <i className="ri-heart-line text-2xl"></i>
                            <p>31</p>
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
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-[13px] text-gray-500">View all 42 comments</p>
                    </div>
                </div>
                <div className="card flex flex-col items-center w-full border border-gray-100/30 rounded-lg">
                    <div className="flex justify-between w-full items-center px-4 bg-gray-100/10 py-3 rounded-t-lg">
                        <div className="flex items-center w-full gap-3">
                            <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#846EFE] to-red-800 rounded-[14px] flex justify-center items-center">
                                <div className="w-[38px] h-[38px] bg-gray-200 rounded-[11px]"></div>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="font-bold text-md flex items-center gap-2">Nico Keren <i className="ri-checkbox-blank-circle-fill text-[8px]"></i><span className="font-thin text-[12px] ms-[1px]">13 minutes ago</span></p>
                                <p className="font-thin text-[12px] ms-[1px]">Software Engineer</p>
                            </div>
                        </div>
                        <div>
                            <i className="ri-more-line text-2xl"></i>
                        </div>
                    </div>
                    <div className="flex w-full h-[400px] justify-center items-center bg-gray-400">
                        <p className="text-black">Image</p>
                    </div>
                    <div className="flex items-center justify-start w-full gap-4 px-4 pt-3">
                        <div className="flex items-center gap-1">
                            <i className="ri-heart-line text-2xl"></i>
                            <p>31</p>
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
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-[13px] text-gray-500">View all 42 comments</p>
                    </div>
                </div>
                <div className="card flex flex-col items-center w-full border border-gray-100/30 rounded-lg">
                    <div className="flex justify-between w-full items-center px-4 bg-gray-100/10 py-3 rounded-t-lg">
                        <div className="flex items-center w-full gap-3">
                            <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#846EFE] to-red-800 rounded-[14px] flex justify-center items-center">
                                <div className="w-[38px] h-[38px] bg-gray-200 rounded-[11px]"></div>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="font-bold text-md flex items-center gap-2">Nico Keren <i className="ri-checkbox-blank-circle-fill text-[8px]"></i><span className="font-thin text-[12px] ms-[1px]">13 minutes ago</span></p>
                                <p className="font-thin text-[12px] ms-[1px]">Software Engineer</p>
                            </div>
                        </div>
                        <div>
                            <i className="ri-more-line text-2xl"></i>
                        </div>
                    </div>
                    <div className="flex w-full h-[400px] justify-center items-center bg-gray-400">
                        <p className="text-black">Image</p>
                    </div>
                    <div className="flex items-center justify-start w-full gap-4 px-4 pt-3">
                        <div className="flex items-center gap-1">
                            <i className="ri-heart-line text-2xl"></i>
                            <p>31</p>
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
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-[13px] text-gray-500">View all 42 comments</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
