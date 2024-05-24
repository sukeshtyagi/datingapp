import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import MidComps from "./MidComps";

function Header() {
  return (
    <div className="divOuter box-border w-full">
      <div className="overlay box-border w-full wideDesktop:w-[1400px] mx-auto">
        <div className="headerContainer box-border w-11/12 mx-auto flex justify-between items-center ">
          <div className="imgDiv box-border">
            <img
              src="/images/logoHeader.png"
              alt="logo of dating app"
              className="box-border w-[64px] h-[79px]"
            />
          </div>
          <div className="btn box-border flex flex-col md:flex-row justify-end items-center gap-7">
            <button className="box-border w-[138px] md:w-[168px] h-[50px] py-2 -skew-x-12 bg-gradient-to-b from-orange1 to-orange2 rounded-xl text-white cursor-pointer">
              <span className="inline-block box-border text-[18px]">
                LAUNCH APP
              </span>
            </button>

            <button className="box-border w-[138px] md:w-[168px] h-[50px] py-2 -skew-x-12 bg-gradient-to-b from-orange1 to-orange2 rounded-xl text-white cursor-pointer">
              <span className="inline-block box-border text-[18px]">
                LOG IN
              </span>
            </button>
          </div>
        </div>
        <div className="section2 box-border w-11/12 mx-auto mt-16 px-6 py-6 flex flex-col gap-6 lg:flex-row justify-between items-start">
          <div className="leftDiv box-border w-3/4 md:w-[475px] mx-auto p-1">
            <h1 className="heading1 box-border w-full pl-1 font-medium text-white text-xl sm:text-2xl">
              NOW GET THE REAL
            </h1>
            <h1 className="heading2 box-border w-4/5 md:full my-2 font-bold text-orange1 text-xl sm:text-3xl md:text-4xl">
              DATING EXPERIENCE
            </h1>
            <p className="para1 box-border w-full md:w-[350px] text-lg text-white text-justify font-light">
              Take your friendships to a whole new level! Chat with your friends
              in interactive virtual rooms and meet new people from all over the
              world.
            </p>
            <img
              src="/images/Group 111.png"
              alt=""
              className="box-border my-4 w-3/5"
            />

            <div className="btn box-border pl-[5px] flex justify-start items-center gap-7">
              <button className="box-border w-[168px] h-[50px] py-2 -skew-x-12 bg-gradient-to-b from-orange1 to-orange2 rounded-xl text-white cursor-pointer">
                <span className="inline-block box-border text-[18px]">
                  EXPLORE
                </span>
              </button>

              <button className="box-border w-[168px] h-[50px] py-2 -skew-x-12 bg-gradient-to-b from-orange1 to-orange2 rounded-xl text-white cursor-pointer">
                <span className="inline-block box-border text-[18px]">
                  LEARN MORE
                </span>
              </button>
            </div>
          </div>

          <div className="rightDiv box-border w-3/4 md:w-[475px] mx-auto py-6 bg-divBcg1 border border-orange2 text-white rounded-xl flex flex-col gap-4">
            <h1 className="box-border w-full text-center text-2xl">
              Continue with
            </h1>
            <div className="div box-border w-4/5 py-2 mx-auto text-2xl cursor-pointer bg-divBcg border border-orange1 rounded-xl flex justify-center items-center gap-4">
              <FontAwesomeIcon icon={faWallet} />
              <h1>Wallet</h1>
            </div>

            <div className="div box-border w-4/5 py-2 mx-auto text-2xl cursor-pointer bg-divBcg border border-orange1 rounded-xl flex justify-center items-center gap-4">
              <FontAwesomeIcon icon={faGoogle} />
              <h1>Google</h1>
            </div>

            <div className="div box-border w-4/5 py-2 mx-auto text-2xl cursor-pointer bg-divBcg border border-orange1 rounded-xl flex justify-center items-center gap-4">
              <FontAwesomeIcon icon={faApple} />
              <h1>Email</h1>
            </div>

            <div className="div box-border w-4/5 py-2 mx-auto text-2xl cursor-pointer bg-divBcg border border-orange1 rounded-xl flex justify-center items-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} />
              <h1>Email</h1>
            </div>
          </div>
        </div>

        <div className="section3 box-border w-11/12 mx-auto mt-16 p-1">
          <h1 className="box-border w-4/5 sm:w-3/5 md:w-full mx-auto font-black text-white text-base sm:text-6xl text-left sm:text-center">
            ENTER INTO A MASSIVE{" "}
          </h1>
          <p className="box-border w-4/5 sm:w-3/5 md:w-full mx-auto font-black text-white text-base sm:text-6xl text-left sm:text-center">
            <span className="text-orange2">SOCIAL</span> EXPERIENCE.
          </p>{" "}
          <p className="para box-border w-4/5 mt-6 mx-auto font-light text-white sm:text-2xl text-left sm:text-center">
            <span className="box-border inline-block text-orange2">
              Social-e
            </span>{" "}
            is a Decentralised Dating App,as apart of Social-e Dating Network.
            With great technological advantages and AI driven system,Social-e
            aims to be Top Dating App and Network in the world.
          </p>
        </div>

        <div className="section4 box-border w-11/12 h-auto lg:h-[420px] mx-auto mt-16 px-12 pt-10 bg-divBcgAvtar  border border-orange2 rounded-3xl flex flex-col lg:flex-row justify-between items-start">
          <div className="leftDiv box-border w-full flex flex-col items-start justify-center gap-4">
            <img
              src="/images/logoHeader.png"
              alt="logo"
              className="box-border w-20"
            />
            <h1 className="heading box-border text-5xl text-white font-black">
              DOWNLOAD OUR <span className="text-orange2">APP</span>
            </h1>
            <p className="para box-border w-4/5 md:max-lg:w-full text-xl text-white font-thin">
              Metaverse to provide a comprehensive experience for a human and
              the whole world for anyone and everyone. Explore the virtual world
              and start you journey with{" "}
              <span className="box-border text-orange2 font-bold text-xl">
                Social-e
              </span>
            </p>
            <div className="btnDiv box-border flex gap-6">
              <div className="btn box-border w-fit px-6 pt-2 rounded-xl -skew-x-12 bg-white">
                <img
                  src="/images/Group 44.png"
                  alt=""
                  className="box-border skew-x-12 w-32"
                />
              </div>

              <div className="btn box-border w-fit px-6 pt-2 rounded-xl -skew-x-12 bg-white">
                <img
                  src="/images/Group 42.png"
                  alt=""
                  className="box-border skew-x-12 w-32"
                />
              </div>
            </div>
          </div>
          <div className="rightDiv box-border w-1/2 h-full">
            <img
              src="/images/Mask group.png"
              alt="masked "
              className="inline-block	box-border h-full"
            />
          </div>
        </div>
      </div>
      <MidComps />
    </div>
  );
}

export default Header;
