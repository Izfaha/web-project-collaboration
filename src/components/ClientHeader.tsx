'use client'

import { useState, useEffect } from 'react';
import Header from './Header';

export default function ClientHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('User');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Check if user is logged in on component mount
  useEffect(() => {
    // Example: Check if user is logged in based on token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // You might want to fetch the username from an API or localStorage
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) setUsername(storedUsername);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsLoggedIn(true);
        setUsername(data.user?.name || loginEmail.split('@')[0]);
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.user?.name || loginEmail.split('@')[0]);
        setShowLoginModal(false);
      } else {
        alert(`Login failed: ${data.message || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  };

  const handleFullRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!email || !password) {
      alert("Please fill in all required fields");
      return;
    }
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert("Registration successful! You can now log in.");
        setShowRegisterModal(false);
        setShowLoginModal(true);
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <>
      <Header 
        isLoggedIn={isLoggedIn}
        username={username}
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
        setIsLoggedIn={setIsLoggedIn}
      />
      
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="loginEmail" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#06304b]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="loginPassword" className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  id="loginPassword"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#06304b]"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-gray-700">Remember me</label>
                </div>
                <a href="#" className="text-[#06304b] hover:underline">Forgot password?</a>
              </div>
              <div className="flex justify-between">
                <button 
                  type="button" 
                  onClick={() => setShowLoginModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#06304b] text-white rounded-md hover:bg-[#052539]"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p>
                Don't have an account?{" "}
                <button 
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                  className="text-[#06304b] hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
            
            <div>
              <form onSubmit={handleFullRegister}>
                <div className="mb-4">
                  <label htmlFor="fullEmail" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="fullEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#06304b]"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 mb-2">Password <span className="text-red-500">*</span></label>
                  <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#06304b]"
                    placeholder="Minimum 8 characters"
                  />
                  <p className="text-sm text-gray-500 mt-1">Password must be at least 8 characters long</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="terms" required className="mr-2" />
                    <label htmlFor="terms" className="text-gray-700 text-sm">
                      I agree to the <a href="/terms" className="text-[#06304b] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#06304b] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={() => setShowRegisterModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-[#06304b] text-white rounded-md hover:bg-[#052539]"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-4 text-center">
              <p>
                Already have an account?{" "}
                <button 
                  onClick={() => {
                    setShowRegisterModal(false);
                    setShowLoginModal(true);
                  }}
                  className="text-[#06304b] hover:underline"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
