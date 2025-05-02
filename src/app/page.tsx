import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <section>
      {/* Top homepage */}
      <div className='bg-[#06304b] text-white'>
        <div className='p-[170]'>
          <h1 className='text-4xl'>Anyone can learn cyber security <br /> with SiBer (Si Bertahan)</h1>
          <br />
          <p>Hands-on cyber security training through real-world scenarios</p>
          <br />
          <br />
          {/* Search bar */}
          <div>
            <form action="#" method="get">
              <input type="text" name="search" className='border-2 px-4 py-2 rounded-[7px] mr-7 w-[400]' />
              <button type="submit" className='border-2 px-4 py-2 rounded-[7px]'>
                Join for FREE
              </button>
            </form>
          </div>
          {/* text checklist */}
          <br />
          <div className='flex space-x-20 pb-3'>
            <p>Beginner Friendly</p>
            <p>Guides and Challenge</p>
          </div>
        </div>
      </div>
      {/* Text */}
      <div className='mt-4 place-items-center'> {/* wrapper di for centering all of contain inside */}
        <h1 className='text-4xl font-semibold'>
          Real-world defensive cyber security training
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi
          temporibus, maxime magnam quo sunt asperiores odio nesciunt quisquam.
          Maxime itaque cum veniam repudiandae est quisquam, aperiam voluptas.
        </p>
      </div>
      <br />

      {/* Image for cons */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4'>
        <div className='justify-items-center'>
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt='computer-logo'
          />
          <br />
          <p>Learn by doing</p>
          <br />
        </div>
        <div className='justify-items-center'>
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt='computer-logo'
          />
          <br />
          <p>Guided learning for all skills</p>
          <br />
        </div>
        <div className='justify-items-center'>
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt='computer-logo'
          />
          <br />
          <p>real-world training</p>
          <br />
        </div>
        <div className='justify-items-center'>
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt='computer-logo'
          />
          <br />
          <p>Engaging and fun lessons</p>
          <br />
        </div>
        <div className='justify-items-center'>
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt='computer-logo'
          />
          <br />
          <p>Online on-demand learning</p>
          <br />
        </div>
        <div className='justify-items-center'>
          <Image
            src="/image/home.png"
            width={150}
            height={150}
            alt='computer-logo'
          />
          <br />
          <p>Cost-effective</p>
          <br />
        </div>
      </div>

    </section>
  );
}

export default Page;
