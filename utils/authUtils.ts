'use client';

import Cookies from 'js-cookie';
// import { jwtDecode } from 'jwt-decode'; // Hapus import ini

// interface DecodedToken {
//   user_id: number;
//   [key: string]: any;
// }

export function getLoggedInUserId(): number | null {
  if (typeof window === 'undefined') {
    return null; // Hanya jalankan di sisi client
  }
  const userIdStr = Cookies.get('logged_in_user_id'); // Ambil dari cookie yang baru
  if (userIdStr) {
    return parseInt(userIdStr, 10);
  }
  return null;
}

export function getLoggedInUserToken(): string | null {
  if (typeof window === 'undefined') {
    return null; // Hanya jalankan di sisi client
  }
  return Cookies.get('token') || null;
} 