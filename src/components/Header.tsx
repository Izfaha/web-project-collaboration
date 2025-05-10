import Image from 'next/image'
import React from "react";
import Link from 'next/link';

interface HeaderProps {
  isLoggedIn: boolean;
  username: string;
  setShowLoginModal: (show: boolean) => void;
  setShowRegisterModal: (show: boolean) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Header = ({
  isLoggedIn,
  username,
  setShowLoginModal,
  setShowRegisterModal,
  setIsLoggedIn
}: HeaderProps) => {
  return (
    <nav className="bg-[#06304b] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/image/logo.png" 
            width={40} 
            height={40} 
            alt="SiBer Logo"
            className="mr-2"
          />
          <span className="text-xl font-bold">SiBer</span>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/courses" className="hover:text-gray-300">Courses</Link>
          <Link href="/challenges" className="hover:text-gray-300">Challenges</Link>
          <Link href="/community" className="hover:text-gray-300">Community</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </div>
        
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center">
              <span className="mr-2">Welcome, {username}!</span>
              <button 
                onClick={() => setIsLoggedIn(false)} 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="hover:text-gray-300"
              >
                Login
              </button>
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="bg-white text-[#06304b] px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
