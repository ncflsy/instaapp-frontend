import HeaderPage from "../../components/HeaderPage";
interface DetailExploreProps {
    params: {
        id: string;
    };
}

export default function Page({ params }: DetailExploreProps) {
    const { id } = params;
    return (
        <section className="p-4">
            <HeaderPage title='Detail Post' href="/profile" action={true}></HeaderPage>
            <div className="py-4">
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
    );
}
