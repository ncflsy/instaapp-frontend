'use client'

import { useState } from 'react'
import { loginUser } from '../services/auth'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const API_URL = 'http://192.168.1.6:8000/api';

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

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('token');
      Cookies.remove('token');
      Cookies.remove('logged_in_user_id');
      router.push('/login');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Logout gagal di server.');
      }

      // Logout berhasil di server, sekarang hapus dari klien
      localStorage.removeItem('token');
      Cookies.remove('token');
      Cookies.remove('logged_in_user_id');
      router.push('/login');

    } catch (err: any) {
      console.error("Error during logout:", err);
      setError(err.message || 'Gagal logout. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    handleLogout,
    error,
    loading,
  }
}
