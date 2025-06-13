import Link from "next/link";

interface HeaderPageProps {
    title: string;
    href: string;
    action: boolean;
}

export default function HeaderPage({ title, href, action = true}: HeaderPageProps) {
    return (
        <div className="flex justify-center items-center gap-1 border-b pt-2 pb-3 border-gray-700">
            {action && (
                <Link href={href} className="absolute left-3">
                    <i className="ri-arrow-left-s-line text-3xl"></i>
                </Link>
            )}
            <h1 className="text-xl font-bold ">{title}</h1>
        </div>
    );
}
