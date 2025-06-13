import Link from "next/link";

export default function first() {
    return (
        <section>
            <div className="flex justify-between px-4 py-3 border-b-[1px] border-gray-100/30">
                <div className="relative w-full">
                    <input type="text" className="h-10 border-[1px] border-gray-700 rounded-lg w-full ps-10" placeholder="Search"/>
                    <i className="ri-search-line text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 text-xl"></i>
                </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-2 py-3">
                <Link href="/explore/1" className="w-full aspect-square bg-gray-300 rounded-sm"></Link>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
                <div className="w-full aspect-square bg-gray-300 rounded-sm"></div>
            </div>
        </section>
    );
}