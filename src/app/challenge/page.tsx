export default function challege() {
    return (
        <section>
            <div className="bg-[#00558c] m-5 max-w-full rounded-xl p-10">
                <div className="flex place-items-center">
                    <h1 className="text-[30px] font-bold text-white items-center mr-10">Challenges</h1>
                    <div>
                        <h2 className="bg-white opacity-50 w-280 p-5 mr-10">0%</h2>
                        <div className="flex place-items-center mt-5 justify-center">
                            <div className="mr-30">
                                <p className="text-white">0/6</p>
                                <p className="text-white">Easy</p>
                            </div>
                            <div className="mr-30">
                                <p className="text-white">0/6</p>
                                <p className="text-white">Medium</p>
                            </div>
                            <div className="mr-30">
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
        </section>
    );
}