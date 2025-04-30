export default function challege() {
    return (
        <section>
            <div className="bg-[#06304b] m-5 max-w-full rounded-xl p-10">
                <div className="flex place-items-center">
                    <h1 className="text-[30px] font-bold text-white items-center mr-10">Challenges</h1>
                    <div>
                        <h2 className="bg-white opacity-70 w-260 p-5 mr-10">0%</h2>
                        <div className="flex place-items-center mt-5 justify-center">
                            <div className="mr-50">
                                <p className="text-white">0/6</p>
                                <p className="text-white">Easy</p>
                            </div>
                            <div className="mr-50">
                                <p className="text-white">0/6</p>
                                <p className="text-white">Medium</p>
                            </div>
                            <div className="mr-50">
                                <p className="text-white">0/6</p>
                                <p className="text-white">Hard</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-white text-2xl font-bold">0/18</p>
                        <p className="text-white">Challenges</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#06304b] m-5 w-[500px] rounded-xl p-10">
                {/* search challenge */}
                <h3 className="bg-white opacity-70 w-[430px] p-3 text-[15px] rounded-xl">Search challenge name</h3>
                {/* sort by */}
                <p className="text-white text-[20px] mt-5 mb-2">Sort By</p>
                <h4 className="bg-white opacity-70 w-[430px] p-3 text-[15px] rounded-xl">None</h4>
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
                <div className="flex mt-10 gap-2 justify-center">
                    <button className="bg-white opacity-70 p-3 rounded-xl w-50 text-black font-semibold flex items-center justify-center">Reset</button>
                    <button className="bg-white opacity-70 p-3 rounded-xl w-50 text-black font-semibold flex items-center justify-center">Done</button>
                </div>
            </div>
        </section>
    );
}