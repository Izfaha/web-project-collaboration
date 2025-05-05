import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="font-noto-sans-font">
      {/* Top homepage */}
      <div className="bg-[#06304b] text-white">
        <div className="p-[170]">
          <h1 className="text-4xl font-semibold">
            Anyone can learn cyber security <br /> with SiBer (Si Bertahan)
          </h1>
          <br />
          <p>Hands-on cyber security training through real-world scenarios</p>
          <br />
          <br />
          {/* Search bar */}
          <div>
            <form action="#" method="get">
              <input
                type="text"
                name="search"
                className="border-2 px-4 py-2 rounded-[7px] mr-7 w-[400]"
              />
              <button
                type="submit"
                className="border-2 px-4 py-2 rounded-[7px] hover:bg-white hover:text-black cursor-pointer"
              >
                Join for FREE
              </button>
            </form>
          </div>
          {/* text checklist */}
          <br />
          <div className="flex space-x-20 pb-3">
            <p>Beginner Friendly</p>
            <p>Guides and Challenge</p>
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mt-4 place-items-center">
        {" "}
        {/* wrapper di for centering all of contain inside */}
        <h1 className="text-4xl font-semibold">
          Real-world defensive cyber security training
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          excepturi temporibus, maxime magnam quo sunt asperiores odio nesciunt
          quisquam. Maxime itaque cum veniam repudiandae est quisquam, aperiam
          voluptas.
        </p>
      </div>
      <br />

      {/* Image for cons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="justify-items-center">
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt="computer-logo"
          />
          <br />
          <p>Learn by doing</p>
          <br />
        </div>
        <div className="justify-items-center">
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt="computer-logo"
          />
          <br />
          <p>Guided learning for all skills</p>
          <br />
        </div>
        <div className="justify-items-center">
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt="computer-logo"
          />
          <br />
          <p>real-world training</p>
          <br />
        </div>
        <div className="justify-items-center">
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt="computer-logo"
          />
          <br />
          <p>Engaging and fun lessons</p>
          <br />
        </div>
        <div className="justify-items-center">
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt="computer-logo"
          />
          <br />
          <p>Online on-demand learning</p>
          <br />
        </div>
        <div className="justify-items-center">
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt="computer-logo"
          />
          <br />
          <p>Cost-effective</p>
          <br />
        </div>
      </div>
      {/* Community */}
      <div className="place-items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-semibold">Community</h1>
          <br />
          <p>
            Connect with other like-minded cyber security students and join our
            huge community. Ask questions, share knowledge and meet people on
            the same journey as you.
          </p>
        </div>
        {/* Active User */}
        <div className="place-items-center py-10">
          <h1 className="text-5xl font-bold text-[#06304b]">4,1782,000</h1>
          <h3 className="text-2xl">Registered Users</h3>
        </div>
        {/* Comments */}
        <div className="grid grid-cols-3 gap-5">
          {/* box 1 ======================================================================================================== */}
          <div className="w-[500px] border-[#06304b] border-4 rounded-2xl bg-[#06304b] text-white py-3">
            {/* profile and tag */}
            <div className="grid grid-cols-2">
              <Image
                src="/image/cup.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full self-center ml-4 bg-white"
              />
              <div>
                <span className="text-[20px] font-semibold -ml-[180px]">
                  Linus
                </span>
                <p className="-ml-[180px]">@Linux_</p>
              </div>
            </div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              architecto tenetur! Cupiditate officia quidem possimus excepturi
              tempore libero sunt doloremque.officia quidem possimus excepturi
              tempore libero sunt doloremque.
            </p>
          </div>
          {/* ============================================================================================== */}

          {/* box 2 ======================================================================================================== */}
          <div className="w-[500px] border-[#06304b] border-4 rounded-2xl bg-[#06304b] text-white py-3">
            {/* profile and tag */}
            <div className="grid grid-cols-2">
              <Image
                src="/image/cup.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full self-center ml-4 bg-white"
              />
              <div>
                <span className="text-[20px] font-semibold -ml-[180px]">
                  Linus
                </span>
                <p className="-ml-[180px]">@Linux_</p>
              </div>
            </div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              architecto tenetur! Cupiditate officia quidem possimus excepturi
              tempore libero sunt doloremque.officia quidem possimus excepturi
              tempore libero sunt doloremque.
            </p>
          </div>
          {/* ============================================================================================== */}
          {/* box 3 ======================================================================================================== */}
          <div className="w-[500px] border-[#06304b] border-4 rounded-2xl bg-[#06304b] text-white py-3">
            {/* profile and tag */}
            <div className="grid grid-cols-2">
              <Image
                src="/image/cup.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full self-center ml-4 bg-white"
              />
              <div>
                <span className="text-[20px] font-semibold -ml-[180px]">
                  Linus
                </span>
                <p className="-ml-[180px]">@Linux_</p>
              </div>
            </div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              architecto tenetur! Cupiditate officia quidem possimus excepturi
              tempore libero sunt doloremque.officia quidem possimus excepturi
              tempore libero sunt doloremque.
            </p>
          </div>
          {/* ============================================================================================== */}
          {/* box 1 ======================================================================================================== */}
          <div className="w-[500px] border-[#06304b] border-4 rounded-2xl bg-[#06304b] text-white py-3">
            {/* profile and tag */}
            <div className="grid grid-cols-2">
              <Image
                src="/image/cup.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full self-center ml-4 bg-white"
              />
              <div>
                <span className="text-[20px] font-semibold -ml-[180px]">
                  Linus
                </span>
                <p className="-ml-[180px]">@Linux_</p>
              </div>
            </div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              architecto tenetur! Cupiditate officia quidem possimus excepturi
              tempore libero sunt doloremque.officia quidem possimus excepturi
              tempore libero sunt doloremque.
            </p>
          </div>
          {/* ============================================================================================== */}

          {/* box 2 ======================================================================================================== */}
          <div className="w-[500px] border-[#06304b] border-4 rounded-2xl bg-[#06304b] text-white py-3">
            {/* profile and tag */}
            <div className="grid grid-cols-2">
              <Image
                src="/image/cup.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full self-center ml-4 bg-white"
              />
              <div>
                <span className="text-[20px] font-semibold -ml-[180px]">
                  Linus
                </span>
                <p className="-ml-[180px]">@Linux_</p>
              </div>
            </div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              architecto tenetur! Cupiditate officia quidem possimus excepturi
              tempore libero sunt doloremque.officia quidem possimus excepturi
              tempore libero sunt doloremque.
            </p>
          </div>
          {/* ============================================================================================== */}
          {/* box 3 ======================================================================================================== */}
          <div className="w-[500px] border-[#06304b] border-4 rounded-2xl bg-[#06304b] text-white py-3">
            {/* profile and tag */}
            <div className="grid grid-cols-2">
              <Image
                src="/image/cup.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full self-center ml-4 bg-white"
              />
              <div>
                <span className="text-[20px] font-semibold -ml-[180px]">
                  Linus
                </span>
                <p className="-ml-[180px]">@Linux_</p>
              </div>
            </div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              architecto tenetur! Cupiditate officia quidem possimus excepturi
              tempore libero sunt doloremque.officia quidem possimus excepturi
              tempore libero sunt doloremque.
            </p>
          </div>
          {/* ============================================================================================== */}
        </div>
        
      </div>
    </section>
  );
};

export default Page;
