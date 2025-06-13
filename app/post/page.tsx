import HeaderPage from "../components/HeaderPage";

export default function first() {
    return (
        <section className="p-4">
            <HeaderPage title='Post' href="/explore" action={false}></HeaderPage>
            <div className="w-full flex flex-col gap-4">
                <div className="w-full border border-gray-100/30 rounded-lg border-dashed mt-4 p-4 flex flex-col gap-4 justify-center items-center">
                    <i className="ri-upload-line text-2xl flex justify-center items-center size-16 bg-gray-800/50 rounded-full"></i>
                    <div className="flex flex-col items-center">
                        <p className="text-md">Upload Photo</p>
                        <p className="text-sm text-gray-400">(Max file size 2 mb)</p>
                    </div>
                </div>
                <textarea name="" id="" cols={20} rows={10} placeholder="Write a caption..." className="w-full border border-gray-100/30 p-4 rounded-lg"></textarea>
                {/* options */}
                <select name="" id="" className="w-full py-3 border rounded-lg border-gray-100/30 ps-4 text-gray-400">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button className="w-full py-2 bg-red-900 rounded-lg">Posting<i className="ri-arrow-right-line ms-2"></i></button>
            </div>
        </section>
    );
}