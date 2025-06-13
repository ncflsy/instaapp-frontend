import Link from "next/link";

export default function bottombar() {
    return (
        <div className="w-full py-4 px-16 flex border-t-[1px] border-gray-700 bg-black/80 backdrop-blur-xs fixed bottom-0 gap-4 justify-between items-center">
            <Link href="/">
                <i className="ri-home-4-fill text-2xl"></i>
            </Link>
            <Link href="/explore">
                <i className="ri-search-line text-[28px]"></i>
            </Link>
            <Link href="">
                <div className="border-2 h-6.5 w-7 rounded-lg flex justify-center items-center">
                    <i className="ri-add-fill text-xl"></i>
                </div>
            </Link>
            <Link href="">
                <div className="w-7 h-7 bg-amber-50 rounded-full"></div>
            </Link>
        </div>
    )
}