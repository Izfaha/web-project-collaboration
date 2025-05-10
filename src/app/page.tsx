"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

const Page = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

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
        setShowLoginModal(false);
      } else {
        alert(`Login failed: ${data.message || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  };

  return (
    <section className="font-noto-sans-font">
      {/* Hero Section */}
      <div className="bg-[#06304b] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Anyone can learn cyber security with SiBer (Si Bertahan)
            </h1>
            <p className="text-xl mb-8">
              Hands-on cyber security training through real-world scenarios
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setShowRegisterModal(true);
                  // Reset form values to ensure a clean form
                  setEmail("");
                  setPassword("");
                }}
                className="bg-white text-[#06304b] px-6 py-3 rounded-md hover:bg-gray-200 font-semibold"
              >
                Join for FREE
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#06304b]">
                Explore Courses
              </button>
            </div>
            <div className="flex space-x-8 mt-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Beginner Friendly</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Guides and Challenges</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/image/cybersecurity-hero.png" 
              width={600} 
              height={400} 
              alt="Cyber Security Training"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">
            Real-world defensive cyber security training
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Master the skills to protect digital assets and systems. 
            Our practice-focused approach ensures you're ready to tackle 
            real-world cyber security challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/image/learn-by-doing.png"
                  width={120}
                  height={120}
                  alt="Learn by doing"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn by doing</h3>
              <p className="text-gray-600">
                Practice in realistic environments to build practical skills that stick.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/image/guided-learning.png"
                  width={120}
                  height={120}
                  alt="Guided learning"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Guided learning</h3>
              <p className="text-gray-600">
                Step-by-step instructions for all skill levels, from beginner to advanced.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/image/real-world.png"
                  width={120}
                  height={120}
                  alt="Real-world training"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-world training</h3>
              <p className="text-gray-600">
                Scenarios based on actual cyber security incidents and challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/image/engaging.png"
                  width={120}
                  height={120}
                  alt="Engaging lessons"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Engaging lessons</h3>
              <p className="text-gray-600">
                Interactive content that makes learning cyber security fun and interesting.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/image/on-demand.png"
                  width={120}
                  height={120}
                  alt="On-demand learning"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-demand learning</h3>
              <p className="text-gray-600">
                Access training materials anytime, anywhere, at your own pace.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/image/cost-effective.png"
                  width={120}
                  height={120}
                  alt="Cost-effective"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost-effective</h3>
              <p className="text-gray-600">
                High-quality training at a fraction of the cost of traditional courses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">Community</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with other like-minded cyber security students and join our
              huge community. Ask questions, share knowledge and meet people on
              the same journey as you.
            </p>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-[#06304b]">4,178,000+</h3>
            <p className="text-2xl mt-2">Registered Users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Community Testimonials */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-[#06304b] text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={`/image/avatar-${(i % 3) + 1}.png`}
                    width={50}
                    height={50}
                    alt="User profile"
                    className="rounded-full bg-white mr-4"
                  />
                  <div>
                    <div className="font-semibold text-lg">
                      {["Alex", "Taylor", "Jordan", "Riley", "Morgan", "Casey"][i-1]}
                    </div>
                    <div className="text-gray-300">
                      @{["security_alex", "CyberTay", "J_secure", "r_defender", "M_ethical", "c_hacker"][i-1]}
                    </div>
                  </div>
                </div>
                <p>
                  {[
                    "SiBer completely changed how I approach security. The practical exercises gave me confidence to tackle real problems!",
                    "As a complete beginner, I was intimidated by cyber security. SiBer made it accessible and now I'm working in the field!",
                    "The community is incredible. I've learned as much from other students as from the official material.",
                    "Flexible learning that worked with my full-time job. I could practice when it suited me, and the labs are excellent.",
                    "The challenges are addictive! They're tough but fair, and the sense of achievement when you solve one is amazing.",
                    "Great value for money. I compared several platforms and SiBer offers the most comprehensive training at the best price."
                  ][i-1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration CTA */}
      <div className="bg-[#06304b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to start your cyber security journey?</h2>
          <button
            onClick={() => {
              setShowRegisterModal(true);
              // Reset form values to ensure a clean form
              setEmail("");
              setPassword("");
            }}
            className="bg-white text-[#06304b] px-8 py-4 rounded-md hover:bg-gray-200 font-bold text-lg"
          >
            Join SiBer Today
          </button>
          <p className="mt-4">No credit card required. Start learning for free.</p>
        </div>
      </div>

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
    </section>
  );
};

export default Page;
