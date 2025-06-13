'use client'

export const loginUser = async (email: string, password: string) => {
  const res = await fetch('http://192.168.1.6:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Login gagal')
  }

  return await res.json()
}

export const getUser = async (token: string) => {
  const res = await fetch('http://192.168.1.6:8000/api/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) throw new Error('Gagal mengambil user')

  return await res.json()
}

export const logoutUser = async (token: string) => {
  await fetch('http://192.168.1.6:8000/api/logout', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  localStorage.removeItem('token')
}
