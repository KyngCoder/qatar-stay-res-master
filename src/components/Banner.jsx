// import React, { useState } from "react";

import { useState } from "react";

import vid2 from '../assets/video/vid2.mp4'
import vid3 from '../assets/video/vid3.mp4'
import vid4 from '../assets/video/vid4.mp4'
import vid5 from '../assets/video/vid5.mp4'

export default function Banner(){
 

  const [num, setNum] = useState(1);


  const renderVideo = () => {
    if (num === 1) {
      return (
        <video
          src={vid4}
        
          autoPlay
          muted
          loop
          className="w-full brightness-50 h-screen overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    } else if (num === 2) {
      return (
        <video
          src={vid2}
          autoPlay
          muted
          loop
          className="w-full brightness-50 h-screen overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    }
    if (num === 3) {
      return (
        <video
          src={vid3}
          autoPlay
          muted
          loop
          className="w-full h-screen overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    }
    if (num === 4) {
      return (
        <video
          src={vid5}
          autoPlay
          muted
          loop
          className="w-full h-screen brightness-90 overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    } else {
      return (
        <video
          src=  "https://drive.google.com/uc?export=download&id=15HmCvIv6TXOGwvhkQPI-8kXovlCvRluQ"
          autoPlay
          muted
          loop
          className="w-full brightness-50 h-screen overflow-hidden object-cover -z-10 absolute top-0 left-0 "
        />
      );
    }

  }

    return (
      <section className="height text-select-none w-screen overflow-hidden">
        <div className=" h-screen">
          {renderVideo()}
          <div className="flex h-16 justify-center ml-28 relative z-20 top-[500px]  ">
            <input
              name="vid"
              onClick={() => setNum(1)}
              type="radio"
              className="z-12 input-custom   absolute  mr-64"
            />
            <input
              name="vid"
              onClick={() => setNum(2)}
              type="radio"
              className="z-5 input-custom    absolute  mr-48"
            />
            <input
              name="vid"
              onClick={() => setNum(3)}
              type="radio"
              className="z-5  input-custom  absolute  mr-32"
            />
            <input
              name="vid"
              onClick={() => setNum(4)}
              type="radio"
              className="z-5  input-custom  absolute  mr-16"
            />
            <input
              name="vid"
              onClick={() => setNum(5)}
              type="radio"
              className="z-5  input-custom  absolute  mr-0"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-4/5 px-8">
          <h2 className=" text-6xl pb-4 mt-6 text-center text-white font-bold">Book Your Dream Stay Today</h2>
          <p className=" text-xl text-center text-white font-bold pb-4">Don't settle for anything less than the best - book your stay with Qatar Stay and experience Qatar like never before.</p>
          <button className="primary__button px-8 py-4 text-2xl mt-8">Discover More </button>
          </div>
        </div>
      </section>
    );
  };