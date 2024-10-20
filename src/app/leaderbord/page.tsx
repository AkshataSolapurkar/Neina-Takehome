"use client"
import { fetchUserData } from '@/actions/user'
import Navbar from '@/components/Navbar'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'

const page = () => {
  const { setUser} = useAuth()
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUserData(); 
        console.log(data.data.data);
        setUser(data?.data.data)
      } catch (error) {
        console.error(error);
      }
    })();
  }, []); 

  // console.log(data, "hello")
  return (
    <div>
      <Navbar/>
      this is leaderboard
    </div>
  )
}

export default page
