"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin, error, loading } = useAuth()


    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await handleLogin(email, password)
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <header className="flex items-center p-4 border-b border-zinc-800">
                <Link href="/" className="mr-4">
                    <i className="ri-arrow-left-line text-2xl"></i>
                </Link>
                <h1 className="text-xl font-bold">Masuk</h1>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">InstaApp</h1>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-zinc-400 block mb-2">
                                Email atau Username
                            </label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 px-4 rounded-lg focus:border-red-500 focus:ring-red-500 outline-none"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-zinc-400 block mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 px-4 rounded-lg focus:border-red-500 focus:ring-purple-500 outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-900 hover:bg-red-950 text-white py-3 px-4 rounded-lg"
                        >
                            Masuk
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-zinc-400">
                            Belum punya akun?{" "}
                            <Link href="/register" className="text-purple-500 hover:underline">
                                Daftar
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
