import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>
        <div className="bg-[#06304b] m-5 max-w-full rounded-xl p-10">
            <div className="flex">
                <Image src="/image/profile.jpeg" width={200} height={200} alt="profile" className="rounded-full"/>
                <div>
                    <div className="flex ml-10 mt-13 items-center">
                        <h1 className="text-white text-4xl font-semibold">Dimas</h1>
                        <p className="ml-5 text-green-200 text-[15px]">DECENDER</p>
                    </div>
                    <p className="text-[20px] text-gray-400 ml-10 mt-2">Rank: 1st</p>
                    <p className="text-[20px] text-yellow-400 ml-10 mt-2">Emperror</p>
                </div>
                <div className="hidden md:block w-[2px] h-auto bg-white ml-20"></div>
                <div className="flex">
                    <div className="flex m-auto ml-4 items-center">
                        <h1 className="text-white text-5xl font-semibold mr-2">0</h1>
                        <p className="text-white">Challenge</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page