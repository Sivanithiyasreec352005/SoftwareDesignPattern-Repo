import { auth } from '@/firebase/setup';
import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate=useNavigate();
 const handleLogout=async()=>
 {
  await signOut(auth);
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  navigate("/login")
 }
  return (
    <div>
      Home
      <button onClick={handleLogout}>LOgout</button></div>
  )
}

export default Home