import React from "react";
import Carousel from "./Carousal";
import Carousel2 from "./Carousal2";

function MidComps() {
  return (
    <div className="overlay box-border w-full wideDesktop:w-[1400px] mx-auto">
      <div className="outerDiv box-border w-11/12 mt-20 mx-auto">
        <div className="section5 box-border">
          <div className="leftDiv box-border">
            <img
              src="/images/Group 18.png"
              alt="group avatar"
              className="box-border "
            />
          </div>
        </div>
      </div>

      <div className="overlay box-border w-full mx-auto wideDesktop:w-[1400px] mx-auto bg-gradient-to-r from-darkSky from-40% to-reddish to-100%">
        <div className="outerDivSection6 box-border w-11/12 mt-16 pt-8 mx-auto flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center ">
          <div className="leftDiv box-border w-1/2 flex flex-col gap-2">
            <h1 className="heading1 box-border text-white text-4xl font-black">
              HANG OUT WITH
            </h1>
            <h1 className="heading2 box-border text-orange2 text-4xl font-black">
              FRIENDS & LOVED ONES
            </h1>
            <p className="para box-border mt-2 font-light text-white text-xl">
              With over 400 million Active users,Social-e is presenting the
              leading mobile first metaverse. Ever day,Users Create rooms, style
              avatars, host experiences, and much more. We're excited to bring
              the true digital owenership to the next 400 million
            </p>
          </div>

          <div className="rightDiv box-border w-full flex justify-start gap-0">
            <img
              src="/images/Group 46.png"
              alt=""
              className="box-border w-fit h-96 relative left-0 z-10"
            />
            <img
              src="/images/image 10.png"
              alt=""
              className="box-border w-fit h-[320px] relative right-28 top-16"
            />
            <img
              src="/images/image 9.png"
              alt=""
              className="box-border w-fit h-96 relative right-40"
            />
          </div>
        </div>
      </div>

      <div className="outerDivSection7 box-border w-11/12  mt-8 pt-8 mx-auto flex flex-col gap-2">
        <h1 className="heading1 box-border text-white text-3xl font-black">
          COME & EXPLORE A
        </h1>
        <h1 className="heading2 box-border text-white text-3xl font-black">
          HUMAN CENTER{" "}
          <span className="box-border text-orange2 text-[42px]">METAVERSE</span>
        </h1>
        <p className="para1 box-border mt-1 font-light text-white text-xl">
          Our Aim to bring people together through a virtual reality.
        </p>
        <p className="para2 box-border -mt-2 font-light text-white text-xl">
          Our intricate, rich worlds are social by design and built to last for
          decades.
        </p>
      </div>
      <Carousel />
      <div className="outerDivSection8 box-border w-11/12  mt-8 pt-8 mx-auto flex flex-col gap-4">
        <h1 className="heading box-border w-full text-center text-4xl text-white font-bold">
          READY TO START
        </h1>
        <h1 className="heading box-border w-full text-center text-4xl text-orange2 font-bold">
          DATING ?
        </h1>
      </div>
      <Carousel2 />

      <div className="outerDivSection9 box-border w-11/12  mt-8 pt-8 mx-auto flex flex-col gap-4">
        <h1 className="heading box-border w-full text-center text-4xl text-white font-bold">
          DRIVE-IN <span className="text-orange2">THEATRE</span>
        </h1>
        <p className="heading box-border w-full text-center text-xl text-white font-light">
          Tonights movie,<span className="text-orange2">The Lion King</span>
          ,starts in 15 minutes. A collective hatred is brewing among queer
          combinations twenty-something and thirty-something couples on dates.no
          one wants to miss this show enjoy your love with the show
        </p>
      </div>

      <div className="outerDivSection10 box-border w-11/12  mt-8 pt-8 mx-auto flex flex-col gap-4">
        <h1 className="heading box-border w-full text-center text-5xl text-white font-bold">
          INTERESTED IN
        </h1>
        <h1 className="heading box-border w-full text-center text-5xl text-white font-bold">
          WORKING WITH <span className=" text-orange2 font-bold">US ?</span>
        </h1>
        <button className="box-border w-[138px] md:w-[168px] h-[50px] mx-auto mt-6 py-2 -skew-x-12 bg-gradient-to-b from-orange1 to-orange2 rounded-xl text-white cursor-pointer">
          <span className="inline-block box-border text-[18px]">JOIN US</span>
        </button>
      </div>

      <div className="outerDivSection11 box-border w-11/12  mt-8 pt-8 mx-auto flex flex-col gap-4">
        <h1 className="heading box-border w-full text-center text-3xl text-white font-bold">
          CREATE <span className="text-orange2">NEW WORLD</span> WITH US
        </h1>
        <p className="heading box-border w-full -mt-4 text-center text-xl text-white font-light">
          Were building the future of social expressions - bringing your talent
          to our team.
        </p>
      </div>

      <div className="outerDivSection12 box-border w-11/12  mt-20 pt-8 mx-auto flex flex-col gap-4">
        <h1 className="heading box-border w-full text-center text-5xl text-white font-bold">
          FOLLOWING US <span className="text-orange2">YET?</span>
        </h1>
        <p className="heading box-border w-4/5 mx-auto  text-center text-lg text-white font-light">
          Our social media channerls provides various updates on our journey,
        </p>
        <p className="heading box-border w-full -mt-4 text-center text-lg text-white font-light">
          Please follow us and stay up to date.
        </p>
      </div>

      <div className="outerDivSection14 box-border w-11/12  mt-20 pt-8 mx-auto flex flex-col gap-4">
        <div className="innerDiv box-border w-4/5 px-8 py-8 mx-auto border border-orange2 rounded-2xl flex justify-between items-center">
          <img src="/images/Group 11.png" alt="" className="box-border w-1/2" />
          <button className="box-border w-[138px] md:w-[168px] h-[50px] py-2 -skew-x-12 bg-gradient-to-b from-orange1 to-orange2 rounded-xl text-white cursor-pointer">
            <span className="inline-block box-border text-[18px]">
              CONTACT US
            </span>
          </button>
        </div>
      </div>
      <div className="outerDivSection15 box-border w-11/12  mt-20 pt-8 mx-auto flex flex-col gap-4">
        <p className="heading box-border w-full -mt-4 text-center text-xl text-white font-light">
          &copy; 2022 Social-e. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default MidComps;
