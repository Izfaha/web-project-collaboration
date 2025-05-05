import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 place-items-center px-[630px] mt-7 p-7">
      <div className="flex space-x-36 my-7 w-max">
        <div className="self-center">
          <h1 className="text-5xl font-bold">SiBer</h1>
          <span>SiBertahan</span>
        </div>

        {/* ============================== Learning ============================== */}
        <div>
          <h1 className="text-3xl font-bold">Learning</h1>
          <ul className="pt-3">
            <li>
              <a href="#">Hands-o Lab</a>
            </li>
            <li>
              <a href="http://">For Bussines</a>
            </li>
            <li>
              <a href="#">For Education</a>
            </li>
            <li>
              <a href="3">Competitive Hacking</a>
            </li>
          </ul>
        </div>
        {/* ============================== Learning ============================== */}

        {/* ============================== Resource ============================== */}
        <div>
          <h1 className="text-3xl font-bold">Resources</h1>
          <ul className="pt-3">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="http://">Newsroom</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="3">Work at SiBer</a>
            </li>
          </ul>
        </div>
        {/* ============================== Resource ============================== */}

        {/* ============================== Get in Touch ============================== */}
        <div>
          <h1 className="text-3xl font-bold">Get in touch</h1>
          <ul className="mt-3">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="http://">Forum</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        {/* ============================== Get in Touch ============================== */}
      </div>
    </footer>
  );
};

export default Footer;
