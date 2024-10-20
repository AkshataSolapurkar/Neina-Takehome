
"use client"
import API from "@/lib/axios";

 export  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    console.log(token, "token")
    try {
      const response = await API.post('/user/v1/get-users-info', {}, {
        headers: { Authorization: `${token}` },
      });
      console.log(response, "repsonse")
      return response
    } catch (error) {
        console.log(error)
    }
  };