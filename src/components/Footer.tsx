import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SiBer</h3>
            <p>
              Your trusted partner in cyber security education.
              Building a safer digital world through quality training.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/courses" className="hover:text-gray-300">Courses</Link></li>
              <li><Link href="/challenges" className="hover:text-gray-300">Challenges</Link></li>
              <li><Link href="/community" className="hover:text-gray-300">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link href="/documentation" className="hover:text-gray-300">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-gray-300">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: contact@siber.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-gray-300"><span>Twitter</span></a>
                  <a href="#" className="hover:text-gray-300"><span>LinkedIn</span></a>
                  <a href="#" className="hover:text-gray-300"><span>GitHub</span></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SiBer (Si Bertahan). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
