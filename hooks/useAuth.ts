'use client'

import { useState } from 'react'
import { loginUser } from '../services/auth'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export function useAuth() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await loginUser(email, password)
      console.log("Login API Response:", res);
      console.log("Token from API:", res.token);
      console.log("User ID from API:", res.user.user_id);
      
      if (res.token && res.user && res.user.user_id) {
        localStorage.setItem('token', res.token)
        Cookies.set('token', res.token)
        Cookies.set('logged_in_user_id', res.user.user_id.toString())
        router.push('/') 
      } else {
        setError("Token atau User ID tidak ditemukan dalam respons login.");
      }

    } catch (err: any) {
      setError(err.message || 'Login gagal')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    Cookies.remove('token');
    Cookies.remove('logged_in_user_id');
    router.push('/login');
  };

  return {
    handleLogin,
    handleLogout,
    error,
    loading,
  }
}
