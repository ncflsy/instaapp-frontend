'use client'

import { useState } from 'react'
import { loginUser } from '../services/auth'
import { useRouter } from 'next/navigation'
import { json } from 'stream/consumers'

export function useAuth() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await loginUser(email, password)
      localStorage.setItem('token', res.token)
      router.push('/') 
    } catch (err: any) {
      setError(err.message || 'Login gagal')
    } finally {
      setLoading(false)
    }
  }

  return {
    handleLogin,
    error,
    loading,
  }
}
