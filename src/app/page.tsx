"use client"

import React from 'react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function Home() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Application</h1>
      {user ? (
        <div className="text-center">
          <p className="mb-2">Hello, {user.firstName}!</p>
          <p>You are logged in.</p>
          <Link href="/leaderboard" className="text-blue-500 underline">
            Go to Leaderboard
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-2">You are not logged in.</p>
          <Link href="/login" className="text-blue-500 underline">
            Login
          </Link>
          <span className="mx-2">or</span>
          <Link href="/register" className="text-blue-500 underline">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}