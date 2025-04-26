import React from "react";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-mont",
});

const Navbar = () => {
    return (
        <nav className=" bg-amber-200 shadow-md px-8 py-4">
            <div className="mx-auto flex justify-between items-center max-w-7xl">
                {/* nama in the left */}
                <span className="text-4xl font-bold">SiBer</span>
                {/* menu in the middle as visual */}
                <ul className="flex text-xl space-x-12">
                    {["Home", "Challenge", "Leaderboard", "About me"].map((item) => (
                        <li
                            key={item}
                            className="hover:bg-amber-100 hover:shadow hover:rounded-full px-4 py-2 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
