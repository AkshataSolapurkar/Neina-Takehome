// components/Navbar.tsx
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { fetchUserData } = useAuth();
  const { user, logout } = useAuth();
  const [error, setError] = useState('')
 
  console.log(user)
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between">
        <h1>MyApp</h1>
        {user ? (
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.firstName}</span>
            <button onClick={logout} className="p-2 bg-red-500">
              Logout
            </button>
          </div>
        ) : (
          <a href="/login" className="p-2 bg-blue-500">Login</a>
        )}
        <button>profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
