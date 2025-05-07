import Image from 'next/image'

export default function challege() {
    return (
        <section>
            <div className="bg-[#06304b] m-5 max-w-full rounded-xl p-10">
                <div className="flex place-items-center">
                    <div className="place-items-center">
                        <h1 className="text-[30px] font-semibold text-white items-center mr-10">Challenges</h1>
                        <Image src="/image/book-white.png" width={80} height={80} alt="book-logo" className="mt-5 mr-10 place-items-center"/>
                    </div>
                    <div>
                        <div className="flex place-items-center mb-5 justify-center">
                            <div className="mr-50 ml-30">
                                <p className="text-white text-2xl font-bold">0/18</p>
                                <p className="text-white">Challenges</p>
                            </div>
                            <div className="flex place-items-center mr-50">
                                <p className="text-white mr-3">0/6</p>
                                <p className="text-green-300">Easy</p>
                            </div>
                            <div className="flex place-items-center mr-50">
                                <p className="text-white mr-3">0/6</p>
                                <p className="text-orange-300">Medium</p>
                            </div>
                            <div className="flex place-items-center mr-50">
                                <p className="text-white mr-3">0/6</p>
                                <p className="text-red-400">Hard</p>
                            </div>
                        </div>
                        <h2 className="bg-white opacity-70 w-300 p-5 mr-10">0%</h2>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="bg-[#06304b] m-5 w-[500px] rounded-xl p-10">
                    <div className="flex place-items-center justify-between bg-white opacity-70 w-[430px] p-3 rounded-xl">
                    {/* search challenge */}
                        <h3 className="text-[15px]">Search challenge name</h3>
                        <Image src="/image/search.png" width={15} height={15} alt="search-logo"/>
                    </div>
                    {/* sort by */}
                    <p className="text-white text-[20px] mt-5 mb-2">Sort By</p>
                    <div className="flex place-items-center justify-between bg-white opacity-70 w-[430px] p-3 rounded-xl">
                        <h4 className="text-[15px]">None</h4>
                        <Image src="/image/arrow.png" width={15} height={15} alt="arrow-logo"/>
                    </div>
                    {/* status */}
                    <p className="text-white text-[20px] mt-5 mb-2">Status</p>      
                    <div className="flex place-items-center">
                        <h5 className="bg-white opacity-70 w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-white ">Completed</p>
                    </div>
                    <div className="flex place-items-center mt-3">
                        <h5 className="bg-white opacity-70 w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-white ">Uncomplete</p>
                    </div>
                    {/* difficulties */}
                    <p className="text-white text-[20px] mt-5 mb-2">Difficulties</p>
                    <div className="flex place-items-center mt-3">
                        <h5 className="bg-white opacity-70  rounded-full w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-green-300 mr-10">Easy</p>
                        <h5 className="bg-white opacity-70  rounded-full w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-orange-300 mr-10">Medium</p>
                        <h5 className="bg-white opacity-70  rounded-full w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-red-400 mr-10">Hard</p>
                    </div>
                    {/* categories */}
                    <p className="text-white text-[20px] mt-5 mb-2">Categories</p>
                    <div className="flex place-items-center mb-3">
                        <h5 className="bg-white opacity-70 w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-white ">Incident Response</p>
                    </div>
                    <div className="flex place-items-center mb-3">
                        <h5 className="bg-white opacity-70 w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-white ">Digital Forensic</p>
                    </div>
                    <div className="flex place-items-center">
                        <h5 className="bg-white opacity-70 w-6 mr-4 text-white font-opacity-0">.</h5>
                        <p className="text-white ">Malware Analyst</p>
                    </div>
                    {/* Reset & Done */}
                    <div className="flex mt-25 gap-3 justify-center">
                        <button className="bg-white opacity-70 p-3 rounded-xl w-50 text-black font-semibold flex items-center justify-center">Reset</button>
                        <button className="bg-white opacity-70 p-3 rounded-xl w-50 text-black font-semibold flex items-center justify-center">Done</button>
                    </div>
                </div>

                <div>
                    {/* card baris 1 */}
                    <div className="flex">
                        {/* card succesfull intruder */}
                        <div className="bg-[#06304b] m-5 w-[450px] rounded-xl p-10">
                            <div className="flex place-items-center">
                                <div>
                                    <Image src="/image/book-white.png" width={50} height={50} alt="book-logo"/>
                                    <p className="text-green-300 mt-3">Easy</p>
                                </div>
                                <div>
                                    <p className="text-white text-2xl font-bold ml-10">Successfull Intruder</p>
                                    <p className="text-gray-400 ml-10">Dimas</p>
                                    <div className="flex ml-10">
                                        <p className="text-blue-300">Incident Response</p>
                                        <p className="text-yellow-300 ml-10">10 Points</p>
                                    </div>
                                    <button className="bg-black text-white p-2 w-30 rounded-xl mt-5 ml-10 ">Start</button>
                                </div>
                            </div>
                        </div>
                        {/* card xss shield */}
                        <div className="bg-[#06304b] m-5 w-[450px] rounded-xl p-10">
                            <div className="flex place-items-center">
                                <div>
                                    <Image src="/image/book-white.png" width={50} height={50} alt="book-logo"/>
                                    <p className="text-green-300 mt-3">Easy</p>
                                </div>
                                <div>
                                    <p className="text-white text-2xl font-bold ml-10">XSS Shield</p>
                                    <p className="text-gray-400 ml-10">Dimas</p>
                                    <div className="flex ml-10">
                                        <p className="text-blue-300">Incident Response</p>
                                        <p className="text-yellow-300 ml-10">10 Points</p>
                                    </div>
                                    <button className="bg-black text-white p-2 w-30 rounded-xl mt-5 ml-10 ">Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* card baris 2 */}
                    <div className="flex">
                        {/* card path guard */}
                        <div className="bg-[#06304b] m-5 w-[450px] rounded-xl p-10">
                            <div className="flex place-items-center">
                                <div>
                                    <Image src="/image/book-white.png" width={50} height={50} alt="book-logo"/>
                                    <p className="text-orange-300 mt-3">Medium</p>
                                </div>
                                <div>
                                    <p className="text-white text-2xl font-bold ml-10">Path Guard</p>
                                    <p className="text-gray-400 ml-10">Dimas</p>
                                    <div className="flex ml-10">
                                        <p className="text-blue-300">Incident Response</p>
                                        <p className="text-yellow-300 ml-10">10 Points</p>
                                    </div>
                                    <button className="bg-black text-white p-2 w-30 rounded-xl mt-5 ml-10 ">Start</button>
                                </div>
                            </div>
                        </div>
                        {/* card corrupted logs */}
                        <div className="bg-[#06304b] m-5 w-[450px] rounded-xl p-10">
                            <div className="flex place-items-center">
                                <div>
                                    <Image src="/image/book-white.png" width={50} height={50} alt="book-logo"/>
                                    <p className="text-orange-300 mt-3">Medium</p>
                                </div>
                                <div>
                                    <p className="text-white text-2xl font-bold ml-10">Corrupted Logs</p>
                                    <p className="text-gray-400 ml-10">Dimas</p>
                                    <div className="flex ml-10">
                                        <p className="text-blue-300">Incident Response</p>
                                        <p className="text-yellow-300 ml-10">10 Points</p>
                                    </div>
                                    <button className="bg-black text-white p-2 w-30 rounded-xl mt-5 ml-10 ">Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* card baris 3 */}
                    <div className="flex">
                        {/* card secret location */}
                        <div className="bg-[#06304b] m-5 w-[450px] rounded-xl p-10">
                            <div className="flex place-items-center">
                                <div>
                                    <Image src="/image/book-white.png" width={50} height={50} alt="book-logo"/>
                                    <p className="text-red-400 mt-3">Hard</p>
                                </div>
                                <div>
                                    <p className="text-white text-2xl font-bold ml-10">Secret Location</p>
                                    <p className="text-gray-400 ml-10">Dimas</p>
                                    <div className="flex ml-10">
                                        <p className="text-blue-300">Incident Response</p>
                                        <p className="text-yellow-300 ml-10">10 Points</p>
                                    </div>
                                    <button className="bg-black text-white p-2 w-30 rounded-xl mt-5 ml-10 ">Start</button>
                                </div>
                            </div>
                        </div>
                        {/* card stealthy shell */}
                        <div className="bg-[#06304b] m-5 w-[450px] rounded-xl p-10">
                            <div className="flex place-items-center">
                                <div>
                                    <Image src="/image/book-white.png" width={50} height={50} alt="book-logo"/>
                                    <p className="text-red-400 mt-3">Hard</p>
                                </div>
                                <div>
                                    <p className="text-white text-2xl font-bold ml-10">Stealthy Shell</p>
                                    <p className="text-gray-400 ml-10">Dimas</p>
                                    <div className="flex ml-10">
                                        <p className="text-blue-300">Incident Response</p>
                                        <p className="text-yellow-300 ml-10">10 Points</p>
                                    </div>
                                    <button className="bg-black text-white p-2 w-30 rounded-xl mt-5 ml-10 ">Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}