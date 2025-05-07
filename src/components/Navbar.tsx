import Image from 'next/image' // if using I while importing Image besar maka di elemen image harus besar => Image
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex bg-white shadow-md px-8 py-4 place-items-center">
            {/* left side */}
            <div className="flex place-items-center mr-auto">
                {/* nama in the left */}
                <a href="http://"><span className="text-4xl font-bold mr-10 ml-auto">SiBer</span></a>
                {/* menu in the middle as visual */}
                <ul className="flex text-xl place-items-center">
                    {/* Home logo */}
                    <li className='mr-7'>
                        <div className='place-items-center'>
                            {/* I nya besar karena di atas I nya besar */}
                                <Image
                                    src="/image/home.png"
                                    width={25}
                                    height={25}
                                    alt="home-logo"
                                />
                                <a href="http://">Home</a>
                        </div>
                    </li>
                    {/* Challenge logo */}
                    <li className='mr-7'>
                        <div className='place-items-center'>
                            {/* I nya besar karena di atas I nya besar */}
                            <Image
                                src="/image/book-black.png"
                                width={25}
                                height={25}
                                alt="challenge-logo"
                            />
                            <a href="http://">Challenge</a>
                        </div>
                    </li>
                    {/* Leaderboard logo */}
                    <li>
                        <div className='place-items-center'>
                            {/* I nya besar karena di atas I nya besar */}
                            <Image
                                src="/image/cup.png"
                                width={25}
                                height={25}
                                alt="leaderboard-logo"
                            />
                            <a href='#'>Leaderboard</a>
                        </div>
                    </li>
                </ul>
            </div>

            {/* right side */}
            <div className='flex space-x-7 ml-auto'>
                {/* seach logo */}
                <a href="http://">
                    <Image
                        src="/image/search.png"
                        width={25}
                        height={25}
                        alt='search-logo'
                    />
                </a>

                {/* notif logo */}
                <a href="http://">
                    <Image
                        src="/image/notif.png"
                        width={25}
                        height={25}
                        alt='search-logo'
                    />
                </a>

            </div>
        </nav>
    );
};

export default Navbar;
