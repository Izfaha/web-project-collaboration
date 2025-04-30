import Image from 'next/image' // if using I while importing Image besar maka di elemen image harus besar => Image
import React from "react";

const Navbar = () => {
    return (
        <nav className=" bg-[#00558c] shadow-md px-8 py-4">
            <div className="mx-auto flex justify-between items-center max-w-7xl">
                {/* nama in the left */}
                <span className="text-4xl font-bold">SiBer</span>
                {/* menu in the middle as visual */}
                <ul className="flex text-xl space-x-12">
                    <li>
                        <div>
                            {/* I nya besar karena di atas I nya besar */}
                            <Image 
                            src="/image/home.png" 
                            width={10}
                            height={10}
                            alt="home-logo"
                            />
                            <p>Home</p>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
