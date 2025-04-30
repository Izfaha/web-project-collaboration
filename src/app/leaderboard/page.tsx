export default function leaderboard() {
    return (
        <section>
            <main className="relative p-8">
                {/* halaman atas */}
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gray-100 -z-10 "></div>
                <h1 className="text-center text-[30px] ">Leaderboards</h1>
                <hr className="w-40 mx-auto border-t-2 border-blue-400" />
                <p className="text-center">Welcome to dashboard - here are our top 10 user</p>

                <main className="flex justify-evenly items-center mr-70 mt-10">
                    <div className="flex justify-center items-end gap-8 mt-10"></div>

                    {/* second position */}
                    <div className="flex flex-col items-center h-50">
                        <img
                            src="/path/to/book.png"
                            alt="second position"
                            className="w-32 h-32 rounded-full border-4 border-green-500"
                        />
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full mt-2 text-sm">1600</div>
                        <p className="mt-1 font-semibold">Ana</p>
                        <p className="text-xs text-gray-500">Wakil Raja</p>
                        <hr className="w-32 border-t-4 border-green-400" />
                    </div>


                    <div className="flex flex-col items-center h-80">
                        {/* first Position */}
                        <img
                            src="/path/to/book.png"
                            alt="first position"
                            className="w-35 h-35 rounded-full border-4 border-yellow-500"
                        />
                        <div className="bg-yellow-500 text-white px-2 py-1 rounded-full mt-2 text-sm">1600</div>
                        <p className="mt-1 font-semibold">Robert</p>
                        <p className="text-xs text-gray-500">Wakil Raja</p>
                        <hr className="w-32 border-t-4 border-yellow-400" />
                    </div>


                    <div className="flex flex-col items-center">
                        {/* third position */}
                        <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />
                        <div className="bg-red-500 text-white px-2 py-1 rounded-full mt-2 text-sm">1600</div>
                        <p className="mt-1 font-semibold">Aurel</p>
                        <p className="text-xs text-gray-500">Pahlawan Tiga Besar</p>
                        <hr className="w-32 border-t-4 border-red-400" />
                    </div>
                </main>
            </main>


            {/* halaman bawah */}
            <main className="relative min-h-[50vh] ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-fit bg-gray-100 -z-10">
            {/* posisi 4 */}
            <div className="flex justify-evenly items-start rounded-xl p-8">                        
                <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />

                <h4>Andre <br />
                    Penguasa Empat Besar
                </h4>

                
                <div className="w-[2px] h-32 bg-red-400"></div>
                <h4>Score <br />
                    1450
                </h4>

                <h4>Rank<br />
                    4
                </h4>

                <h4>Progres <br />
                    90%
                </h4></div>


                {/* posisi 5 */}
                <div className="flex justify-evenly items-start rounded-xl p-8">                        
                <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />

                <h4>Andre <br />
                    Penguasa Empat Besar
                </h4>

                
                <div className="w-[2px] h-32 bg-red-400"></div>
                <h4>Score <br />
                    1450
                </h4>

                <h4>Rank<br />
                    4
                </h4>

                <h4>Progres <br />
                    90%
                </h4></div>


                {/* posisi 6 */}
                <div className="flex justify-evenly items-start rounded-xl p-8">                        
                <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />

                <h4>Andre <br />
                    Penguasa Empat Besar
                </h4>

                
                <div className="w-[2px] h-32 bg-red-400"></div>
                <h4>Score <br />
                    1450
                </h4>

                <h4>Rank<br />
                    4
                </h4>

                <h4>Progres <br />
                    90%
                </h4></div>

                {/* posisi 7 */}
                <div className="flex justify-evenly items-start rounded-xl p-8">                        
                <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />

                <h4>Andre <br />
                    Penguasa Empat Besar
                </h4>

                
                <div className="w-[2px] h-32 bg-red-400"></div>
                <h4>Score <br />
                    1450
                </h4>

                <h4>Rank<br />
                    4
                </h4>

                <h4>Progres <br />
                    90%
                </h4></div>

                {/* posisi 8 */}
                <div className="flex justify-evenly items-start rounded-xl p-8">                        
                <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />

                <h4>Andre <br />
                    Penguasa Empat Besar
                </h4>

                
                <div className="w-[2px] h-32 bg-red-400"></div>
                <h4>Score <br />
                    1450
                </h4>

                <h4>Rank<br />
                    4
                </h4>

                <h4>Progres <br />
                    90%
                </h4></div>

                {/* posisi 9 */}
                <div className="flex justify-evenly items-start rounded-xl p-8">                        
                <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />

                <h4>Andre <br />
                    Penguasa Empat Besar
                </h4>

                
                <div className="w-[2px] h-32 bg-red-400"></div>
                <h4>Score <br />
                    1450
                </h4>

                <h4>Rank<br />
                    4
                </h4>

                <h4>Progres <br />
                    90%
                </h4></div>

                {/* posisi 10 */}
                <div className="flex justify-evenly items-start rounded-xl p-8">                        
                <img
                            src="/path/to/book.png"
                            alt="third position"
                            className="w-28 h-28 rounded-full border-4 border-red-500"
                        />

                <h4>Andre <br />
                    Penguasa Empat Besar
                </h4>

                
                <div className="w-[2px] h-32 bg-red-400"></div>
                <h4>Score <br />
                    1450
                </h4>

                <h4>Rank<br />
                    4
                </h4>

                <h4>Progres <br />
                    90%
                </h4></div>

                
            </div>

            

        </main>

            
        </section>
    )
}